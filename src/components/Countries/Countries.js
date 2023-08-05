import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css';
const Countries = () => {
    const [countries,setCountries] = useState([]);
    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountries(data))
    },[])
    return (
        <div>
            <h1>Visit the {countries.length} Countries and see the unseen</h1>
            {/* {
                countries.map(country => <Country
                    name={country.name.common}
                    population={country.population}
                    area={country.area}
                    ></Country>)
            } */}
            <div className='country-container'>
            {
                countries.map(country => <Country key={country.cca3} country={country}></Country>)
            }
            </div>
        </div>
    );
};

export default Countries;