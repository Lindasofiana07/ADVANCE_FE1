import React, { useState, useEffect } from "react";
import MovieForm from "../components/MovieForm";
import MovieList from "../components/MovieList";

const API_URL = "https://68a736d7639c6a54e9a15df4.mockapi.io/daftarsaya"; // ganti URL MockAPI kamu

function Daftarsaya() {
  const [movies, setMovies] = useState([]);
  const [editingMovie, setEditingMovie] = useState(null);

  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = async () => {
    const res = await fetch(API_URL);
    const data = await res.json();
    setMovies(data);
  };

  const addMovie = async (movie) => {
    const res = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(movie),
    });
    const newMovie = await res.json();
    setMovies([...movies, newMovie]);
  };

  const updateMovie = async (id, updatedMovie) => {
    const res = await fetch(`${API_URL}/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedMovie),
    });
    const data = await res.json();
    setMovies(movies.map((m) => (m.id === id ? data : m)));
    setEditingMovie(null);
  };

  const deleteMovie = async (id) => {
    await fetch(`${API_URL}/${id}`, { method: "DELETE" });
    setMovies(movies.filter((m) => m.id !== id));
  };

  return (
    <div className="daftarsaya">
      <MovieForm
        addMovie={addMovie}
        updateMovie={updateMovie}
        editingMovie={editingMovie}
      />
      <MovieList
        movies={movies}
        setEditingMovie={setEditingMovie}
        deleteMovie={deleteMovie}
      />
    </div>
  );
}

export default Daftarsaya;
