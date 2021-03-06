import { container, title } from "assets/jss/material-kit-react.js";

import imagesStyle from "assets/jss/material-kit-react/imagesStyles.js";

const profilePageStyle = {
  container,
  profile: {
    textAlign: "center",
    "& img": {
      maxWidth: "250px",
      width: "100%",
      margin: "0 auto",
      transform: "translate3d(0, 30%, 0)"
    }
  },
  description: {
    margin: "1.071rem auto 0",
    maxWidth: "500px",
    color: "black",
    textAlign: "left !important"
  },
  name: {
    marginTop: "-150px"
  },
  ...imagesStyle,
  main: {
    background: "white",
    position: "relative",
    zIndex: "3"
  },
  mainRaised: {
    margin: "400px 100px 0px",
    borderRadius: "6px",
    boxShadow:
      "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)"
  },
  title: {
    ...title,
    display: "inline-block",
    position: "relative",
    marginTop: "300px",
    minHeight: "32px",
    textDecoration: "none"
  },
  socials: {
    marginTop: "50%",
    width: "100%",
    transform: "none",
    left: "0",
    top: "0",
    height: "100%",
    lineHeight: "41px",
    fontSize: "20px",
    color: "#999"
  },
  navWrapper: {
    margin: "20px auto 50px auto",
    textAlign: "auto"
  }
};

export default profilePageStyle;
