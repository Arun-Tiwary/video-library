import React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";

import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";

import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useDispatch, useSelector } from "react-redux";
import {
  FAV_TOGGLE,
  WATCH_LATER_TOGGLE,
} from "../../redux/actions/actionTypes";

const CardVideo = ({ id }) => {
  // accesing global state
  const { videoList, likedVideos, watchLater } = useSelector(
    (state) => state.video
  );

  // dispatchin actions
  const dispatch = useDispatch();

  // taking all the values from id
  const { title, author, views, date } = videoList.find(
    (video) => video.id === id
  );

  // function to check if video already exsist in or not

  const videoExsist = (videoList, id) => videoList.some((_id) => _id === id);

  //console
  console.log(typeof videoExsist);

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        // avatar={
        //   <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
        //     R
        //   </Avatar>
        // }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={author}
        subheader={`${date}  ${views} views`}
      />
      <CardMedia
        component="img"
        height="194"
        image={`https://img.youtube.com/vi/${id}/hqdefault.jpg`}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {title}
        </Typography>
      </CardContent>
      <CardActions
        sx={{ justifyContent: "space-between" }}
        disableSpacing={false}
      >
        <IconButton aria-label="add to favorites">
          {videoExsist(likedVideos, id) ? (
            <FavoriteIcon
              onClick={() => dispatch({ type: FAV_TOGGLE, payload: id })}
            />
          ) : (
            <FavoriteBorderIcon
              onClick={() => dispatch({ type: FAV_TOGGLE, payload: id })}
            />
          )}
        </IconButton>
        <IconButton aria-label="playlist">
          {videoExsist(watchLater, id) ? (
            <BookmarkIcon
              onClick={() =>
                dispatch({ type: WATCH_LATER_TOGGLE, payload: id })
              }
            />
          ) : (
            <BookmarkBorderIcon
              onClick={() =>
                dispatch({ type: WATCH_LATER_TOGGLE, payload: id })
              }
            />
          )}
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default CardVideo;
