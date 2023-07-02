import React, { useEffect } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomName, makeRandomMessage } from "../utils/helper";


const LiveChat = () => {
  

  const dispatch = useDispatch();
  const chatMessages = useSelector((store)=>store.chat.messages);
  useEffect(() => {
    const i = setInterval(() => {
      //API Polling
// console.log("API");

dispatch(addMessage({
  name:generateRandomName(),
  message:makeRandomMessage(15)+"🙂",
})
);

    }, 500);
    return () => clearInterval(i);
  }, []);

  return (
    <div className="border border-black ml-2 p-2 h-[480px] w-full bg-slate-50 rounded-lg overflow-y-scroll flex flex-col-reverse">
      {chatMessages.map((c,i)=>(
        // don't use indexes as keys 
      <ChatMessage key={i} name={c.name} message={c.message}/>
      ))
      }
    </div>
  );
};

export default LiveChat;
