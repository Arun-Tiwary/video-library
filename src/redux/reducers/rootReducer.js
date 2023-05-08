import { combineReducers } from "@reduxjs/toolkit";
import { dataReducer } from "./dataReducers";

const rootReducer = combineReducers({
  video: dataReducer,
});

export default rootReducer;
