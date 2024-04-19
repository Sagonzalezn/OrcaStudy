
import { SignedIn, SignedOut } from '@clerk/nextjs';
import Link from 'next/link';
import React from 'react'

export const Navbar =() => {
  return (
  <nav className="bg-primary dark:bg-gray-900 fixed w-full z-20 top-0 start-0">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-6 bg-primary">
  <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
      <img src="1 white no letters.svg" className="h-8" alt="OrcaStudyLogo"/>
      <span className="self-center text-xl font-roboto
      font-semibold whitespace-nowrap text-white">OrcaStudy</span>
  </a>
  <div className=" flex md:order-2 space-x-3 md:space-x-3 rtl:space-x-reverse justify-end bg-primary font-roboto">
      <SignedOut>
        <Link href="/sign-up">
          <button type="button" className="text-black bg-colorbotones hover:bg-colorprogreso
          focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm 
          px-3 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 
          dark:focus:ring-blue-800">
            Crear cuenta
          </button>
        </Link>

      <Link href="/sign-in">
        <button type="button" className="text-black bg-colorbotones hover:bg-colorprogreso
        focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm 
        px-3 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 
        dark:focus:ring-blue-800">
          Iniciar Sesion
        </button>
      </Link>

      </SignedOut>

      <SignedIn>
        <Link href="/dashboard">
          <button type="button" className="text-black bg-colorbotones hover:bg-colorprogreso
          focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm 
          px-3 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 
          dark:focus:ring-blue-800">Panel Principal</button>
        </Link>
      </SignedIn>
      

      <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 
      w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 
      focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 
      dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" 
      aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" 
        viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" 
            stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
  </div>
  <div className="items-center hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
    <ul className="bg-primary flex flex-col p-4 md:p-0 font-medium md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 font-roboto">

      <li>
        <a href="/About-us" className="text-white block py-2 px-3  rounded hover:bg-gray-100 
        md:hover:bg-transparent md:hover:text-colorprogreso md:p-0 md:dark:hover:text-colorprogreso 
        dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent 
        dark:border-gray-700">Quiénes somos</a>
      </li>
      <li>
        <a href="/Contactanos" className="block py-2 px-3 text-white rounded 
        hover:bg-gray-100 md:hover:bg-transparent md:hover:text-colorprogreso md:p-0 
        md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 
        dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contáctanos</a>
      </li>
      
    </ul>
    </div>
    </div>
    </nav>

  )
};

