// 樣式模組 (css module)
import S from './style.module.css'
// 函式庫 (library)
import { useTranslation } from 'react-i18next'
// 組件 (component)
import Anchor from '../../../../components/Anchor'
import { useState, useRef, useMemo } from 'react'
// 圖檔 (image)
import usdtSvg from '../../../../assets/img/element/usdt.svg'

const plans = {
  basic: { min: 100, max: 900, input: '100.00', ratio: '0.5' },
  elite: { min: 1000, max: 100000, input: '1 000.00', ratio: '1.0' }
}

// 計算機組件
function Calculator() {
  // 語言
  const { t } = useTranslation()

  // 狀態變數
  const [activePlan, setActivePlan] = useState('basic')
  const [inputValue, setInputValue] = useState(plans[activePlan].input)
  const [ratioValue, setRatioValue] = useState(plans[activePlan].ratio)
  const inputRef = useRef(null)

  // 切換計劃
  const togglePlan = (plan) => {
    setActivePlan(plan)
    setInputValue(plans[plan].input)
    setRatioValue(plans[plan].ratio)
  }

  // 投資區間
  const clampedValue = (value) => {
    // 字串 => 數字
    const num = Number(value)

    return Math.min(Math.max(num, plans[activePlan].min), plans[activePlan].max)
  }

  // 四捨五入(100的倍數)
  const roundedValue = (value) => {
    const rounded = Math.round(value / 100) * 100

    // 數字 => 字串
    return String(rounded)
  }

  // 數字格式化(逗號/空白)
  const formattedValue = (value, symbol) => {
    // 整數
    const [integer] = value.split('.')

    return `${integer.replace(/\B(?=(\d{3})+(?!\d))/g, symbol)}.00`
  }

  // 總體收益
  const totalProfit = useMemo(() => {
    // 字串 => 數字 (移除空白)
    const num = Number(inputValue.replace(' ', ''))
    // 每日收益百分比
    const dailyRatio = Number(ratioValue) / 100
    // 總體收益
    const total = num * dailyRatio * 400
    // 避免除不盡
    const result = total.toFixed(2)

    return formattedValue(String(result), ',')
  }, [inputValue, ratioValue])

  // 處理變化更新
  const handleChange = (e) => {
    // 移除 '數字'
    let value = e.target.value.replace(/[^0-9]/g, '')
    // 移除 '前導0'
    value = value.replace(/^0+(?!$)/, '')

    setInputValue(value)
  }

  // 處理點擊焦點
  const handleFocus = () => {
    // 移除 '.00'
    let value = inputValue.replace('.00', '')
    // 移除 '空白'
    value = value.replace(/\s/g, '')

    setInputValue(value)
  }

  // 處理焦點更新
  const handleBlur = () => {
    const clamped = clampedValue(inputValue)
    const rounded = roundedValue(clamped)
    const formatted = formattedValue(rounded, ' ')

    setInputValue(formatted)
  }

  return (
    <div className={S.container}>
      {/* 投資計劃 */}
      <div className={S.plans}>
        <div
          className={`${activePlan === 'basic' ? S.active : ''}`}
          onClick={() => togglePlan('basic')}
        >
          {t('basic')}
        </div>
        <div
          className={`${activePlan === 'elite' ? S.active : ''}`}
          onClick={() => togglePlan('elite')}
        >
          {t('elite')}
        </div>
      </div>
      {/* 收益轉換 */}
      <div className={S.converter}>
        <div className={S.label}>{t('amount')} (X100)</div>
        <div className={S.main}>
          <div className={S.unit}>
            <img src={usdtSvg} />
            <span>USDT</span>
          </div>
          <label htmlFor="input">
            <input
              id="input"
              type="text"
              maxLength="10"
              value={inputValue}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              ref={inputRef}
            />
          </label>
        </div>
      </div>
      {/* 計算結果 */}
      <div className={S.result}>
        <p>
          <span>{t('dailyProfit')} (%):</span>
          <span>{ratioValue}%</span>
        </p>
        <p>
          <span>{t('dailyProfit')} (USDT):</span>
          <span>{totalProfit} USDT</span>
        </p>
      </div>
      {/* 註冊按鈕 */}
      <Anchor style={S.signUp} ext="https://client.newlean14.store/sign-up">
        {t('signUp')}
      </Anchor>
    </div>
  )
}

export default Calculator
