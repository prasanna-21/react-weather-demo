import "./App.css";
import React, { useState, useEffect } from "react";
import Searchbox from "./component/searchbox";
import TempDeatils from "./component/tempDeatils";
import { api } from "./api";

function App() {
  const [query, setQuery] = useState("");
  const [city, setCity] = useState({});

  //call api for city when query updated
  useEffect(() => {
    const searchCity = () => {
      fetch(`${api.base}weather?q=${query}&units=metric&appid=${api.key}`)
        .then((res) => {
          return res.json();
        })
        .then((result) => {
          setCity(result);
        });
    };
    searchCity();
  }, [query]);

  return (
    <div className="main">
      <div className="container">
        <Searchbox query={query} setQuery={setQuery} />
        {city.main ? (
          <div>
            <TempDeatils city={city} />
          </div>
        ) : (
          <p style={{ textAlign: "center", color: "#fff" }}>City Not Found </p>
        )}
      </div>
    </div>
  );
}

export default App;
