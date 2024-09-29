// 樣式模組 (css module)
import S from './style.module.css'
// 函式庫 (library)
import { useState, useRef } from 'react'
import useBodyScroll from '../../../../hooks/useBodyScroll.jsx'
import useClickOutside from '../../../../hooks/useClickOutside.jsx'
import useCountryCode from '../../../../hooks/useCountryCode.jsx'
import useCountryData from '../../../../hooks/useCountryData.jsx'
// 組件 (component)
import Flag from '../../../../components/Flag'
import PhoneList from './PhoneList'
import AngleDownSvg from '../../../../components/Svg/AngleDownSvg'

// import { useForm } from 'react-hook-form'
import FormField from '../../../../components/FormField'

// 下拉選單: 國碼
function CodeDrop(
  {
    // onBlur, inputError,
    // value, onChange
    control
  }
) {
  // const { control } = useForm()

  const { countryCode, setCountryCode } = useCountryCode()
  const countryData = useCountryData(countryCode)
  const dialingCode = countryData ? countryData.dialingCode : ''
  const exampleNumber = countryData ? countryData.exampleNumber : ''

  const [showList, setShowList] = useState(false)
  const codeBtnRef = useRef(null)
  const inputRef = useRef(null)

  const toggleList = () => {
    setShowList((prev) => !prev)
  }

  const handleSelect = (newCountryCode) => {
    setCountryCode(newCountryCode)
    setShowList(false)
    inputRef.current?.focus()
  }

  useClickOutside(codeBtnRef, () => setShowList(false))

  useBodyScroll(showList)

  return (
    <main className={S.main}>
      <div className={S.codeBtn} onClick={toggleList} ref={codeBtnRef}>
        <div className={S.selected}>
          <Flag countryCode={countryCode || 'lv'} />
          <div className={S.code}>+{dialingCode || '66'}</div>
          <AngleDownSvg className={`${S.arrow} ${showList ? S.rotate : ''}`} />
        </div>
        <PhoneList show={showList} selected={countryCode || 'lv'} onSelect={handleSelect} />
      </div>
      {/* <input
        type="text"
        name="phone"
        placeholder={exampleNumber || '21 234 567'}
        value={value}
        onChange={onChange}
        ref={inputRef}
        onBlur={onBlur}
        className={inputError ? S.error : ''}
      /> */}
      <FormField
        name="phone"
        control={control}
        type="tel"
        countryCode="tw"
        placeholder={exampleNumber || '21 234 567'}
        // ref={inputRef}
      />
    </main>
  )
}

export default CodeDrop
