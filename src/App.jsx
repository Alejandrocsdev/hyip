// 樣式
import './global.css'
import './fonts.css'
// 鉤子函式
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// 佈局組件
import Layout from './Layout'
// 導向置頂組件
import ScrollToTop from './components/ScrollToTop'
// 頁面
import Home from './pages/Home'
// import SignIn from './pages/SignIn'
// import SignUp from './pages/SignUp'
import About from './pages/About'
import Contact from './pages/Contact'
import PrivacyPolicy from './pages/PrivacyPolicy'
import CustomerData from './pages/CustomerData'
import Complaints from './pages/Complaints'

import FormTest from './pages/FormTest'

import NotFound from './pages/NotFound'

function App() {
  return (
    <>
      <BrowserRouter basename="/">

        {/* 導向置頂 */}
        <ScrollToTop />

        <Routes>

          {/* 佈局 */}
          <Route path="/" element={<Layout />}>

            <Route index element={<Home />} />
            {/* <Route path="/sign-in" element={<Navigate to="https://client.newlean14.store/sign-in" replace />} /> */}
            {/* <Route path="/sign-up" element={<Navigate to="https://client.newlean14.store/sign-up" replace />} /> */}
            <Route path="/about-us" element={<About />} />
            <Route path="/contacts" element={<Contact />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/customer-data-processing" element={<CustomerData />} />
            <Route path="/complaints" element={<Complaints />} />

            <Route path="/form-test" element={<FormTest />} />
            
            {/* 錯誤路由 */}
            <Route path="*" element={<NotFound />} />

          </Route>

        </Routes>

      </BrowserRouter>
    </>
  )
}

export default App
