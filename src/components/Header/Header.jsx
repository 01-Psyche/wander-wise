import React from "react";
import { Autocomplete } from "@react-google-maps/api";

import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  InputBase,
  IconButton,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

import useStyles from "./style.js";

const Header = () => {
  const classes = useStyles();

  return (
    <AppBar position="static" className={classes.appBar}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box>
          <Typography
            variant="h5"
            fontWeight={800}
            className={classes.appbarText}
          >
            WanderWise
          </Typography>
        </Box>
        <Box className={classes.exploreBox}>
          <Typography variant="h7" className={classes.explore}>
            Explore New Places
          </Typography>
          {/* <Autocomplete> */}
          <Box className={classes.search}>
            <InputBase placeholder="|" />
            <IconButton>
              <SearchIcon fontSize="small" />
            </IconButton>
          </Box>
          {/* </Autocomplete> */}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
