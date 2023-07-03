import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  //Early return
  if (!isMenuOpen) return null;

  return (
    <div className="p-4 shadow-lg w-48">
      <ul>
        <li>
          <Link to="/">
            <AiFillHome/>
            Home
            </Link>
        </li>
        <li>
          <Link to="/demo">Demo</Link>
        </li>
        <li>Sports</li>
        <li>Videos</li>
        <li>Live</li>
        
      </ul>
      <h1 className="font-bold pt-5">Subscriptions</h1>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>
      <h1 className="font-bold pt-6">Watch Later</h1>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>
    </div>
  );
};

export default Sidebar;
