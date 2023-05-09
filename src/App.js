import { useEffect } from "react";
import "./App.css";
import { serverRequest } from "./api/serverRequests";
import AppRouter from "./routers/index";
import { BrowserRouter, HashRouter } from "react-router-dom";
import { useDispatch } from "react-redux";
import { SET_VIDEO_LIST } from "./redux/actions/actionTypes";
import HeaderNavigation from "./components/navigation/HeaderNavigtion";

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="App">
      <HashRouter>
        <HeaderNavigation />
        <AppRouter />
      </HashRouter>
    </div>
  );
}

export default App;
