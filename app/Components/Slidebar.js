"use client";

const Slidebar = ({ inparr }) => {
  return (
    <sidebar className="border-black border-2 w-1/5 h-full absolute bg-black px-10 pt-5">
      <button className="text-white font-semibold text-sm flex justify-between items-center w-full ">
        <img className="rounded-full " src="/chatgptLogo.svg"></img>
        New chat
      </button>
      <div className="queries text-white text-sm items-start flex flex-col ">
        <button className="text-nowrap w-full text-left">
          <ul className="pt-6">
            {inparr.map(
              (item, index) =>
                index != 0 && (
                  <li
                    key={index}
                    className="bg-gray-800 p-2 m-1 text-sm rounded-lg text-nowrap hover:bg-gray-900"
                  >
                    {item}
                  </li>
                )
            )}
          </ul>
        </button>
      </div>
      <div className="upgrade text-white text-xs flex flex-col gap-5 absolute bottom-6 ">
        <div>
          UPGRADE Plan
          <p className="text-xs text-gray-400">
            Get GPT-4 ,DALL-E and many more
          </p>
        </div>
        <div className="flex items-center justify-start gap-1 font-semibold my-2">
          <img className="" src="/g1.png"></img> Yousuf Habib
        </div>
      </div>
    </sidebar>
  );
};

export default Slidebar;
