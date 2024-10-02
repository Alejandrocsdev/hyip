// 函式庫 (library)
import { Link, useParams } from 'react-router-dom'

// 錨點
function Anchor({ int, ext, style, email, phone, target, onClick, children }) {
  const { lang } = useParams()

  const internalLink = (
    <Link to={`/${lang}${int}`} className={style} target={target || '_self'} onClick={onClick}>
      {children}
    </Link>
  )

  const externalLink = (
    <a
      href={email ? `mailto:${ext}` : phone ? `tel:${ext}` : ext}
      className={style}
      target={target || (email || phone ? '_self' : '_blank')}
      onClick={onClick}
    >
      {children}
    </a>
  )

  return <>{int ? internalLink : externalLink}</>
}

export default Anchor
