import React from 'react'
import Data from "../ECommerce/data.js"
import Item from "./Item"
import Navigation from './navigation.jsx'

const shop = () => {
  return (
    <>
    <Navigation/>
    <div className='grid grid-cols-4 '>
        {
          Data.map((data,index)=>(
            <Item key={index} product={data}  />
          ))
        }
    </div>
        </>
  )
}

export default shop