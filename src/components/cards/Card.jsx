import "./Card.css"

import React from 'react'

const Card = ({id,name,age,image,email}) => {

  return (
    <div className="card_style">
    
   <img src={image} alt="" />
   <div>{name}</div>
   <div>{age}</div>
   <div>{email}</div>
  
    </div>
  )
}

export default Card