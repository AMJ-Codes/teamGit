import React from 'react';

const OwResults = (props) => {
    return (
        <div>
            {props.results.map(result => {
                return (
                    <div key={result.id}>
                        <h2>{result.name}</h2>
                        <h3>{result.main.temp}</h3>
                        <h3>{result.weather[1]}</h3>
                        <h3>{result.sys.sunrise}</h3>
                        <h3>{result.sys.sunset}</h3>
                    </div>
                )}
            )}
        </div>
    )
};

export default OwResults;