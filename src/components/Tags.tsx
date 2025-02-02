import React from 'react'

const Tags = ( {text} : {text: string} ) => {
  return (
    <span className='text-white rounded-sm bg-red-secondary-two p-3'>
        {text}
    </span>
  )
}

export default Tags