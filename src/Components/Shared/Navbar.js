import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  const [profile, setProfile] = useState([])
  useEffect(()=>{
    fetch('https://damp-forest-59318.herokuapp.com/profile')
    .then(res=>res.json())
    .then(data=>{
      setProfile(data[0])
      console.log(data);
    })
  },[])
  const {pictureUrl, college, name}=profile;
  console.log(profile);
  const navItems = (
    <>
      <li>
        <NavLink to={'/findjobs'}>Find Jobs</NavLink>
      </li>
      <li>
        <NavLink to={'/about'}>About Us</NavLink>
      </li>
      <li>
        <NavLink to={'/contact'}>Contact Us</NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-[#8BB9C1] text-white lg:px-20">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabindex="0" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabindex="0"
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 gap-2 text-black"
          >
            {navItems}
          </ul>
        </div>
        <Link to={'/'} className="btn btn-ghost normal-case text-xl">Dhamija Jobs</Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0 gap-2" >{navItems}</ul>
      </div>
      <div className="navbar-end">
        <div className="dropdown dropdown-end">
          <label tabindex="0" className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src={pictureUrl} alt="" />
            </div>
          </label>
          <ul
            tabindex="0"
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 gap-2"
          >
            
            <li>
              <p className="text-black">{name}</p>
            </li>
            <li>
              <p className="text-black">{college}</p>
            </li>
            <li>
              <a href="T" className="bg-primary text-white">Sign Out</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
