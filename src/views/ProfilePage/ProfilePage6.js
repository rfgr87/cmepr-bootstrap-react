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
import profile from "assets/img/decolonial-fotos/Randy.jpeg";
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

export default function ProfilePage6(props) {
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
                    <h3 style={{color: "black", marginLeft:  "5%", marginTop: "2%", dislay: "block", position: "relative", fontFamily: 'Menlo', fontSize: "30px", fontWeight: "600", width:"50%", backgroundColor: "white"}}>Randy A. Roman Rivera</h3>
                  
                  </div>
                </div>
              </GridItem>
            </GridContainer>  <br></br>
            <div>
              <p style={{color: "black", marginLeft:  "5%", dislay: "block", position: "relative", fontFamily: 'Menlo', fontSize: "15px", fontWeight: "600", width:"75%", backgroundColor: "white"}}>
              {"El trombonista guayanillense comenzó sus estudios musicales en los grados primarios con el maestro Ángel Pacheco y Margie Gilormini. Sus inicios en agrupaciones musicales, fueron como parte de la Banda Escolar de Guayanilla. Allí estuvo bajo la dirección de los maestros: Edgardo Arlequín, Francisco Pérez, Sandra Quintana y Maribel Lugo."}<br></br><br></br>
              {"Tiene un Bachillerato en Ejecución de Trombón del Conservatorio de Música de Puerto Rico. Como estudiante, Randy Alexis se destacó por su participación en; agrupaciones, conjuntos institucionales, conciertos de estudiantes, competencias, clases magistrales y conciertos de reclutamiento. En verano de 2010 fue finalista de la competencia Lewis Van Haney Philharmonic Tenor Prize de la International Trombone Association en la ciudad de Austin, Texas. Por esa participación, recibió un reconocimiento de la Respetable Logia Estrella del Sur en Guayanilla, donde resaltaron su gran desempeño en la música."}<br></br><br></br>
              {"Se ha destacado como primer trombón de la Orquesta Sinfónica de Bayamón. Fue miembro de la Orquesta Sinfónica Juvenil de las Américas dirigida por el Maestro Luis Biava. Participó como solista con la Banda de Conciertos del Conservatorio de Música de Puerto Rico, dirigida por el Mayor Donald E. Schofield, Jr. Estrenó en Puerto Rico la pieza “Harvest Trombone Concerto” de John Makey. Esta fue interpretada junto a la Banda de Conciertos del Conservatorio, dirigida por el Maestro Rafael E. Irizarry. Realizó además su primer recital de trombón en su pueblo de Guayanilla en julio del 2018. También ha trabajando con orquestas como: la Banda de Conciertos de Puerto Rico, dirigida por el Maestro Cucco Peña, la Orquesta Filarmónica Arturo Somohano, la Orquesta Camerata Filarmónica de Puerto Rico y la Orquesta Sinfonica de Puerto Rico."}<br></br><br></br>
              {"Ha trabajado con agrupaciones musicales y artistas que representan una amplia variedad de géneros musicales populares. Entre estos se pueden mencionar a: Daddy Yankee, Vico-C, Banda Algarete, Skapulario y Millo Torres. También ha colaborado con: N’klabe, NG2, Frankie Ruiz Jr., Pete Perignon, Plena Libre, Puerto Rican Power, Luis Perico Ortiz Latin Jazz Big Band, acompañando al gran trompetista cubano Arturo Sandoval, entre otros. También se ha desempeñado como trombonista en grabaciones realizadas en el estudio del Maestro Cucco Peña, especiales del Banco Popular y Plena Libre."}<br></br><br></br>
              {"Fundó el Puerto Rican Trombone Ensemble en el 2014, con el propósito de fomentar la identidad cultural puertorriqueña. Este conjunto cuenta con un repertorio musical variado que incluye géneros como: plena, bomba, danzas puertorriqueñas, música navideña puertorriqueña, así como también, música clásica, jazz y música comercial. En el verano de 2016 fue su primer concierto internacional llevado a cabo en Sevilla, España. En esa ocasión, el Municipio de Guayanilla le otorgó un reconocimiento. También han tenido la oportunidad de llevar su música a universidades en Los Estados Unidos de América."}<br></br><br></br>
              {"Fue maestro de vientos metales en el Programa de Música 100x35 y la Escuela Preparatoria del Conservatorio de Música de Puerto Rico. También, ha participado en charlas educativa en St. Thomas con el conjunto Metales del Adoquín. Actualmente es maestro de viento metal en la Escuela Especializada en Música Jesús T. Piñero en el pueblo de Cidra y además ofrece charlas educativas en escuelas públicas y privadas con el Puerto Rican Trombone Ensemble."}<br></br><br></br>
              </p>
            </div>
            
            </div>
            
          </div>
        </div>
        
            
    </div>
  );
}
