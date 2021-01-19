import React from 'react';
import {Link} from 'react-router-dom';
import classNames from "classnames";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Header from "components/Header/Header.js";
// import image1 from 'assets/img/decolonial-fotos/foto-releases.jpg';
// import image4 from 'assets/img/decolonial-fotos/foto-aurora.jpg';
// import image5 from 'assets/img/decolonial-fotos/foto-aurora.jpg';
// import image6 from 'assets/img/decolonial-fotos/foto-bio.jpg';
import ReactPlayer from "react-player";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import styles1 from "assets/jss/material-kit-react/views/profilePage1.js";
import { makeStyles } from "@material-ui/core/styles";



const useStyles1 = makeStyles(styles1);

function Releases(props) {
    const classes = useStyles1();
  const { ...rest } = props;
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgFluid
  );

  const { post } = props;

    return (
      <div style={{ 
      backgroundColor: `white`,
      height: "3500px",
      position: "absolute",
      backgroundPosition: '0px 0px',
      backgroundSize: "100% 100%",  
      backgroundRepeat: "no-repeat",
      width: "100%",
      paddingBottom: "80%",  
      marginBottom: "100px",  
      marginTop: "-1%",
      paddingTop: 0,
      }}>
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

    <div>
    <h5 style={{
      color:"black", 
      fontFamily: "Menlo",
      fontSize: "50px",
      fontWeight: "normal",
      fontStyle: "normal",
      position: "relative",
      backgroundColor: `white`, //"#000000",
      opacity: "1.0",   
      marginLeft: "5%",
      marginTop: "100px",
      width: "69%",
      padding: "10px",
       }}> 
       CMEPR Bandcamp<br></br></h5>
       </div>
       <GridItem  className={classes.navWrapper}>

       <GridContainer justify="center">
                          <GridItem >
                          <iframe style = {{
                            display: "inline-block",
                            position: "relative",
                            border: 0, 
                            width: "300px", 
                            height: "420px", 
                            marginTop: "0%",
                            marginLeft:  "0%"}} 
                            src="https://bandcamp.com/EmbeddedPlayer/album=2903001326/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/" seamless><a href="https://cmepr.bandcamp.com/album/x-05-x-08-x-2005-265">x = 0.5+x*(-0.8)*(x/[2.005..2.65]) by Roy F Guzmán</a></iframe>
                          
          
    </GridItem>      
    </GridContainer>
    </GridItem>

   </div>
  
    )
  }

  export default Releases
