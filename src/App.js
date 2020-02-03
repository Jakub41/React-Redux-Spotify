import React from "react";
import { Route, Switch } from "react-router";
import { BrowserRouter } from "react-router-dom";
import "./App.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Artist from "./Pages/Artist";
import Search from "./Pages/Search";
import Home from "./Pages/Home";
import Album from "./Pages/Album";
import Library from "./Pages/Library"
import Sidebar from "./Components/Sidebar/Sidebar";
import Sidenav from "./Components/Sidenav/Sidenav";


function App() {
  return (
    <div>
      <BrowserRouter basename="/">
        <Sidebar />
        <Sidenav />
        <Switch>
          <Route exact path="/" component={Home} />

          <Route exact path="/pages/library" component={Library} />

          <Route exact path="/pages/search" component={Search} />

          <Route path="/pages/artist" component={Artist} />

          <Route path="/pages/album" component={Album} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
