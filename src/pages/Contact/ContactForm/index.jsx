// 模組樣式
import S from './style.module.css'
// 鉤子函式
import { Link } from 'react-router-dom'
import { useState } from 'react'
// 圖檔
import greenCheckSvg from '../../../assets/img/icon/green-check.svg'
// 組件
import CheckBox from './CheckBox'
import CodeDrop from './CodeDrop'

// 首頁
function ContactForm() {
  const [isChecked, setIsChecked] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  const [inputError, setInputError] = useState({
    name: false,
    email: false,
    phone: false,
    message: false
  })

  const validateName = (name) => name.trim() !== ''
  const validateEmail = (email) => /^\S+@\S+\.\S+$/.test(email)
  const validatePhone = (phone) => phone.trim() !== ''
  const validateMessage = (message) => message.trim() !== ''

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormValues((prev) => ({
      ...prev,
      [name]: value
    }))
  }

  const handleBlur = (field) => {
    const value = formValues[field]
    let isValid = false

    switch (field) {
      case 'name':
        isValid = validateName(value)
        break
      case 'email':
        isValid = validateEmail(value)
        break
      case 'phone':
        isValid = validatePhone(value)
        break
      case 'message':
        isValid = validateMessage(value)
        break
      default:
        break
    }

    setInputError((prev) => ({
      ...prev,
      [field]: !isValid
    }))
  }

  const handleCheckboxChange = (checked) => {
    setIsChecked(checked)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const isFormValid = Object.values(inputError).every((error) => !error) && isChecked

    if (isFormValid) {
      setIsSubmitted(true)
    }
  }

  const handleDoneClick = () => {
    // Reset form values and states
    setFormValues({
      name: '',
      email: '',
      phone: '',
      message: ''
    })
    setInputError({
      name: false,
      email: false,
      phone: false,
      message: false
    })
    setIsChecked(false)
    setIsSubmitted(false)
  }

  return (
    <div className={S.main}>
      <form className={isSubmitted ? S.hideForm : ''}>
        <div className={S.inputs}>
          {/* 名稱 */}
          <div className={S.input}>
            <span>Name</span>
            <input
              type="text"
              name="name"
              value={formValues.name}
              onChange={handleInputChange}
              className={inputError.name ? S.error : ''}
              onBlur={() => handleBlur('name')}
            />
          </div>
          {/* 信箱 */}
          <div className={S.input}>
            <span>Email</span>
            <input
              type="email"
              name="email"
              value={formValues.email}
              onChange={handleInputChange}
              className={inputError.email ? S.error : ''}
              onBlur={() => handleBlur('email')}
            />
          </div>
          {/* 電話 */}
          <div className={S.input}>
            <span>Phone</span>
            <CodeDrop
              onBlur={() => handleBlur('phone')}
              inputError={inputError.phone}
              value={formValues.phone}
              onChange={handleInputChange}
            />
          </div>
        </div>
        {/* 訊息 */}
        <div className={S.message}>
          <span>How can we help?</span>
          <textarea
            name="message"
            placeholder="Write your question"
            value={formValues.message}
            onChange={handleInputChange}
            className={inputError.message ? S.error : ''}
            onBlur={() => handleBlur('message')}
          ></textarea>
        </div>
        <div className={S.agreements}>
          <CheckBox isChecked={isChecked} onChange={handleCheckboxChange} initial={isChecked} />
          <p>
            I consent to the use of my data and have read the <Link>Terms and conditions</Link>,{' '}
            <Link>Customer data processing procedure</Link> and{' '}
            <Link>Complaints resolution procedure</Link>
          </p>
        </div>
        <button className={S.submit} type="button" onClick={handleSubmit}>
          Send
        </button>
      </form>
      <div className={`${S.thanks} ${isSubmitted ? S.showThanks : ''}`}>
        <img src={greenCheckSvg} />
        <p>
          <b>Thank you! Your message has been sent.</b>
        </p>
        <button type="button" onClick={handleDoneClick}>
          Done
        </button>
      </div>
    </div>
  )
}

export default ContactForm
