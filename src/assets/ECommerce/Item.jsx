import { useDispatch } from "react-redux"
import { addToCart } from "../../ProductSlice"
const Item = ({product}) => {
  const dispatch = useDispatch();
    return (
    <div className='h-fit mx-auto p-5 '>
<img src={product.picture}className='h-20'/>
<p>{product.id}</p>
<h1>{product.specification}</h1>
<h1>{product.price}</h1>
<button className='border rounded-2xl bg-red-400' onClick={()=>dispatch(addToCart(product))}>Add to Cart</button>
    </div>
  )
}

export default Item