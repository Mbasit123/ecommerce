import React from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from '../../Slice'

const Homepage = () => {
    const user = useSelector(selectUser)
  return (
    <div>
        <h1>homepage</h1>
        <p>{user.username}</p>
    </div>
  )
}

export default Homepage