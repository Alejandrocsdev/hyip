// 函式庫 (library)
import axios from 'axios'
import { useState, useEffect } from 'react'

// 國碼
function useCountryCode() {
  const [countryCode, setCountryCode] = useState(null)

  useEffect(() => {
    async function fetchCountryCode() {
      try {
        const response = await axios.get('https://ipinfo.io/json')
        setCountryCode(response.data.country.toLowerCase())
      } catch (error) {
        setCountryCode(null)
      }
    }

    fetchCountryCode()
  }, [])

  return { countryCode, setCountryCode }
}

export default useCountryCode
