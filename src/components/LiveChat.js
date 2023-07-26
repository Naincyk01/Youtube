import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomName, makeRandomMessage } from "../utils/helper";

const LiveChat = () => {

const [liveMessage,setliveMessage]= useState("")

  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chat.messages);
  useEffect(() => {
    const i = setInterval(() => {
      //API Polling
      // console.log("API");

      dispatch(
        addMessage({
          name: generateRandomName(),
          message: makeRandomMessage(10) + "🙂",
        })
      );
    }, 2000);
    return () => clearInterval(i);
  }, []);

  return (
    <>
      <div className="border border-black ml-2 p-2 h-[480px] w-full bg-slate-50 rounded-lg overflow-y-scroll flex flex-col-reverse">
        <div>
          {chatMessages.map((c, i) => (
            // don't use indexes as keys
            <ChatMessage key={i} name={c.name} message={c.message} />
          ))}
        </div>
      </div>
      <form className="w-full p-2 m-2 border border-black " 
      onSubmit={(e)=>{
        e.preventDefault();
        console.log("Submit"+liveMessage);
        dispatch(
          addMessage({
            name:"naincy",
           message:liveMessage,
          
        })
        );
        setliveMessage("");
      }}>
        <input
         className="w-80 p-1"
          type="text"
           value={liveMessage}
            onChange={(e)=>{
              setliveMessage(e.target.value);
            }}/>
        <button className="px-2 mx-2 p-1 bg-green-100 border border-gray-700">Send</button>
      </form>
    </>
  );
};

export default LiveChat;
