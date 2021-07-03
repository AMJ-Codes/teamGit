import React, {Component} from 'react';

    let url = 'https://api.nasa.gov/planetary/earth/imagery'; // Still working get a functioning call to the API Key

    fetch(url)
    .then(res = res.json())
    .catch(err => console.error(err)); 

    export default class Nasa extends Component {
    render (){
        return(
            <div className = 'main'>
                <div className = 'MainDiv'>
                <h1>Nasa Image Placeholder</h1>
                </div>
            </div>
        );
    };
};
