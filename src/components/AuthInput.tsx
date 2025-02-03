import React from 'react'

const AuthInput = ({placeholder} : {placeholder: string;}) => {
  return (
    <div>
       <input type="text" className='border-b-2 py-3   focus:outline-none outline-none' placeholder={placeholder} />
        
    </div>
  )
}

export default AuthInput