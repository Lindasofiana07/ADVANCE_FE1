import Login from "../components/login";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Loginpage() {
  const [form, setForm] = useState({ username: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // handle input
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // handle login pakai API
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // reset error

    try {
      const res = await fetch(
        "https://68a736d7639c6a54e9a15df4.mockapi.io/users"
      );
      const users = await res.json();

      const userFound = users.find(
        (u) => u.username === form.username && u.password === form.password
      );

      console.log("user ditemukan:", userFound);

      if (userFound) {
        console.log("Login sukses:", userFound);
        localStorage.setItem("user", JSON.stringify(userFound));
        navigate("/berandapage");
      } else {
        setError("Username atau password salah!");
      }
    } catch (err) {
      setError("Terjadi kesalahan, coba lagi.");
      console.error(err);
    }
  };

  return (
    <div className="loginpage">
      <Login
        form={form}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        error={error}
      />
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}

export default Loginpage;
