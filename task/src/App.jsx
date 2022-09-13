import React from 'react';
import UsersList from './UsersList.jsx';

const users = [
  {
    id: 'id-0',
    age: 21,
    name: 'Bob',
  },
  {
    id: 'id-1',
    age: 17,
    name: 'Tom',
  },
  {
    id: 'id-2',
    age: 18,
    name: 'Tad',
  },
  {
    id: 'id-3',
    age: 45,
    name: 'Sam',
  },
  {
    id: 'id-4',
    age: 84,
    name: 'Ann',
  },
  {
    id: 'id-5',
    age: 67,
    name: 'Sara',
  },
  {
    id: 'id-6',
    age: 18,
    name: 'Toma',
  },
  {
    id: 'id-7',
    age: 45,
    name: 'John',
  },
];

const App = () => <UsersList users={users} />;

export default App;
