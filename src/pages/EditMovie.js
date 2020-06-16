import PropTypes from 'prop-types';
import Loading from '../components/Loading';
import React, { Component } from 'react';

import { MovieForm } from '../components';
import * as movieAPI from '../services/movieAPI';
import { Redirect } from 'react-router-dom';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: '',
      status: true,
      shouldRedirect: false,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async handleSubmit(updatedMovie) {
    await movieAPI.updateMovie(updatedMovie);
  }

  componentDidMount() {
    this.movieGet();
  }

  async movieGet() {
    const { id } = this.props.match.params;
    this.setState({ movie: await movieAPI.getMovie(id) });
    this.setState({ status: false });
  }

  render() {
    const { status, shouldRedirect, movie } = this.state;
    if (shouldRedirect === true) return <Redirect to="/" />;
    if (status === true) return <Loading />;

    return (
      <div data-testid="edit-movie">
        <MovieForm movie={movie} onSubmit={this.handleSubmit} />
      </div>
    );
  }
}

EditMovie.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.any,
  }),
};

export default EditMovie;
