/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Header.css';
import Link from '../Link';
import Navigation from '../Navigation';
import logoUrl from './logo-small.png';
import logoUrl2x from './logo-small@2x.png';
import {Navbar, FormGroup, FormControl, Button} from 'react-bootstrap/lib/'

class Header extends React.Component {
  render() {
    return (
      <div>
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" />
      <link rel="stylesheet" type="text/css" href="./Header.css" />
      
      <div className={s.root}>
        <div className={s.container}>
          <div className={s.banner}>
            
             <div className='row'>
             <span> <h1 className={s.bannerTitle}>PRE</h1></span>
             <span><Button className=" createnew btn btn-primary pull-right" bsStyle="primary">Create New</Button></span>
             
             </div>
              <br style={{marginBottom:20}}/>

          </div>
          <div className={s.container} role="navigation">
          <Navigation />
        </div>
           
        </div>
      </div>
      
      

      
</div>
    );
  }
}

export default withStyles(s)(Header);
