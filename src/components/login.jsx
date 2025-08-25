

export function Login({ form, handleChange, handleSubmit, error }) {
  return (
    <main className="container">
      <img className="chilllogo" src="/Image/logochill.jpg" alt="logochill" />

      <div className="top container">
        <h3 className="title">Masuk</h3>
        <p className="pg">Selamat datang kembali </p>
      </div>

      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          placeholder="Masukkan username"
          name="username"
          id="username"
          value={form.username}
          onChange={handleChange}
          required
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          placeholder="Masukkan password"
          name="password"
          id="password"
          value={form.password}
          onChange={handleChange}
          required
        />

        {error && <p style={{ color: "red" }}>{error}</p>}

        <p>Belum punya akun?</p>
        <a href="/registerpage">Daftar</a>
        <br />
        <a href="/forgotpassword">Lupa kata sandi</a>

        <button type="submit">Masuk</button>
        <p>atau</p>

        <button type="button">
          <img src="Image/Google__G__logo.svg.png" alt="google-icon" /> Masuk
          dengan Google
        </button>
      </form>
    </main>
  );
}

export default Login;
