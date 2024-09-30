// 樣式模組 (css module)
import S from './style.module.css'
// 函式庫 (library)
import { useFormContext } from 'react-hook-form'
// 圖檔 (image)
import checkboxSvg from '../../../../assets/img/icon/checkbox.svg'
// 組件 (component)
import FormField from '../../../../components/FormField'

// 首頁
function CheckBox() {
  const {
    control,
    watch,
    formState: { errors }
  } = useFormContext()

  const isChecked = watch('agree')
  const hasError = errors['agree']

  const getCheckboxClass = () => {
    if (isChecked) {
      return S.active
    } else if (hasError || isChecked === false) {
      return S.inactive
    } else {
      return ''
    }
  }

  return (
    <label className={`${S.checkbox} ${getCheckboxClass()}`} id="agreement">
      <img src={checkboxSvg} className={isChecked ? S.show : ''} />
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
