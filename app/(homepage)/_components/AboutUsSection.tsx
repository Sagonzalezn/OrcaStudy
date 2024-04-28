'use client'
import React from 'react'

export const AboutUsSection = () => {
    return (
        <main className="font-roboto">

            <div className="flex flex-col items-center mt-12 lg:mt-20 bg-primary pt-20 px-8 lg:px-20">
                <h1 className="text-5xl lg:text-6xl text-white text-center">
                    Acerca de Nosotros
                </h1>
                <div className="max-w-4xl mx-auto">
                    <div className="mt-12">
                        <h2 className="text-4xl lg:text-5xl text-white mb-4">
                            Visión
                        </h2>
                        <p className="text-lg text-white leading-relaxed">
                            Para 2026 seremos la plataforma de cursos en línea preferida en Colombia, 
                            destacando por nuestra calidad, integridad y compromiso con precios accesibles, 
                            nuestras certificaciones serán reconocidas por la industria.
                        </p>
                    </div>
                    <div className="mt-12">
                        <h2 className="text-4xl lg:text-5xl text-white mb-4">
                            Misión
                        </h2>
                        <p className="text-lg text-white leading-relaxed">
                            En OrcaStudy, ofrecemos cursos en línea de alta calidad en diversos temas 
                            y a buenos precios para que nuestros clientes crezcan profesionalmente.
                        </p>
                    </div>
                </div>
             </div>

             <div className="flex flex-col items-center mt-12 lg:mt-20 bg-white pt-20 px-8 lg:px-20 text-center">
                <h2 className="text-4xl lg:text-5xl text-black mb-6">
                    Propósito
                </h2>
                <p className="text-lg text-gray-800 leading-relaxed max-w-4xl">
                    OrcaStudy existe para facilitar con su alcance y sus precios a personas con ganas 
                    de adquirir habilidades y certificarlas desde cualquier lugar donde te puedas 
                    conectar a internet. Creemos que la educación es un derecho fundamental y que 
                    todos deberían tener la oportunidad de aprender y desarrollarse. Por eso estamos 
                    convencidos de que la educación online puede cambiar el mundo y estamos comprometidos 
                    a hacer que sea más accesible para todos.
                </p>

                <h2 className="text-4xl lg:text-5xl text-primary text-center mt-12">
                    ¡Haz parte de nuestra comunidad y potencia tus habilidades hoy!
                </h2>
                <div className="flex justify-center my-10">
                    <a
                    href="/sign-up"
                    className="bg-colorbotones py-3 px-6 rounded-md text-white hover:bg-colorprogreso transition duration-300"
                    >
                    Quiero matricularme!
                    </a>
                </div>
             </div>
        </main>
    );
};