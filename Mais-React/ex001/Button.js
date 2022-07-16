import React from 'react'

import PropTypes from 'prop-types'

const Button = (props) => {
  return (
    <button style={{width:`${props.width}px`,height:`${props.width/2}px`,margin:props.margin}}>
    
    
    
    {props.children}</button>
  )
}

export default Button

Button.defaultProps ={
  width:200,
  margin:'300px'
}

Button.propTypes ={
  width : PropTypes.number,
  margin: PropTypes.number
}

