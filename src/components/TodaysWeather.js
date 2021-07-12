import './Card.css';
import React,{useState, useEffect} from 'react';
import { fetchapi } from '../services/Api';
import { tempConversion } from '../utils/Conversion';

function TodaysWeather(props) {
    const location = props.location;
    const d = new Date();
    const date = d.toDateString();
    const time = `${d.getHours()} : ${d.getMinutes()}`;
    const [city, setCity] = useState(null);
    useEffect(() => {
        fetchapi("weather", location).then(data => setCity(data));
    }, [location])

    return (
        <>
        {city ? (
      <div className="card todayWeather-card"><span className="cloud"><i className="fas fa-cloud fa-3x text-light"></i></span>
      <div className="main">
          <p className="mb-0 mt-3 fs-4">{time}</p>
          <p className="header fs-4">{date}</p>
      </div>
      <div className="title">
          <p>Today</p>
      </div>
      <div className="temp mb-5">{tempConversion(city.main.temp)}<sup>&deg;</sup></div>
      <div className="row">
          <div className="col-md-4 col-sm-12">
              <div className="header">Weather</div>
              <div className="value">{city.weather[0].main}</div>
          </div>
          <div className="col-md-4">
              <div className="header">Humidity</div>
              <div className="value">{city.main.humidity}</div>
          </div>
          <div className="col-md-4">
              <div className="header">Wind</div>
              <div className="value">{city.wind.speed}</div>
          </div>
      </div>
  </div>
        ) : null}
        </>
    )
}

export default TodaysWeather
