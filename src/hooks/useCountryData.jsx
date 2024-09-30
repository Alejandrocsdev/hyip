// 函式庫 (library)
import { useState, useEffect } from 'react'
import flagsData from '../assets/flags/flags.json'

// 國家資訊
const useCountryData = (countryCode) => {
  const [countryInfo, setCountryInfo] = useState(null)

  useEffect(() => {
    const flag = flagsData.flags.find((flag) => flag.countryCode === countryCode)

    if (flag) {
      const { dialingCode, englishName, originalName, exampleNumber } = flag
      setCountryInfo({ dialingCode, englishName, originalName, exampleNumber })
    } else {
      setCountryInfo(null)
    }
  }, [countryCode])

  return countryInfo
}

export default useCountryData
