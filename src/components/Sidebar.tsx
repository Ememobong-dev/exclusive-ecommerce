import React from 'react'

const Sidebar = () => {
  return (
    <div className={ ` bg-secondaryBlue md:w-1/2 lg:w-[30%] text-black pt-10 flex flex-col gap-5 border-r-2 ` }>
        <span className='cursor-pointer hover:text-red-secondary-two'> Woman’s Fashion </span>
        <span className='cursor-pointer hover:text-red-secondary-two'> Men’s Fashion </span>
        <span className='cursor-pointer hover:text-red-secondary-two'> Electronics </span>
        <span className='cursor-pointer hover:text-red-secondary-two'> Home & Lifestyle </span>
        <span className='cursor-pointer hover:text-red-secondary-two'> Medicine </span>
        <span className='cursor-pointer hover:text-red-secondary-two'> Sports & Outdoor </span>
        <span className='cursor-pointer hover:text-red-secondary-two'> Baby’s & Toys </span>
        <span className='cursor-pointer hover:text-red-secondary-two'> Groceries & Pets </span>
        <span className='cursor-pointer hover:text-red-secondary-two'> Health & Beauty </span>
        
    </div>
  )
}

export default Sidebar