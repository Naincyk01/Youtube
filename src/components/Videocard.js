import React from "react";

const Videocard = ({ info }) => {
  const{snippet,statistics} = info;
  const {channelTitle, title, thumbnails}=snippet;
  return (
   <div className="p-2 m-2 mr-3 w-64 shadow-lg h-96">
    <img className="rounded-lg " alt="thumbnail" src={thumbnails.medium.url}/>
    <ul>
      <li className="font-bold py-2">{title}</li>
      <li className="mt-2">{channelTitle}</li>
      <li className="mt-1">{statistics.viewCount} views</li>
    </ul>
   </div>
  );
};
export const AdVideocard = ({info})=>{
  return(
    <div className="p-1 m-1 ">
      {/* <Videocard info = {info} />  */}
    </div>
  )
}



export default Videocard;
