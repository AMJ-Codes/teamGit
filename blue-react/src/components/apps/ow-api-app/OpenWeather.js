import React, {useState} from 'react';
import OwResults from './OwResults';

const baseURL = 'https://api.openweathermap.org/data/2.5/weather';
const key = '3af00e64fa574fb90f8896a9c6b5f1ba'

const OwApp = () => {

    const [ city, setCity ] = useState('');
    const [ results, setResults ] = useState([]); 

    const fetchResults = () => {
        let url = `${baseURL}?q=${city}&appid=${key}`;

        fetch(url)
            .then(res => res.json())
            .then(data => setResults(data.response.docs))
            .catch(err => console.log(err));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        fetchResults();
    }

    return(
        <div className="main>">
            <div className="mainDiv">
                <form onSubmit={(e) => handleSubmit(e)}>
                    <span>Enter Your City (require) : </span>
                    <input type="text" name="city" onChange={(e) => setCity(e.target.value)} required />
                    <button className="submit">Submit</button>
                </form>
                {
                    results.length > 0 ? <OwResults results={results} /> : null
                }
            </div>
        </div>
    );
};

export default OwApp;