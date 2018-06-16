import React from 'react'
import classes from './Button.css'

export default props => {
  const cls = [
    classes.Button,
    props.type === 'success' ? classes.success : classes.error
  ]
  return (
    <button className={cls.join(' ')} onClick={props.onClick}>
      {props.children}
    </button>
  )
}