import { useState, useEffect } from 'react'
import { PhoneNumberUtil } from 'google-libphonenumber'

const phoneUtil = PhoneNumberUtil.getInstance()

const useExampleNumber = (countryCode) => {
  const [exampleNumber, setExampleNumber] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (!countryCode) return // Exit if no country code provided

    try {
      // Get the example number for the provided country code
      const number = phoneUtil.getExampleNumber(countryCode.toUpperCase())
      // Format the number in the international format
      const formattedNumber = phoneUtil.format(number, 0)
      setExampleNumber(formattedNumber)
    } catch (err) {
      setError(`Error retrieving example number for country code: ${countryCode}`)
      console.error(err)
    }
  }, [countryCode])

  return { exampleNumber, error }
}

export default useExampleNumber
