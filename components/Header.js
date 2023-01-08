import React from 'react'
import { BsFillMoonStarsFill } from "react-icons/bs";

const Header = ({setDarkMode, darkMode}) => {
  return (
    <nav className="py-10 mb-12 flex justify-between dark:text-white">
        <div className='flex flex-row align-center justify-around'>
            <h1 className="text-2xl  font-medium dark:text-white md:text-3xl">
              Ogbeide ENDURANCE
            </h1>
            <span className="font-burtons text-lg p-2 text-teal-600  dark:text-teal-400">GRAPHICS DESIGNER</span>

        </div>
            <ul className="flex items-center">
              <li>
                <a href="#" 
                  className="p-2 cursor-pointer text-xl hover:text-teal-600  dark:text-white"
                > Home</a>
              </li>
              <li>
                <a href="#" 
                  className="p-2 cursor-pointer text-xl dark:text-white hover:text-teal-600"
                > Project</a>
              </li>
              <li>
                <a href="#" 
                  className="p-2  cursor-pointer text-xl dark:text-white hover:text-teal-600"
                > About</a>
              </li>
              <li>
                <a href="#" 
                  className="p-2 mr-10 cursor-pointer text-xl dark:text-white hover:text-teal-600"
                > Contact</a>
              </li>
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className=" cursor-pointer text-2xl"
                />
              </li>
              <li>
                <a
                  className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8"
                  href="#"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
  )
}

export default Header
