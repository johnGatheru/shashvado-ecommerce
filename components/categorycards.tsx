import React, { ReactNode } from 'react'
interface childProps{
    children:ReactNode
}

const Categorycards:React.FC<childProps> = ({children}) => {
  return (
    <div className='cards-category max-w-xs px-4 py-2'>{
        // taking homr 
        }
        {children}
    </div>
  )
}

export default Categorycards