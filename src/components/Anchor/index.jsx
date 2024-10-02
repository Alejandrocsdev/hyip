// 函式庫 (library)
import { Link, useParams } from 'react-router-dom'

const isEmail = (str) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(str)
const isPhone = (str) => /^\+\d+$/.test(str)

// 錨點
function Anchor({ int, ext, style, target, onClick, children }) {
  const { lang } = useParams()

  const internalLink = (
    <Link to={`/${lang}${int}`} className={style} target={target || '_self'} onClick={onClick}>
      {children}
    </Link>
  )

  const externalLink = (
    <a
      href={isEmail(ext) ? `mailto:${ext}` : isPhone(ext) ? `tel:${ext}` : ext}
      className={style}
      target={target || (isEmail(ext) || isPhone(ext) ? '_self' : '_blank')}
      onClick={onClick}
    >
      {children}
    </a>
  )

  return <>{int ? internalLink : externalLink}</>
}

export default Anchor
