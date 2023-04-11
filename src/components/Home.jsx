import { useState } from "react";
import Menu from "./Menu";

function Home() {
  const [showMenu, setShowMenu] = useState(false)
  const menuTogglerHandler = ()=>{
    setShowMenu(!showMenu)
  }

  return (
    <div className="w-full h-screen flex flex-col items-center mt-40">
      <h1 className="text-4xl text-gray-300 font-black">How to make menu toggler in React.js</h1>
      <button onClick={menuTogglerHandler} className="w-36 h-16 mt-10 rounded-xl bg-slate-600 text-gray-200 text-lg ">
        Menu Toggler
      </button>
      {showMenu && <Menu/>}
    </div>
  );
}

export default Home;
