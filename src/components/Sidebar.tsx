import React from 'react'

const Sidebar = () => {
  return (
    <div className={ ` bg-white md:w-1/2 lg:w-[30%] text-black py-10 flex flex-col gap-5 border-r-2 ` }>
        <span> Woman’s Fashion </span>
        <span> Men’s Fashion </span>
        <span> Electronics </span>
        <span> Home & Lifestyle </span>
        <span> Medicine </span>
        <span> Sports & Outdoor </span>
        <span> Baby’s & Toys </span>
        <span> Groceries & Pets </span>
        <span> Health & Beauty </span>
        
    </div>
  )
}

export default Sidebar