import "./App.css";
import { Route, Routes } from "react-router-dom";
import MainPage from "./components/MainPage";
import Play from "./components/Play";
import Statistics from "./components/Statistics";
import { callTheApi } from "./redux/QuestionsSlice";
import { useDispatch } from "react-redux"
import {useEffect} from "react"

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(callTheApi());
  }, []);
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/play" element={<Play />}></Route>
        <Route path="/statistics" element={<Statistics />}></Route>
      </Routes>
    </div>
  );
}

export default App;
