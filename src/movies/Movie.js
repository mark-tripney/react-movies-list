import React from 'react';

export function Movie({ movie }) {
  return (
    <li>
      {movie.name} ({movie.year})
    </li>
  );
}
