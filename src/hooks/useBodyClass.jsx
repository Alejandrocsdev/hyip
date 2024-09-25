import { useEffect } from 'react'

export default function useBodyClass(className) {
  useEffect(() => {
    if (className) { // Check if className is not empty
      document.body.classList.add(className)
    }

    return () => {
      if (className) { // Check if className is not empty for cleanup
        document.body.classList.remove(className)
      }
    }
  }, [className])
}