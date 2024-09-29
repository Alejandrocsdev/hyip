// 樣式模組 (css module)
import S from './style.module.css'
// 函式庫 (library)
import { Link } from 'react-router-dom'
// 圖檔 (image)
import logoSvg from '../../assets/img/logo/logo.svg'
import logoBlackSvg from '../../assets/img/logo/logo-black.svg'
import logoOriginSvg from '../../assets/img/logo/logo-origin.svg'
import logoBlackOriginSvg from '../../assets/img/logo/logo-black-origin.svg'

// Logo
function Logo({ type, color }) {
  const isCrypto = type === 'crypto' // 'origin'
  const isWhite = color === 'white' // 'black'

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
    <div className={S.logo}>
      <Link to={to} target={target}>
        <img src={src} />
        {isCrypto && <span>Crypto</span>}
      </Link>
    </div>
    
  )
}

export default Logo
