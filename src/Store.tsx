import React from 'react'
import { useParams, useSearchParams } from 'react-router-dom'

export default function Store() {
  // const id = useParams(). id;

  const {id} = useParams();

  const[searchParams] = useSearchParams();
  return (
    
      <h1>This is Store number: {id} and you're searching for color: {searchParams.get("color")}</h1>
    


    //  on slide 233 (!) mark at the end means you are asserting the object 
    // you do not have to put that if you use  const {id} = useParams();
  )
}
