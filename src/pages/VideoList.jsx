import { Grid, Box } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import CardVideo from "../components/video/card";
import { getFilterdVideo } from "../utils/videoUtil";

const VideoList = () => {
  //getting values from global store
  const { videoList, searchValue } = useSelector((state) => state.video);

  const filterdVideoList = getFilterdVideo(videoList, searchValue);
  console.log(filterdVideoList);

  return (
    <div>
      <Grid
        columnSpacing={{ xs: 1, sm: 2, md: 5 }}
        xs={12}
        container
        spacing={2}
        sx={{ margin: "0" }}

        // columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {videoList.map((video, index) => (
          <Grid
            item
            md={4}
            key={index}
            container
            sx={{ justifyContent: "center" }}
          >
            <Box sx={{ marginBottom: "20px" }}>
              <CardVideo id={video.id} />
            </Box>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default VideoList;
