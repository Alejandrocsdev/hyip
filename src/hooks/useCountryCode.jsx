import { useState, useEffect } from 'react'

// 國碼
function useCountryCode() {
  const [countryCode, setCountryCode] = useState(null)

  useEffect(() => {
    async function fetchCountryCode() {
      try {
        const response = await fetch('https://ipinfo.io/json')
        if (!response.ok) {
          throw new Error('Failed to fetch country code')
        }
        const data = await response.json()
        setCountryCode(data.country.toLowerCase())
      } catch {
        setCountryCode(null)
      }
    }

    fetchCountryCode()
  }, [])

  return { countryCode, setCountryCode }
}

export default useCountryCode
