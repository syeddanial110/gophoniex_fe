import React from 'react'

const UserData = () => {
    const userData = useSelector((state) => state?.SignInReducer);
  return (
    <div>UserData</div>
  )
}

export default UserData