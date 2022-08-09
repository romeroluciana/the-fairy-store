import { Routes, Route } from 'react-router-dom'

import UserInfo from './components/UserInfo'
import UserOrders from './components/UserOrders'
import Layout from './layout/Layout'
import AboutUs from './pages/aboutUs/AboutUs'
import Checkout from './pages/cart/components/Checkout'
import Detail from './pages/detail/Detail'
import Home from './pages/home/Home'
import PageNotFound from './pages/pageNotFound/PageNotFound'
import Shop from './pages/shop/Shop/Shop'

const App = () => {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="shop" element={<Shop />} />
          <Route path="shop/:id" element={<Detail />} />
          <Route path="aboutUs" element={<AboutUs />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="profile" element={<UserInfo />} />
          <Route path="*" element={<PageNotFound />} />
          <Route path="/orders" element={<UserOrders />} />
        </Routes>
      </Layout>
    </div>
  )
}

export default App
