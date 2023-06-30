import React, { useEffect, useState } from "react";
import { toggleMenu } from "../utils/appSlice";
import { useDispatch, useSelector } from "react-redux";
import { YOUTUBE_SEARCH_API } from "../utils/contants";
import { chacheResults } from "../utils/searchSlice";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions]=useState(false);

  const searchCache = useSelector((store)=>store.search);
  const dispatch = useDispatch();


  useEffect(() => {
    //API Call
    // console.log(searchQuery);

    //make an api call after every key press
    //but if the difference between 2 API calls is <200ms
    //decline the API Call

    const timer = setTimeout(() =>{
    if(searchCache[searchQuery]){
      setSuggestions(searchCache[searchQuery]);
    } else{
      getSearchSuggestions()
    }
    }, 200);
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  /*
   *
   *  key-i
   *     -render the component
   *     -useEffect();
   *     -start timer =>make api call after 200 ms
   *
   *
   *  key-ip
   *     -destroy the component(useEffect return method)
   *     -re-render the component
   *     -useEffect();
   *     -start timer =>make api call after 200 ms
   *
   *    setTimreout(200)-make an API call
   */

  const getSearchSuggestions = async () => {
    //console.log(searchQuery);
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    // console.log(json);
    setSuggestions(json[1]);


    //update cache
    dispatch(chacheResults({
      [searchQuery]:json[1],
    })
     );
  };

  

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="grid grid-flow-col p-3 m-1 shadow-lg">
      <div className="flex col-span-1">
        <img
          onClick={() => toggleMenuHandler()}
          className="h-4 cursor-pointer"
          alt="menu"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYlx9LyL-6QVyryY45WX228014MY3uK7ojiw&usqp=CAU
          "
        />
        <a href="/">
          <img
            className="h-5 mx-4"
            alt="youtube-logo"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeVy29wwv_3YlQT-l5pe04dj643TVuBTYIPPh7Ggv394a3ejYKEvUfDSVT-gJfUB6MCQ&usqp=CAU"
          />
        </a>
      </div>
      <div className="col-span-8 px-12">
        <div>
          <input
            className=" px-4 w-1/2 border border-gray-500 rounded-l-full p-1"
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={()=>setShowSuggestions(true)}
            onBlur={()=>setShowSuggestions(false)}
          />
          <button className="border border-gray-400 rounded-r-full px-3 py-1 bg-slate-100">
            🔍
          </button>
        </div>
        
        {showSuggestions && (<div className="fixed bg-white px-2 py-1 w-[24rem] shadow-lg rounded-lg border border-gray-100">
          <ul>
            {suggestions.map((s) =>(
              <li key={s} className=" py-2 px-3 shadow-sm hover:bg-gray-100">
                🔍{s}
              </li>
            ))}
          </ul>
        </div>)}
      </div>
      <div className="col-span-2">
        <img
          className="h-6"
          alt="user"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAvSc84dGZsdIkeorcnKHs1WrW--FR9lBjgw&usqp=CAU"
        />
      </div>
    </div>
  );
};

export default Head;
