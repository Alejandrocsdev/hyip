// 函式庫 (library)
import { Outlet } from 'react-router-dom'
// 組件 (component)
import Header from './Header'
import Footer from './Footer'
// 自訂函式 (custom function)
import { ShowListProvider } from '../context/useShowList'

// 佈局樣式組件
function Layout() {
  return (
    <ShowListProvider>
      <Header />
      <Outlet />
      <Footer />
    </ShowListProvider>
  )
}

export default Layout
