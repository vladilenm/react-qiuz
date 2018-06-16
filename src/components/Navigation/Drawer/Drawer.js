import React from 'react'
import {NavLink} from 'react-router-dom'
import Aux from '../../../hoc/Auxiliary'
import classes from './Drawer.css'
import Backdrop from '../../ui/Backdrop/Backdrop'

const links = [
  {to: '/', exact: true, name: 'Quiz List'},
  {to: '/auth', exact: false, name: 'Auth'},
  {to: '/quiz-creator', exact: false, name: 'Quiz Creator'}
]

export default class Drawer extends React.Component {


  handleClick = () => {
    this.props.onClose()
  }

  renderLinks = () => {
    return links.map((link, index) => {
      return (
        <li key={link.to + index}>
          <NavLink
            to={link.to}
            exact={link.exact}
            activeClassName={classes.active}
            onClick={this.handleClick}
          >
            {link.name}
          </NavLink>
        </li>
      )
    })
  }


  render() {
    return (
      <Aux>
        <nav
          className={[classes.Drawer, this.props.open ? '' : classes.close].join(' ')}
        >
          <ul>
            {this.renderLinks()}
          </ul>
        </nav>
        {this.props.open ? <Backdrop onClick={this.props.onClose}/> : null}
      </Aux>
    )
  }
}