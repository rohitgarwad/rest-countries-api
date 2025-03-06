import { useEffect, useState } from "react"
import './CountryDetail.css'
import { Link, useLocation, useParams } from "react-router-dom"
import CountryDetailShimmer from "./CountryDetailShimmer";
import ErrorPage from './ErrorPage'
import { useTheme } from "../hooks/useTheme";

function CountryDetail() {

  const param = useParams();
  const countryName = param.country;

  const { state } = useLocation();

  const [countryData, setCountryData] = useState(null)
  const [notFound, setNotFound] = useState(false);

  const [isDark] = useTheme()

  function updateCountryData(country) {
    setCountryData({
      flag: country.flags.svg,
      name: country.name.common,
      nativeName: country.name.nativeName ? Object.values(country.name.nativeName)[0].common : country.name.common,
      population: country.population.toLocaleString('en-IN'),
      region: country.region,
      subregion: country.subregion ? country.subregion : 'No sub region',
      capital: country.capital ? country.capital.join(', ') : 'No Capital',
      topLevelDomain: country.tld ? country.tld.join(', ') : 'No top level domain',
      currencies: country.currencies ? Object.values(country.currencies).map(currency => currency.name).join(', ') : 'No currency',
      languages: country.languages ? Object.values(country.languages).join(', ') : 'No languages',
      borders: []
    })

    if (!country.borders) {
      country.borders = []
    }

    Promise.all(country.borders.map((border) => {
      return fetch(`https://restcountries.com/v3.1/alpha/${border}`)
        .then((response) => response.json())
        .then(([borderCountry]) => borderCountry.name.common)
    })).then((borders) => setTimeout(() => setCountryData((prevState) => ({ ...prevState, borders }))))
      .catch((error) => {
        console.log(error);
        setNotFound(true)
      })
  }

  useEffect(() => {
    if (state) {
      updateCountryData(state)
      return
    }

    fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
      .then((response) => response.json())
      .then(([country]) => {
        updateCountryData(country)
      })
      .catch((error) => {
        console.log(error);
        setNotFound(true)
      })
  }, [countryName])

  if (notFound) {
    return <ErrorPage />
  }

  return countryData === null ? (
    <main className={`country-main ${isDark ? 'dark-theme' : ''}`}>
      <CountryDetailShimmer />
    </main>
  ) : (
    <main className={`country-main ${isDark ? 'dark-theme' : ''}`}>
      <section>
        <span className="back-button" onClick={() => history.back()}>
          <i className="fa-solid fa-arrow-left"></i>
          &nbsp;Back
        </span>
        <div className="country-container">
          <div className="country-flag">
            <img className="country-flag-image" src={countryData.flag} alt={`${countryData.name} flag`} />
          </div>
          <div className="country-details-container">
            <h1 className="country-name">{countryData.name}</h1>
            <div className="country-details">
              <div className="country-details-left">
                <p><b>Native Name: </b><span className="country-native-name">{countryData.nativeName}</span></p>
                <p><b>Population: </b><span className="country-population">{countryData.population}</span></p>
                <p><b>Region: </b><span className="country-region">{countryData.region}</span></p>
                <p><b>Sub Region: </b><span className="country-sub-region">{countryData.subregion}</span></p>
                <p><b>Capital: </b><span className="country-capital">{countryData.capital}</span></p>
              </div>
              <div className="country-details-right">
                <p><b>Top Level Domain: </b><span className="country-top-level-domain">{countryData.topLevelDomain}</span></p>
                <p><b>Currencies: </b><span className="country-currencies">{countryData.currencies}</span></p>
                <p><b>Languages: </b><span className="country-languages">{countryData.languages}</span></p>
              </div>
            </div>
            <div className="country-borders">
              <p><b>Border Countries: </b></p>
              <div className="border-countries">
                {
                  countryData.borders.length !== 0 ? (
                    countryData.borders.map((border) => (
                      <Link key={border} className="border-country" to={`/${border}`} >{border}</Link>
                    ))
                  ) : (
                    <p>No Borders</p>
                  )
                }
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default CountryDetail