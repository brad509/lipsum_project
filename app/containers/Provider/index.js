/*
 *
 * Provider
 *
 */

import React from 'react';
import Helmet from 'react-helmet';

import './style.css';
import './styleM.css';

export default class Provider extends React.PureComponent {
  render() {
    return (
      <div className="container">
        <Helmet title="Provider" meta={[ { name: 'description', content: 'Description of Provider' }]}/>

        //Remove this line and you can start writing your code here.
      </div>
    );
  }
}

Provider.contextTypes = {
  router: React.PropTypes.object
};
