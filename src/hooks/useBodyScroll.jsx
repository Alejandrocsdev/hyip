// 函式庫 (library)
import { useEffect } from 'react'

// 主體卷軸
function useBodyScroll(boolean) {
  useEffect(() => {
    if (boolean) {
      document.body.classList.add('hideScroll')
    }

    return () => {
      if (boolean) {
        document.body.classList.remove('hideScroll')
      }
    }
  }, [boolean])
}

export default useBodyScroll
