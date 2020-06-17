import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    return (
      <div className="moviecard" data-testid="movie-card">
        <div className="moviecard-p">
          <img alt="Poster Movie" src={movie.imagePath} />
          <p className="title">{movie.title}</p>
          <p className="sinopse">{movie.storyline}</p>
          <p className="rating">Rating: {movie.rating}</p>
        </div>
        <Link className="btn-link" to={`/movies/${movie.id}`}>
          VER DETALHES
        </Link>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number,
    imagePath: PropTypes.string,
    rating: PropTypes.any,
    storyline: PropTypes.string,
    subtitle: PropTypes.string,
    title: PropTypes.string,
  }).isRequired,
};

export default MovieCard;
