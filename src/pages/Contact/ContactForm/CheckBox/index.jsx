// 樣式模組 (css module)
import S from './style.module.css'
// 函式庫 (library)
import { useState, useEffect } from 'react'
// 圖檔 (image)
import checkboxSvg from '../../../../assets/img/icon/checkbox.svg'

import FormField from '../../../../components/FormField'

import { useFormContext } from 'react-hook-form' // Import useFormContext

// 首頁
function CheckBox() {
  const { control, watch, formState: { errors } } = useFormContext()

  const isChecked = watch('agree')
  const hasError = errors['agree'] // Check if there's an error on submit

  // label only
  const [isTouched, setIsTouched] = useState(false)

  const handleLabelClick = () => {
    setIsTouched(true)
  }

  const getCheckboxClass = () => {
    if (hasError) {
      return S.inactive // If there's an error
    }
    if (isChecked && isTouched) {
      return S.active // If it's checked and touched
    }
    if (!isChecked && isTouched) {
      return S.inactive // If it's not checked and touched
    }
    return '' // No special class if untouched
  }

  return (
    <label className={`${S.checkbox} ${getCheckboxClass()}`} id="agreement" onClick={handleLabelClick}>
      <img src={checkboxSvg} className={isChecked && isTouched ? S.show : ''}/>
      <FormField
        className={S.check}
        id="agreement"
        name="agree"
        type="checkbox"
        control={control}
      />
    </label>
  )
}

export default CheckBox
