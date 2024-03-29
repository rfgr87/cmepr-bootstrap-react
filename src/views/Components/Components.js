import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react components for routing our app without refresh
import { Link } from "react-router-dom";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Parallax from "components/Parallax/Parallax.js";
// sections for this page
import HeaderLinks from "components/Header/HeaderLinks.js";
import SectionBasics from "./Sections/SectionBasics.js";
import SectionNavbars from "./Sections/SectionNavbars.js";
import SectionTabs from "./Sections/SectionTabs.js";
import SectionPills from "./Sections/SectionPills.js";
import SectionNotifications from "./Sections/SectionNotifications.js";
import SectionTypography from "./Sections/SectionTypography.js";
import SectionJavascript from "./Sections/SectionJavascript.js";
import SectionCarousel from "./Sections/SectionCarousel.js";
import SectionCompletedExamples from "./Sections/SectionCompletedExamples.js";
import SectionLogin from "./Sections/SectionLogin.js";
import SectionExamples from "./Sections/SectionExamples.js";
import SectionDownload from "./Sections/SectionDownload.js";

import styles from "assets/jss/material-kit-react/views/components.js";
import styles2 from "assets/jss/material-kit-react/components/parallaxStyle.js";

const useStyles = makeStyles(styles);
const useStyles2 = makeStyles(styles2);


export default function Components(props) {
  const classes = useStyles();
  const { ...rest } = props;

  const classes2 = useStyles2();
  return (
    <div>
      <Header
        brand="CMEPR"
        rightLinks={<HeaderLinks />}
        fixed
        color="blue"
        
        {...rest}
      />
      <div
      style={{ 
        position: "absolute",
        backgroundColor: "white",
        height: "100%",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: "100%",
        marginBottom: "-500px",
        paddingBottom: "-500px",
        margin: 0,
        padding: 0}}>
        <Header
        brand="CMEPR"
        rightLinks={<HeaderLinks />}
        fixed
        color="blue"
   
        {...rest}
      />
      <Parallax className = {{classes2}} image={require("assets/img/decolonial-fotos/foto-pieza-grafica1.jpg")}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem>
              <div className={classes.brand}>
                <h1 style = {{marginTop: "50px", fontSize: "400%", color: "black"}} className={classes.title}>CMEPR</h1>
                <h2 style = {{fontSize: "250%", color: "black"}}>[Colectivo de Música Experimental de Puerto Rico]</h2>
               
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
</div>
    </div>
  );
}
