import PropTypes from 'prop-types';
import React from 'react';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    console.log(movie);
    return (
      <div data-testid="movie-card">
        <p>ID: {movie.id}</p>
        <p>TITLE: {movie.title}</p>
        <p>SUBTITLE: {movie.subtitle}</p>
        <p>SINOPSE: {movie.storyline}</p>
        <p>RATING: {movie.rating}</p>
        <p>IMG LINK: {movie.imagePath} </p>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number,
    imagePath: PropTypes.string,
    rating: PropTypes.number,
    storyline: PropTypes.string,
    subtitle: PropTypes.string,
    title: PropTypes.string,
  }).isRequired,
};

export default MovieCard;
