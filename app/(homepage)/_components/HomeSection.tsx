'use client'

import React, { useEffect } from 'react'
import './styles.css';
export const HomeSection = () => {
    useEffect(() => {
        const scrollers = document.querySelectorAll<HTMLElement>(".scroller");

        scrollers.forEach(scroller => {
            const scrollerInner = scroller.querySelector<HTMLElement>('.scroller-inner');
            
            if (scrollerInner){
                const scrollerContent = Array.from(scrollerInner?.children);
                
                scrollerContent.forEach(item => {
                    const duplicatedItem = item.cloneNode(true) as HTMLElement;
                    duplicatedItem.setAttribute('aria-hidden', 'true');
                    scrollerInner.appendChild(duplicatedItem);
                })
            }

            
        });
    }, []);
    

    return (
        <main className="font-roboto">

            <div className="flex flex-col items-center mt-9 lg:mt-20 bg-primary pt-20 px-20 top-2">
                <h2 className="text-4xl sm:text-3.5xl lg:text-4xl text-left tracking-wide text-white font-bold">
                    ¡Bienvenido a OrcaStudy, aprende
                    {" "}
                    a buen precio con nuestros cursos en línea!
                </h2>
                <img src="Orca.png" alt="Descripción de la imagen" className="w-100 sm:w-80 lg:w-100 h-auto"/>
                
                <p className="mt-10 text-lg text-left text-white max-w-4xl">
                Encuentra o crea cursos de diferentes áreas del conocimiento gracias a nosotros.
                </p>
                <div className="flex justify-center my-10">
                    <a
                    href="/sign-up"
                    className="bg-colorbotones py-3 px-4 mx-3 rounded-md"
                    >
                    ¡Empieza a aprender ahora!
                    </a>
                </div>
                <div className='scroller'>
                    <ul className='scroller-inner'>
                        <li>Computación</li>
                        <li>Contabilidad</li>
                        <li>Cine</li>
                        <li>Fitness</li>
                        <li>Ingeniería</li>
                        <li>Música</li>
                        <li>Matemáticas</li>
                        <li>Idiomas</li>
                        <li>Literatura</li>
                        <li>Arte</li>
                        <li>Diseño</li>
                        <li>IA</li>
                        <li>Negocios</li>
                    </ul>
                </div>
             </div>

             <div className="flex flex-col items-center mt-9 lg:mt-20 bg-white pt-20 px-20 top-0">
                <h2 className="text-4xl sm:text-3.5xl lg:text-4xl text-left tracking-wide font-bold">
                    ¡Lleva tu desarrollo profesional al siguiente nivel 
                    {" "}
                    con nuestros cursos en linea!
                </h2>
                <p className="mt-10 text-lg text-left max-w-4xl">
                Encuentra cursos de diferentes industrias al mejor precio
                y creados por expertos en cada área.
                </p>
                <div className="flex justify-center my-10">
                    <a
                    href="/sign-up"
                    className="bg-colorbotones py-3 px-4 mx-3 rounded-md"
                    >
                    ¡Quiero matricularme!
                    </a>
                </div>
                <div className="flex flex-col items-center  lg:mt-20 bg-white px-20">
                    <h2 className="text-4xl sm:text-3.5xl lg:text-4xl text-left tracking-wide font-bold">
                            Preguntas Frecuentes:                        
                    </h2>
                </div>
             </div>
        </main>
        
    )
}