/*
 *
 * ContactUs
 *
 */

import React from 'react';
import Helmet from 'react-helmet';

import './style.css';
import './styleM.css';

export default class ContactUs extends React.PureComponent {
  render() {
    return (
      <div className="container">
        <Helmet title="ContactUs" meta={[ { name: 'description', content: 'Description of ContactUs' }]}/>

        //Remove this line and you can start writing your code here.
      </div>
    );
  }
}

ContactUs.contextTypes = {
  router: React.PropTypes.object
};
