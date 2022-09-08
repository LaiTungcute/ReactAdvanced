import React from 'react'

const Tung = ({title, age, color}) => {
  return (
    <div>
        <h1 style={{'color': `${color}`}}>{title}</h1>
        <h2>{age}</h2>
    </div>
  )
}

export default Tung