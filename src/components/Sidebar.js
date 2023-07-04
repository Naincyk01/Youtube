import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { MdEmojiEvents } from "react-icons/md";
import { GoVideo } from "react-icons/go";
import { CgLivePhoto } from "react-icons/cg";
import { PiMusicNote} from "react-icons/pi";
import { SiYoutubegaming} from "react-icons/si";
import { BiSolidMoviePlay } from "react-icons/bi";
import { FaDemocrat } from "react-icons/fa";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  //Early return
  if (!isMenuOpen) return null;

  return (
    <div className="p-4 shadow-lg w-48">
      <ul>
        <li>
          <Link to="/">
            Home
            <AiFillHome/>
            </Link>
        </li>
        <li>
          <Link to="/demo">Demo
          <FaDemocrat/>
          </Link>
        </li>
        <li>
          Sports
          <MdEmojiEvents/>
          </li>
        <li>
          Videos
          <GoVideo/>
          </li>
        <li>
          Live
<CgLivePhoto/>
          </li>
        
      </ul>
      <h1 className="font-bold pt-5">Subscriptions</h1>
      <ul>
        <li>Music
          <PiMusicNote/>
        </li>
        <li>Sports
        <MdEmojiEvents/>
        </li>
        <li>Gaming
          <SiYoutubegaming/>
        </li>
        <li>Movies
          <BiSolidMoviePlay/>
        </li>
      </ul>
      <h1 className="font-bold pt-6">Watch Later</h1>
      <ul>
        <li>Music
        <PiMusicNote/>
        </li>
        <li>Sports
        <MdEmojiEvents/>
        </li>
        <li>Gaming
        <SiYoutubegaming/>
        </li>
        <li>Movies
        <BiSolidMoviePlay/>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
