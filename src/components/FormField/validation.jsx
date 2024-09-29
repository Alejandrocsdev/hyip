import usePhoneValidate from '../../hooks/usePhoneValidate'

export const getValidationRules = (type, countryCode) => {
  const { validatePhoneNumber } = usePhoneValidate()

  const rules = {
    required: true
  }

  switch (type) {
    case 'text':
      return {
        ...rules,
        maxLength: { value: 50 }
      }

    case 'email':
      return {
        ...rules,
        pattern: { value: /^\S+@\S+\.\S+$/ }
      }

    case 'tel':
      return {
        ...rules,
        validate: {
          isValidNumber: (value) => {
            const { isValid } = validatePhoneNumber(value, countryCode)
            return isValid
          },
          isNumeric: (value) => /^[0-9]+$/.test(value)
        }
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
