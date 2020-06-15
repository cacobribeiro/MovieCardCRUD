import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Loading } from '../components';
import * as movieAPI from '../services/movieAPI';

class MovieDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      movie: '',
    };
  }
  componentDidMount() {}

  async movieGet(id) {
    const { id } = this.props.match.params;
    this.setState({ movie: await movieAPI.getMovie(id) });
    this.setState({ loading: false });
  }

  render() {
    if (this.state.loading === true) {
      return <Loading />;
    }
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

MovieCard.propTypes = {
  id: PropTypes.number,
};
export default MovieDetails;
