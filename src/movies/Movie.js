import React from 'react';
import PropTypes from 'prop-types';

export function Movie({ movie }) {
  return (
    <li>
      {movie.name} ({movie.year})
    </li>
  );
}

Movie.propTypes = {
  movie: PropTypes.shape({
    name: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
  }),
};
