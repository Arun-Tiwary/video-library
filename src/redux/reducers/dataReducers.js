import {
  SEARCHING,
  SET_VIDEO_LIST,
  TOGGLE_BOOKMARK,
  TOGGLE_FAV,
  TOGGLE_PLAYLIST,
} from "../actions/actionTypes";

const initialState = {
  videoList: [],
  likedVideos: [],
  bookmark: [],
  playlist: [
    {
      name: "watchLater",
      videos: [],
    },
    {
      name: "bookmark",
      videos: [],
    },
  ], //playlist
  toastMsg: "",
  searchValue: "",
};

export const dataReducer = (state = initialState, action) => {
  console.log(state.likedVideos, "dataReducer");
  switch (action.type) {
    case SET_VIDEO_LIST:
      return { ...state, videoList: action.payload };

    case TOGGLE_FAV:
      return {
        ...state,
        likedVideos: state.likedVideos.some(
          (video_id) => video_id === action.payload
        )
          ? state.likedVideos.filter((video_id) => video_id !== action.payload)
          : [...state.likedVideos, action.payload],
      };

    case TOGGLE_BOOKMARK:
      return {
        ...state,
        bookmark: state.bookmark.some((id) => id === action.payload)
          ? state.bookmark.filter((_id) => _id !== action.payload)
          : [...state.bookmark, action.payload],
      };

    case SEARCHING:
      return {
        ...state,
        searchValue: action.payload,
      };

    // case TOGGLE_BOOKMARK:
    //   return {
    //     ...state,
    //     playlist: state.playlist.map((item) =>
    //       item.name === "bookmark"
    //         ? {
    //             ...(item.videos.some((_id) => _id === action.payload)
    //               ? item.videos.filter((item_id) => item_id !== action.payload)
    //               : [...item.videos, action.payload]),
    //           }
    //         : item
    //     ),
    //   };

    // case TOGGLE_PLAYLIST:
    //   const list = state.playlist.find(
    //     (item) => item.name === action.payload.name
    //   );
    //   const videoFlag = list.videos.some((_id) => _id === action.payload.id);
    //   return {
    //     ...state,
    //     playlist: state.playlist.map((librarylistItem) =>
    //       librarylistItem.name === list
    //         ? {
    //             ...librarylistItem,
    //             videos: videoFlag
    //               ? librarylistItem.videos.filter(
    //                   (_id) => _id === action.payload.id
    //                 )
    //               : {
    //                   ...librarylistItem,
    //                   videos: [...librarylistItem.videos, action.payload],
    //                 },
    //           }
    //         : librarylistItem
    //     ),
    // playlist: state.playlist.map((item) => item.name === payload.name ? {...item, videos: videos.some((_id) => _id === payload.id ? item.videos.filter((videoId) => videoId !== payload.id : item.videos.concat(payload.id) ))})

    default:
      return state;
  }
};
