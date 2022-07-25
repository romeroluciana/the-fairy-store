import { Routes, Route } from 'react-router-dom'

import Layout from './layout/Layout'
import AboutUs from './pages/aboutUs/AboutUs'
import Cart from './pages/cart/Cart'
import Detail from './pages/detail/Detail'
import Home from './pages/home/Home'
import Shop from './pages/shop/Shop'

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="shop/:id" element={<Detail />} />
        <Route path="aboutUs" element={<AboutUs />} />
        <Route path="cart" element={<Cart />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </Layout>
  )
}

export default App
