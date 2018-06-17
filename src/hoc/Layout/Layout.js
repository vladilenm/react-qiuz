import React, {Component} from 'react'
import MenuToggle from '../../components/Navigation/MenuToggle/MenuToggle'
import Drawer from '../../components/Navigation/Drawer/Drawer'
import classes from './Layout.css'

export default class Layout extends Component {
  state = {
    menu: false
  }

  toggleMenu = () => {
    this.setState({menu: !this.state.menu})
  }

  closeMenu = () => {
    this.setState({menu: false})
  }

  render() {
    return (
      <div className={classes.Layout}>
        <Drawer
          open={this.state.menu}
          onClose={this.closeMenu}
        />
        <MenuToggle
          onToggle={this.toggleMenu}
          state={this.state.menu}
        />
        <main>
            {this.props.children}
        </main>
      </div>
    )
  }
}