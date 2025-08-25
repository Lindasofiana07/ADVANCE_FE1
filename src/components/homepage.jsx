export default function Header() {
  return (
    <header>
      <nav className="navbar">
        <div className="navbar-nav">
          <div className="nav-logo">
            <a href="#" className="navbar-logo">
              <img src="Image/logo.jpg" alt="Logo-navbar" />
            </a>
          </div>
          <div className="nav-menu">
            <a href="#series">Series</a>
            <a href="#film">Film</a>
            <a href="daftarsaya">Daftar Saya</a>
          </div>
        </div>
        <div className="navbarextra">
          <a href="#" id="profile">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-user"
            >
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
          </a>
        </div>
      </nav>
    </header>
  );
}
