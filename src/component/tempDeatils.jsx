import React from "react";

export default function TempDeatils(props) {
  const { city } = props;
  let date = new Date();
  let getDate = date.toDateString();
  return (
    <div>
      <div className="location-box">
        <div className="location">
          {city.name},{city.sys.country}
        </div>
        <div className="time">{getDate.slice(0, 24)}</div>
      </div>
      <div className="weather-box">
        <div className="temp">{Math.round(city.main.temp)}°c</div>

        <div className="season">{city.weather[0].main}</div>
      </div>
    </div>
  );
}
