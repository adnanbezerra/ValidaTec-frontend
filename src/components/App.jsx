import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "../assets/styles/GlobalStyle";
import SearchContext from "./contexts/SearchContext";
import UserContext from "./contexts/UserContext";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import MyProjectPage from "./pages/MyProjectsPage/MyProjectsPage";
import ProjectPage from "./pages/ProjectPage/ProjectPage";
import Register from "./pages/Register/Register";
import CreateProject from "./pages/RegisterProject/CreateProject";
import UserScreen from "./pages/User/UserScreen";

function App() {
  const [user, setUser] = useState({});
  const [search, setSearch] = useState("");

  return (
    <SearchContext.Provider value={{ search, setSearch }}>
      <UserContext.Provider value={{ user, setUser }}>
        <GlobalStyle />

        <BrowserRouter>
          <Routes>
            <Route path={"/"} element={<Home />} />
            <Route path={"/login"} element={<Login />} />
            <Route path={"/register"} element={<Register />} />
            <Route path={"/user"} element={<UserScreen />} />
            <Route path={"/register-project"} element={<CreateProject />} />
            <Route path={"/my-projects"} element={<MyProjectPage />} />
            <Route path={"/project/:id"} element={<ProjectPage />} />
          </Routes>
        </BrowserRouter>
      </UserContext.Provider>
    </SearchContext.Provider>
  );
}

export default App;
