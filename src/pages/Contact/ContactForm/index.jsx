// 樣式模組 (css module)
import S from './style.module.css'
// 函式庫 (library)
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useForm, FormProvider } from 'react-hook-form'
import axios from 'axios'
// 圖檔 (image)
import greenCheckSvg from '../../../assets/img/icon/green-check.svg'
// 組件 (component)
import Anchor from '../../../components/Anchor'
import CheckBox from './CheckBox'
import CodeDrop from './CodeDrop'
import FormField from '../../../components/FormField'

// 首頁
function ContactForm() {
  // 語言
  const { t } = useTranslation()

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
              <span>{t('name')}</span>
              <FormField name="name" />
            </div>
            {/* 信箱 */}
            <div className={S.input}>
              <span>{t('email')}</span>
              <FormField name="email" type="email" />
            </div>
            {/* 電話 */}
            <div className={S.input}>
              <span>{t('phone')}</span>
              <CodeDrop />
            </div>
          </div>
          {/* 訊息 */}
          <div className={S.message}>
            <span>{t('messageTitle')}</span>
            <FormField name="message" type="textarea" placeholder={t('messagePlaceholder')} />
          </div>
          {/* 同意 */}
          <div className={S.agreements}>
            <CheckBox />
            <p>
              {t('messageAggreement')} <Anchor int="/privacy-policy">{t('privacyPolicy')}</Anchor>,{' '}
              <Anchor int="/customer-data-processing">{t('customerDataProcessing')}</Anchor>{' '}
              {t('and')} <Anchor int="/complaints">{t('complaints')}</Anchor>
            </p>
          </div>
          {/* 提交按鈕 */}
          <button className={S.submit} type="submit">
            {t('send')}
          </button>
        </form>
      </FormProvider>
      {/* 表單發送成功畫面 */}
      <div className={`${S.thanks} ${isSubmitted ? S.showThanks : ''}`}>
        <img src={greenCheckSvg} />
        <p>
          <b>{t('messageSent')}</b>
        </p>
        <button type="button" onClick={handleDoneClick}>
          {t('done')}
        </button>
      </div>
    </div>
  )
}

export default ContactForm
