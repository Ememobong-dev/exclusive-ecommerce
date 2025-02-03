import React, { ReactNode } from 'react'

const Button = ({children, classProps} : {children: ReactNode, classProps? : string}) => {
  return (
    <button className={`flex hover:opacity-65 py-3 px-8  justify-center rounded-sm bg-red-secondary-two text-white border border-color300/30 ${classProps}`}>
        {children}
    </button>
  )
}

export default Button