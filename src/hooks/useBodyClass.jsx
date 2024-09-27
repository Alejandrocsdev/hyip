import { useEffect } from 'react'

// 主體樣式
function useBodyClass(className) {
  useEffect(() => {
    if (className) {
      document.body.classList.add(className)
    }

    return () => {
      if (className) {
        document.body.classList.remove(className)
      }
    }
  }, [className])
}

export default useBodyClass
