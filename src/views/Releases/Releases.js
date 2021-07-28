import React from 'react';
import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import classNames from "classnames";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Header from "components/Header/Header.js";
import styles1 from "assets/jss/material-kit-react/views/profilePage1.js";
import { makeStyles } from "@material-ui/core/styles";
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


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

       <Container>
       <Row>
         
        <Col><iframe style = {{
          display: "inline-block",
          position: "relative",
          border: 0, 
          width: "300px", 
          height: "420px", 
          marginTop: "0%",
          marginLeft:  "0%"}} 
          src="https://bandcamp.com/EmbeddedPlayer/album=495007303/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/" seamless><a href="https://royguzman.bandcamp.com/album/cmepr-27-02-21">CMEPR[27-02-21] by CMEPR - (Colectivo de Música Experimental de Puerto Rico)</a></iframe>
         </Col>
         <Col><iframe style = {{
          display: "inline-block",
          position: "relative",
          border: 0, 
          width: "300px", 
          height: "420px", 
          marginTop: "0%",
          marginLeft:  "0%"}} 
          src="https://bandcamp.com/EmbeddedPlayer/album=527915444/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/" seamless><a href="https://royguzman.bandcamp.com/album/cmepr-20-03-21">CMEPR[20-03-21] by CMEPR - Colectivo De Música Experimental De Puerto Rico</a></iframe>
          </Col>

          <Col><iframe style = {{
          display: "inline-block",
          position: "relative",
          border: 0, 
          width: "300px", 
          height: "420px", 
          marginTop: "0%",
          marginLeft:  "0%"}} 
          src="https://bandcamp.com/EmbeddedPlayer/album=3716046106/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/" seamless><a href="https://royguzman.bandcamp.com/album/cmepr-01-05-21">CMEPR[01-05-21] by CMEPR - Colectivo de Música Experimental de Puerto Rico</a></iframe>
          </Col>

          <Col><iframe style = {{
          display: "inline-block",
          position: "relative",
          border: 0, 
          width: "300px", 
          height: "420px", 
          marginTop: "0%",
          marginLeft:  "0%"}} 
          src="https://bandcamp.com/EmbeddedPlayer/album=233536323/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/" seamless><a href="https://royguzman.bandcamp.com/album/cmepr-22-05-21-gabriel-su-rez-roy-f-guzm-n-iv">CMEPR[22-05-21] - Gabriel Suárez, Roy F Guzmán IV by CMEPR - Colectivo de Música Experimental de Puerto Rico</a></iframe>          
          </Col>


          <Col><iframe style = {{
          display: "inline-block",
          position: "relative",
          border: 0, 
          width: "300px", 
          height: "420px", 
          marginTop: "0%",
          marginLeft:  "0%"}} 
          src="https://bandcamp.com/EmbeddedPlayer/album=2097111904/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/" seamless><a href="https://royguzman.bandcamp.com/album/cmepr-22-05-21-gabriel-su-rez-roy-f-guzm-n-ii">CMEPR[22-05-21] - Gabriel Suárez, Roy F Guzmán II by CMEPR - Colectivo de Música Experimental de Puerto Rico</a></iframe>
          </Col>

          <Col><iframe style = {{
          display: "inline-block",
          position: "relative",
          border: 0, 
          width: "300px", 
          height: "420px", 
          marginTop: "0%",
          marginLeft:  "0%"}} 
          src="https://bandcamp.com/EmbeddedPlayer/album=1128345285/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/" seamless><a href="https://royguzman.bandcamp.com/album/cmepr-22-05-21-gabriel-suarez-roy-f-guzm-n-iii">CMEPR[22-05-21] - Gabriel Suarez, Roy F Guzmán III by CMEPR - Colectivo de Música Experimental de Puerto Rico</a></iframe>
          </Col>

          <Col><iframe style = {{
          display: "inline-block",
          position: "relative",
          border: 0, 
          width: "300px", 
          height: "420px", 
          marginTop: "0%",
          marginLeft:  "0%"}} 
          src="https://bandcamp.com/EmbeddedPlayer/album=2496287290/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/" seamless><a href="https://royguzman.bandcamp.com/album/cmepr-22-05-21-gabriel-su-rez-roy-f-guzm-n-i">CMEPR[22-05-21]- Gabriel Suárez, Roy F Guzmán I by CMEPR - Colectivo de Música Experimental de Puerto Rico</a></iframe>
          </Col>

          <Col><iframe style = {{
          display: "inline-block",
          position: "relative",
          border: 0, 
          width: "300px", 
          height: "420px", 
          marginTop: "0%",
          marginLeft:  "0%"}} 
          src="https://bandcamp.com/EmbeddedPlayer/album=2166662922/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/" seamless><a href="https://royguzman.bandcamp.com/album/cmepr-22-05-21-gabriel-su-rez-roy-f-guzm-n">CMEPR[22-05-21] - Gabriel Suárez, Roy F Guzmán by CMEPR - Colectivo de Música Experimental de Puerto Rico</a></iframe>
          </Col>


          <Col><iframe style = {{
          display: "inline-block",
          position: "relative",
          border: 0, 
          width: "300px", 
          height: "420px", 
          marginTop: "0%",
          marginLeft:  "0%"}} 
          src="https://bandcamp.com/EmbeddedPlayer/album=3728029888/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/" seamless><a href="https://royguzman.bandcamp.com/album/cmepr-05-06-21-concierto-en-cfdac">CMEPR[05-06-21] Concierto en CFDAC by CMEPR - Colectivo de Música Experimental de Puerto Rico</a></iframe>
          </Col>


          <Col><iframe style = {{
          display: "inline-block",
          position: "relative",
          border: 0, 
          width: "300px", 
          height: "420px", 
          marginTop: "0%",
          marginLeft:  "0%"}} 
          src="https://bandcamp.com/EmbeddedPlayer/album=3728029888/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/" seamless><a href="https://royguzman.bandcamp.com/album/cmepr-05-06-21-concierto-en-cfdac">CMEPR[05-06-21] Concierto en CFDAC by CMEPR - Colectivo de Música Experimental de Puerto Rico</a></iframe>
          </Col>

          <Col><iframe style = {{
          display: "inline-block",
          position: "relative",
          border: 0, 
          width: "300px", 
          height: "420px", 
          marginTop: "0%",
          marginLeft:  "0%"}} 
          src="https://bandcamp.com/EmbeddedPlayer/album=191984405/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/" seamless><a href="https://royguzman.bandcamp.com/album/cmepr-en-vivo-en-urbe-apie-03-07-21">CMEPR En Vivo En Urbe Apie [03-07-21] by CMEPR - Colectivo de Música Experimental de Puerto Rico</a></iframe>
          </Col>


          <Col><iframe style = {{
          display: "inline-block",
          position: "relative",
          border: 0, 
          width: "300px", 
          height: "420px", 
          marginTop: "0%",
          marginLeft:  "0%"}} 
          src="https://bandcamp.com/EmbeddedPlayer/album=1390847616/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/" seamless><a href="https://royguzman.bandcamp.com/album/cmepr-24-07-21">CMEPR[24-07-21] by CMPER - Colectivo de Música Experimental de Puerto Rico</a></iframe>
          </Col>



        </Row>
    </Container>

   </div>
  
    )
  }

  export default Releases
