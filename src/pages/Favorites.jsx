import { Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import CardVideo from "../components/video/card";

const Favorites = () => {
  // taking global values from redux;
  const { likedVideos } = useSelector((state) => state.video);
  return (
    <div>
      <Typography>I am Faorites</Typography>
      {likedVideos.map((_id) => (
        <Grid>
          <CardVideo id={_id} />
        </Grid>
      ))}
    </div>
  );
};

export default Favorites;
