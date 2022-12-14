import React from 'react'

export default function Alert(props) {
  return (
    <div style={{height:'40px'}}>
   { props.alert && <div className="alert alert-danger" role="alert">
    <strong>{props.alert.type}</strong> : {props.alert.msg}
  </div>}
  </div>
  )
}
