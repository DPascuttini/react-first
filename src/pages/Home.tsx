import React, { useState } from 'react';
import { InstagramLogo } from '../assets';
import { Card, Item } from '../components/Card';

const item: Item = {
  slug: 'test',
  img: InstagramLogo,
  name: 'name',
  description: 'loremdasmdasdasdasdas',
};
export const Home = () => {
  const [counter, setcounter] = useState(0);
  return (
    <div className='container mx-auto pt-5'>
      <h1 className='text-2xl'>Home</h1>
      <div className='flex space-x-2 items-center'>
        <button
          className='border border-gray-300 rounded-md p-3'
          onClick={() => {
            setcounter(counter + 1);
          }}
        >
          up
        </button>
        <div className='text-center'>{counter}</div>
        <button
          className='border border-gray-300 rounded-md p-3'
          onClick={() => {
            setcounter(counter - 1);
          }}
        >
          down
        </button>
      </div>

      <Card item={item} />
    </div>
  );
};
