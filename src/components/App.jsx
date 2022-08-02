import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GlobalStyle from '../assets/styles/GlobalStyle';
import SearchContext from './contexts/SearchContext';
import UserContext from './contexts/UserContext';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';

function App() {
  const [user, setUser] = useState({});
  const [search, setSearch] = useState("")

  return (
    <SearchContext.Provider value={{ search, setSearch }}>
      <UserContext.Provider value={{ user, setUser }}>
        <GlobalStyle />

        <BrowserRouter>
          <Routes>
            <Route path={'/'} element={<Home />} />
            <Route path={'/login'} element={<Login />} />
            <Route path={'/register'} element={<Register />} />
          </Routes>
        </BrowserRouter >
      </UserContext.Provider>
    </SearchContext.Provider>
  )
}

export default App;
