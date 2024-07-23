import { useState, useEffect } from 'react'
import axios from 'axios'

const Country = ({country}) => {
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
        {Object.values(country.languages).map(language => <li>{language}</li>)}
      </ul>
      <img src={country.flags.png} />
    </>
  )
}

function App() {
  const [searchedCountry, setSearchedCountry] = useState('')
  const [countries, setCountries] = useState(null)
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

    const filteredCountry = countries.filter(country => country.name.common.toLowerCase().includes(searchedCountry))
    console.log('filteredCountry', filteredCountry)
    if (filteredCountry.length === 1) {
      setRenderedCountry(filteredCountry[0])
    } else {
      setRenderedCountry(null)
    }

    setSearchedCountry(searchedCountry)
  }

  return (
    <>
      <div>
        find countries <input
          value={searchedCountry}
          onChange={handleChange}
        />
        <Country country={renderedCountry} />
      </div>
    </>
  )
}

export default App
