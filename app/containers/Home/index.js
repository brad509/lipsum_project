/*
 *
 * Home
 *
 */

import React from 'react';
import Helmet from 'react-helmet';
import Responsive from 'react-responsive';
import { Link } from "react-router";
import WebFont from 'webfontloader';
import ReactFontFace from 'react-font-face';
import NavBar from 'components/NavBar';

import logo from '../../images/icon1.png';
import key from '../../images/key1.png';
import tool from '../../images/tools.png';

import logoWhite from '../../images/iconWhite.png';
import keyWhite from '../../images/key2.png';
import toolWhite from '../../images/tools2.png';

import './style.css';
import './styleM.css';

export default class Home extends React.PureComponent {
    constructor() {
        super();
        this.state = {
            logo: true,
            key: true,
            tool: true,
        };
    }
    logoHover = () => {
        this.setState({ logo: !this.state.logo })
    }

    keyHover = () => {
        this.setState({ key: !this.state.key })
    }

    toolHover = () => {
        this.setState({ tool: !this.state.tool })
    }

    render() {
        const logoStyle2 = {
            width: 150,
            height: 30,
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: "70px",
        }
        const logoStyle3 = {
            width: 160,
            height: 45,
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: "60px",
        }
        const bottomBox = {
            width: "100%",
            height: "auto",
            border: "1px solid #777777",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
        }
        const divStyleMain1 = {
            width: "100%",
            height: "700px",
            display: "flex",
            flexDirection: "row",
            backgroundSize: "cover",
            backgroundAttachment: "fixed",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
        }
        const divStyle1A = {
            width: "50%",
            height: "70%",
            background: "rgba(238, 240, 242, 1.00)",
            transform: "translateX(-50%) skewX(45deg)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center"
        }
        const divStyle1B = {
            width: "50%",
            height: "30%",
            background: "rgba(255, 255, 255, 1.00)",
            transform: "translateX(-50%) skewX(45deg)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center"

        }
        const divStyle1Image = {
            width: "50%",
            height: "auto",
            transform: "translateX(-50%) skewX(45deg)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            background: "url(http://h4z.it/Image/fdc5b1_banner_home.jpg)",
        }
        const divStyleMain2 = {
            width: "100%",
            height: "400px",
            background: "url(http://h4z.it/Image/dc0a91_ara_computer.jpg)",
            backgroundSize: "cover",
            backgroundAttachment: "fixed",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
        }
        const divStyleMain3 = {
            width: "100%",
            height: "600px",
            display: "flex",
            flexDirection: "row",
            backgroundcolor: "rgba(238, 240, 242, 1.00)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
        }
        const divStyleMain4 = {
            width: "100%",
            height: "500px",
            display: "flex",
            flexDirection: "row",
            backgroundSize: "cover",
            background: "#eeeeee",
            transform: "translateX(-45%) skewX(-20deg)",
        }
        const divStyleMain5 = {
            width: "100%",
            height: "400px",
            background: "url(http://h4z.it/Image/978987_para_tablet.jpg)",
            backgroundSize: "cover",
            backgroundAttachment: "fixed",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
        }
        const textStyle1 = {
            color: "#eeeeee",
            fontSize: "2em",
            fontFamily:"Lato",
            fontWeight: "400",
            fontStyle: "italic",
            textTransform: "lowercase",
            textAlign: "center",
            marginTop: "200px",
        }
        const textStyle2 = {
            color: "#eeeeee",
            fontSize: "3em",
            fontFamily:"Lato",
            fontWeight: "300",
            fontStyle: "italic",
            textAlign: "left",
            paddingLeft: "60%",
            marginTop: "100px",
        }
        const textStyle3 = {
            color: "#eeeeee",
            fontSize: "3em",
            fontFamily:"Lato",
            fontWeight: "700",
            textTransform: "uppercase",
            textAlign: "left",
            paddingLeft: "60%",

      }
      const textStyle2A = {
          color: "#777777",
          fontSize: "2.5em",
          fontFamily:"Lato",
          fontWeight: "300",
          fontStyle: "italic",
          textAlign: "left",
          paddingLeft: "30%",
          marginTop: "50px",
          transform:"skewX(20deg)",
      }
      const textStyle3A = {
          color: "#f05525",
          fontSize: "3em",
          fontFamily:"Lato",
          fontWeight: "700",
          textTransform: "uppercase",
          textAlign: "left",
          paddingLeft: "31%",
          paddingTop:"10px",
          transform:"skewX(20deg)",
        }
        const textStyle4 = {
            color: "#eeeeee",
            fontSize: "1.5em",
            fontFamily:"Lato",
            fontWeight: "300",
            fontStyle: "italic",
            textAlign: "left",
            paddingLeft: "60%",
        }
        const textStyle4A = {
            color: "#777777",
            fontSize: "1.5em",
            fontFamily:"Lato",
            fontWeight: "300",
            fontStyle: "italic",
            textAlign: "left",
            marginTop: "20px",
            paddingLeft: "20%",
            transform:"skewX(20deg)",
        }
        const textStyle5 = {
            color: "#777777",
            fontSize: "2.5em",
            fontFamily:"Lato",
            fontWeight: "300",
            fontStyle: "italic",
            textAlign: "left",
            paddingLeft: "16%",
            marginTop: "50px",
            transform:"skewX(20deg)",
        }
        const textStyle6 = {
            color: "#777777",
            fontSize: "3em",
            fontFamily:"Lato",
            fontWeight: "700",
            textTransform: "uppercase",
            textAlign: "left",
            paddingLeft: "18%",
            marginTop: "10px",
            transform:"skewX(20deg)",
          }
          const textStyle7 = {
              color: "#777777",
              fontSize: "2.5em",
              fontFamily:"Lato",
              fontWeight: "300",
              fontStyle: "italic",
              textAlign: "left",
              paddingLeft: "22%",
              marginTop: "20px",
              transform:"skewX(20deg)",
          }
          const textStyle8 = {
              color: "#777777",
              fontSize: "2.5em",
              fontFamily:"Lato",
              fontWeight: "700",
              textTransform: "lowercase",
              textAlign: "left",
              paddingLeft: "18%",
              marginTop: "10px",
              transform:"skewX(20deg)",
            }
            const textStyle8A = {
                color: "#eeeeee",
                fontSize: "2.5em",
                fontFamily:"Lato",
                fontWeight: "300",
                fontStyle: "italic",
                textAlign: "left",
                paddingLeft: "40%",
                marginTop: "100px",
                transform:"skewX(20deg)",
            }
            const textStyle9 = {
                color: "#eeeeee",
                fontSize: "2.5em",
                fontFamily:"Lato",
                fontWeight: "700",
                fontStyle: "italic",
                textAlign: "left",
                paddingLeft: "50%",
                marginTop: "15px",
                transform:"skewX(20deg)",
            }
            const textStyle9A = {
                color: "#777777",
                fontSize: "1.5em",
                fontFamily:"Lato",
                fontWeight: "300",
                fontStyle: "italic",
                textAlign: "left",
                marginTop: "20px",
                paddingLeft: "18%",
                transform:"skewX(20deg)",
            }
            const textStyle10 = {
                color: "#777777",
                fontSize: "2.5em",
                fontFamily:"Lato",
                fontWeight: "300",
                fontStyle: "italic",
                textAlign: "left",
                paddingLeft: "16%",
                marginTop: "100px",
                transform:"skewX(20deg)",
            }
        const contactLeft = {
            width: "100%",
            paddingLeft: "50%",
            paddingTop: "2%",
        }
        const contactRight = {
            width: "100%",
            display: "flex",
            flexDirection: "row",
            paddingLeft: "60%",
            paddingTop: "2%"
        }
        const container = {
            width: "100%",
            height: "400px",
            display: "flex",
            flexDirection: "row",
            backgroundSize: "cover",
            background: "#777777",
        }
        const box = {
            height: "600px",
            width: "33%",
            margin: "auto",
            color: "rgba(238, 240, 242, 1.00)",
            fontSize: "4em",
            fontWeight: "300",
            textAlign: "center",
            paddingTop: "50px",
            border: "1px solid #777777",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
        }
        const logoStyle = {
            paddingLeft: "200px",
            marginTop: "70px",
            height: "auto",
            width: "225px",
        }
        const linkStyle = {
            display: "flex",
            flexDirection: "row",
            paddingleft: "20px",
            textDecoration: "none",
            color: "#777777",
            fontSize: "1em",
            textAlign: "left",
        }

        return (
            <div className="container">
                <Helmet title="Home" meta={[{ name: 'description', content: 'Description of Home' }]} />

                <header className="header-home">
                    <div className="topNav">
                        <img style={logoStyle} src="http://h4z.it/Image/a0f3f0_logo_color.png" />
                    </div>
                    <div className="floatNavTop" on>
                        <ul className="navItemsTop">
                            <div><li><div>Employer</div></li></div>
                            <div><li><div>Member</div></li></div>
                            <div><li><div>Broker</div></li></div>
                            <div><li><div>Provider</div></li></div>
                        </ul>
                    </div>
                    <div className="floatNav">
                        <ul className="navItems">
                            <div><li><div>HOME</div></li></div>
                            <div><li><div>ABOUT US</div></li></div>
                            <div><li><div>OUR &nbsp; SOLUTIONS</div></li></div>
                            <div><li><div>CONTACT US</div></li></div>
                        </ul>
                    </div>
                </header>


                    <div className="picDiv">
                        <div className="left">
                            <div className="leftText">
                                <p style={textStyle5}> Quisque laoreet </p>
                                <p style={textStyle6}> EFFICITUR </p>
                                <p style={textStyle4A}> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce facilisis maximus urna. Duis tempor pretium massa, ut placerat mauris commodo id proin nec libero sempe. </p>
                                <p style={textStyle7}> Ipsum sagittis facilisis. </p>
                            </div>
                            <div className="bottomText">
                                <p style={textStyle2A}> Proin Malesuada Arcu </p>
                                <p style={textStyle3A}> CONDIMENTUM </p>
                            </div>
                        </div>
                    </div>

                    <div style={divStyleMain2}>
                        <p style={textStyle2}> Mauris suscipit pharetra </p>
                        <p style={textStyle3}> CRAS, ELEIFEND & LIBERO </p>
                        <p style={textStyle4}> usce laoreet ullamcorper lacus, ut condimentum <br />
                            risus egestas quis. </p>
                    </div>


                    <div style={divStyleMain3}>
                        <div style={box} className="boxStuff" onMouseEnter={this.logoHover} onMouseLeave={this.logoHover}>
                            <div className={!this.state.logo ? "allerbold1" : "all"}>
                                <img style={{ height: 100, width: 100 }} src={this.state.logo ? logo : logoWhite} />
                                <div style={{ color: this.state.logo ? '#777' : '#eee' }}>CRAS</div>
                                <div className={this.state.logo ? "cardTextHide" : "cardText"}>
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus laborum aspernatur officia quaerat atque voluptas fuga laudantium maiores magni repellendus, voluptatibus minima fugit autem vero nihil dolorum nobis nisi magnam.
                                </div>
                            </div>
                        </div>

                        <div style={box} className="boxStuff" onMouseEnter={this.keyHover} onMouseLeave={this.keyHover}>
                            <div className={!this.state.key ? "allerbold1" : "all"}>
                                <img style={{ height: 50, width: 100, paddingBottom: 50 }} src={this.state.key ? key : keyWhite} />
                                <div style={{ color: this.state.key ? '#777' : '#eee' }}>ELEIFEND</div>
                                <div className={this.state.key ? "cardTextHide" : "cardText"}>
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus laborum aspernatur officia quaerat atque voluptas fuga laudantium maiores magni repellendus, voluptatibus minima fugit autem vero nihil dolorum nobis nisi magnam.
                                </div>
                            </div>
                        </div>
                        <div style={box} className="boxStuff" onMouseEnter={this.toolHover} onMouseLeave={this.toolHover}>
                            <div className={!this.state.tool ? "allerbold1" : "all"}>
                                <img style={{ height: 100, width: 100 }} src={this.state.tool ? tool : toolWhite} />
                                <div style={{ color: this.state.tool ? '#777' : '#eee' }}>LIBERO</div>
                                <div className={this.state.tool ? "cardTextHide" : "cardText"}>
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus laborum aspernatur officia quaerat atque voluptas fuga laudantium maiores magni repellendus, voluptatibus minima fugit autem vero nihil dolorum nobis nisi magnam.
                                </div>
                            </div>
                        </div>
                    </div>

                <div style={container}>
                    <div className="left2">
                        <div className="leftText">
                          <p style={textStyle10}> Praesent metus </p>
                            <p style={textStyle9A}> Pellentesque faucibus fermentum tellus, ut vulputate sapien blandit et. <br /> Nullam posuere magna massa, sit amet maximus neque facilisis quis. <br /> Donec dictum, orci condimentum sollicitudin suscipit, dui ipsum posuere.</p>
                        </div>
                    </div>
                    <div className="right">
                        <div className="leftText">
                            <p style={textStyle8A}> Duis vulputate </p>
                            <p style={textStyle9}> mauris sit amet rhoncus, maurs </p>
                        </div>
                    </div>
                </div>


                    <div style={divStyleMain5}>
                        <p style={textStyle1}> Pellentesque faucibus fermentum tellus, ut vulputate <br />
                            aliquet sapien interdum feugiat facilisis. Cras commodo sapien in arcu. </p>
                    </div>

                <footer>
                    <div className="bottomNav">
                        <div style={bottomBox}>
                            <div style={{ display: "flex", justifyContent: "space-between", width: 500 }}>
                                <div className="allerbolditalic"> CONTACT US </div>
                                <div className="allerbolditalic"> CAREERS </div>
                                <div className="allerbolditalic"> Lipsum.com </div>
                            </div>
                        </div>
                        <div className="footerBorder" ></div>

                        <div style={bottomBox}>
                            <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
                                <div style={{ display: "flex", width: 800, justifyContent: "space-around" }}>
                                    <img style={logoStyle2} src="http://h4z.it/Image/959f10_logo_ko.png" />
                                    <img style={logoStyle3} src="http://h4z.it/Image/1bea62_ogo_linkedin.png" />
                                </div>
                            </div>
                        </div>
                    </div>

                </footer>
            </div>
        );
    }
}

Home.contextTypes = {
    router: React.PropTypes.object
};
