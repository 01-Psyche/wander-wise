import React from "react";

import GoogleMapReact from "google-map-react";

import { Typography, Paper, Box, useMediaQuery } from "@mui/material";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import Rating from "@mui/material/Rating";

import useStyles from "./style.js";

const Map = () => {
  const classes = useStyles();
  const isMobile = useMediaQuery("(min-width:600px)");

  const center = { lat: 48.858093, lng: 2.294694 };

  return (
    <Box className={classes.mapContainer}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyDZLqpmy8nAnE4IpSnUPAOiCgJZjMGNAtM" }}
        defaultCenter={center}
        center={center}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        // options={""}
        // onChange={""}
        // onChildClick={""}
      ></GoogleMapReact>
    </Box>
  );
};

export default Map;
