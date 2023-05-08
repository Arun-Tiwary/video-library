import { Grid, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import CardVideo from "./card";

const VideoList = () => {
  //getting values from global store

  const { videoList } = useSelector((state) => state.video);

  console.log(videoList);
  return (
    <div>
      <Typography>I am Video List</Typography>
      <Grid
        sx={{ margin: "2px" }}
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {videoList.map((video, index) => (
          <Grid item xs={2} sm={4} md={4} key={index} container>
            <CardVideo id={video.id} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default VideoList;
