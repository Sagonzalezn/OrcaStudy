import React from 'react';

export const Footer = () => {
    return (
        <footer className="bg-white dark:bg-gray-900">
            <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8 font-roboto">
                <div className="md:flex md:justify-between">
                    <div className="mb-6 md:mb-0">
                        {/* Logo u otros elementos */}
                    </div>
                    <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Recursos</h2>
                            <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                <li className="mb-4">
                                    <a href="/Manual_de_Usuario_Orcastudy.pdf" className="hover:underline" target="_blank" rel="noopener noreferrer">
                                        Manual de Usuario
                                    </a>
                                </li>
                                <li>
                                    <a href="/Manual_de_Usuario_Orcastudy.pdf" className="hover:underline">
                                        Cursos
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Síguenos</h2>
                            <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                <li className="mb-4">
                                    <a href="https://www.facebook.com/profile.php?id=61556952399932" className="hover:underline">
                                        Facebook
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.instagram.com/orcastudy_/" target="_blank" rel="noopener noreferrer" className="hover:underline">
                                        Instagram
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Legal</h2>
                            <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                <li className="mb-4">
                                    <a href="/Privacidad" className="hover:underline">
                                        Políticas de Privacidad
                                    </a>
                                </li>
                                <li>
                                    <a href="/TyC" className="hover:underline">
                                        Términos y Condiciones
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <div className="sm:flex sm:items-center sm:justify-between">
                    <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
                        © 2024 <a href="#" className="hover:underline">OrcaStudy™</a>. Todos los derechos reservados.
                    </span>
                    <div className="flex mt-4 sm:justify-center sm:mt-0">
                        <a href="https://www.facebook.com/profile.php?id=61556952399932" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                            <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
                                <path fillRule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clipRule="evenodd"/>
                            </svg>
                            <span className="sr-only">Facebook page</span>
                        </a>
                        <a href="https://www.instagram.com/orcastudy_/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 24">
                                <path d='M14.017 0h-8.07A5.954 5.954 0 0 0 0 5.948v8.07a5.954 5.954 0 0 0 5.948 5.947h8.07a5.954 5.954 0 0 0 5.947-5.948v-8.07A5.954 5.954 0 0 0 14.017 0zm3.94 14.017a3.94 3.94 0 0 1-3.94 3.94h-8.07a3.94 3.94 0 0 1-3.939-3.94v-8.07a3.94 3.94 0 0 1 3.94-3.939h8.07a3.94 3.94 0 0 1 3.939 3.94v8.07z'/>
                                <path d='M9.982 4.819A5.17 5.17 0 0 0 4.82 9.982a5.17 5.17 0 0 0 5.163 5.164 5.17 5.17 0 0 0 5.164-5.164A5.17 5.17 0 0 0 9.982 4.82zm0 8.319a3.155 3.155 0 1 1 0-6.31 3.155 3.155 0 0 1 0 6.31z'/>
                                <circle cx='15.156' cy='4.858' r='1.237'/>
                            </svg>
                            <span className="sr-only">Instagram profile</span>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};
