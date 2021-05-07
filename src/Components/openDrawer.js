import React from 'react'
// import MenuIcon from '@material-ui/icons/Menu';
import {Button} from '@material-ui/core'

export const openDrawer = ( {toggleDrawer, anchor, isOpen}) => {

     return (
          <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
     )
}


