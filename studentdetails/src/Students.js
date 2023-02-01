import React from 'react';
import { useGlobalContext } from './Context';


const Students = () => {

  const {Array,isLoading} = useGlobalContext();


  if(isLoading){
    return<>
      <h1>Loading.......</h1>
    </>
  }
  
  return (
  <>
    <h2>Student Information Table</h2>
    {Array.map((curPost)=>{
      return <h2>{curPost.name}</h2>;
    })}
  </>
  );
    // <div>students</div>


};

export default Students;