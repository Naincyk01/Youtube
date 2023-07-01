import React, { useEffect } from "react";
import ChatMessage from "./ChatMessage";

const LiveChat = () => {

useEffect(()=>{
    const i = setInterval(()=>{
        //API Polling
    },2000);
    return ()=> clearInterval(i);
},[]);


  return (
  <div className="border border-black ml-2 p-2 h-[480px] w-full bg-slate-50 rounded-lg">
<ChatMessage name="Lakshya kumar" message="Good Vibes😍"/>

    </div>
  )
}

export default LiveChat;