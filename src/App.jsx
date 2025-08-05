import React, { useState } from 'react';
import Header from './components/Header'
import PetCard from './components/PetCard'
import ToggleButton from './components/ToggleButton'
import Footer from './components/Footer'

function App() {
  const pets = [
    { name: 'Buddy', type: 'Dog', age: 2 },
    { name: 'Lucy', type: 'cat', age: 1 },
  ];

  const [currentPet, setCurrentPet] = useState(0);

  const togglePet = () => {
    setCurrentPet((prev) => (prev === 0 ? 1:0));
  } 


  return(
    <div className='min-h-screen bg-slate-100 flex flex-col justify-between'>
      <Header />

    <PetCard
      name={pets[currentPet].name}
      type={pets[currentPet].type}
      age={pets[currentPet].age}
    />

    <ToggleButton onToggle = {togglePet} />

    <Footer />
    </div>
  )
}

export default App