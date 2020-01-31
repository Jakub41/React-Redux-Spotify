import React from "react";
import { Route, Switch, Prompt } from "react-router";
import { BrowserRouter } from "react-router-dom";
import "./App.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Artist from "./Pages/Artist.jsx";
import Search from "./Pages/Search.jsx";
import Home from "./Pages/Home.jsx";
import Album from "./Pages/Album.jsx";
import Sidebar from "./Components/Sidebar/Sidebar.jsx";
import Sidenav from "./Components/Sidenav/Sidenav.jsx";

function App() {
  return (
    <div>
      <BrowserRouter basename="/">
        <Sidebar />
        <Sidenav />
        <Switch>
          <Route exact path="/" component={Home} />

          <Route exact path="/pages/search" component={Search} />

          <Route path="/pages/artist" component={Artist} />

          <Route path="/pages/album" component={Album} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
