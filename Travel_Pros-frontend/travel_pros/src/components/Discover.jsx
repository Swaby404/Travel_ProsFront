import faker from 'faker';


const countries = [
    "Italy",
    "France",
    "Spain",
    "Germany",
    "Greece",
    "Portugal",
    "Netherlands",
    "Switzerland",
    "Austria",
    "Belgium",
    "Sweden",
    "Norway",
    "Denmark",
    "Finland",
    "Ireland",
    "Czech Republic",
    "Poland",
    "Hungary",
    "Croatia",
    "Slovenia",
    "Turkey"
];

const Discover = () => {
    return (
        <div>
            <h1>Travel Pro Discovery Center</h1>
            <p>Explore our curated list of countries below and click on any country to read reviews, share your experiences!</p>
            {countries.map((country) => (
                <div className="country-list" key={country}>
                    <img
                        src={`https://source.unsplash.com/100x100/?${country}`}
                        alt={country}
                        className="country-image"
                    />
                    <div className="country-item">
                        <h2>{country}</h2>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Discover;