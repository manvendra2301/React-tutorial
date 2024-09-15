import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

const Github = () => {
  const data = useLoaderData()
  // const [data,setData] = useState([])
  // useEffect(()=>{
  //   fetch('https://api.github.com/users/manvendra2301')
  //   .then(response => response.json())
  //   .then(data => {
  //     console.log(data)
  //     setData(data)
  //   })
  // },[])
  return (
    <div className='m-4 text-center bg-gray-500 p-4 text-white text-3xl'>Github followers: {data.followers}
    <img src={data.avatar_url}  alt="Git picture" width={300}/>
    </div>
  )
}

export default Github

export const githubInfoLoader = async () =>{
  const response = await fetch("https://api.github.com/users/manvendra2301")
  return response.json()

}