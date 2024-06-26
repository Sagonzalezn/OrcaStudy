'use client'
import React from 'react'
import Head from 'next/head';
import './styles2.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';


export const ContactSection = () => {
    return (
        
        <main className="font-roboto">
            <Head>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css"/>
            </Head>

            <div className="flex flex-col items-center mt-12 lg:mt-20 bg-primary pt-20 px-8 lg:px-20">
                <h1 className="text-5xl lg:text-6xl text-white text-center">
                    Contáctanos
                </h1>
                <div className="max-w-4xl mx-auto">
                    <div className="mt-12">
                        <h2 className="text-4xl lg:text-5xl text-white mb-4">
                            Información de Contacto
                        </h2>
                        <p className="text-lg text-white leading-relaxed">
                            Si tienes alguna pregunta, comentario o simplemente quieres saludarnos, ¡no dudes en contactarnos!
                        </p>
                    </div>
                </div>
             </div>
             
             
             <div className="flex flex-col items-center mt-12 lg:mt-20 bg-white pt-20 px-8 lg:px-20 text-center">
                <h2 className="text-4xl lg:text-5xl text-black mb-6">
                    ¿Cómo Contactarnos?
                </h2>
                <p className="text-lg text-gray-800 leading-relaxed max-w-4xl">
                    Puedes contactarnos a través de los siguientes medios:
                </p>

                <div className="flex flex-col lg:flex-row justify-center my-10">
                    <div className="bg-gray-200 p-4 rounded-md m-2">
                        <h3 className="text-lg font-semibold mb-2">Correo Electrónico</h3>
                        <p>orcastudy06@gmail.com</p>
                    </div>
                    <div className="bg-gray-200 p-4 rounded-md m-2">
                        <h3 className="text-lg font-semibold mb-2">Facebook</h3>
                        <p>OrcaStudy</p>
                    </div>
                    <div className="bg-gray-200 p-4 rounded-md m-2">
                        <h3 className="text-lg font-semibold mb-2">Instagram</h3>
                        <p>orcastudy_</p>
                    </div>
                </div>

                <h2 className="text-4xl lg:text-5xl text-primary text-center mt-12">
                    ¡Esperamos escucharte pronto!
                </h2>

                <div className='container mt-6'>
                    <div className='card'>
                        <div className='content'>
                            <div className='imgBx'>
                                <img src='/samuel.jpg' alt='imagen'></img>
                            </div>
                            <div className='contentBx'>
                                <h4>Samuel Gonzalez</h4>
                                <h5>Developer</h5>
                            </div>
                            <div>
                                <a href="https://www.linkedin.com/in/sagonzalezn" target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={faLinkedin} className="fa-2x mt-1 mb-5" />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className='card'>
                        <div className='content'>
                            <div className='imgBx'>
                                <img src='/sebastian.jpg' alt='imagen'></img>
                            </div>
                            <div className='contentBx'>
                                <h4>Sebastian Molina</h4>
                                <h5>Developer</h5>
                            </div>
                            <div>
                                <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={faLinkedin} className="fa-2x mt-1 mb-5" />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className='card'>
                        <div className='content'>
                            <div className='imgBx'>
                                <img src='/boy.png' alt='imagen'></img>
                            </div>
                            <div className='contentBx'>
                                <h4>Javier Esteban Pacavita</h4>
                                <h5>Developer</h5>
                            </div>
                            <div>
                                <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={faLinkedin} className="fa-2x mt-1 mb-5" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
             </div>
        </main>
    );
};
