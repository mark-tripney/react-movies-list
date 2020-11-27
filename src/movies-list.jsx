import React from 'react';

export function MoviesList() {
  const movies = [
    { name: 'The Grand Budapest Hotel' },
    { name: 'The Royal Tenenbaums' },
    { name: 'The Life Aquatic with Steve Zissou' },
    { name: 'Rushmore' },
    { name: 'Moonrise Kingdom' },
  ];
  return (
    <div>
      <ul>
        {movies.map(movie => {
          return <li key={movie.name}>{movie.name}</li>;
        })}
      </ul>
    </div>
  );
}
