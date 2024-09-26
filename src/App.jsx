// 樣式
import './global.css'
import './fonts.css'
// 鉤子函式
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// 佈局組件
import Layout from './Layout'
// 對齊頂部組件
import ScrollToTop from './components/ScrollToTop'
// 頁面
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'

function App() {
  return (
    <>
      <BrowserRouter basename="/">
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/about-us" element={<About />} />
            <Route path="/contacts" element={<Contact />} />
            {/* 錯誤路由 */}
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
