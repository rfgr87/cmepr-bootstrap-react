import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

// @material-ui/icons
import Camera from "@material-ui/icons/Camera";
import Palette from "@material-ui/icons/Palette";
import Favorite from "@material-ui/icons/Favorite";
// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import Button from "components/CustomButtons/Button.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import NavPills from "components/NavPills/NavPills.js";
import Parallax2 from "components/Parallax/Parallax2.js";

import image1 from "assets/img/decolonial-fotos/foto-roy-pieza-roy1.jpg";

import image2 from "assets/img/decolonial-fotos/foto-roy-pieza-roy1.jpg";
import profile from "assets/img/decolonial-fotos/Kemuel.jpeg";
import image3 from "assets/img/decolonial-fotos/foto-roy-aurora2.jpg";
import image4 from "assets/img/decolonial-fotos/foto-roy-fractalidad-criolla.png";
import image5 from "assets/img/decolonial-fotos/foto-roy-garabato1.png";

import studio1 from "assets/img/examples/studio-1.jpg";
import studio2 from "assets/img/examples/studio-2.jpg";
import studio3 from "assets/img/examples/studio-3.jpg";
import studio4 from "assets/img/examples/studio-4.jpg";
import studio5 from "assets/img/examples/studio-5.jpg";
import work1 from "assets/img/decolonial-fotos/foto-roy-escardillo.png";
import work2 from "assets/img/decolonial-fotos/foto-roy-metamusica1.jpg";
import work3 from "assets/img/decolonial-fotos/foto-roy-metamusica2.jpg";
import work4 from "assets/img/decolonial-fotos/foto-roy-numeritos.png";
import work5 from "assets/img/decolonial-fotos/foto-roy-garabato1.png";
// import work6 from "assets/img/decolonial-fotos/foto-roy-triangulo.jpg";
import work6 from "assets/img/decolonial-fotos/foto-roy-fractalidad-criolla.png";
import work7 from "assets/img/decolonial-fotos/foto-roy-kreppy.jpg";
import work8 from "assets/img/decolonial-fotos/foto-roy-pacto-blanco-criollo.png";
// import work10 from "assets/img/decolonial-fotos/foto-roy-triangulo.jpg";
import work9 from "assets/img/decolonial-fotos/foto-roy-analogias-anatopicas.jpg";
import work10 from "assets/img/decolonial-fotos/foto-roy-primitives.png";
// import work11 from "assets/img/decolonial-fotos/foto-roy-pacto-blanco-criollo.png";
import work12 from "assets/img/decolonial-fotos/foto-roy-abecedario.png";
import work13 from "assets/img/decolonial-fotos/foto-roy-numeritosorquesta.jpg";

import styles1 from "assets/jss/material-kit-react/views/profilePage1.js";
// import styles2 from "assets/jss/material-kit-react/views/profilePage1.js";
import styles2 from "assets/jss/material-kit-react/components/parallaxStyle1.js";

const useStyles1 = makeStyles(styles1);
const useStyles2 = makeStyles(styles2);

export default function ProfilePage4(props) {
  const classes = useStyles1();
  const { ...rest } = props;
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgFluid
  );
  const navImageClasses = classNames(classes.imgGallery);

  const classes2 = useStyles2();
  return (
    <div style={{ 
      position: "absolute",
      backgroundImage: `url(${image3})`,
      height: "2300px",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      width: "100%",
      padddingRigth: "0px",
      paddingBottom: "0px",
      margin: 0,
      padding: 0}}>
       <Header
        brand="CMEPR"
        rightLinks={<HeaderLinks />}
        fixed
        color="black"
        changeColorOnScroll={{
          height: 400,
          color: "black"
        }}
        {...rest}
      />
        <div>  {/* <div style = {{border: "black", borderWidth: "3px", borderStyle: "outset",backgroundColor: "white", width: "75%", marginLeft: "12.5%", marginTop: "15%"}}> */}
      <div style={{ 
      position: "relative",
      backgroundColor: "white",
      // backgroundImage: `url(${image3})`,
      height: "2300px",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      width: "100%",
      padddingRigth: "0px",
      paddingBottom: "0px",
      margin: 0,
      padding: 0}}>
        <div>
            <GridContainer justify="left" >
              <GridItem xs={12} sm={12} md={6}>
                <div>
                  <div>
                    <img style = {{marginLeft: "5%", marginTop: "20%", position: "relative", display: "block", width: "50%", height: "50%"}} src={profile} alt="..." />
                  </div>
                  <div >
                    <h3 style={{color: "black", marginLeft:  "5%", marginTop: "2%", dislay: "block", position: "relative", fontFamily: 'Menlo', fontSize: "30px", fontWeight: "600", width:"50%", backgroundColor: "white"}}>Kemuel Ruiz</h3>
                    <div style ={{marginLeft: "5%"}}>
                    <Button styles = {{ marginLeft:  "2%"}} >
                      <i style = {{display: "block", color: "black",marginLeft:  "5%"}} className={"fab fa-twitter"} />
                    </Button>
                    <Button >
                      <i style = {{display: "block", color: "black",marginLeft:  "5%"}} className={"fab fa-twitter"} className={"fab fa-instagram"} />
                    </Button>
                    <Button >
                      <i style = {{display: "block", color: "black",marginLeft:  "5%"}} className={"fab fa-twitter"}  className={"fab fa-facebook"} />
                    </Button>
                    </div>
                  </div>
                </div>
              </GridItem>
            </GridContainer>  <br></br>
            <div>
              <p style={{color: "black", marginLeft:  "5%", dislay: "block", position: "relative", fontFamily: 'Menlo', fontSize: "15px", fontWeight: "600", width:"75%", backgroundColor: "white"}}>
              {"..."}<br></br><br></br>
              </p>
            </div>
            
            </div>
            
          </div>
        </div>
        
            
    </div>
  );
}
