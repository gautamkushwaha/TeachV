import React from 'react'
import { useSelector } from 'react-redux'

const CheckProfile = () => {

  const { username,isLogged } = useSelector((state)=>state.user);




  // console.log(isLogged);
  console.log(isLogged,username);


  return (

    <>

      <h1>hello {username}</h1>
      <h1>{isLogged}</h1>    
    </>
  )
}

export default CheckProfile