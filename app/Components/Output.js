const Output = ({ array, inparr }) => {
  return (
    <div
      className="bg-gray-00 absolute w-[50%] h-[75%] top-12 left-[35%]  
      overflow-y-scroll overflow-hidden"
    >
      <div className="whitespace-pre-line mb-5 p-5 text-[1rem] text-gray-600 leading-7 overflow-auto ">
        <ul>
          {array.map((e, i) => (
            <div className="" key={i}>
              <div className=" pb-2 font-bold flex gap-2  items-center text-sm text-black">
                <img className="  w-7 rounded-full " src="/g1.png "></img>You
                <p className="whitespace-pre-line  text-gray-900 font-medium   ">
                  {inparr[i + 1]}
                </p>
              </div>
              <div className="font-bold pl-[2px] flex gap-2  items-center text-sm text-black">
                <img
                  className="  w-6 rounded-full "
                  src="/chatgptLogo.svg "
                ></img>
                ChatGPT
              </div>

              <li className="list-style-none pb-8">{e != "" && e}</li>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Output;
