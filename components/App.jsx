import React from "react";
import Header from "./Header";
import Movie from "./Movie";
import movieList from "../movielist";

function App() {
  function createMovie(entry) {
    return (
      <Movie
        key={entry.id}
        movie={entry.movie}
        link={entry.link}
        image={entry.image}
      />
    );
  }

  return (
    <div>
      <Header />
      <br />
      <div className="allMovies">{movieList.map(createMovie)}</div>
    </div>
  );
}

export default App;
