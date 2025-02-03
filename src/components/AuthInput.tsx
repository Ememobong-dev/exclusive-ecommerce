import React from 'react'

const AuthInput = ({placeholder} : {placeholder: string;}) => {
  return (
    <div>
       <input type="text" className='border-b-2 mb-5 py-3 bg-transparent  w-full  focus:outline-none outline-none' placeholder={placeholder} />
        
    </div>
  )
}

export default AuthInput