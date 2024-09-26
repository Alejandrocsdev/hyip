// 模組樣式
import S from './style.module.css'
// json檔
import flagsData from './flags.json'

// 首頁
function Flag({ countryCode }) {
  const flag = flagsData.flags.find((flag) => flag.countryCode === countryCode)

  let position
  let height

  if (flag) {
    position = flag.position
    height = flag.height
  } else {
    position = '-3073'
    height = '10'
  }

  return (
    <div
      className={S.flag}
      style={{
        height: `${height}px`,
        backgroundPosition: `${position}px 0`
      }}
    ></div>
  )
}

export default Flag
