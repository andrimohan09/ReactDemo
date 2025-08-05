import React from 'react'

const ToggleButton = ({ onToggle }) => {
  return (
    <div className='text-center'>
        <button onClick={onToggle}
        className='bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded shadow-md'>
            Show Other Pet</button>
    </div>
  )
}

export default ToggleButton