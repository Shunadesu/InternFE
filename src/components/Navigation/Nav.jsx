import React from 'react'
import {navigation} from '../../utilils/contants'
import {NavLink} from 'react-router-dom'



const Nav = () => {
  return (
    <div className="w-full h-[48px] py-2 border-y text-sm flex items-center lg:px-[30px]">
      {navigation.map((el) => (
        <NavLink
          to={el.path}
          key={el.id}
          className={({ isActive }) =>
            isActive
              ? "pr-12 hover:text-main text-main"
              : "pr-12 hover:text-main"
          }
        >
          {el.value}
        </NavLink>
      ))}
    </div>
  )
}

export default Nav