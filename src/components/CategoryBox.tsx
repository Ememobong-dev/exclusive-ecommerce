import React, { ReactNode } from 'react'

const CategoryBox = ({children} : {children : ReactNode}) => {
  return (
    <div className='flex border  flex-col w-[250px] h-[180px] justify-center gap-y-3 items-center'>
        {
            children
        }
        
    </div>
  )
}

export default CategoryBox