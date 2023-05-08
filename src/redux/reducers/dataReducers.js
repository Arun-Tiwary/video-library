import {
  FAV_TOGGLE,
  SET_VIDEO_LIST,
  WATCH_LATER_TOGGLE,
} from "../actions/actionTypes";

const initialState = {
  videoList: [],
  likedVideos: [""],
  watchLater: [""], //playlist
  toastMsg: "",
  searchValue: "",
};

export const dataReducer = (state = initialState, action) => {
  console.log(state.likedVideos, "dataReducer");
  switch (action.type) {
    case SET_VIDEO_LIST:
      return { ...state, videoList: action.payload };

    case FAV_TOGGLE:
      return {
        ...state,
        likedVideos: state.likedVideos.some((id) => id === action.payload)
          ? state.likedVideos.filter((id) => id !== action.payload)
          : [...state.likedVideos, action.payload],
        // state.likedVideos.push(action.payload),
      };

    case WATCH_LATER_TOGGLE:
      return {
        ...state,
        watchLater: state.watchLater.some((id) => id === action.payload)
          ? state.watchLater.filter((id) => id !== action.payload)
          : [...state.watchLater, action.payload],
      };

    default:
      return state;
  }
};
