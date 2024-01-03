import React, { useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import path from '../../utilils/path'
import Swal from 'sweetalert2';
const TopHeader = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
    Swal.fire({
        icon: "success",
        title: "Logout Success",
        text: "Sunny",
    });
  }
  return (
    
    <div className=" w-full bg-main flex justify-center items-center">
      <div className="w-full h-[38px] px-4 flex items-center justify-between text-xs text-white">
        <span>ORDER ONLINE OR CALL US (+1800) 000 8808</span>
        {
          (!token ? 
            <Link className="hover:text-gray-800" to={`/${path.LOGIN}`}>
              Sign In or Create Account
            </Link>
            :
            <Link className="hover:text-gray-800" onClick={()=> handleLogout()}>
              Log Out
            </Link>
          )
        }
      </div>
    </div>
    
    
  )
}

export default TopHeader