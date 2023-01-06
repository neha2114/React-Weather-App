import './Forecast.css';
import Card from 'react-bootstrap/Card';

function Forecast(props) {
  const { weather, city } = props;

  return (
      <div className="Forecast">
          <div className="get-forecast-city">
            <h2>Current Weather in </h2>
            <h2 className="forecast-city">{city}</h2>
         </div>
         <div className="current-weather">
         <Card className="daily">
              <Card.Body>
                <Card.Title>{(Date(weather.data.list[0].dt_txt))}</Card.Title>
                <Card.Text>
                  <b>Temp: {weather.data.list[0].main.temp}°F</b> <br />
                  <img src={`images/${weather.data.list[0].weather[0].icon}.png`} className="icon-small" alt="weather" /> 
                  <br/>
                  {weather.data.list[0].weather[0].main} <br />
                  <b>Wind: {weather.data.list[0].wind.speed} mph</b> <br />
                </Card.Text>
            </Card.Body>
          </Card>
         </div>
      </div>
  );
}

export default Forecast;