import { 
    Route,
    Link,
    Switch 
} from 'react-router-dom';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';
import OwApp from './ow-api-app/OpenWeather'
import TicketMaster from './ticket-api-app/TicketMaster'


const Home = () => {
    return(
        <div id='mainHome'>
            <div className='mainDivHome'>
                <h1>Welcome to Shavonne, Max, and Aaron's 72-Hour Project</h1>
                <h2>Check Out the Individual Pages Below: </h2>
                <hr id="hrHome"/>
                <ul>
                <Card>
        <CardBody>
          <CardTitle tag="h5">Nasa API</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">By Aaron</CardSubtitle>
        </CardBody>
        <img width="100%" src="/assets/318x180.svg" alt="img.svg placeholder" />
        <CardBody>
          <CardText>A quick app designed to pull NASA imagery based on your coordinates!</CardText>
          <li><Link to=' ' target='_blank'>Click here to load the API below!</Link></li>
        </CardBody>
      </Card>
      <Card>
        <CardBody>
          <CardTitle tag="h5">Weather API</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">By Shavonne</CardSubtitle>
        </CardBody>
        <img width="100%" src="/assets/318x180.svg" alt="img.svg placeholder" />
        <CardBody>
          <CardText>Get weather updates in your area with an up to date clock!</CardText>
          <li><Link to='/weather' target="_blank">Click here to load the app below!</Link></li>
        </CardBody>
      </Card>
      <Card>
        <CardBody>
          <CardTitle tag="h5">Ticket Master API</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">By Max</CardSubtitle>
        </CardBody>
        <img width="100%" src="/assets/318x180.svg" alt="img.svg placeholder" />
        <CardBody>
          <CardText>Find events, attractions and venues based on your location!</CardText>
          <li><Link to='/ticketmaster' target='_blank'>Click here to load the app below!</Link></li>
        </CardBody>
      </Card>
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