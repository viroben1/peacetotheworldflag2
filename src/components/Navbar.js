import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-green-500 p-4">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-white text-2xl font-bold"></Link>
          <ul className="flex space-x-4">
            <li>
              <NavLink
                to="/home"
                className="text-white"
                activeStyle={{ backgroundColor: 'white', color: 'black' }}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className="text-white"
                activeStyle={{ backgroundColor: 'white', color: 'black' }}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/flag" // This should match the route path for FlagPage
                className="text-white"
                activeStyle={{ backgroundColor: 'white', color: 'black' }}
              >
                Flag
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/privacy"
                className="text-white"
                activeStyle={{ backgroundColor: 'white', color: 'black' }}
              >
                Privacy Policy
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/refund"
                className="text-white"
                activeStyle={{ backgroundColor: 'white', color: 'black' }}
              >
                Refund Policy
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/delivery"
                className="text-white"
                activeStyle={{ backgroundColor: 'white', color: 'black' }}
              >
                Delivery Policy
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/terms"
                className="text-white"
                activeStyle={{ backgroundColor: 'white', color: 'black' }}
              >
                Terms and Conditions
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
