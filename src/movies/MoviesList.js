import React, { useState } from 'react';
import { Movie } from './Movie';
import { Filter } from '../Filter';

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
      <Filter filter={filter} setFilter={setFilter} />
      <ul>
        {movies
          .filter(movie =>
            movie.name.toLowerCase().includes(filter.toLowerCase())
          )
          .map(movie => (
            <Movie key={movie.name} movie={movie} />
          ))}
      </ul>
    </div>
  );
}
