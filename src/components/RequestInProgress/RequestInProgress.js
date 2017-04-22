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
import s from './RequestInProgress.css';
import {Checkbox, ProgressBar} from 'react-bootstrap/lib/'
const now = 60;

class RequestInProgress extends React.Component {
  
  render() {
    return (
      <div>
      <link rel="stylesheet" href="./RequestInProgress.css" />
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" />
      
                    
    			<div className="card thumbnail ">
              <p className={s.cardtopbar} >
                Project Name	    		
	  	        </p>
		      		<div className="caption">
			        <h4 className={s.requestitle}><strong>Request Title</strong></h4>
			        <p>This is a short description. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              
              <br/>            
              
			        
		     		  </div>
               <div className="row">
                
                <div className="col-sm-6">
                <div className={s.panelbody}>
                  <p className={s.smallheading}><strong>Requirements</strong></p>
                  <div className={s.tabpane} id="test">
                      <Checkbox checked readOnly>
                      Checkbox
                      </Checkbox>
                      <Checkbox checked readOnly>
                      Checkbox
                    </Checkbox>
                    <Checkbox checked readOnly>
                      Checkbox
                    </Checkbox>
                    <Checkbox  readOnly>
                      Checkbox
                    </Checkbox>
                    <Checkbox  readOnly>
                      Checkbox
                    </Checkbox>
                    <Checkbox  readOnly>
                      Checkbox
                    </Checkbox>
                  </div>
                </div>            
                </div>
                <div className="col-sm-5">
                  <div className={s.panelbody}>
                  <h5 className={s.smallheading}>Goal Date: 4/22/17</h5>
                  <h3 className={s.deadline}>13 Days Left!</h3>
                  <p><a  className="btn btn-warning center-block" role="button">Update Progress</a></p>
                  </div>
                </div>
              </div>
              <ProgressBar striped bsStyle="success" style={{marginLeft:20,marginRight:20}}now={now} label={`${now}%`} />
	    		</div>
	  	</div>
      
    );
  }
}

export default withStyles(s)(RequestInProgress);
