import "./App.css";
import { Route, Routes } from "react-router-dom";
import { MainPage } from "./pages/main";
import { HomePage } from "./pages/home";
import { ErrorPage } from "./pages/404";
import { Header, Footer } from "./components";
import { TitlePage } from "./pages/title";
import { RoutePaths } from "./routes/routes";

function App() {
  return (
    <div>
      <Header />
      <div className="flex min-h-full">
        <div className="flex-1 flex flex-col min-h-full">
          <Routes>
            <Route path={RoutePaths.Home} element={<HomePage />} />
            <Route path={RoutePaths.Movies} element={<MainPage />} />
            <Route path={RoutePaths.Series} element={<MainPage />} />
            <Route path={`${RoutePaths.Title}/:id`} element={<TitlePage />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
