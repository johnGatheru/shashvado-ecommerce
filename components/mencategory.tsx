import React from 'react'

const MenCategory = () => {
  return (
    <div>
        <div className="w-full py-2 px-2 font-bold bg-white rounded-md mb-2 flex justify-between items-center">
            <p className='text-orange-500'>Men Category</p>
            <button className='text-xs flex items-center gap-1 hover:cursor-pointer text-orange-500 w-fit'>View All <img src="/items/handright.svg" alt="loading" width={20}/></button>
        </div>
    </div>
  )
}

export default MenCategory