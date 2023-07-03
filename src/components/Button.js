import React from 'react'
// import { AiFillAlert } from "react-icons/ai";
// import { FaStarAndCrescent } from "react-icons/fa";

const Button = ({name}) => {
  return (
    <div>
        <button className="px-4 py-1 m-2 bg-gray-200 rounded-lg">
          {name}
          {/* <AiFillAlert className=''/>
          <FaStarAndCrescent/> */}
        </button>
    </div>
  )
}

export default Button