// import logo from './logo.svg';
import './App.css';
import GetLocation from './geolocation/GetLocation';
import OwApp from './components/apps/ow-api-app/OpenWeather';

function App() {
  return (
    <div className="App">
      <h1>72 hour project</h1>
      <GetLocation />
      <OwApp />
    </div>
  );
}

export default App;
