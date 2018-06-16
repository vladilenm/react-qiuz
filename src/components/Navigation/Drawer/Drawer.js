import React from 'react'
import {NavLink} from 'react-router-dom'
import Aux from '../../../hoc/Auxiliary'
import classes from './Drawer.css'
import Backdrop from '../../ui/Backdrop/Backdrop'

export default props => (
  <Aux>
    <nav
      className={[classes.Drawer, props.open ? '' : classes.close].join(' ')}
    >
      <ul>
        <li><NavLink to={'/'}>Quiz List</NavLink></li>
        <li><NavLink to={'/auth'}>Auth</NavLink></li>
        <li><NavLink to={'/quiz-creator'}>Quiz Creator</NavLink></li>
      </ul>
    </nav>
    {props.open ? <Backdrop onClick={props.onClose}/> : null}
  </Aux>
)