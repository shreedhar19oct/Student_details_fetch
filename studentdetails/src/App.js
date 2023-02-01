import React from 'react';
import Students from './Students';
import Pagination from './Pagination';
import Search from './Search';
import { useGlobalContext } from './Context';

const App = () => {
  const data= useGlobalContext();
  return (
    <>
    <div>Welcome to Student Details Website {data}</div>
    <Students />
    <Pagination />
    <Search />
    </>
  );
};

export default App;