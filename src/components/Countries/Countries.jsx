import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import "./Countries.css";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [visitedcountryes, setVisitedCountries] = useState([]);
  const [visitedFlags, setVisitedFlags] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

  const handleVisitedCountry = (country) => {
    console.log("add thir to");
    const newVisitedCountrys = [...visitedcountryes, country];
    setVisitedCountries(newVisitedCountrys);
  };

  const handleVisitedFlags = (flags) => {
    const newVisiteddFlags = [...visitedFlags, flags];
    setVisitedFlags(newVisiteddFlags);
  };

  return (
    <div>
      <h3>Countries: {countries.length}</h3>
      <div>
        <h5>Visited Country : {visitedcountryes.length}</h5>
        <ul>
          {visitedcountryes.map((country) => (
            <li key={country.cca3}>{country.name.common}</li>
          ))}
        </ul>
      </div>
      {/* display flags */}
      <div className="flasg-container">
        {visitedFlags.map((flag, idx) => (
          <img key={idx} src={flag}></img>
        ))}
      </div>
      {/* display country */}
      <div className="country-container">
        {countries.map((country) => (
          <Country
            key={country.cca3}
            handleVisitedCountry={handleVisitedCountry}
            handleVisitedFlags={handleVisitedFlags}
            country={country}
          ></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
