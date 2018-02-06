/*
 *
 * Careers
 *
 */

import React from 'react';
import Helmet from 'react-helmet';

import './style.css';
import './styleM.css';

export default class Careers extends React.PureComponent {
  render() {
    return (
      <div className="container">
        <Helmet title="Careers" meta={[ { name: 'description', content: 'Description of Careers' }]}/>

        //Remove this line and you can start writing your code here.
      </div>
    );
  }
}

Careers.contextTypes = {
  router: React.PropTypes.object
};
