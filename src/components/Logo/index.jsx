// 樣式模組 (css module)
import S from './style.module.css'
// 組件 (component)
import Anchor from '../Anchor'
// 圖檔 (image)
import logoSvg from '../../assets/img/logo/logo.svg'
import logoBlackSvg from '../../assets/img/logo/logo-black.svg'
import logoOriginSvg from '../../assets/img/logo/logo-origin.svg'
import logoBlackOriginSvg from '../../assets/img/logo/logo-black-origin.svg'

// Logo
function Logo({ site, color, onClick }) {
  const isCrypto = site === 'crypto' // 'origin'
  const isWhite = color === 'white' // 'black'

  const cryptoLink = (
    <Anchor int="/" onClick={onClick}>
      <img src={isWhite ? logoSvg : logoBlackSvg} />
      <span>Crypto</span>
    </Anchor>
  )

  const originLink = (
    <Anchor ext="https://moneyexpress.ee/en" onClick={onClick}>
      <img src={isWhite ? logoOriginSvg : logoBlackOriginSvg} />
    </Anchor>
  )

  return <div className={S.logo}>{isCrypto ? cryptoLink : originLink}</div>
}

export default Logo
