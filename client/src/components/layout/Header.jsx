import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="flex justify-between shadow-md p-6">
        <Link to="/">logo</Link>

        <div className="flex space-x-4 md:">
          <Link to="/" className="">
            Home
          </Link>
          <Link to="/products">
            {" "}
            <h4>Products</h4>
          </Link>
          <Link to="/customize">
            <h4 className="pr-2">Customizable </h4>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;
