
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'


const Navigation = () => {
    const totalItems = useSelector((state)=> state.cart.totalItems)
    const Navigate=useNavigate()

  return (
    <div className='h-10 bg-black text-white flex justify-between'>
        <h1>Store</h1>
        <h1><span onClick={()=>Navigate("/cart")}>Cart</span> {totalItems}</h1>
    </div>
  )
}

export default Navigation