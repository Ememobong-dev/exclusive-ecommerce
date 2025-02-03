import React from 'react';


const SectionIntroTitle = ({sectionTitle} : {sectionTitle: string}) => {
  return (
    <div className='flex gap-3'>
        <span className=' bg-red-secondary-two border-8 rounded-sm border-red-secondary-two '>
        </span>
        <span className='text-red-secondary-two text-xl '>
            {sectionTitle}
        </span>
        
    </div>
  )
}

export default SectionIntroTitle