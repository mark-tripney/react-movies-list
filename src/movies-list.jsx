import React, { useState } from 'react';

const movies = [
  { name: 'The Grand Budapest Hotel', year: '2014' },
  { name: 'The Royal Tenenbaums', year: '2001' },
  { name: 'The Life Aquatic with Steve Zissou', year: '2004' },
  { name: 'Moonrise Kingdom', year: '2012' },
  { name: 'Rushmore', year: '1998' },
];

export function MoviesList() {
  const [filter, setFilter] = useState('');
  return (
    <div>
      <h1>(Some) films of Wes Anderson</h1>
      <label>
        Filter:
        <input
          type="text"
          onChange={e => setFilter(e.target.value)}
          value={filter}
        />
      </label>
      <ul>
        {movies
          .filter(movie =>
            movie.name.toLowerCase().includes(filter.toLowerCase())
          )
          .map(movie => (
            <li key={movie.name}>
              {movie.name} ({movie.year})
            </li>
          ))}
      </ul>
    </div>
  );
}
