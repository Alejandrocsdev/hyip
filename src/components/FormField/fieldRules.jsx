// 自訂函式 (custom function)
import usePhoneValidate from '../../hooks/usePhoneValidate'

export const getFieldRules = (type, countryCode) => {
  const validatePhoneNumber = usePhoneValidate()
  const isValidNumber = (value) => validatePhoneNumber(value, countryCode)

  const rules = { required: true }

  switch (type) {
    case 'text':
      return {
        ...rules,
        maxLength: { value: 50 }
      }

    case 'email':
      return {
        ...rules,
        pattern: { value: /^\S+@\S+\.\S+$/ },
        // pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ },
        maxLength: { value: 50 }
      }

    case 'tel':
      return {
        ...rules,
        validate: { isValidNumber },
        pattern: /^[0-9]+$/,
        maxLength: { value: 15 }
      }

    case 'textarea':
      return {
        ...rules,
        maxLength: { value: 250 }
      }

    default:
      return rules
  }
}
