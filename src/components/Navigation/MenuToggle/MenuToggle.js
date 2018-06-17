import React from 'react'
import classes from './MenuToggle.css'

export default props => {
  const cls = [
    classes.MenuToggle,
    'fa',
    props.state ? 'fa-times' : 'fa-bars',
    props.state ? classes.open : ''
  ]

  return (
    <i
      className={cls.join(' ')}
      onClick={props.onToggle}
    />
  )
}