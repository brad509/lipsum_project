/*
 *
 * Member
 *
 */

import React from 'react';
import Helmet from 'react-helmet';

import './style.css';
import './styleM.css';

export default class Member extends React.PureComponent {
  render() {
    return (
      <div className="container">
        <Helmet title="Member" meta={[ { name: 'description', content: 'Description of Member' }]}/>

        //Remove this line and you can start writing your code here.
      </div>
    );
  }
}

Member.contextTypes = {
  router: React.PropTypes.object
};
