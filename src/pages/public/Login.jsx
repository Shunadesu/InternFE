import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { loginApi } from '../../apis/Service';
import icons from '../../utilils/icon';
import {toast} from 'react-toastify';
import Swal from 'sweetalert2';

import 'react-toastify/dist/ReactToastify.css'

const Login = () => {

  const navigate = useNavigate();

  const {FaEye, FaEyeSlash, BsArrowCounterclockwise} = icons 
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [isShow, setIsShow] = useState(false)
  const [loading, setLoading] = useState(false);

  useEffect(()=>{
    let token = localStorage.getItem("token");
    if(token){
      navigate("/");
    }
  },[])

  const handleLogin = async () => {
    if(!email || !password){
      Swal.fire("Email/Password is required")
      return;
    }
    setLoading(true)
    let res = await loginApi(email, password);
    if(res && res.data.token){
      
      localStorage.setItem("token", res.data.token);
      Swal.fire({
        icon: "success",
        title: "Login Success",
        text: "Home Page",
      }) 
      navigate("/");
    }else{
      if(res && res.status === 400){
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: res.data.error,
        })       
      }
    }
    setLoading(false)
  }

  return (
    <div className='w-main lg:w-full h-full relative flex justify-around items-center'>  
      <div className="h-full flex flex-1 justify-center flex-col gap-6 border px-4">
        <label className='font-bold text-[42px] text-center' for="">Login Form</label>
        <span>
          If you do not have any account,
          <a href={`#`} className="text-red-500 hover:text-red-700 font-bold py-2 px-2 rounded focus:outline-none focus:shadow-outline"
          >Click here!</a>
        </span>
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
              Username
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Username"
              value={email}
              onChange={(e)=> setEmail(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <div className='relative flex justify-center items-center'>
            <input
              className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-gray-700  leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type={isShow === true ? "text" : "password"}
              placeholder="******************"
              value={password}
              onChange={(e)=> setPassword(e.target.value)}
            />
            <span className='absolute right-2' onClick={()=>setIsShow(!isShow)}>
              {
                isShow === true ? <FaEye /> : <FaEyeSlash />
              }
            </span>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className='flex gap-4 cursor-pointer'>
              <div
                className={email && password ? 
                'bg-blue-500 hover:bg-blue-700 gap-2 flex justify-center items-center text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline' 
                : 
                'bg-gray-500 hover:bg-gray-700 gap-2 flex justify-center items-center text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'}
                disabled={email && password ? false : true}
                onClick={() => handleLogin()}
              >
                Sign In
                {loading ? <BsArrowCounterclockwise /> : ''}
              </div>
              
            </div>
            <a
              className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
              href="#"
            >
              Forgot Password?
            </a>
          </div>
        </form>
        <Link to={`/`} className='w-[150px] text-center border bg-red-500 p-2 text-white font-semibold rounded-md hover:bg-red-700'>Go back</Link>
      </div>
      <img src="https://kenh14cdn.com/203336854389633024/2023/2/18/ezgif-4-dd67eaf4ed-1673794555889-16767306113391711907660.jpeg" className='flex flex-1 h-screen w-full object-cover lg:hidden' alt="" />
    </div>
  )
}

export default Login