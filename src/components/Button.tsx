import React from 'react'

const Button = ({text, classProps} : {text: string, classProps? : string}) => {
  return (
    <button className={`flex py-3 px-8 justify-center rounded-sm bg-red-secondary-two text-white border ${classProps}`}>
        {text}
    </button>
  )
}

export default Button