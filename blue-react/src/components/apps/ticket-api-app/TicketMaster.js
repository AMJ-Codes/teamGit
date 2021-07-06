import React, { useState } from 'react';
import './TicketMaster.css'

const url = 'https://app.ticketmaster.com/discovery/v2/'
const apiKey = 'ZMSE6L8MNnnIXp4sWzGu5LLTQ6leIhP9'

// let exampleLat = '39.9407869';
// let exampleLng = '-86.0946565';
// let position = exampleLat + "," + exampleLng;

function TicketMaster(){

    const [lat, setLat] = useState(null);
    const [lng, setLng] = useState(null);
    const [status, setStatus] = useState(null);
    const [data, setData] = useState([]);

    // let data = {
    //     events: [],
    //     attractions: [],
    //     products: [],
    //     venues: []
    // }

    const getLocation = () => {
        if (!navigator.geolocation) {
        setStatus('Geolocation is not supported by your browser');
        } else {
        setStatus('Locating...');
        navigator.geolocation.getCurrentPosition((position) => {
            setStatus(null);
            setLat(position.coords.latitude);
            setLng(position.coords.longitude);

            // These are the lat and lng to be stored in variable. // Testing 
            // console.log(position.coords.latitude + "," + position.coords.longitude) // Testing
            let location = position.coords.latitude + "," + position.coords.longitude;
            reqData(location);
        }, () => {
            setStatus('Unable to retrieve your location');
        });
        }
    }

    // console.log(location) // Testing

    const reqData = (location) => {
        fetch(`${url}suggest?apikey=${apiKey}&latlong=${location}&radius=100`)
        .then(res => res.json())
        .then(json => {
            console.log(json) // Testing
            setData(json);
        })
    }

    // const getData = (json) => {

    //     let numEvents = Object.keys(json._embedded.events).length
    //     let numAttractions = Object.keys(json._embedded.attractions).length
    //     let numProducts = Object.keys(json._embedded.products).length
    //     let numVenues = Object.keys(json._embedded.venues).length

    //     for (let i = 0; i < numEvents; i++) {
    //         data.events.push(json._embedded.events[i].name)
    //         // console.log(data) // Testing
    //     }

    //     for (let i = 0; i < numAttractions; i++) {
    //         data.attractions.push(json._embedded.attractions[i].name)
    //     }

    //     for (let i = 0; i < numProducts; i++) {
    //         data.products.push(json._embedded.products[i].name)
    //     }

    //     for (let i = 0; i < numVenues; i++) {
    //         data.venues.push(json._embedded.venues[i].name)
    //     }
    //     console.log(data) // Testing to make sure data object gets filled properly
    //     // showEvents(data)
    //     showEvents()
    // }

    const showEvents = () => {
        return data?._embedded?.events?.map((event, index) => {
            return <li><a href={event.url} target="_blank">{event.name}</a></li>
        });
    };

    const showAttractions = () => {
        return data?._embedded?.attractions?.map((attraction, index) => {
            return <li><a href={attraction.url} target="_blank">{attraction.name}</a></li>
        });
    };

    // const showProducts = () => {
    //     return data?._embedded?.products?.map((product, index) => {
    //         return <li><a href={product.url} target="_blank">{product.name}</a></li>
    //     });
    // };

    const showVenues = () => {
        return data?._embedded?.venues?.map((venue, index) => {
            return <li><a href={venue.url} target="_blank">{venue.name}</a></li>
        });
    };

    // console.log('outside') // Testing
    // console.log(data); // Testing

    return (
        <div className='mainTM'>
            <div className='mainDivTM'>
                <div className="topTM">
                    <h1>72 Hour Project</h1>
                    <br/>
                    <h2>Find events, attractions, products, and venues near you!</h2>
                    <button onClick={getLocation}>Find Stuff To Do!</button>
                    {lat && <p>Latitude: {lat}</p>}
                    {lng && <p>Longitude: {lng}</p>}
                </div>
                <div className="bottomTM">
                    <h4>Events:</h4>
                        <ul>{showEvents()}</ul>
                    <br/>
                    <h4>Attractions:</h4>
                        <ul>{showAttractions()}</ul>
                    {/* <h4>Products:</h4>
                        <ul>{showProducts()}</ul> */}
                    <br/>
                    <h4>Venues:</h4>
                        <ul>{showVenues()}</ul>
                </div>
                
            </div>       
        </div>
    )
}

export default TicketMaster;

/*
EVENT STRUCTURE:

_embedded
    events[int]
        name
        dates
            start
                localDate
                localTime
                timezone
        images
        info
        priceRanges
            type
            currency
            min
            max
*/