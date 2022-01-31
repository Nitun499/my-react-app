import React from 'react'

export default function Alert(props) {
  const capitalze=(word)=>{
    const loword=word.toLowerCase();
    return loword.charAt(0).toUpperCase()+loword.slice(1);
    
  }
  return (
      props.alert &&<div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
      <strong>{capitalze(props.alert.type)}</strong>:{props.alert.msg} 
      <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
  )
}