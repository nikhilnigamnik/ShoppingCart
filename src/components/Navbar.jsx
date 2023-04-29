import React from "react";
import logo from "../assets/logo.png";
import { FaShoppingCart } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-blue-500">
      <div className="flex flex-row justify-between">

        <NavLink to="/">
          <div>
            <img src={logo} width={100} />
          </div>
        </NavLink>

        <div className="flex">

          <NavLink to="/">
            <p>Home</p>
          </NavLink>

          <NavLink to="/cart">
            <div>
              <FaShoppingCart />
            </div>
          </NavLink>

        </div>

      </div>
    </div>
  );
};

export default Navbar;
