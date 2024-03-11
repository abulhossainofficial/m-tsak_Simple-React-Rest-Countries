import { useState } from "react";
import "./Country.css";
const Country = ({ country, handleVisitedCountry, handleVisitedFlags }) => {
  const { name, flags, population, area, cca3 } = country;

  const [visited, setVisited] = useState(false);

  const handleVisited = () => {
    setVisited(!visited);
  };

  //   const passwithParams = () => {
  //     handleVisitedCountry(country);
  //   };

  //   const passwithParams = () => handleVisitedCountry(country);

  return (
    <div className={`country ${visited && "visited"}`}>
      <h3 style={{ color: visited ? "yellow" : "black" }}>
        name {name.common}
      </h3>
      <img src={flags.png} alt="" />
      <p>Population: {population}</p>
      <p>Area : {area}</p>
      <p>
        <small>Code: {cca3}</small>
      </p>
      <button onClick={() => handleVisitedCountry(country)}>
        Mark Visited
      </button>{" "}
      <br />
      <button onClick={() => handleVisitedFlags(country.flags.png)}>
        Add Flags
      </button>
      <br />
      <button onClick={handleVisited}> {visited ? "visited" : "Going"} </button>
      {/* {visited && "i have visited this country."} */}
      {visited ? "i have visited this country." : "i want to visite"}
    </div>
  );
};

export default Country;
