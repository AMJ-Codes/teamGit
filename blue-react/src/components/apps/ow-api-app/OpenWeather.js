import React, {useEffect, useState} from 'react';
import OwResults from './OwResults';
import OwClock from './OwClock';
import GetLocation from '../../../geolocation/GetLocation';

const baseURL = 'https://api.openweathermap.org/data/2.5/weather';
const key = '3af00e64fa574fb90f8896a9c6b5f1ba'

const OwApp = () => {

    const [ results, setResults ] = useState([]); 
    const [ latitude, setLatitude ] = useState(null);
    const [ longitude, setLongitude ] = useState(null);

    const getWeather = () => {
        let url = `${baseURL}?lat=${latitude}&lon=${longitude}&appid=${key}`;

        fetch(url)
            .then(res => res.json())
            .then(data => setResults(data.response))
            .catch(err => console.log(err));
    };

    return(
        <div className="main>">
            <div className="mainDiv">
                <div style={{ background: '#008080' , color: 'white' }}>
                <OwClock />
                <input value={latitude} onChange={e => setLatitude(e.target.value)} placeholder="enter latitude here"/>
                <input value={longitude} onChange={e => setLongitude(e.target.value)} placeholder="enter longitude here"/>
                <button onClick={() => getWeather()}>Click for Current Weather!</button>
                <hr />
                { results ? <h2>{results.weather}</h2> : <div></div>}
                 </div>
                </div>
        </div>
    );
};

export default OwApp;