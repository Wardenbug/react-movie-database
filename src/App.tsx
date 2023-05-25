import "./App.css";
import { Route, Routes } from "react-router-dom";
import { MainPage } from "./pages/main";
import { Header } from "./components";

function App() {
  return (
    <div>
      <Header />
      <div className="flex">
        <div className="flex-1 flex flex-col">
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/movies" element={<MainPage />} />
            <Route path="/series" element={<MainPage />} />
            <Route path="/actors" element={<MainPage />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
