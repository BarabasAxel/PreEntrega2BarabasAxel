import { Outlet } from "react-router-dom"
import Header from "./navbar/Header"
import CartContainer from "../pages/cart/CartContainer"

const Layout = () => {
  return (
    <div>
        <Header />
        <Outlet />
        <CartContainer />
    </div>
  )
}

export default Layout