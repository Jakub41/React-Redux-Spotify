import React from "react";
import { Link } from "react-router-dom";
import { FaHome, FaBook, FaSearch } from "react-icons/fa";

function Sidenav() {
  return (
    <div className="bg-light border-right" id="sidebar-wrapper">
      <div className="list-group list-group-flush">
        <img
          src="https://cdn.worldvectorlogo.com/logos/spotify.svg"
          style={{
            filter: "invert(1)",
            width: "80px",
            margin: "auto",
            height: "80px"
          }}
        />
        <Link
          to="/"
          className="list-group-item list-group-item-action bg-light"
        >
          {" "}
          <FaHome /> Home
        </Link>
        <Link
          to="/pages/library"
          onClick={e => e.preventDefault}
          className="list-group-item list-group-item-action bg-light"
        >
          {" "}
          <FaBook /> Library
        </Link>
        <Link
          to="/pages/search"
          className="list-group-item list-group-item-action bg-light"
        >
          {" "}
          <FaSearch /> Search{" "}
        </Link>
      </div>
    </div>
  );
}
export default Sidenav;
