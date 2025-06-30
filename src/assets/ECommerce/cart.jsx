import React from 'react'
import Navigation from './navigation'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { removeFromCart } from '../../ProductSlice'


const cart = () => {
    const cartItem=useSelector((state)=>state.cart.products)
    const dispatch=useDispatch()
  return (
    <div>
        <Navigation/>
        <div>
            <div>
                {
                    cartItem.length===0 ?(
                        <h1>cart is empty</h1>
                    ):(
                        
                        <table className='w-full border border-black'>
                            <thead>
                                <th>Id</th>
                                <th>Name</th>
                                <th>Picture</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Remove</th>
                            </thead>
                            <tbody>
                              {
                                cartItem.map((item)=>(
                                    <tr className='text-center'>
                                        <td>{item.id}</td>
                                        <td>{item.Specification}</td>
                                        <td><img src={item.picture} className='h-32 w-32 p-5'/></td>
                                        <td>{item.Price}</td>
                                        <td>{item.quantity}</td>
                                        <td><button className='bg-red-300 rounded-3xl p-3' onClick={()=>dispatch(removeFromCart(item.id ))}>Remove Item</button></td>
                                        
                                    </tr>
                                    
                                ))
                              }  
                            </tbody>
                        </table>
                    )
                }
            </div>
        </div>
    </div>
  )
}

export default cart