import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";

//LLD:
// Body
//  -Header
//      -logo
//      -search
//          -input:text
//          -search button
//      -Nav Iteams

const Header = () => {
  return (
    <div className="bg-gray-800 px-6">
      <div className="flex justify-between h-16">
        {/* Logo */}
        <div className=" flex items-center">
          <img
            className="block h-11 w-auto"
            src="https://w7.pngwing.com/pngs/294/812/png-transparent-monkey-cartoon-drawing-illustration-happy-little-monkey-brown-and-beige-monkey-sticker-comics-mammal-cat-like-mammal-thumbnail.png"
          />
        </div>
        {/* Search bar */}
        <div className="flex items-center justify-center ">
          <div className="block">
            <input
              type="text"
              placeholder="Search"
              className="bg-gray-200 text-gray-800 px-4 py-2 "
            />
            <button className="bg-blue-500 text-white px-4 py-2">Search</button>
          </div>
        </div>
        {/* Navigation items */}
        <div className="block">
          <div className="flex items-center justify-center py-3">
            <a
              href="#"
              className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 text-sm font-medium"
            >
              Home
            </a>
            <a
              href="#"
              className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2  text-sm font-medium"
            >
              About
            </a>
            <a
              href="#"
              className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2  text-sm font-medium"
            >
              Career
            </a>
            <a
              href="#"
              className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2  text-sm font-medium"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body_container">
      <Header />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Body />);
