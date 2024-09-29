// 函式庫 (library)
import { useEffect } from 'react'

// 監聽事件: 點擊外部
function useClickOutside(ref, handler, ignoreRef = null) {
  useEffect(() => {
    const handleClickOutside = (event) => {

      const isIgnored = ignoreRef?.current && ignoreRef.current.contains(event.target)
      
      if (ref.current && !ref.current.contains(event.target) && !isIgnored) {
        handler()
      }
    }

    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [ref, handler, ignoreRef])
}

export default useClickOutside
