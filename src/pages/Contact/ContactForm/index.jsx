// 樣式模組 (css module)
import S from './style.module.css'
// 函式庫 (library)
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useForm, FormProvider } from 'react-hook-form'
import axios from 'axios'
// 圖檔 (image)
import greenCheckSvg from '../../../assets/img/icon/green-check.svg'
// 組件 (component)
import CheckBox from './CheckBox'
import CodeDrop from './CodeDrop'
import FormField from '../../../components/FormField'

// 首頁
function ContactForm() {
  const methods = useForm({
    mode: 'onTouched',
    shouldFocusError: false
  })

  const [isSubmitted, setIsSubmitted] = useState(false)

  const onSubmit = (formData) => {
    console.log(formData)
    setIsSubmitted(true)
  }

  // const onSubmit = async (formData) => {
  //   try {
  //     const apiUrl = 'https://your-backend-api.com/contact'

  //     const response = await axios.post(apiUrl, formData)

  //     if (response.status === 200) {
  //       setIsSubmitted(true)
  //     } else {
  //       console.error('Failed to send message:', response.status)
  //     }
  //   } catch (error) {
  //     console.error('Error:', error)
  //   }
  // }

  const handleDoneClick = () => {
    setIsSubmitted(false)
    methods.reset()
  }

  return (
    <div className={S.main}>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)} className={isSubmitted ? S.hideForm : ''}>
          <div className={S.inputs}>
            {/* 名稱 */}
            <div className={S.input}>
              <span>Name</span>
              <FormField name="name" />
            </div>
            {/* 信箱 */}
            <div className={S.input}>
              <span>Email</span>
              <FormField name="email" type="email" />
            </div>
            {/* 電話 */}
            <div className={S.input}>
              <span>Phone</span>
              <CodeDrop />
            </div>
          </div>
          {/* 訊息 */}
          <div className={S.message}>
            <span>How can we help?</span>
            <FormField name="message" type="textarea" placeholder="Write your question" />
          </div>
          {/* 同意 */}
          <div className={S.agreements}>
            <CheckBox />
            <p>
              I consent to the use of my data and have read the <Link>Terms and conditions</Link>,{' '}
              <Link>Customer data processing procedure</Link> and{' '}
              <Link>Complaints resolution procedure</Link>
            </p>
          </div>
          {/* 提交按鈕 */}
          <button className={S.submit} type="submit">
            Send
          </button>
        </form>
      </FormProvider>
      {/* 表單發送成功畫面 */}
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
