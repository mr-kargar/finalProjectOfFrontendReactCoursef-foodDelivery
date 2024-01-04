import React from 'react'

function Alert(props) {
  return (
    <div className={`alert ${props.class}`}>
        {props.message}
        </div>
  )
}

export default Alert