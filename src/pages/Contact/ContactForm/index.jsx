// 樣式模組 (css module)
import S from './style.module.css'
// 函式庫 (library)
import { Link } from 'react-router-dom'
// import { useState } from 'react'
import { useForm, FormProvider } from 'react-hook-form'
// 圖檔 (image)
import greenCheckSvg from '../../../assets/img/icon/green-check.svg'
// 組件 (component)
import CheckBox from './CheckBox'
import CodeDrop from './CodeDrop'
import FormField from '../../../components/FormField'

// 首頁
function ContactForm() {
  // const { control, handleSubmit } = useForm({
  //   mode: 'onTouched',
  //   shouldFocusError: false
  // })

  const methods = useForm({
    mode: 'onTouched',
    shouldFocusError: false
  })

  const onSubmit = (formData) => {
    console.log('Form submitted', formData)
  }

  return (
    <div className={S.main}>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
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
            <FormField name="message" isTextarea={true} placeholder="Write your question" />
          </div>
          <div className={S.agreements}>
            <CheckBox />
            <p>
              I consent to the use of my data and have read the <Link>Terms and conditions</Link>,{' '}
              <Link>Customer data processing procedure</Link> and{' '}
              <Link>Complaints resolution procedure</Link>
            </p>
          </div>
          <button className={S.submit} type="submit">
            Send
          </button>
        </form>
      </FormProvider>
      <div className={S.thanks}>
        <img src={greenCheckSvg} />
        <p>
          <b>Thank you! Your message has been sent.</b>
        </p>
        <button type="button">Done</button>
      </div>
    </div>
  )
}

export default ContactForm
