/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import cx from 'classnames';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Navigation.css';
import Link from '../Link';
import Button from 'react-bootstrap/lib/Button';
import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';
import Navbar from 'react-bootstrap/lib/Navbar';
import NavDropdown from 'react-bootstrap/lib/NavDropdown'
import {MenuItem, FormGroup, FormControl} from 'react-bootstrap/lib/'
import ReactDOM from 'react-dom'

class Navigation extends React.Component {
  render() {
    return (
      
      <div className={s.container} role="navigation">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" />
        
        <Navbar>
        <Nav bsStyle="tabs">
          <NavItem href='/'>Home</NavItem>
          <NavDropdown eventKey={3} title="Projects" id="basic-nav-dropdown">
            <MenuItem eventKey={3.1}>Action</MenuItem>
            <MenuItem eventKey={3.2}>Another action</MenuItem>
            <MenuItem eventKey={3.3}>Something else here</MenuItem>
            <MenuItem divider />
            <MenuItem eventKey={3.4}>Separated link</MenuItem>
          </NavDropdown>
          <NavItem href='/explore'>Explore</NavItem>
          <NavItem href='/about'>YouthCITIES</NavItem>
          
          <Navbar.Form pullLeft>
              <FormGroup>
                <FormControl type="text" placeholder="Search"/>
              </FormGroup>
              <Button type="submit">Submit</Button>
          </Navbar.Form>
          </Nav>
          <Nav pullRight>
            <NavItem href='/login'>Log In</NavItem>
            <NavItem href='/register'>Sign Up</NavItem>
            <div className={s.spacer}></div>
          </Nav>
        </Navbar>
      </div>
        
      
    );
  }
}

export default withStyles(s)(Navigation);
