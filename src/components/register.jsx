export function Register({ form, handleChange, handleSubmit }) {
  return (
    <main className="container">
      <img className="chilllogo" src="/Image/logochill.jpg" alt="logochill" />

      <div className="top container">
        <h3 className="title">Register</h3>
        <p className="pg">Isi kolom dibawah ini!</p>
      </div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          name="username"
          id="username"
          placeholder="Masukkan username"
          value={form.username}
          onChange={handleChange}
          required
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Masukkan password"
          value={form.password}
          onChange={handleChange}
          required
        />

        <label htmlFor="confirmPassword">Konfirmasi Password</label>
        <input
          type="password"
          name="confirmPassword"
          id="confirmPassword"
          placeholder="Ulangi password"
          value={form.confirmPassword}
          onChange={handleChange}
          required
        />
        <p>
          sudah punya akun?
          <a href="loginpage">Masuk</a>
        </p>
        <button type="submit">Daftar</button>
        <p>atau</p>
      </form>
      <i className="fa-solid fa-eye-slash"></i>

      <button type="button">
        <img src="Image/Google__G__logo.svg.png" alt="google-icon" /> Masuk
        dengan google
      </button>
    </main>
  );
}

export default Register;
