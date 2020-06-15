import React, { Component } from 'react';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';
import { Link } from 'react-router-dom';

class MovieDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      movie: '',
    };
  }
  componentDidMount() {
    const { id } = this.props.match.params;
    this.setState({ movieDetail: this.movieGet(id) });
  }

  async movieGet(id) {
    this.setState({ movie: await movieAPI.getMovie(id) });
    this.setState({ loading: false });
  }

  render() {
    if (this.state.loading === true) {
      return <Loading />;
    } else {
      const { title, storyline, imagePath, genre, rating, subtitle } = this.state.movie;
      return (
        <div data-testid="movie-details">
          <img alt="Movie Cover" src={`../${imagePath}`} />
          <p>{`Título: ${title}`}</p>
          <p>{`Subtítulo: ${subtitle}`}</p>
          <p>{`Sinopse: ${storyline}`}</p>
          <p>{`Gênero: ${genre}`}</p>
          <p>{`Avaliação: ${rating}`}</p>
          <Link to={`/movies/${this.state.movie.id}/edit`}>EDITAR</Link>
          <Link to="/">VOLTAR</Link>
        </div>
      );
    }
  }
}

export default MovieDetails;
