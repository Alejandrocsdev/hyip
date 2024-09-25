// import { useEffect } from 'react'

// // 自訂鉤子：監聽點擊外部事件
// function useClickOutside(ref, handler) {
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (ref.current && !ref.current.contains(event.target)) {
//         handler()
//       }
//     }

//     document.addEventListener('mousedown', handleClickOutside)

//     return () => {
//       document.removeEventListener('mousedown', handleClickOutside)
//     }
//   }, [ref, handler])
// }

// export default useClickOutside

import { useEffect } from 'react'

// 自訂鉤子：監聽點擊外部事件
function useClickOutside(ref, handler, ignoreRefs = []) {
  useEffect(() => {
    const handleClickOutside = (event) => {
      // 檢查是否點擊在忽略的元素上
      const isIgnored = ignoreRefs.some((ignoreRef) => ignoreRef.current && ignoreRef.current.contains(event.target));
      if (ref.current && !ref.current.contains(event.target) && !isIgnored) {
        handler();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref, handler, ignoreRefs]);
}

export default useClickOutside;