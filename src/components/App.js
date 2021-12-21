import React, { useState } from 'react';
import Nav from './Nav';
import SearchArea from './SearchArea';
import MovieList from './MovieList';
import Pagination from './Pagination';
import MovieInfo from './MovieInfo';


function App() {

  console.log("app render");

  const apiKey = process.env.REACT_APP_API
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [totalResults, setTotalResults] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentMovie, setCurrentMovie] = useState(null);


  console.log("total_results: ", totalResults);


  console.log({ movies });
  // console.log(search);


  const handleChange = (e) => {
    setSearch(e.target.value);
  }

  const viewMovieInfo = (id) => {

    const filteredMovie = movies.filter(movie => movie.id === id);

    const newCurrentMovie = filteredMovie.length > 0 ? filteredMovie[0] : null;

    setCurrentMovie(newCurrentMovie);

  }


  const closeMovieInfo = () => {
    setCurrentMovie(null);
  }


  const handleSubmit = (e) => {

    e.preventDefault();
    if (search.trim() === "") {
      return
    }
    setIsLoading(true);
    setTimeout(() => {
      fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${search}`)
        .then(res => res.json())
        .then(data => {
          setIsLoading(false);
          console.log("handleChangeData", data);
          setMovies([...data.results]);
          setTotalResults(data.total_results);
        })

    }, 1000);


  }

  // işte adamı böyle sikerler

  const handleNextPage = (pageNumber = 1) => {
    setIsLoading(true);
    setTimeout(() => {
      fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${search}&page=${pageNumber}`)
        .then(res => res.json())
        .then(data => {
          setIsLoading(false);
          console.log("handleNextPageData", data);
          setMovies([...data.results]);
          setCurrentPage(pageNumber);
        })
    }, 1000);
  }


  const numberPages = Math.ceil(totalResults / 20);


  return (
    <div className="App">
      <Nav />

      {currentMovie == null ? <div> <SearchArea search={search} handleChange={handleChange} handleSubmit={handleSubmit} /> <MovieList viewMovieInfo={viewMovieInfo} isLoading={isLoading} movies={movies} />{totalResults > 20 && currentMovie==null ? <Pagination pages={numberPages} currentPage={currentPage} nextPage={handleNextPage} /> : null} </div> : <MovieInfo currentMovie={currentMovie} closeMovieInfo={closeMovieInfo} />}


    </div>
  );
}

export default App;
