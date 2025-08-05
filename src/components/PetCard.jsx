import React from 'react'

const PetCard = ({ name, type, age }) => {
  return (
    <div className='bg-white shadow-md rounded-lg p-6 m-4 text-center max-w-sm mx-auto'>
        <h2 className='text-xl font-semibold text-gray-800'>{name}</h2>
        <p className='text-gray-600'>{type}</p>
        <p className='text-gray-600'>{age}</p>
    </div>
  )
}

export default PetCard