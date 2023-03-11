import React, { useState } from 'react'
import axios from 'axios'

function App() {
  const [data, setData] = useState({})
  const [zipCode, setZipCode] = useState('')

  const url = `http://api.zippopotam.us/us/${zipCode}`

  const searchZipCode = (event) => {
    if (event.key === 'Enter') {
      axios.get(url).then((response) => {
        setData(response.data)
        console.log(response.data)
      })
      setZipCode('')
    }
  }

  return (
    <div className="app">
      <div className="search">
        <input
          value={zipCode}
          onChange={event => setZipCode(event.target.value)}
          onKeyPress={searchZipCode}
          placeholder='Enter ZipCode'
          type="text" />
      </div>
      <div className="container">
        <div className="top">
          <div className="location">
            <p>{data["post code"]}</p>
          </div>
          <div className="city">
            {data.places ? <h1>{data.places[0]["place name"]}</h1> : null}
          </div>
          <div className="country">
          <p>{data.country}</p> 
          </div>
        </div>

        
          <div className="bottom">
            <div className="latitude">
              {data.places ? <p className='bold'>{data.places[0].latitude}</p> : null}
              <p>Latitude</p>
            </div>
            <div className="longitude">
              {data.places ? <p className='bold'>{data.places[0].longitude}</p> : null}
              <p>Longitude</p>
            </div>
            <div className="stateAbb">
              {data.places ? <p className='bold'>{data.places[0]["state abbreviation"]}</p> : null}
              <p>State</p>
            </div>
          </div>
        

      </div>
    </div>
  );
}

export default App;