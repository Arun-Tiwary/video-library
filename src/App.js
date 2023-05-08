import { useEffect } from "react";
import "./App.css";
import { serverRequest } from "./api/serverRequests";
import AppRouter from "./routers/index";
import { BrowserRouter } from "react-router-dom";
import { useDispatch } from "react-redux";
import { SET_VIDEO_LIST } from "./redux/actions/actionTypes";

function App() {
  //disaptch for dispatching data to reducer
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchData() {
      try {
        const {
          response: { videos },
        } = await serverRequest("api/videos", "GET");
        console.log(videos);
        dispatch({ type: SET_VIDEO_LIST, payload: videos });
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </div>
  );
}

export default App;
