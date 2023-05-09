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
import BookmarkIcon from "@mui/icons-material/Bookmark";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";

import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useDispatch, useSelector } from "react-redux";
import { TOGGLE_BOOKMARK, TOGGLE_FAV } from "../../redux/actions/actionTypes";
import { imageURL, videoExsist } from "../../utils/videoUtil";

const CardVideo = ({ id }) => {
  // accesing global state
  const { videoList, likedVideos, bookmark } = useSelector(
    (state) => state.video
  );

  // dispatchin actions
  const dispatch = useDispatch();

  // taking all the values from id
  const { title, author, views, date } = videoList.find(
    (video) => video.id === id
  );

  // function to check if video already exsist in or not

  // const videoExsist = (videoList, id) => videoList.some((_id) => _id === id);

  //console
  console.log(typeof videoExsist);

  return (
    <Card sx={{ maxWidth: 345, margin: "0 auto" }}>
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
        subheader={`${date}`}
      >
        {" "}
      </CardHeader>

      <CardMedia
        component="img"
        height="194"
        image={imageURL(id)}
        alt="Paella dish"
      />
      <CardContent>
        <Typography
          sx={{
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            overflow: "hidden",
          }}
          variant="body2"
          color="text.secondary"
        >
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
              onClick={() => dispatch({ type: TOGGLE_FAV, payload: id })}
            />
          ) : (
            <FavoriteBorderIcon
              onClick={() => dispatch({ type: TOGGLE_FAV, payload: id })}
            />
          )}
        </IconButton>
        <Typography>{`${views} views`}</Typography>
        <IconButton aria-label="playlist">
          {videoExsist(bookmark, id) ? (
            <BookmarkIcon
              onClick={() => dispatch({ type: TOGGLE_BOOKMARK, payload: id })}
            />
          ) : (
            <BookmarkBorderIcon
              onClick={() => dispatch({ type: TOGGLE_BOOKMARK, payload: id })}
            />
          )}
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default CardVideo;
