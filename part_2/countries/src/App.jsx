import { useState, useEffect } from 'react'
import axios from 'axios'

const Country = ({ country }) => {
  if (country === null) {
    return null
  }

  console.log('country', country)
  return (
    <>
      <h1>{country.name.common}</h1>
      capital {country.capital[0]} <br />
      area {country.area}
      <h2>languages:</h2>
      <ul>
        {Object.values(country.languages).map((language, index) => <li key={index}>{language}</li>)}
      </ul>
      <img src={country.flags.png} />
    </>
  )
}

const CountrySelection = ({ country, setRenderedCountry, setCountrySelections }) => {
  const handleShow = () => {
    setRenderedCountry(country)
    setCountrySelections([])
    console.log('show')
  }

  return <div>
    {country.name.common} <button onClick={handleShow}>
      show
    </button>
  </div>
}

function App() {
  const [searchedCountry, setSearchedCountry] = useState('')
  const [countrySelections, setCountrySelections] = useState([])
  const [countries, setCountries] = useState([])
  const [renderedCountry, setRenderedCountry] = useState(null)

  useEffect(() => {
    console.log('effect')
    axios
      .get(`https://studies.cs.helsinki.fi/restcountries/api/all`)
      .then(response => response.data)
      .then(countries => {
        console.log('countries', countries)
        setCountries(countries)
      })
  }, [])

  const handleChange = (event) => {
    console.log('handleChange')
    const searchedCountry = event.target.value.toLowerCase()
    setSearchedCountry(searchedCountry)
    console.log('searchedCountry', searchedCountry)

    const filteredCountries = countries.filter(country => country.name.common.toLowerCase().includes(searchedCountry))
    console.log('filteredCountry', filteredCountries)
    if (filteredCountries.length === 1) {
      setRenderedCountry(filteredCountries[0])
      console.log('setRenderedCountry to', filteredCountries[0].name.common)

      setCountrySelections([])
      console.log('setCountrySelections to []')
    } else {
      setRenderedCountry(null)
      console.log('setRenderedCountry to null')

      setCountrySelections(filteredCountries)
      console.log('setCountrySelections')
    }
  }

  return (
    <>
      <div>
        find countries <input
          value={searchedCountry}
          onChange={handleChange}
        />
        <Country country={renderedCountry} />
        {
          countrySelections.length > 10
            ? <div>Too many matches, specify another filter</div>
            : countrySelections.map(countrySelection => <CountrySelection key={countrySelection.name.common} country={countrySelection} setRenderedCountry={setRenderedCountry} setCountrySelections={setCountrySelections} />)
        }
      </div>
    </>
  )
}

export default App
