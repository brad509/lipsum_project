/*
 *
 * OurSolutions
 *
 */

import React from 'react';
import Helmet from 'react-helmet';

import './style.css';
import './styleM.css';

export default class OurSolutions extends React.PureComponent {
  render() {
    return (
      <div className="container">
        <Helmet title="OurSolutions" meta={[ { name: 'description', content: 'Description of OurSolutions' }]}/>

        //Remove this line and you can start writing your code here.
      </div>
    );
  }
}

OurSolutions.contextTypes = {
  router: React.PropTypes.object
};
