import { useState, useEffect } from 'react'
import { useGeolocated } from 'react-geolocated'

const { VITE_OPENCAGE_API } = import.meta.env

function useCountryCode() {
  const { coords, isGeolocationAvailable, isGeolocationEnabled } = useGeolocated({
    positionOptions: {
      enableHighAccuracy: true
    },
    userDecisionTimeout: 5000
  })

  const [countryCode, setCountryCode] = useState(null)

  useEffect(() => {
    if (coords) {
      const fetchCountryCode = async () => {
        const response = await fetch(
          `https://api.opencagedata.com/geocode/v1/json?q=${coords.latitude}+${coords.longitude}&key=${VITE_OPENCAGE_API}`
        )
        const data = await response.json()
        const country = data.results[0].components.country_code.toLowerCase()
        setCountryCode(country)
      }

      fetchCountryCode()
    }
  }, [coords])

  return { countryCode, isGeolocationAvailable, isGeolocationEnabled }
}

export default useCountryCode
