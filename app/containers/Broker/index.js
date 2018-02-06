/*
 *
 * Broker
 *
 */

import React from 'react';
import Helmet from 'react-helmet';

import './style.css';
import './styleM.css';

export default class Broker extends React.PureComponent {
  render() {
    return (
      <div className="container">
        <Helmet title="Broker" meta={[ { name: 'description', content: 'Description of Broker' }]}/>

        //Remove this line and you can start writing your code here.
      </div>
    );
  }
}

Broker.contextTypes = {
  router: React.PropTypes.object
};
