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
import s from './RequestCard.css';

class RequestCard extends React.Component {
  render() {
    return (
      <div>
      <link rel="stylesheet" type="text/css" href="./src/components/RequestCard/RequestCard.css" />
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" />
      
                    
    			<div className={s.preRequestCard}>
              <p className={s.cardtopbar} >
                Project Name	    		
	  	        </p>
		      		<div className="caption">
			        <h4 className={s.requestitle}><strong>Request Title</strong></h4>
			        <p>This is a short description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <p>
              <br/>
              <span className="glyphicon glyphicon-calendar"></span>{"   "}<span>4/20/17</span>
              <span className="pull-right"><span className="glyphicon glyphicon-hourglass"></span>{"   "}<span>4/20/17</span></span>
              </p>
			        <p><a  className="btn btn-primary center-block btnsize" role="button" >Find Out More</a></p>
		     		  </div>
	    		</div>
	  	</div>
      
    );
  }
}

export default withStyles(s)(RequestCard);
