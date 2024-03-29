/*eslint-disable*/
import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
// react components for routing our app without refresh
import { Link } from "react-router-dom";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";

// @material-ui/icons
import { Apps, CloudDownload } from "@material-ui/icons";

// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-react/components/headerLinksStyle.js";


const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const classes = useStyles();
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
      <Link to="/" className={classes.navLink}>
              Home
        </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
      <Link to="/Nosotros" className={classes.navLink}>
              Nosotros
        </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          buttonText="Integrantes"
          buttonProps={{
            className: classes.navLink,
            color: "transparent"
          }}
          // buttonIcon={Apps}
          dropdownList={[
          <Link to={"/royfguzman"} className={classes.dropdownLink}>
              Roy F Guzmán Rodriguez
          </Link>,
          <Link to={"/gabrielsuarez"} className={classes.dropdownLink}>
          Gabriel Suárez
      </Link>,
      <Link to={"/valeriacotto"} className={classes.dropdownLink}>
      Valeria Cotto
  </Link>,
  <Link to={"/elimaralicia"} className={classes.dropdownLink}>
  Elimar Alicia Chardón
</Link>,
<Link to={"/chrystalvillalongo"} className={classes.dropdownLink}>
  Chrystal Villalongo
</Link>,
<Link to={"/juanohalloran"} className={classes.dropdownLink}>
  Juan Luis O'Halloran
</Link>
          ]}
        />
      </ListItem>  
      <ListItem className={classes.listItem}>
      <Link to="/audio" className={classes.navLink}>
              Audio
        </Link>
      </ListItem> 
      
      {/* <ListItem className={classes.listItem}> */}
        {/*<Tooltip title="Delete">
          <IconButton aria-label="Delete">
            <DeleteIcon />
          </IconButton>
        </Tooltip>*/}
        {/* <Tooltip
          id="instagram-twitter"
          title="Follow us on twitter"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }} >*/}
        
          {/* <Button
            href="https://twitter.com/CreativeTim?ref=creativetim"
            target="_blank"
            color="transparent"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-twitter"} />
          </Button>
        </Tooltip> 
      </ListItem>*/}
      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-facebook"
          title="Follow us on facebook"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="https://www.facebook.com/CMEPR-Colectivo-de-M%C3%BAsica-Experimental-de-Puerto-Rico-100302645397366"
            target="_blank"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-facebook"} />
          </Button>
        </Tooltip>
      </ListItem>
     
    </List>
  );
}
