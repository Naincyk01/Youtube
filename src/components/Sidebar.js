import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { MdEmojiEvents } from "react-icons/md";
import { GoVideo } from "react-icons/go";
import { CgLivePhoto } from "react-icons/cg";
import { PiMusicNote } from "react-icons/pi";
import { SiYoutubegaming } from "react-icons/si";
import { BiSolidMoviePlay } from "react-icons/bi";
import { FaDemocrat } from "react-icons/fa";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  //Early return
  if (!isMenuOpen) return null;

  return (
    <div className="p-4 shadow-lg h-fit m-2 ">
      <ul>
        <li className="flex flex-wrap m-2 ">
          <AiFillHome className="mt-1 mr-3" />
          <Link to="/">Home</Link>
        </li>

        <li className=" flex flex-wrap m-2">
          <FaDemocrat  className="mt-2 mr-3 " />
          <Link to="/demo">Demo</Link>
        </li>

        <li className="flex flex-wrap m-2">
        <MdEmojiEvents  className="mt-2 mr-3"/>
        Sports
        </li>
        <li className="flex flex-wrap m-2">
        <GoVideo  className="mt-1 mr-3"/>
          Videos
          </li>
        <li className="flex flex-wrap m-2">
          <CgLivePhoto  className="mt-1 mr-3"/>
          Live
        </li>
      </ul>
      <h1 className="font-bold pt-5">Subscriptions</h1>
      <ul>
        <li className="flex flex-wrap m-2">
          <PiMusicNote  className="mt-1 mr-3"/>
          Music
        </li>
        <li className="flex flex-wrap m-2">
          <MdEmojiEvents className="mt-2 mr-3" />
          Sports
        </li>
        <li className="flex flex-wrap m-2">
          <SiYoutubegaming  className="mt-1 mr-3"/>
          Gaming
        </li>
        <li className="flex flex-wrap m-2">
          <BiSolidMoviePlay  className="mt-1 mr-3"/>
          Movies
        </li>
      </ul>
      <h1 className="font-bold pt-6">Watch Later</h1>
      <ul>
        <li className="flex flex-wrap m-2">
          <PiMusicNote  className="mt-1 mr-3"/>
          Music
        </li>
        <li className="flex flex-wrap m-2">
          <MdEmojiEvents className="mt-1 mr-3"/>
          Sports
        </li>
        <li className="flex flex-wrap m-2">
          <SiYoutubegaming  className="mt-1 mr-3"/>
          Gaming
        </li>
        <li className="flex flex-wrap m-2">
          <BiSolidMoviePlay className="mt-1 mr-3" />
          Movies
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
