import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Register from "../components/register";

function Registerpage() {
  const [form, setForm] = useState({
    username: "",
    password: "",
    confirmPassword: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    if (form.password !== form.confirmPassword) {
      alert("Password dan Konfirmasi Password tidak sama!");
      return;
    }

    try {
      await fetch("https://68a736d7639c6a54e9a15df4.mockapi.io/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: form.username,
          email: form.email,
          password: form.password,
        }),
      });

      alert("Registrasi berhasil! Silakan login.");
      navigate("/loginpage");
    } catch (err) {
      console.error(err);
      alert("Terjadi kesalahan saat register.");
    }
  };

  return (
    <div className="registerpage">
      <Register
        form={form}
        handleChange={handleChange}
        handleSubmit={handleRegister}
      />
    </div>
  );
}
export default Registerpage;
