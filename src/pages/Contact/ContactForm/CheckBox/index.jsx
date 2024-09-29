// 樣式模組 (css module)
import S from './style.module.css'
// 函式庫 (library)
import { useState, useEffect } from 'react'
// 圖檔 (image)
import checkboxSvg from '../../../../assets/img/icon/checkbox.svg'

// 首頁
function CheckBox({ isChecked, onChange, initial  }) {
  const [isClicked, setIsClicked] = useState(initial)

  const toggleCheckbox = () => {
    if (!isClicked) {
      setIsClicked(true)
    }
    onChange(!isChecked)
  }

  const checkboxClass = () => {
    if (!isClicked) {
      return ''
    }
    return isChecked ? S.active : S.inactive
  }

  useEffect(() => {
    setIsClicked(initial);
  }, [initial]);

  return (
    <main className={`${S.checkbox} ${checkboxClass()}`} onClick={toggleCheckbox}>
      <img src={checkboxSvg} className={isChecked ? S.show : ''} />
    </main>
  )
}

export default CheckBox
