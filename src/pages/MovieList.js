import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';
import Loading from '../components/Loading';
import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: '',
      loading: true,
    };
  }

  componentDidMount() {
    this.moviesApi();
  }

  async moviesApi() {
    this.setState({ movies: await movieAPI.getMovies() });
    this.setState({ loading: false });
  }

  loading(movies) {
    if (this.state.loading === true) return <Loading />;
    return (
      <div data-testid="movie-list">
        {movies.map((movie) => (
          <MovieCard key={movie.title} movie={movie} />
        ))}
      </div>
    );
  }

  render() {
    const { movies } = this.state;
    console.log(this.state.movies);
    return this.loading(movies);
  }
}

export default MovieList;
