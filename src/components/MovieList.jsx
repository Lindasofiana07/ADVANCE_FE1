function MovieList({ movies, setEditingMovie, deleteMovie }) {
  return (
    <div className="movie-list">
      {movies.map((movie) => (
        <div key={movie.id} className="movie-card">
          {/*ini buat nambah gambar*/}
          {movie.image && (
            <img
              src={movie.image}
              alt={movie.title}
              className="movie-image"
              style={{ width: "150px", borderRadius: "8px", marginBottom: "10px" }}
            />
          )}

          <h3>{movie.title}</h3>
          <p>{movie.genre}</p>
          <p>⭐ {movie.rating}</p>
          {movie.trending && <span className="tag trending">Trending</span>}
          {movie.rilisBaru && <span className="tag new">Rilis Baru</span>}
          <div className="actions">
            <button onClick={() => setEditingMovie(movie)}>Edit</button>
            <button onClick={() => deleteMovie(movie.id)}>Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default MovieList;
