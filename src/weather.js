import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloud, faSun } from '@fortawesome/free-solid-svg-icons'
import "./weather.css";

const Weather = () => {
  const weatherData = {
    Lahore: {
      Friday: 28.5,
      Saturday: 12.0,
      Sunday: 30.5,
      Monday: 24.0
    },
    Karachi: {
      Friday: 32.0,
      Saturday: 34.5,
      Sunday: 31.0,
      Monday: 33.5
    },
    Islamabad: {
      Friday: 22.0,
      Saturday: 20.5,
      Sunday: 23.5,
      Monday: 21.0
    },
    Multan: {
      Friday: 30.5,
      Saturday: 32.0,
      Sunday: 29.0,
      Monday: 31.5
    }
  };

  const [city, setCity] = useState("Lahore");
  const [selectCity, setSelectCity] = useState(weatherData.Lahore);
  const handleChange = (e) => {
    const cityname = e.target.value;
    if (weatherData.hasOwnProperty(cityname)) {
      setCity(cityname);
      setSelectCity(weatherData[cityname]);
    } else {
      setCity("Lahore");
      setSelectCity(weatherData.Lahore)
    }
  };
  const getCondition = (temperature) => {
    if (temperature < 20) {
      return <FontAwesomeIcon icon={faCloud} style={{ color: 'white', fontSize: '2em' }} />;
    } else if (temperature < 25 && temperature > 20) {
      return <FontAwesomeIcon icon={faCloud} style={{ color: 'white', fontSize: '2em' }} />;
    } else if (temperature > 25) {
      return <FontAwesomeIcon icon={faSun} style={{ color: 'yellow', fontSize: '2em' }} />;
    }
  }

  const fridayCondition = getCondition(selectCity.Friday);
  const saturdayCondition = getCondition(selectCity.Saturday);
  const sundayCondition = getCondition(selectCity.Sunday);
  const mondayCondition = getCondition(selectCity.Monday);


  return (
    <div className="container">
      <input
        placeholder="Enter a city..."
        type="text"
        onChange={(e) => handleChange(e)}
      />
      <div className="transparent-div">
        <p>Today</p>
        <h1>{city}<p>{selectCity.Friday} {fridayCondition}</p></h1>
      </div>
      <div className="boxes">
        <div className="box">Friday:<p>{selectCity.Friday}*C</p><p>{fridayCondition}</p></div>
        <div className="box">Saturday:<p>{selectCity.Saturday}*C</p><p>{saturdayCondition}</p></div>
        <div className="box">Sunday:<p>{selectCity.Sunday}*C</p><p>{sundayCondition}</p></div>
        <div className="box">Monday:<p>{selectCity.Monday}*C</p><p>{mondayCondition}</p></div>
      </div>
    </div>
  );
};

export default Weather;
