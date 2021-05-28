import "./App.css";
import React, { useState, useEffect } from "react";

const api = {
  key: "7b0440b1fd05cdbf124eff31d6555032",
  base: "https://api.openweathermap.org/data/2.5/",
};

function App() {
  const [query, setQuery] = useState("");
  const [city, setCity] = useState({});

  //call api for city when query updated
  useEffect(() => {
    const searchCity = () => {
      fetch(`${api.base}weather?q=${query}&units=metric&appid=${api.key}`)
        .then((res) => {
          // console.log(res);
          return res.json();
        })
        .then((result) => {
          setCity(result);
        });
    };
    searchCity();
  }, [query]);

  let date = String(new window.Date());

  return (
    <div className="main">
      <div className="container">
        <div className="search-box">
          <input
            type="text"
            className="search-bar"
            placeholder="Search city.."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
        {city.main ? (
          <div>
            <div className="location-box">
              <div className="location">
                {city.name},{city.sys.country}
              </div>
              <div className="time">{date.slice(0, 24)}</div>
            </div>
            <div className="weather-box">
              <div className="temp">{Math.round(city.main.temp)}c</div>

              <div className="season">{city.weather[0].main}</div>
            </div>
          </div>
        ) : (
          <p style={{ textAlign: "center", color: "#fff" }}>City Not Found </p>
        )}
      </div>
    </div>
  );
}

export default App;
