import React from 'react'
import classes from './Backdrop.css'

export default props => (
  <div className={classes.Backdrop} onClick={props.onClick} />
)