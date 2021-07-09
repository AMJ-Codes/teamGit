import React from 'react';

const OwResults = (props) => {

    return (
        <div>
            {props.results.map(results => {
                return (
                    <div key={results.id}>
                        <h3>{results.weather[1]}</h3>
                        <h3>{results.temp}</h3>
                    </div>
                )}
            )}
        </div>
    )
};

export default OwResults;