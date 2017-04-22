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
import s from './Home.css';
import RequestCard from '../../components/RequestCard'
import RequestInProgress from '../../components/RequestInProgress'
import Navigation from '../../components/Navigation'

class Home extends React.Component {
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
        <Navigation />
        <link rel="stylesheet" type="text/css" href="./Home.css" />
        <div className={s.container}>
          <div className="row">
          
          <div className="col-sm-3">
            <div className={s.spacer}></div>
            <div className={s.spacer}></div>
            <h4 className={s.centerText}>Suggestions</h4>
            <RequestCard/>
            <RequestCard/>
          </div>
          <div className="col-sm-1"></div>

          <div className="col-sm-8">
            <h2 className={s.centerText}>Upcoming</h2>
            <RequestInProgress/>
            <div className={s.spacer}></div>
            <RequestInProgress/>
          </div>
          </div>
          
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Home);

/*
{this.props.news.map(item => (
            <article key={item.link} className={s.newsItem}>
              <h1 className={s.newsTitle}><a href={item.link}>{item.title}</a></h1>
              <div
                className={s.newsDesc}
                // eslint-disable-next-line react/no-danger
                dangerouslySetInnerHTML={{ __html: item.content }}
              />
            </article>
          ))}
*/