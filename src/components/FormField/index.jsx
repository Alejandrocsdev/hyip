// 樣式模組 (css module)
import S from './style.module.css'
// 函式庫 (library)
import { useController } from 'react-hook-form'
// 自訂函式 (custom function)
import { getFieldRules } from './fieldRules'

// 輸入欄
function FormField(props) {
  const {
    // default attributes
    id,
    type = 'text',
    className = '',
    placeholder = '',
    // controller attributes
    name,
    control,
    defaultValue = '',
    // Other attributes
    countryCode
  } = props

  const {
    field,
    fieldState: { error }
  } = useController({
    name,
    control,
    defaultValue,
    rules: getFieldRules(type, countryCode)
  })

  const defaultAttributes = {
    id,
    type,
    className: `${className} ${error ? S.error : ''}`,
    placeholder
  }

  return (
    <>
      {type === 'textarea' ? (
        <textarea {...field} {...defaultAttributes} />
      ) : (
        <input {...field} {...defaultAttributes} />
      )}
    </>
  )
}

export default FormField
