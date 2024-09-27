////////////////////////////////
// ### ASK FOR PERMISSION ### //
////////////////////////////////

// import { useState, useEffect } from 'react'
// import { useGeolocated } from 'react-geolocated'

// const { VITE_OPENCAGE_API } = import.meta.env

// function useCountryCode() {
//   const { coords, isGeolocationAvailable, isGeolocationEnabled } = useGeolocated({
//     positionOptions: {
//       enableHighAccuracy: true
//     },
//     userDecisionTimeout: 5000
//   })

//   const [countryCode, setCountryCode] = useState(null)

//   useEffect(() => {
//     if (coords) {
//       const fetchCountryCode = async () => {
//         const response = await fetch(
//           `https://api.opencagedata.com/geocode/v1/json?q=${coords.latitude}+${coords.longitude}&key=${VITE_OPENCAGE_API}`
//         )
//         const data = await response.json()
//         const country = data.results[0].components.country_code.toLowerCase()
//         setCountryCode(country)
//       }

//       fetchCountryCode()
//     }
//   }, [coords])

//   return { countryCode, isGeolocationAvailable, isGeolocationEnabled }
// }

// export default useCountryCode

//////////////////////////////////////
// ### DON'T ASK FOR PERMISSION ### //
//////////////////////////////////////

import { useState, useEffect } from 'react'

function useCountryCode() {
  const [countryCode, setCountryCode] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    async function fetchCountryCode() {
      try {
        setLoading(true)
        const response = await fetch('https://ipinfo.io/json')
        if (!response.ok) {
          throw new Error('Failed to fetch country code')
        }
        const data = await response.json()
        setCountryCode(data.country.toLowerCase())
      } catch (error) {
        setError(error.message)
      } finally {
        setLoading(false)
      }
    }

    fetchCountryCode()
  }, [])

  return { countryCode, loading, error }
}

export default useCountryCode
