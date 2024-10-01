// 函式庫 (library)
import { Outlet } from 'react-router-dom'
// 組件 (component)
import Header from './Header'
import Footer from './Footer'
// 導向置頂組件
import ScrollToTop from '../components/ScrollToTop'
// 自訂函式 (custom function)
import { ShowListProvider } from '../context/useShowList'

// 佈局樣式組件
function Layout() {
  return (
    <>
      {/* 隱藏頁首 */}
      <ShowListProvider>

        {/* 導向置頂 */}
        <ScrollToTop />

        <Header />
        <Outlet />
        <Footer />
        
      </ShowListProvider>
    </>
  )
}

export default Layout
