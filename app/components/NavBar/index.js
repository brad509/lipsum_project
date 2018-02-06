/**
*
* NavBar
*
*/

import React from 'react';
import {Link} from "react-router";
import Responsive from 'react-responsive';
import MenuIcon from "material-ui/svg-icons/navigation/menu";
import IconButton from 'material-ui/IconButton';

import './style.css';
import './styleM.css';

export default class NavBar extends React.PureComponent {
  render() {
    const header={
      background:"#000000",
      height:"80px",
      width:"100%",
      color:"#777777",
      fontSize:"1.5em",
      fontFamily:"Lato",
      fontWeight:"400",
      textAlign:"center",
    }
    const nav={
      width:"400px",
      height:"100px",
      background:"#000000",
      boxShadow:"0 0 10px 0 rgba(0, 0, 0, 0.5)",
      float:"right",
      marginTop:"-30px",
      transform:"translateX(-45%) skewX(-20deg)",
    }
    const content={
      width:"100%",
      height:"300px",
      background:"#000000",
    }
    const logoStyle={
      paddingLeft:"20px",
      marginTop:"20px",
      height:"auto",
      width:"150px",
    }
    const linkStyle={
      color:"#eeeeee",
      fontSize:"1.5em",
      fontFamily:"Lato",
      fontWeight:"700",
      textAlign:"left",
      marginTop:"25px",
    }

    return (
      <div>
        


      </div>
    );
  }
}

NavBar.contextTypes = {
  router: React.PropTypes.object
};
