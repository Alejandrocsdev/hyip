// 樣式模組 (css module)
import S from './style.module.css'
// 函式庫 (library)
import { Link } from 'react-router-dom'
// import { useState } from 'react'
import { useForm } from 'react-hook-form'
// 圖檔 (image)
import greenCheckSvg from '../../../assets/img/icon/green-check.svg'
// 組件 (component)
import CheckBox from './CheckBox'
import CodeDrop from './CodeDrop'
import FormField from '../../../components/FormField'

// 首頁
function ContactForm() {
  const { control, handleSubmit } = useForm({
    mode: 'onTouched',
    shouldFocusError: false // or 'onChange', 'onTouched', 'all'
  })
  // const [isChecked, setIsChecked] = useState(false)
  // const [isSubmitted, setIsSubmitted] = useState(false)

  // const [formValues, setFormValues] = useState({
  //   name: '',
  //   email: '',
  //   phone: '',
  //   message: ''
  // })

  // const handleInputChange = (e) => {
  //   const { name, value } = e.target
  //   setFormValues((prev) => ({
  //     ...prev,
  //     [name]: value
  //   }))
  // }

  // const handleCheckboxChange = (checked) => {
  //   setIsChecked(checked)
  // }

  // const handleSubmit = (e) => {
  //   e.preventDefault()
  //   setIsSubmitted(true)
  // }

  // const handleDoneClick = () => {
  //   // Reset form values and states
  //   setFormValues({
  //     name: '',
  //     email: '',
  //     phone: '',
  //     message: ''
  //   })
  //   setIsChecked(false)
  //   setIsSubmitted(false)
  // }

  const onSubmit = (data) => {
    console.log('Form submitted', data)
  }

  return (
    <div className={S.main}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={S.inputs}>
          {/* 名稱 */}
          <div className={S.input}>
            <span>Name</span>
            <FormField name="name" control={control} />
            {/* <input
              type="text"
              name="name"
              value={formValues.name}
              onChange={handleInputChange}
            /> */}
          </div>
          {/* 信箱 */}
          <div className={S.input}>
            <span>Email</span>
            <FormField name="email" control={control} type="email" />
            {/* <input
              type="email"
              name="email"
              value={formValues.email}
              onChange={handleInputChange}
            /> */}
          </div>
          {/* 電話 */}
          <div className={S.input}>
            <span>Phone</span>
            <CodeDrop
              control={control}
              // value={formValues.phone}
              // onChange={handleInputChange}
            />
          </div>
        </div>
        {/* 訊息 */}
        <div className={S.message}>
          <span>How can we help?</span>
          <FormField
            name="message"
            control={control}
            isTextarea={true}
            placeholder="Write your question"
          />
          {/* <textarea
            name="message"
            placeholder="Write your question"
            value={formValues.message}
            onChange={handleInputChange}
          ></textarea> */}
        </div>
        <div className={S.agreements}>
          <CheckBox
          // isChecked={isChecked}
          // onChange={handleCheckboxChange}
          // initial={isChecked}
          />
          <p>
            I consent to the use of my data and have read the <Link>Terms and conditions</Link>,{' '}
            <Link>Customer data processing procedure</Link> and{' '}
            <Link>Complaints resolution procedure</Link>
          </p>
        </div>
        <button
          className={S.submit}
          type="submit"
          // onClick={handleSubmit}
        >
          Send
        </button>
      </form>
      {/* <div className={`${S.thanks} ${isSubmitted ? S.showThanks : ''}`}> */}
      <div className={S.thanks}>
        <img src={greenCheckSvg} />
        <p>
          <b>Thank you! Your message has been sent.</b>
        </p>
        <button
          type="button"
          // onClick={handleDoneClick}
        >
          Done
        </button>
      </div>
    </div>
  )
}

export default ContactForm
