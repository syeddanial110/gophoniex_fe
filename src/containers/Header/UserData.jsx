import React from 'react'

const UserData = () => {
    const userData = useSelector((state) => state?.SignInReducer);
  console.log("userData", userData);
  return (
    <div>UserData</div>
  )
}

export default UserData