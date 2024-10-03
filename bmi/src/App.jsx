import './App.css'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Home from './pages/home/Home'
import Order from './pages/order/Order'
import Cart from './pages/cart/Cart'
import MyState from './contexts/MyState'
import Login from './pages/Registration/Login'
import Signup from './pages/Registration/Signup'
import ProductInfo from './pages/Productinfo/ProductInfo'
import Modal from './components/modal/Modal'
import Dashboard from './pages/admin/dashboard/Dashboard'
import AddProduct from './pages/admin/page/AddProduct'
import UpdateProduct from './pages/admin/page/UpdateProduct'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  
  return (
    <>
    <MyState>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/order' element={<Order/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path="/order" element={
            <ProtectedRoutes>
              <Order />
            </ProtectedRoutes>
          } />
           <Route path="/dashboard" element={
            <ProtectedRoutesForAdmin><Dashboard /></ProtectedRoutesForAdmin>
          } />
           <Route path="/addproduct" element={
            <ProtectedRoutesForAdmin><AddProduct /></ProtectedRoutesForAdmin>} />
          <Route path="/updateproduct" element={
            <ProtectedRoutesForAdmin><UpdateProduct /></ProtectedRoutesForAdmin>} />
          <Route path='/login' element={<Login/>}/>
          <Route path='/Signup' element={<Signup/>}/>
          <Route path="/productinfo/:id" element={<ProductInfo />} />
        </Routes>
        <ToastContainer/>
      </Router>     
      </MyState>
    </>
  )
}

export default App

export const ProtectedRoutes = ({ children }) => {
  if (localStorage.getItem('user')) {
    return children
  }
  else {
    return <Navigate to='/login' />
  }
}

export const ProtectedRoutesForAdmin = ({children}) => {
  const admin = JSON.parse(localStorage.getItem('user'))
  console.log(admin.user.email)
  if (admin.user.email === 'knupadhyay784@gmail.com') {
    return children
  }
  else {
    return <Navigate to='/login' />
  }
}

