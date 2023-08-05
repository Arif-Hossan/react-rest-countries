import { useState } from 'react';
import './App.css';
import { useEffect } from 'react';
import Header from './components/Header/Header';
import Countries from './components/Countries/Countries';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Countries></Countries>
    </div>
  );
}

// function LoadCountries () {
// const [countries,setCountries]=useState([]);
// useEffect(()=>{
//   fetch('https://restcountries.com/v3.1/all')
//   .then(res => res.json())
//   .then(data => setCountries(data))
// },[])
// return (
//   <div>
//   <h3>Explore the Beauty of Nature by Visiting Unseen {countries.length} countries</h3>
//   {
//     countries.map(country => <Country name={country.name.common} population={country.population}></Country>)
//   }
//   </div>
// )
// }
// // country component
// function Country (props) {
// const {name,population} = props;
// return (
//   <div>
//     <h6>Name : {name}</h6>
//     <p>Population : {population}</p>
//   </div>
// )
// }


export default App;
