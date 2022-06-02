import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Home() {
  const Navigate = useNavigate();
  return (
    <div>
      <h1>Welcome Home </h1> 
      <div onClick={()=>{Navigate("/about")}}> go to Home </div>
      {/* slide 231  */}
    </div>

  )
}
