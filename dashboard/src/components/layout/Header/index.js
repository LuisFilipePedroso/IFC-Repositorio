// React & Redux
import React, { useState } from 'react'

// Styles
// import { SidebarToggler } from './style'
import { Button, Collapse, DropdownItem, DropdownMenu, DropdownToggle, Nav, Navbar, NavbarToggler, NavLink, NavItem, UncontrolledDropdown } from 'reactstrap'

// Header
const Header = () => {
  // Local state
  const [open, isOpen] = useState(false)

  // Toggle mobile menu
  const toggle = () => isOpen(!open)

  return (
    <Navbar color="primary" className="p-3" light expand="md">
      <Button color=" white">Menu</Button>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={open} navbar>
        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink href="/">Components</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/">GitHub</NavLink>
          </NavItem>
          <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav caret>Options</DropdownToggle>
            <DropdownMenu right>
              <DropdownItem>Option 1</DropdownItem>
              <DropdownItem>Option 2</DropdownItem>
              <DropdownItem divider />
              <DropdownItem>Reset</DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </Nav>
      </Collapse>
    </Navbar>
  )
}

export default Header
