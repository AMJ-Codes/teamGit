import { 
    Route,
    Link,
    Switch 
} from 'react-router-dom';

import OwApp from './ow-api-app/OpenWeather'
import TicketMaster from './ticket-api-app/TicketMaster';

const Home = () => {
    return(
        <div id='mainHome'>
            <div className='mainDivHome'>
                <h1>Welcome to Shavonne, Max, and Aaron's 72-Hour Project</h1>
                <h2>Check Out the Individual Pages Below: </h2>
                <hr id="hrHome"/>
                <ul>
                    <li><Link to=' ' target='_blank' style={{ textDecoration: 'none' }}>NASA by Aaron</Link></li> 
                    <li><Link to='/weather' target="_blank" style={{ textDecoration: 'none' }}>Open Weather by Shavonne</Link></li>
                    <li><Link to='/ticketmaster' target='_blank' style={{ textDecoration: 'none' }}>Ticket Master by Max</Link></li> 
                </ul>
            </div>
            <div className='mainDiv-route'>
                <Switch>
                    <Route exact path='/weather'><OwApp /></Route>
                    <Route exact path='/ticketmaster'><TicketMaster/></Route>
                </Switch>
            </div>
        </div>
    );
};

export default Home;