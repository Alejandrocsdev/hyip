import { useState, useEffect } from 'react'
import flagsData from '../components/Flag/flags.json'

const useCountryData = (countryCode) => {
  const [countryInfo, setCountryInfo] = useState(null)

  useEffect(() => {
    const flag = flagsData.flags.find((flag) => flag.countryCode === countryCode)

    if (flag) {
      const { dialingCode, englishName, originalName } = flag
      setCountryInfo({ dialingCode, englishName, originalName })
    } else {
      setCountryInfo(null)
    }
  }, [countryCode])

  return countryInfo
}

export default useCountryData
