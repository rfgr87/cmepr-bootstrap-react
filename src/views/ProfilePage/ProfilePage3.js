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
import profile from "assets/img/decolonial-fotos/Valeria.jpg";
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

export default function ProfilePage3(props) {
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
                    <h3 style={{color: "black", marginLeft:  "5%", marginTop: "2%", dislay: "block", position: "relative", fontFamily: 'Menlo', fontSize: "30px", fontWeight: "600", width:"50%", backgroundColor: "white"}}>Valeria Cotto</h3>
                   
                  </div>
                </div>
              </GridItem>
            </GridContainer>  <br></br>
            <div>
              <p style={{color: "black", marginLeft:  "5%", dislay: "block", position: "relative", fontFamily: 'Menlo', fontSize: "15px", fontWeight: "600", width:"75%", backgroundColor: "white"}}>
              {"La violonchelista Valeria S. Cotto López comienza sus estudios formales en el violonchelo en la Escuela Libre de Música Antonio Paoli donde estudió bajo la tutela del chelista Carlos Valencia por 6 años. En el 2014, es admitida a la Escuela Especializada en Bellas Artes de Cayey, Miguel Á. Juliá Collazo, formando parte del taller de música. Luego de graduarse de la misma y de la Escuela Libre de Música Antonio Paoli con excelencia, fue admitida al Conservatorio de Música de Puerto Rico.  Actualmente cursa su cuarto año en el Conservatorio donde se encuentra estudiando Ejecución Musical en el Violonchelo, bajo la tutela del chelista principal de la Orquesta Sinfónica de Puerto Rico Luis Miguel Rojas. Durante su carrera musical, ha tenido la oportunidad de recibir clases magistrales y estudiar bajo chelistas como Carlos Valencia, Brenda Tirado, Emilio Colón, Luis Miguel Rojas, Ariel Barnes, Elisa Sadaba, Elías Leceta, Ovidiu Marinescu entre otros.  Ha tenido el privilegio de tocar con la Orquesta Sinfónica de Puerto Rico por dos años consecutivos a través del programa de Experiencia Sinfónica, en los años 2017 y 2018."}<br></br><br></br>
              {"En el 2019 participó del Zodiac Music Academy & Festival, en el sur de Francia donde tuvo la oportunidad de tocar como solista y en distintos conjuntos de música de cámara.  Por otra parte también estudia en la Universidad de Puerto Rico, Recinto de Rio Piedras, perteneciendo a la Facultad de Humanidades.  Actualmente se destaca como maestra y pertenece a la Orquesta Sinfónica del Conservatorio de Música de Puerto Rico."}<br></br><br></br>
              </p>
            </div>

          {/* <div style={{ 
                          display: "inline-block",

            position: "relative",
            backgroundImage: `url(${image4})`,
            width: "300px",
            height: "300px",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            marginLeft:  "2%",
            padding: 0}}></div>
            <div style={{ 
              display: "inline-block",
            position: "relative",
            backgroundImage: `url(${image3})`,
            width: "350px",
            height: "450px",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            marginLeft:  "2%",
            padding: 0}}></div>
            <div style={{ 
              display: "inline-block",
            position: "relative",
            backgroundImage: `url(${image5})`,
            width: "400px",
            height: "300px",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            marginLeft:  "2%",
            padding: 0}}></div>
               */}
            
            </div>
            
          </div>
        </div>
        {/* <div style={{ 
          position: "absolute",
          backgroundImage: `url(${image1})`,
          height: "3000px",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          width: "100%",
          padddingRigth: "45px",
          paddingBottom: "200px",
          margin: 0,
          padding: 0}}>
    
    

      <GridContainer justify="center">
              <GridItem  className={classes.navWrapper}>
                <NavPills
                  alignCenter
                  color="black"
                  tabs={[
                    {
                      tabButton: "Música",
                      // tabIcon: Camera,
                      tabContent: (
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
                            src="https://bandcamp.com/EmbeddedPlayer/album=97623958/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/" seamless><a href="https://royguzman.bandcamp.com/album/sin-t-tulo-28-12-20">sin-título[28-12-20] by Roy F Guzmán</a></iframe>
                          
                          <iframe style={{
                            display: "inline-block",
                            position: "relative",
                            border: 0, 
                            width: "300px", 
                            height: "420px", 
                            marginTop: "0%",
                            marginLeft:  "0%"}} 
                            src="https://bandcamp.com/EmbeddedPlayer/album=1694358983/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/" seamless><a href="https://royguzman.bandcamp.com/album/m">[M] by Roy F Guzman</a></iframe>   
                         
                          <iframe style={{
                            display: "inline-block",
                            position: "relative",
                            border: 0, 
                            width: "300px", 
                            height: "420px", 
                            marginTop: "0%",
                            marginLeft:  "0%"}} 
                            src="https://bandcamp.com/EmbeddedPlayer/album=4107089838/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/" seamless><a href="https://royguzman.bandcamp.com/album/sin-t-tulo-10-4-20-3">sin-título[10-4-20][3] by Roy F Guzmán</a></iframe> 
                          <iframe style={{
                            display: "inline-block",
                            position: "relative",
                            border: 0, 
                            width: "300px", 
                            height: "420px", 
                            marginTop: "0%",
                            marginLeft:  "0%"}} 
                            src="https://bandcamp.com/EmbeddedPlayer/album=3480594853/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/" seamless><a href="https://royguzman.bandcamp.com/album/abstracciones-de-puerto-rico-para-cuarteto-de-cuerdas">Abstracciones de Puerto Rico para Cuarteto de Cuerdas by Roy F Guzmán</a></iframe>         
                          <iframe  style={{
      display: "inline-block",

      position: "relative",
      border: 0, 
      width: "300px", 
      height: "420px", 
      marginTop: "0%",
      marginLeft:  "0%"}} 
      src="https://bandcamp.com/EmbeddedPlayer/album=1768060898/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/" seamless><a href="https://royguzman.bandcamp.com/album/x-05-x-08-x-2005-265">x = 0.5+x*(-0.8)*(x/[2.005..2.65]) by Roy F Guzmán</a></iframe>      

   
    <iframe  style={{
      display: "inline-block",

      position: "relative",
      border: 0, 
      width: "300px", 
      height: "420px", 
      marginTop: "0%",
      marginLeft:  "0%"}} 
      src="https://bandcamp.com/EmbeddedPlayer/album=4291500311/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/" seamless><a href="https://royguzman.bandcamp.com/album/axiom-tica-j-bara-para-cuarteto-de-cuerdas">Axiomática Jíbara para Cuarteto de Cuerdas by Roy F Guzmán</a></iframe>    
   
   <iframe style={{
      display: "inline-block",

     position: "relative",
     border: 0, 
     width: "300px", 
      height: "420px", 
     marginTop: "0%",
     marginLeft:  "0%"}} 
     src="https://bandcamp.com/EmbeddedPlayer/album=1983507765/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/" seamless><a href="https://royguzman.bandcamp.com/album/congas">congas by Roy F Guzmán</a></iframe>      
    
    <iframe style={{
      display: "inline-block",

     position: "relative",
     border: 0, 
     width: "300px", 
      height: "420px", 
     marginTop: "0%",
     marginLeft:  "0%"}} 
      src="https://bandcamp.com/EmbeddedPlayer/album=2664903003/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/" seamless><a href="https://royguzman.bandcamp.com/album/tito-2">Tito by Roy F Guzman</a></iframe>
   
    <iframe style={{
      display: "inline-block",

     position: "relative",
      border: 0, 
      width: "300px", 
      height: "420px",  
      marginTop: "0%",
      marginLeft:  "0%"}} 
      src="https://bandcamp.com/EmbeddedPlayer/album=836594118/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/" seamless><a href="https://royguzman.bandcamp.com/album/sin-t-tulo-25-12-20-1">sin-título[25-12-20][1] by Roy F Guzmán</a></iframe> 
                  
      <iframe style={{
      display: "inline-block",
      position: "relative",
      border: 0, 
      width: "300px", 
      height: "420px",  
      marginTop: "0%",
      marginLeft:  "0%"}} 
      src="https://bandcamp.com/EmbeddedPlayer/album=988926118/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/" seamless><a href="https://royguzman.bandcamp.com/album/escardillos-para-trompeta">Escardillos Para Trompeta by Roy F Guzmán</a></iframe>               

      <iframe style={{
      display: "inline-block",
      position: "relative",
      border: 0, 
      width: "300px", 
      height: "420px",  
      marginTop: "0%",
      marginLeft:  "0%"}} 
      src="https://bandcamp.com/EmbeddedPlayer/album=802527053/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/" seamless><a href="https://royguzman.bandcamp.com/album/01-06-21-improvisaciones-con-acorde-n">[01-06-21] Improvisaciones con Acordeón by Roy F Guzmán</a></iframe>                    
      <iframe style={{
      display: "inline-block",
      position: "relative",
      border: 0, 
      width: "300px", 
      height: "420px",  
      marginTop: "0%",
      marginLeft:  "0%"}}  
      src="https://bandcamp.com/EmbeddedPlayer/album=2829187536/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/" seamless><a href="https://royguzman.bandcamp.com/album/folclor-abstracto-i">Folclor Abstracto I by Roy F Guzmán</a></iframe>                      
      </GridItem>      
      </GridContainer>
        )
      },
                    {
                      tabButton: "Partituras",
                      // tabIcon: Palette,
                      tabContent: (
                        <GridContainer justify="center">
                          <GridItem xs={12} sm={12} md={4}>
                            <img
                              alt="..."
                              src={work1}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={work2}
                              className={navImageClasses}
                            />
                            </GridItem>
                            <GridItem xs={12} sm={12} md={4}>
                            <img
                              alt="..."
                              src={work3}
                              className={navImageClasses}
                            />
                         
                            <img
                              alt="..."
                              src={work4}
                              className={navImageClasses}
                            />
                            </GridItem>
                            <GridItem xs={12} sm={12} md={4}>

                            <img
                              alt="..."
                              src={work5}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={work6}
                              className={navImageClasses}
                            />
                            </GridItem>
                            <GridItem xs={12} sm={12} md={4}>

                            <img
                              alt="..."
                              src={work7}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={work8}
                              className={navImageClasses}
                            />
                            </GridItem>
                            <GridItem xs={12} sm={12} md={4}>


                            <img
                              alt="..."
                              src={work9}
                              className={navImageClasses}
                            />
                         
                            <img
                              alt="..."
                              src={work10}
                              className={navImageClasses}
                            />
                            </GridItem>
                            <GridItem xs={12} sm={12} md={4}>


                            
                            <img
                              alt="..."
                              src={work12}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={work13}
                              className={navImageClasses}
                            />
                          </GridItem>
                         
                        </GridContainer>
                      )
                    },
                    {
                      tabButton: "Textos",
                      tabContent: (
                        <GridContainer justify="center">
                          <GridItem xs={12} sm={12} md={4}>
                            <img
                              alt="..."
                              src={work4}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={studio3}
                              className={navImageClasses}
                            />
                          </GridItem>
                          <GridItem xs={12} sm={12} md={4}>
                            <img
                              alt="..."
                              src={work2}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={work1}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={studio1}
                              className={navImageClasses}
                            />
                          </GridItem>
                        </GridContainer>
                      )
                    }
                  ]}
                />
              </GridItem>
            </GridContainer>
            </div>
            */}
            
    </div>
  );
}
