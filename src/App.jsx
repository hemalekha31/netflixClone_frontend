import "./App.css";
import { Routes, Route, BrowserRouter, Navigate, HashRouter } from "react-router-dom";
import Login from "./pages/Login";
import Signin from "./pages/Signin";
import Watch from "./pages/Watch";
import ProfilePage from "./pages/Profilepage";
import Homepage from "./pages/Homepage";
import Footer from "./components/Footer";
import GenrePage from "./pages/GenrePage";
import AccountPage from "./pages/AccountPage";
import Movies from "./pages/Movies";
import Newpopular from "./pages/Newpopular";
import Nav from "./components/Nav";
import Tvshow from "./pages/Tvshow";
import Search from "./pages/Search";
import Moviesdata from "./products/Home";
import Newmoviesdata from "./products/Newmovies";
import Tvdata from "./products/Tv";
import { useState } from "react";
import Moviedetails from "./pages/Moviedetails";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    return localStorage.getItem("isLoggedIn") === "true";
  });
const allData = [...Moviesdata, ...Tvdata, ...Newmoviesdata];

  return (
    <HashRouter>
      <Routes>
        {/* Public routes */}
        <Route path="/" element={<Login />} />
        <Route path="/signin" element={<Signin />} />
        <Route
          path="/account"
          element={
            isLoggedIn ? <AccountPage /> : <Navigate to="/signin" replace />
          }
        />
        {/* Protected routes */}
        <Route
          path="/watch"
          element={isLoggedIn ? <Watch /> : <Navigate to="/signin" replace />}
        />
        <Route
          path="/homepage"
          element={
            isLoggedIn ? <Homepage /> : <Navigate to="/signin" replace />
          }
        />
        <Route
          path="/profile/:name"
          element={
            isLoggedIn ? <ProfilePage /> : <Navigate to="/signin" replace />
          }
        />
        <Route
          path="/genre/:genre"
          element={
            isLoggedIn ? <GenrePage /> : <Navigate to="/signin" replace />
          }
        />
        <Route
          path="/movies"
          element={isLoggedIn ? <Movies /> : <Navigate to="/signin" replace />}
        />
        <Route
          path="/new&popular"
          element={
            isLoggedIn ? <Newpopular /> : <Navigate to="/signin" replace />
          }
        />
        <Route
          path="/tvshow"
          element={isLoggedIn ? <Tvshow /> : <Navigate to="/signin" replace />}
        />
        <Route
          path="/search"
          element={
            <Search allData={[...Moviesdata, ...Tvdata, ...Newmoviesdata]} />
          }
        />
        <Route path="/movie/:id" element={<Moviedetails allData={allData}/>}/>
      </Routes>
      <Footer />
    </HashRouter>
  );
}

export default App;
