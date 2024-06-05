
import React from 'react'

export const NavbarSimple = () => {
  return (
    <nav className="bg-primary dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b-2 border-white">
    <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-6 bg-primary">
    <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
      <img src="1 white no letters.svg" className="h-8" alt="OrcaStudyLogo"/>
      <span className="hidden md:inline self-center text-xl font-roboto
      font-semibold whitespace-nowrap text-white">OrcaStudy</span>
    </a>
    <div className="flex md:order-2 space-x-3 md:space-x-3 rtl:space-x-reverse justify-end bg-primary font-roboto">
          <ul className="bg-primary flex flex-row font-medium md:space-x-8 rtl:space-x-reverse font-roboto">
            <li>
              <a href="/" className="text-white py-2 px-3 rounded
               hover:bg-gray-100 md:hover:bg-transparent
                md:hover:text-colorprogreso md:p-0
                 md:dark:hover:text-colorprogreso
                  dark:text-white dark:hover:bg-gray-700
                   dark:hover:text-white md:dark:hover:bg-transparent
                    dark:border-gray-700"
              >
                Página principal
              </a>
            </li>
            
          </ul>
        </div>
    </div>
    </nav>

  )
};

