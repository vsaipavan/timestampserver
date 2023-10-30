import React,{useEffect, useState} from 'react';
import './App.css';
import OMG from "../src/images/OMG.png"
import Navbar from './navbar/Navbar';
import Card from './Cards/Card';
import ApplicationServices from './Services/APIServices';
import APIServices from './Services/APIServices';
import  './Cards/Card.css';
import ViewVegetables from './Vegetables/ViewVegetables';

const App=()=> {

  // const [search,setSearch]=useState('');
  // const app_id="96ca7346";
  // const app_key="702ebcddcf3251d89af4b7b9bb96b864";

  // const submitHandler=e=>{
  //   e.preventDefault();
  //   fetch(`https://api.edamam.com/auto-complete?app_id=${app_id}&app_key=${app_key}&q=${search}&limit=8`).then(
  //     response=>response.json()
  //   ).then(
  //     Data=>console.log(Data)
  //   )
  // }
  
  return (
    
    
  <div>
      <img src={OMG} className="micro" width={120} height={60}/>
 
        
           <Navbar/>
           <ViewVegetables/>

      


    {/* <center>
       
      <form onSubmit={submitHandler}>
      
        <input type='text' value={search} onChange={(e)=>setSearch(e.target.value)}/><br/>
        <input type='submit' className='btn btn-primary' value='Search'/>   
      </form>
    </center> */}
  </div>
  );
}

export default App;
