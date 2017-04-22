/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Explore.css';
import RequestCard from '../../components/RequestCard'

class Explore extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
  };

  render() {
    return (
      <div className={s.root}>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" />
        <div className={s.container}>
          <h1>Explore</h1>
          <div className="row">
            <div className= "col-xs-6 col-sm-6 col-md-4 "  >
              <RequestCard/>
            </div>
            <div className= "col-xs-6 col-sm-6 col-md-4 "  >
              <RequestCard/>
            </div>
            <div className= "col-xs-6 col-sm-6 col-md-4 "  >
              <RequestCard/>
            </div>
            <div className= "col-xs-6 col-sm-6 col-md-4 "  >
              <RequestCard/>
            </div>
            <div className= "col-xs-6 col-sm-6 col-md-4 "  >
              <RequestCard/>
            </div>
            
            
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Explore);
