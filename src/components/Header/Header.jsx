import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="flex px-3 py-4 border-1 justify-between bg-transparent">
      {/* Logo Section */}
      <div className="flex ml-20">
        <NavLink className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Kunal.
        </NavLink>
      </div>
      {/* Options */}
      <div className="flex mr-20 space-x-6 justify-center items-center">
        <button>Home</button>
        <button>About</button>
        <button>Skills</button>
        <button>Projects</button>
        <button>Skills</button>
        <button className="p-2 border-1 rounded-sm">
          <img src="src\assets\dark-mode.svg" className="size-5" />
        </button>
      </div>
    </header>
  );
};

export default Header;
