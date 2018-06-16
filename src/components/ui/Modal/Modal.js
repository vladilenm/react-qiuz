import React from 'react'
import classes from './Modal.css'
import Auxiliary from '../../../hoc/Auxiliary'
import Backdrop from '../Backdrop/Backdrop'

export default props => {
  const cls = [
    classes.Modal,
    props.open ? classes.open : ''
  ]
  return (
    <Auxiliary>
      <div className={cls.join(' ')}>
        {props.children}
      </div>
      {
        props.open
          ? <Backdrop
              onClick={props.onClose}
            />
          : null
      }

    </Auxiliary>
  )
}