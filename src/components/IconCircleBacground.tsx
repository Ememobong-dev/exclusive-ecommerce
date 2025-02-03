import Image from 'next/image'
import React from 'react'

const IconCircleBacground = ({icon} : {icon: string}) => {
  return (
    <span className='flex justify-center items-center bg-red-secondary-two rounded-full p-3 w-12 h-12'>
        <Image src={icon} alt='icon' />
        
    </span>
  )
}

export default IconCircleBacground