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
import profile from "assets/img/decolonial-fotos/foto-roy1.png";
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

export default function ProfilePage1(props) {
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
        backgroundColor: "white",
        height: "540%",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: "100%",
        paddingBottom: "-10%",
        paddingLeft: "0px",
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
                    <h3 style={{color: "black", marginLeft:  "5%", marginTop: "2%", dislay: "block", position: "relative", fontFamily: 'Menlo', fontSize: "30px", fontWeight: "600", width:"50%", backgroundColor: "white"}}>Roy F Guzmán Rodriguez</h3>
                   
                  </div>
                </div>
              </GridItem>
            </GridContainer>  <br></br>
            <div>
              <p style={{color: "black", marginLeft:  "5%", dislay: "block", position: "relative", fontFamily: 'Menlo', fontSize: "15px", fontWeight: "600", width:"75%", backgroundColor: "white"}}>
              {"Roy F Guzmán - Compositor de música electrónica algorítmica e instrumental, improvisador y poeta nacido en San Juan, Puerto Rico el 28 de junio de 1987."} <br></br><br></br>
              {"Sus temas de investigaciones previas y actuales son la teoría del caos para material estructural musical, el tema de “abstracciones” trabajado mediante partituras sonoras con instrumentos utilizándolas como una metáfora de la percepción de toda la realidad, “Música a Lo Pobre” que incluye el tema de la resiliencia, la estética que produce las limitaciones auténticas de los sistemas como universal abstracta del folklor, la no dualidad, el concepto de axiomas de objetos conceptuales y físicos, geometrías abstractas en formas musicales, el estudio y formalización de la lectura de partituras no tradicionales, la expansión de la parametrización y constructos musicales, la investigación del concepto de Formas Sonoras Plásticas donde crea técnicas para producir la ilusión de un sólido en un medio temporal con el programa El Cubo De Chuito para manipulación de audio en 3 dimensiones y la creación de música conceptual basada en teorías sobre la espiritualidad abstracta indígena Taina."}<br></br><br></br>
              {"Recientemente explora la Meta Composición donde se propone que la abstracción perceptual llamada realidad se ve afectada por las estructuras objetuales, constructos nuevos, formas, símbolos y textos composicionales."}<br></br><br></br>
              {"Hace Poesía Concreta Multi Semiótica donde se explora el multi semiotismo sincrónico y asincrónico y la Meta Poesía Integral donde se explora el color semiótico como una integral de un multisemiotismo de una gestalt universal popular. También investiga y crea deducciones y creaciones sobre la metafísica de la espiritualidad ancestral latinoamericana y su potencial desarrollo axiomático y abstracto para la creación de nuevos constructos y filosofías que tienen el potencial de alterar la realidad perceptual."}
              {" "}
              </p>
            </div>
{/* 
          <div style={{ 
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
      
    </div>
  );
}
