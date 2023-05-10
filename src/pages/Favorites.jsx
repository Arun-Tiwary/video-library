import { Button, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import CardVideo from "../components/video/card";
import { NavLink, useNavigate } from "react-router-dom";

const Favorites = () => {
  // taking global values from redux;
  const { likedVideos } = useSelector((state) => state.video);

  //
  const navigate = useNavigate();
  return (
    <div>
      <Typography>I am Favorites</Typography>
      {likedVideos.map((_id) => (
        <Grid>
          <CardVideo id={_id} />
        </Grid>
      ))}
      {likedVideos.length === 0 && (
        <div>
          {" "}
          <Typography>There are no videos to showcase </Typography>
          <Button variant="contained" onClick={() => navigate("/videos")}>
            Chceckout Videos
          </Button>
        </div>
      )}
    </div>
  );
};

export default Favorites;
