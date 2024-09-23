// 模組樣式
import S from './style.module.css'
// 鉤子函式
import { Link } from 'react-router-dom'
import { useState, useRef, useEffect } from 'react'
// 圖檔
import form_bg_webp from '../../assets/img/webp/form-bg.webp'
import usdt_svg from '../../assets/img/element/usdt.svg'

// 計算機組件
function Calculator() {
  const [activePlan, setActivePlan] = useState('basic')
  const [inputValue, setInputValue] = useState('100.00')
  const inputRef = useRef(null)

  const togglePlan = (plan) => {
    setActivePlan(plan)
    setInputValue(plan === 'basic' ? '100.00' : '1 000.00')
  }

  // 每日利潤百分比
  const dailyProfitRate = activePlan === 'basic' ? 0.005 : 0.01
  // 最大值
  const maxValues = { basic: 900, elite: 100000 }
  // 最小值
  const minValues = { basic: 100, elite: 1000 }

  // 將值轉換為浮點數，移除千位符和空格
  const parseValue = (value) => parseFloat(value.replace(/,/g, '').replace(/\s/g, ''))

  // 將輸入值四捨五入到最接近的100的倍數
  const rounding = (value) => {
    const num = parseValue(value)

    if (isNaN(num)) {
      return activePlan === 'basic' ? '100.00' : '1 000.00'
    } else {
      return Math.round(num / 100) * 100
    }
  }

  // 自定義格式化函數
  const formatNumber = (value, symbol) => {
    const parts = value.split('.')
    const integerPart = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, symbol)
    return `${integerPart}.00`
  }

  // 計算總利潤並格式化
  const totalProfit = () => {
    const rawProfit = parseValue(inputValue) * dailyProfitRate * 400 || 0
    return formatNumber(rawProfit.toFixed(2), ',')
  }

  // 保持在最小和最大值之間
  const clampValue = (value) => {
    const num = parseValue(value)
    return Math.min(Math.max(num, minValues[activePlan]), maxValues[activePlan])
  }

  const handleBlur = () => {
    const clampedValue = clampValue(inputValue)
    const roundedValue = rounding(clampedValue.toString())
    setInputValue(formatNumber(roundedValue.toString(), ' '))
  }

  const handleChange = (e) => {
    const value = e.target.value.replace(/[^0-9.]/g, '')
    setInputValue(value)
  }

  return (
    <>
      <div className={S.container} style={{ backgroundImage: `url(${form_bg_webp})` }}>
        {/* 標題 */}
        <div className={S.title}>
          <div
            className={`${activePlan === 'basic' ? S.active : ''}`}
            onClick={() => togglePlan('basic')}
          >
            Basic
          </div>
          <div
            className={`${activePlan === 'elite' ? S.active : ''}`}
            onClick={() => togglePlan('elite')}
          >
            Elite
          </div>
        </div>
        {/* 輸入欄位 */}
        <div className={S.converter}>
          <div className={S.label}>Amount</div>
          <div className={S.main}>
            <div className={S.unit}>
              <img src={usdt_svg} />
              <span>USDT</span>
            </div>
            <label htmlFor="input">
              <input
                id="input"
                type="text"
                value={inputValue}
                onChange={handleChange}
                onBlur={handleBlur}
                ref={inputRef}
                maxLength="10"
              />
            </label>
          </div>
        </div>
        {/* 計算結果 */}
        <div className={S.result}>
          <p>
            <span>Daily Profit (%):</span>
            <span>{activePlan === 'basic' ? '0.5%' : '1.0%'}</span>
          </p>
          <p>
            <span>Total Profit (USDT):</span>
            <span>{totalProfit()} USDT</span>
          </p>
        </div>
        {/* 註冊 */}
        <Link className={S.signUp} to="sign-up">
          Sign Up
        </Link>
      </div>
    </>
  )
}

export default Calculator
