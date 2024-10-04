// 圖檔 (image)
import usSvg from '../../assets/img/flag/us.svg'
import ruSvg from '../../assets/img/flag/ru.svg'
import eeSvg from '../../assets/img/flag/ee.svg'

// 語言國旗
function LangFlag({ style, type }) {
  let src

  switch (type) {
    case 'us':
      src = usSvg
      break
    case 'ru':
      src = ruSvg
      break
    case 'ee':
      src = eeSvg
      break
  }

  return <img className={style} src={src} />
}

export default LangFlag
