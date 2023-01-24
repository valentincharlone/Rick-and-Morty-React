import React from 'react'

const Character = ({character}) => {
  return (
    <div key={character.id} className="text-center p-5">
        <h3>{character.name}</h3>
        <img className='img-fluid rounded-pill' src={character.image}></img>
        
    </div>
  )
}

export default Character