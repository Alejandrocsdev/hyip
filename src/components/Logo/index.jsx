// 模組樣式
import S from './style.module.css'
// 鉤子函式
import { Link } from 'react-router-dom'
// 圖檔
import logoSvg from '../../assets/img/logo/logo.svg'
import logoBlackSvg from '../../assets/img/logo/logo-black.svg'
import logoOriginSvg from '../../assets/img/logo/logo-origin.svg'
import logoBlackOriginSvg from '../../assets/img/logo/logo-black-origin.svg'

// 頁首組件
function Logo({ type, color }) {
  const isCrypto = type === 'crypto'
  const isWhite = color === 'white'

  const getSrc = () => {
    if (isCrypto) {
      return isWhite ? logoSvg : logoBlackSvg
    } else {
      return isWhite ? logoOriginSvg : logoBlackOriginSvg
    }
  }

  const to = isCrypto ? '/' : 'https://moneyexpress.ee/en'
  const target = isCrypto ? '_self' : '_blank'
  const src = getSrc()

  return (
    <div className={S.container}>
      <Link to={to} target={target}>
        <img src={src} />
        {isCrypto && <span>Crypto</span>}
      </Link>
    </div>
    
  )
}

export default Logo
