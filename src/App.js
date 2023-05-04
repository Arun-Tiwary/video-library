import { useEffect } from "react";
import "./App.css";
import { serverRequest } from "./api/serverRequests";
import AppRouter from "./routers/index";
import { BrowserRouter } from "react-router-dom";

function App() {
  useEffect(() => {
    const { data } = serverRequest("api/videos", "GET");
    console.log(data);
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
