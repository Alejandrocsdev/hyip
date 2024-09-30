// 函式庫 (library)
import libphonenumber from 'google-libphonenumber'

const phoneUtil = libphonenumber.PhoneNumberUtil.getInstance()

// 驗證手機格式
const usePhoneValidate = () => {
  const validatePhoneNumber = (phoneNumber, countryCode) => {
    try {
      const number = phoneUtil.parse(phoneNumber, countryCode)

      const isValid = phoneUtil.isValidNumberForRegion(number, countryCode)

      return isValid
    } catch (err) {
      return false
    }
  }

  return validatePhoneNumber
}

export default usePhoneValidate
