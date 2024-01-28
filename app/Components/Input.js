import { GoogleGenerativeAI } from "@google/generative-ai";

const API_KEY = "AIzaSyCiBst2h7RQVPVx31Zr3BS_7smKsqhJsfU";
const genAI = new GoogleGenerativeAI(API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-pro" });

const Input = ({ input, setinput, setoutput, setinpval }) => {
  const chat_ai = async () => {
    try {
      const prompt = input;
      const result = await model.generateContent(prompt);
      const response = await result.response;

      setoutput(response.text());
    } catch (error) {
      console.error("Error while generating content:", error);
      setoutput("I am sorry, I am unable to understand");
    }
  };

  const whenPressed = () => {
    input != "" && chat_ai();
    setinpval([input]);
    setinput("");
  };

  return (
    <>
      <div>
        <input
          className="border-gray-400 border-[1px] rounded-lg focus:outline-none text-sm absolute bottom-10 left-[35%] w-1/2 h-14 p-3"
          placeholder="Message ChatGPT"
          value={input}
          onChange={(e) => {
            setinput(e.target.value);
          }}
        />
        <button
          onClick={whenPressed}
          type="button"
          className="absolute bottom-[8%] left-[82%] text-gray-700 hover:bg-gray-700 hover:text-white focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700"
        >
          <svg
            className="w-4 h-4"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
          <span className="sr-only">Icon description</span>
        </button>
      </div>
    </>
  );
};

export default Input;
