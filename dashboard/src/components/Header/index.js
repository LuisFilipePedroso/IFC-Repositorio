// React & Redux
import React, { useState } from 'react'
import PropTypes from 'prop-types'

// Styles
// import { SidebarToggler } from './style'
import { Button, Collapse, DropdownItem, DropdownMenu, DropdownToggle, Nav, Navbar, NavbarBrand, NavbarToggler, NavLink, NavItem, UncontrolledDropdown } from 'reactstrap'

// Header
const Header = () => {
  const [open, isOpen] = useState(false)

  /**
   * Toggle mobile menu
   */
  const toggle = () => isOpen(!open)

  return (
    <Navbar color="dark" light expand="md" className="bg-gradient-primary">
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
            <DropdownToggle nav caret>
              Options
            </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem>
                Option 1
              </DropdownItem>
              <DropdownItem>
                Option 2
              </DropdownItem>
              <DropdownItem divider />
              <DropdownItem>
                Reset
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </Nav>
      </Collapse>
    </Navbar>
  )
}

Header.propTypes = {}

export default Header
