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

  const handleCheckboxChange = (checked) => {
    setIsChecked(checked)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (isChecked) {
      setIsSubmitted(true)
    }
  }

  return (
    <div className={S.main}>
      <form>
        <div className={S.inputs}>
          <div className={S.input}>
            <span>Name</span>
            <input type="text" />
          </div>
          <div className={S.input}>
            <span>Email</span>
            <input type="text" />
          </div>
          <div className={S.input}>
            <span>Phone</span>
            <CodeDrop />
            {/* <div className={S.phoneContainer}>
              <div className={S.codeContainer}>
                <div className={S.selected}>
                  <div className={S.flag}></div>
                  <div className={S.code}></div>
                  <img className={S.arrow} src="" />
                </div>
                <ul></ul>
              </div>
              <input type="text" />
            </div> */}
          </div>
        </div>
        <div className={S.message}>
          <span>How can we help?</span>
          <textarea name="" id="" placeholder="Write your question"></textarea>
        </div>
        <div className={S.agreements}>
          <CheckBox isChecked={isChecked} onChange={handleCheckboxChange} />
          <p>
            I consent to the use of my data and have read the <Link>Terms and conditions</Link> ,{' '}
            <Link>Customer data processing procedure</Link> and{' '}
            <Link>Complaints resolution procedure</Link>
          </p>
        </div>
        <button className={S.submit} type="button" onClick={handleSubmit}>
          Send
        </button>
      </form>
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
