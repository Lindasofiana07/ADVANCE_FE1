

export function Lanjut() {
  return (
    <>
      <section className="next-film" id="next-film">
        <h2>Melanjutkan Tonton Film</h2>
        <div className="row">
          <div className="col">
            <div className="cursor-left">
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
                className="feather feather-arrow-left"
              >
                <line x1="19" y1="12" x2="5" y2="12"></line>
                <polyline points="12 19 5 12 12 5"></polyline>
              </svg>
            </div>
            
            <div className="image-wrapper">
              <img src="public/image/p1.webp" alt="Dignitate" />
              <div className="info">
                <div className="title">Dignitate</div>
                <div className="ratting">
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
                    className="feather feather-star"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>{" "}
                  4,5/5
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="image-wrapper">
              <img src="public/Image/p4.jpg" alt="Pertaruhan" />
              <div className="info">
                <div className="title">Pertaruhan</div>
                <div className="ratting">
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
                    className="feather feather-star"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>{" "}
                  4,2/5
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="image-wrapper">
              <img
                src="public/image/p3.jpg"
                height="50%"
                width="50"
                alt="Guru-guru gokil"
              />
              <div className="info">
                <div className="title">Guru-guru Gokil</div>
                <div className="ratting">
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
                    className="feather feather-star"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>{" "}
                  4,6/5
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="image-wrapper">
              <img src="public/image/p2.jpg" alt="Dilan" />
              <div className="info">
                <div className="title">Dilan</div>
                <div className="ratting">
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
                    className="feather feather-star"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>{" "}
                  4,4/5
                </div>
              </div>
            </div>
            <div className="cursor-right"></div>
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
              className="feather feather-arrow-right"
            >
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </div>
        </div>
      </section>
    </>
  );
}

export function Rating() {
  return (
    <section className="top-rating">
      <h2>Top Rating Film Dan Series Hari Ini</h2>
      <div className="row">
        <div className="col">
          <div className="cursor-left">
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
              className="feather feather-arrow-left"
            >
              <line x1="19" y1="12" x2="5" y2="12"></line>
              <polyline points="12 19 5 12 12 5"></polyline>
            </svg>
          </div>
          <div className="status">Episode baru</div>
          <img src="public/image/png/v5.png" alt="Big Hero" />
        </div>
        <div className="col">
          <div className="status">Episode baru</div>
          <img src="public/image/png/v1.png" alt="Jurasic World" />
        </div>
        <div className="col">
          <div className="status">Episode baru</div>
          <img src="public/image/png/v2.png" alt="Sonic" />
        </div>
        <div className="col">
          <div className="status">Episode baru</div>
          <img src="public/image/png/v3.png" alt="Suzume" />
        </div>
        <div className="col">
          <div className="cursor-right">
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
              className="feather feather-arrow-right"
            >
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </div>
          <div className="status">Episode baru</div>
          <img src="public/image/png/v4.png" alt="all of us are dead" />
        </div>
      </div>
    </section>
  );
}

export function Filmtrending() {
  return (
    <section className="film-trending">
      <h2>Film Trending</h2>
      <div className="row">
        <div className="col">
          <div className="cursor-left">
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
              className="feather feather-arrow-left"
            >
              <line x1="19" y1="12" x2="5" y2="12"></line>
              <polyline points="12 19 5 12 12 5"></polyline>
            </svg>
          </div>
          <div className="status">Top 10</div>
          <img src="public/image/png/v6.png" alt="The tomorrow war" />
        </div>
        <div className="col">
          <div className="status">Top 10</div>
          <img src="public/image/png/v7.png" alt="Quantumania" />
        </div>
        <div className="col">
          <div className="status">Top 10</div>
          <img src="public/image/png/v8.png" alt="Guardian Of the Galaxi" />
        </div>
        <div className="col">
          <div className="status">Top 10</div>
          <img src="public/image/png/v9.png" alt="TOM HANKS IS" />
        </div>
        <div className="col">
          <div className="cursor-right">
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
              className="feather feather-arrow-right"
            >
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </div>
          <div className="status">Top 10</div>
          <img src="public/image/png/v10.png" alt="Little Mermaid" />
        </div>
      </div>
    </section>
  );
}

export function Rilisbaru() {
  return (
    <section className="rilis-baru">
      <h2>Rilis Baru</h2>
      <div className="row">
        <div className="col">
          <div className="cursor-left">
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
              className="feather feather-arrow-left"
            >
              <line x1="19" y1="12" x2="5" y2="12"></line>
              <polyline points="12 19 5 12 12 5"></polyline>
            </svg>
          </div>
          <div className="status">Top 10</div>
          <img src="public/image/png/v5.png" alt="Suzume" />
        </div>
        <div className="col">
          <div className="status">Top 10</div>
          <img src="public/image/png/v1.png" alt="Jurasic World" />
        </div>
        <div className="col">
          <div className="status">Top 10</div>
          <img src="public/image/png/v2.png" alt="Sonic" />
        </div>
        <div className="col">
          <div className="status">Top 10</div>
          <img src="public/image/png/v3.png" alt="All Off Us" />
        </div>
        <div className="col">
          <div className="status">Top 10</div>
          <img src="public/image/png/v4.png" alt="Big Hero" />
          <div className="cursor-right">
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
              className="feather feather-arrow-right"
            >
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Footero() {
  return (
    <footer>
      <div className="row">
        <div className="col">
          <div className="logo">
            <img src="Image/logo.jpg" alt="Logo" />
          </div>
          <p>@2023 Chill All Rights Reserved</p>
        </div>
        <div className="col">
          <div className="title">
            <h3>Genre</h3>
          </div>
          <table className="excel-table">
            <tbody>
              <tr>
                <td>Aksi</td>
                <td>Drama</td>
                <td>Komedi</td>
                <td>Sains &amp; Alam</td>
              </tr>
              <tr>
                <td>Anak-anak</td>
                <td>Fantasi Ilmiah Dan Fantasi</td>
                <td>Petualangan</td>
                <td>Thriller</td>
              </tr>
              <tr>
                <td>Anime</td>
                <td>Kejahatan</td>
                <td>Perang</td>
                <td></td>
              </tr>
              <tr>
                <td>Britani</td>
                <td>Drama</td>
                <td>Romantis</td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="col">
          <div className="title">Bantuan</div>
          <ul>
            <li>Faq</li>
            <li>Kontak Kami</li>
            <li>Privasi</li>
            <li>Syarat &amp; Ketentuan</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
