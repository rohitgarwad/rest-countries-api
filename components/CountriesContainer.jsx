import { useEffect, useState } from 'react'
import CountryCard from './CountryCard'
import CountryCardShimmer from './CountryCardShimmer';

function CountriesContainer({ searchQuery, filterByRegion }) {

    const [countriesData, setCountriesData] = useState([]);

    useEffect(() => {
        fetch("https://restcountries.com/v3.1/all")
            .then((response) => response.json())
            .then((data) => setCountriesData(data))
    }, [])

    const filteredCountries = countriesData.filter(country => country.name.common.toLowerCase().includes(searchQuery)).filter(country => country.region.toLowerCase().includes(filterByRegion)).toSorted((a, b) => a.name.common.localeCompare(b.name.common));

    return !countriesData.length ? (
        <CountryCardShimmer />
    ) : (
        <div className="countries-container">
            {
                filteredCountries.map(country => (
                    <CountryCard
                        key={country.name.common}
                        name={country.name.common}
                        flag={country.flags.svg}
                        population={country.population.toLocaleString('en-IN')}
                        region={country.region}
                        capital={country.capital?.[0]}
                        data={country}
                    />
                ))
            }
        </div>
    )
}

export default CountriesContainer