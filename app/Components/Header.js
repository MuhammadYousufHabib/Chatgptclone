import React from "react";

const Header = () => {
  return (
    <>
      <button className="  h-16 font-semibold text-black absolute left-[20%] flex justify-start items-center pl-10">
        ChatGPT <span className="text-gray-600 mx-1"> 3.5 </span>
      </button>
    </>
  );
};

export default Header;
