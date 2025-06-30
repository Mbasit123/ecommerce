import { BrowserRouter,Routes,Route } from "react-router-dom"
import Login from "./assets/Components/Login"
import Homepage from "./assets/Components/Homepage"
import store from "./App/Store"
import { Provider } from "react-redux"
import Shop from "./assets/ECommerce/shop"
import Cart from "./assets/ECommerce/cart"
function App() {
  

  return (
    <>
    <Provider store={store}>
    <BrowserRouter>
    <Routes>
      <Route path="login" element={<Login/>}/>
      <Route path="/home" element={<Homepage/>}/>
      <Route path="/shop" element={<Shop/>}/>
      <Route path="/cart" element={<Cart/>}/>
    </Routes>
    </BrowserRouter>
</Provider>
    </>
  )
}

export default App
