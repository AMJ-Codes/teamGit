import React from 'react';

const NasaResults = (props) => {
    return (
        <div>
            {props.results.map(result => {
                return (
                    <div key={result.id}>
                        <h2>{result.location}</h2>
                        <h3>{result.latitude}</h3>
                        <h3>{result.logitude[1]}</h3>
                    </div>
                )}
            )}
        </div>
    )
};

export default NasaResults;