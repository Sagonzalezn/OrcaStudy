
import React from 'react'

export const NavbarSimple = () => {
  return (
    <nav className="bg-primary dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b-2 border-white">
    <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-6 bg-primary">
    <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
      <img src="1 white no letters.svg" className="h-8" alt="OrcaStudyLogo"/>
      <span className="self-center text-xl font-roboto
      font-semibold whitespace-nowrap text-white">OrcaStudy</span>
    </a>
    </div>
    </nav>

  )
};

