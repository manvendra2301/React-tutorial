import React from 'react'
import { useParams } from 'react-router-dom'

export const User = () => {
  const {userid}= useParams()
  return (
    <div className='bg-gray-500 p-4 text-white text-3xl text-center '>User: {userid}</div>
  )
}
