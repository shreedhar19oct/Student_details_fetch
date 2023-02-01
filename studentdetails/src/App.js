import React from 'react';
import Students from './Students';
import Pagination from './Pagination';
import Search from './Search';

const App = () => {
  return (
    <>
    <div>Welcome to Student Details Website</div>
    <Students />
    <Pagination />
    <Search />
    </>
  );
};

export default App;