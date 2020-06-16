import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    return (
      <div data-testid="movie-card">
        <div>
          <p>{movie.title}</p>
          <p>{movie.storyline}</p>
          <p>Rating: {Number(movie.rating)}</p>
          <p>
            <img alt="Poster Movie" src={movie.imagePath}></img>{' '}
          </p>
        </div>
        <Link to={`/movies/${movie.id}`}>VER DETALHES</Link>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number,
    imagePath: PropTypes.string,
    rating: PropTypes.string,
    storyline: PropTypes.string,
    subtitle: PropTypes.string,
    title: PropTypes.string,
  }).isRequired,
};

export default MovieCard;
