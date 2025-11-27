import React, { useState } from 'react'
import SignIn from '../SignIn'
import SignUp from '../SignUp'

const User = () => {
  const [isSignIn, setSignIn] = useState(false)

  return (
    <>
      {isSignIn
        ? <SignIn onClick={() => setSignIn(false)} />
        : <SignUp onClick={() => setSignIn(true)} />}
    </>
  )
}

export default User
