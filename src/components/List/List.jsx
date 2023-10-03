import React, { useState } from "react";
import {
  Typography,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  Box,
  Grid,
  Rating,
} from "@mui/material";

import useStyles from "./style.js";
import PlaceDetails from "../PlaceDetails/PlaceDetails.jsx";

const List = () => {
  const classes = useStyles();
  const [type, setType] = useState("");
  const [rating, setRating] = useState("");

  const places = [
    { name: "Paris Restaurant" },
    { name: "Eiffiel Tower" },
    { name: "Italy Restaurant" },
    { name: "London Bridge" },
    { name: "London Restaurant" },
  ];

  return (
    <div className={classes.container}>
      <Typography
        variant="h7"
        fontWeight={400}
        className={classes.header}
        gutterBottom
      >
        Restaurants, Hotels & Attractions near you
      </Typography>
      <Box>
        <FormControl
          sx={{ mr: 1 }}
          variant="filled"
          className={classes.typeControl}
        >
          <InputLabel sx={{ color: "rgb(239, 250, 208)" }}>Select</InputLabel>
          <Select
            className={classes.select}
            sx={{ color: "white" }}
            value={type}
            onChange={(e) => setType(e.target.value)}
          >
            <MenuItem value="restaurants">Restaurants</MenuItem>
            <MenuItem value="hotels">Hotels</MenuItem>
            <MenuItem value="atrractions">Atrractions</MenuItem>
          </Select>
        </FormControl>
        <FormControl variant="filled" className={classes.ratingControl}>
          <InputLabel sx={{ color: "rgb(239, 250, 208)" }}>Rating</InputLabel>
          <Select
            className={classes.select}
            sx={{ color: "white" }}
            value={rating}
            onChange={(e) => setRating(e.target.value)}
          >
            <MenuItem value={0}>All</MenuItem>
            <MenuItem value={4}>Above ⭐⭐⭐⭐</MenuItem>
            <MenuItem value={3}>Above ⭐⭐⭐</MenuItem>
            <MenuItem value={2}>Above ⭐⭐</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Grid container spacing={3} classname={classes.List}>
        {places?.map((place, i) => (
          <Grid item key={i} xs={12}>
            <PlaceDetails place={place} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default List;
