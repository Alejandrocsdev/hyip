// 模組樣式
import S from './style.module.css'
// 鉤子函式
import { Link } from 'react-router-dom'
// 圖檔
import usSvg from '../../../../assets/img/flag/us.svg'
// 組件
import AngleDownSvg from '../../../../components/Svg/AngleDownSvg'

// 首頁
function CodeDrop() {
  return (
    <main className={S.main}>
      <div className={S.codeContainer}>
        <div className={S.selected}>
          <img className={S.flag} src={usSvg} />
          <div className={S.code}>+886</div>
          <AngleDownSvg className={S.arrow} stroke="#3e345c" />
        </div>
        <ul></ul>
      </div>
      <input type="text" />
    </main>
  )
}

export default CodeDrop
