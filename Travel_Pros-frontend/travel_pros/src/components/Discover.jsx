import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';



export default function Discover() {
    const [destinations, setDestinations] = useState([]);
    useEffect(() => {
        const fetchDestinations = async () => {
            const response = await fetch('https://tripadvisor.com');
            const data = await response.json();
            setDestinations(data);
        };
        fetchDestinations();
        setDestinations([{ id: 1, name: 'Paris', description: 'The city of lights and love.' }, { id: 2, name: 'New York', description: 'The city that never sleeps.' }, { id: 3, name: 'Tokyo', description: 'A blend of tradition and modernity.' }]);
    }, []);

 


return (////displays for country with images using lorem picsumum
        <div className="discover-container">
            <h1>Discover New Destinations</h1>
            <div className="destination-list">
                {destinations.map(destination => (
                    <div key={destination.id} className="destination-card">
                        <img src={`https://picsum.photos/200/300?random=${destination.id}`} alt={destination.name} />
                        <Link to={`/destinations/${destination.id}`}> </Link>
                            <h2>{destination.name}</h2>
                        
                        <p>{destination.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
