import React from "react";

const Button = (props) =>{
    const {text,type,clickHandler} = props
    return (
      <button className={type} onClick={()=>clickHandler(text)}>
        <span>{text}</span>
      </button>
      
    )
}

export default Button;