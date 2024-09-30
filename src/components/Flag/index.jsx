// 函式庫 (library)
import CountryFlag from 'react-country-flag'

// 單一國旗
function Flag({ countryCode }) {
  return (
    <CountryFlag
      countryCode={countryCode.toUpperCase()}
      svg
      style={{
        width: '20px'
      }}
    />
  )
}

export default Flag
