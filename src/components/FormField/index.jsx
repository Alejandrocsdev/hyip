// 樣式模組 (css module)
import S from './style.module.css'
// 函式庫 (library)
import { useController } from 'react-hook-form'
// 自訂函式 (custom function)
import { getValidationRules } from './validation';

// 輸入欄
function FormField({
  name,
  control,
  defaultValue = '',
  className = '',
  type = 'text',
  isTextarea = false,
  placeholder = '',
  countryCode
}) {
  const {
    field,
    // fieldState: { isTouched, error }
    fieldState: { error }
  } = useController({
    name,
    control,
    defaultValue,
    rules: getValidationRules(isTextarea ? 'textarea' : type, countryCode)
  })

  return (
    <>
      {isTextarea ? (
        <textarea
          {...field}
          className={`${className} ${error ? S.error : ''}`}
          placeholder={placeholder}
        />
      ) : (
        <input
          {...field}
          className={`${className} ${error ? S.error : ''}`}
          type={type}
          placeholder={placeholder}
        />
      )}
      {/* {error && <p>{error.message}</p>} */}
    </>
  )
}

export default FormField
