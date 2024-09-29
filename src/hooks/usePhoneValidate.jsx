import { useState } from 'react'
import libphonenumber from 'google-libphonenumber'

const phoneUtil = libphonenumber.PhoneNumberUtil.getInstance()

const usePhoneValidate = () => {
  const [isValid, setIsValid] = useState(false)
  const [isPossible, setIsPossible] = useState(false)
  const [formattedNumber, setFormattedNumber] = useState('')
  const [error, setError] = useState(null)

  const validatePhoneNumber = (phoneNumber, countryCode) => {
    try {
      // Parse the phone number with the country code
      const number = phoneUtil.parse(phoneNumber, countryCode)

      // Validate if it's a valid number for the country
      const valid = phoneUtil.isValidNumberForRegion(number, countryCode)
      setIsValid(valid)

      // Check if it's a possible number
      const possible = phoneUtil.isPossibleNumber(number)
      setIsPossible(possible)

      // Format the phone number in E164 format
      const formatted = phoneUtil.format(number, libphonenumber.PhoneNumberFormat.E164)
      setFormattedNumber(formatted)

      // Clear previous error if validation is successful
      setError(null)

      return { isValid: valid, isPossible: possible, formattedNumber: formatted }
    } catch (err) {
      setIsValid(false)
      setIsPossible(false)
      setFormattedNumber('')
      setError(err.message)

      return { isValid: false, error: err.message }
    }
  }

  return {
    isValid,
    isPossible,
    formattedNumber,
    error,
    validatePhoneNumber
  }
}

export default usePhoneValidate
