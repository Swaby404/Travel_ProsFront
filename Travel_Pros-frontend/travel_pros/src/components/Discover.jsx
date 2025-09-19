

import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function Destination() {
  const [destinations, setDestinations] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchDestinations = async () => {
      const response = await fetch('https://restcountries.com/v3.1/all?fields=name,flags,region,cca3,description');
      const data = await response.json();
      setDestinations(data);
    };
    fetchDestinations();
  }, []);

  return (
    <>
      <h2>Welcome to The Discovery Page</h2>
      <div>
        <input
          type="text"
          placeholder="Search for a destination"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <ul>
        {destinations
          .filter(destination =>
            destination.name.common
              .toLowerCase()
              .includes(searchTerm.toLowerCase())
          )
          .map((destination) => (
            <li className="discover_container" key={destination.cca3}>
              <Link to={`/discover/${destination.cca3}`}>{destination.name.common}</Link>
              <p>Region: {destination.region}</p>
              <img
                src={destination.flags && destination.flags.png ? destination.flags.png : ""}
                alt={destination.name.common}
                
                style={{ width: '100px', height: '70px' }}
              />
            </li>
          ))}
      </ul>
    </>
  );
}
