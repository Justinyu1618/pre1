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
import s from './CreateNew.css';
import RequestCard from '../../components/RequestCard'
import RequestInProgress from '../../components/RequestInProgress'

class CreateNew extends React.Component {
  static propTypes = {
    news: PropTypes.arrayOf(PropTypes.shape({
      title: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
      content: PropTypes.string,
    })).isRequired,
  };

  render() {
    return (
      <div className={s.root}>
        <link rel="stylesheet" type="text/css" href="./CreateNew.css" />
        <div className={s.background}>
          <div className='row'></div>

        </div>
      </div>
    );
  }
}

export default withStyles(s)(CreateNew);
