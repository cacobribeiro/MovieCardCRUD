import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';

import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: '',
      loading: true,
    };
  }

  async moviesApi() {
    this.setState({ movies: await movieAPI.getMovies() });
    this.setState({ loading: false });
  }

  componentDidMount() {
    this.moviesApi();
  }
  render() {
    const { movies } = this.state;

    return (
      <div data-testid="movie-list">
        {movies.map((movie) => (
          <MovieCard key={movie.title} movie={movie} />
        ))}
      </div>
    );
  }
}

export default MovieList;
