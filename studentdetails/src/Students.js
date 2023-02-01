import React, {useEffect} from 'react';

const Students = () => {
  let isLoading= true;

  let API= "https://jsonplaceholder.typicode.com/users";

  const fetchApiData = async(url) =>{
    try{

      const res = await fetch(url);
      const data= await res.json();
      console.log(data);
      // isLoading = false;
    }
    catch(error){
      console.log(error);
    }
  }

  useEffect(() => {
    fetchApiData(API);
  }, []);

  if(isLoading){
    return<>
      <h1>Loading.......</h1>
    </>
  }
  
  return <>
    <h2>Student Information Table</h2>
  </>
    // <div>students</div>


};

export default Students;