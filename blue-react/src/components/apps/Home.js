import { 
    Route,
    Link,
    Switch 
} from 'react-router-dom';

import OwApp from './ow-api-app/OpenWeather'
import TicketMaster from './ticket-api-app/TicketMaster';

const Home = () => {
    return(
        <div className='main'>
            <div className='mainDiv'>
                <h1>Welcome to Shavonne, Max, and Aaron's 72-Hour Project</h1>
                <h2>Check Out the Individual Pages Below: </h2>
                <ul>
                    <li><Link to=' ' target='_blank'>NASA by Aaron</Link></li> 
                    <li><Link to='/weather' target="_blank">Open Weather by Shavonne</Link></li>
                    <li><Link to='/ticketmaster' target='_blank'>Ticket Master by Max</Link></li> 
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