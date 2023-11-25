import React from 'react'

const Square = (props) => {
  return (
    <div onClick={props.onClick} className='square' 
    style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        border: "1px solid black",
        height: "100px",
        width: "100%",
        fontSize: "23px"
    }} >
      <p>{props.value}</p>
    </div>
  )
}

export default Square
