import { useCallback, useState, useEffect, useRef } from "react";
import "./App.css";

function App() {
  const [lenght, setlenght] = useState(8); // this is used beacause  we have to  we need to track lenght as  it is there
  const [noallwd, setnoalld] = useState(false);
  const [charallwd, setcharallwd] = useState(false);
  const [password, setpassword] = useState("");
  // use of refhook
  const passwordref = useRef(null);
  // const passwordgenerator = useCallback( fn, [lenght , noallwd , charallwd ,setpassword]) //   uescallback is used  for re-rendering
  const passwordgenerator = useCallback(() => {
    let pass = "";
    let str = "hjkvdkjdhvklvhkljhlkjlskjsljfl;jldfj";
    if (noallwd) str += "01223456789";
    if (charallwd) str += "!@#$%{}]{|*&~/";
    for (let i = 1; i < lenght; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setpassword(pass);
  }, [lenght, noallwd, charallwd, setpassword]); // setpasword is given here for  optimization (memomization)
  const copy_password = useCallback(()=>{
    window.navigator.clipboard.writeText(password)
  },[password])
  useEffect(() => {
    passwordgenerator();
  }, [lenght, noallwd, charallwd, passwordgenerator]); // it takes   two parameters callback  and depedencies array
  return (
    <>
      <h1 className="text-white">password generator</h1>
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
          type="text"
          value={password}
          className="outline-none w-full py-1 px-3"
          placeholder="password"
          readOnly
          id=""
          ref={passwordref}
        />
        <button
          onClick={copy_password}
          className="outline-none bg-blue-300 text-white"
        >
          copy
        </button>
      </div>
      <div className="flex text-sm gap-x-2">
        <div className="flex items-center gap-1"></div>
        <input
          type="range"
          value={lenght}
          min={0}
          max={100}
          className=" cursor point"
          onChange={(e) => {
            setlenght(e.target.value);
          }}
        />
        <label>lenght : {lenght} </label>
        <div className="flex items-center gap-1">
          <input
            type="checkbox"
            defaultChecked={noallwd}
            id="numberinput"
            onChange={() => {
              setnoalld((prev) => !prev);
            }}
          />
          <label htmlFor="numberinput">Numbers</label>
        </div>
        <div className="flex items-center gap-1">
          <input
            type="checkbox"
            defaultChecked={charallwd}
            id="charinput"
            onChange={() => {
              setcharallwd((prev) => !prev);
            }}
          />
          <label htmlFor="charinput">characters</label>
        </div>
      </div>
    </>
  );
}

export default App;
