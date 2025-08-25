import React, { useState, useEffect } from "react";

function MovieForm({ addMovie, updateMovie, editingMovie }) {
  const [movie, setMovie] = useState({
    title: "",
    genre: "",
    rating: "",
    image: "", // ini nanti yang jadi URL sementara
    trending: false,
    rilisBaru: false,
  });

  useEffect(() => {
    if (editingMovie) {
      setMovie(editingMovie);
    }
  }, [editingMovie]);

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;

    if (type === "file") {
      // ini buat ngambil file pertama & buat URL sementara
      const file = files[0];
      if (file) {
        setMovie({
          ...movie,
          [name]: URL.createObjectURL(file),
        });
      }
    } else {
      setMovie({
        ...movie,
        [name]: type === "checkbox" ? checked : value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingMovie) {
      updateMovie(editingMovie.id, movie);
    } else {
      addMovie(movie);
    }
    setMovie({
      title: "",
      genre: "",
      rating: "",
      image: "",
      trending: false,
      rilisBaru: false,
    });
  };

  return (
    <form className="movie-form" onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        placeholder="Judul Film"
        value={movie.title}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="genre"
        placeholder="Genre"
        value={movie.genre}
        onChange={handleChange}
        required
      />
      <input
        type="number"
        name="rating"
        placeholder="Rating (1-10)"
        value={movie.rating}
        onChange={handleChange}
        required
      />

      {/* ngambil filenya dari komputer pakek kode ini */}
      <input
        type="file"
        name="image"
        accept="image/*"
        onChange={handleChange}
        required
      />

      {/* nampilin gambar sebelum benar benar dipilih */}
      {movie.image && (
        <img
          src={movie.image}
          alt="preview"
          width="120"
          style={{ marginTop: "10px" }}
        />
      )}

      <label>
        <input
          type="checkbox"
          name="trending"
          checked={movie.trending}
          onChange={handleChange}
        />
        Trending
      </label>
      <label>
        <input
          type="checkbox"
          name="rilisBaru"
          checked={movie.rilisBaru}
          onChange={handleChange}
        />
        Rilis Baru
      </label>
      <button type="submit">{editingMovie ? "Update" : "Add"}</button>
    </form>
  );
}

export default MovieForm;
