
import React from 'react'

export const Navbar =() => {
  return (
  <nav class="bg-primary dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b 
  border-gray-200 dark:border-gray-600">
  <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
  <a href="/" class="flex items-center space-x-3 rtl:space-x-reverse">
      <img src="Orca2White.png" class="h-8" alt="OrcaStudyLogo"/>
      <span class="self-center text-xl font-roboto
      font-semibold whitespace-nowrap text-white">OrcaStudy</span>
  </a>
  <div class="flex md:order-2 space-x-3 md:space-x-3 rtl:space-x-reverse justify-end">
      <button type="button" class="text-black bg-colorbotones hover:bg-colorprogreso
      focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm 
      px-3 py-1 text-center dark:bg-blue-600 dark:hover:bg-blue-700 
      dark:focus:ring-blue-800">Crear cuenta</button>

      <button type="button" class="text-black bg-colorbotones hover:bg-colorprogreso
      focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm 
      px-3 py-1 text-center dark:bg-blue-600 dark:hover:bg-blue-700 
      dark:focus:ring-blue-800">Iniciar Sesion</button>

      <button data-collapse-toggle="navbar-sticky" type="button" class="inline-flex items-center p-2 
      w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 
      focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 
      dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" 
      aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" 
        viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" 
            stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
  </div>
  <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
    <ul class="bg-primary flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg 
     md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 font-roboto">

      <li>
        <a href="/About-us" class="text-white block py-2 px-3  rounded hover:bg-gray-100 
        md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-colorprogreso 
        dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent 
        dark:border-gray-700">Quienes somos</a>
      </li>
      <li>
        <a href="/Contactanos" class="block py-2 px-3 text-white rounded 
        hover:bg-gray-100 md:hover:bg-transparent md:hover:text-colorprogreso md:p-0 
        md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 
        dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contactanos</a>
      </li>
    </ul>
    </div>
    </div>
    </nav>

  )
};

