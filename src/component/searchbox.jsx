import React from "react";

export default function Searchbox(props) {
    const {query,setQuery}=props;
  return (
    <>
      <div className="search-box">
        <input
          type="text"
          className="search-bar"
          placeholder="Search city.."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
    </>
  );
}
