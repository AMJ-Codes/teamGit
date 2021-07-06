import React, {useState} from 'react';

const baseURL = 'https://api.nasa.gov/planetary/earth/imagery'; 
const key = 'qRicLhheDeuuCXyfCdg9fDHIYdAWIJVpAInXZMGR'

const NasaApp = () => {

    const [ imagery, setImagery ] = useState('');

    const fetchResults = () => {
        let url = `${baseURL}&appid=${key}`;a

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
                <Nasa/>
                <hr/>
                <form onSubmit={(e) => handleSubmit(e)}>
                    <span>Enter Your City (require) : </span>
                    <input type="text" name="location" onChange={(e) => setLocation(e.target.value)} required />
                    <button className="submit">Submit</button>
                </form>
                {
                    results.length > 0 ? <OwResults results={results} /> : null
                }
            </div>
        </div>
    );
};

export default NasaApp;