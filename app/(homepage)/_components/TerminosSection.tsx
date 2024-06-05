'use client'
import React from 'react'

export const TerminosSection = () => {
    return (
        <main className="font-roboto">

            <div className="flex flex-col items-center mt-12 lg:mt-20 bg-primary pt-20 px-8 lg:px-20">
                
                <h1 className="text-5xl lg:text-6xl text-white text-center">
                Términos y Condiciones
                </h1>
                <div className="max-w-4xl w-full mx-auto">
                    <div className="mt-12">
                        <h2 className="text-4xl lg:text-5xl text-white mb-4">
                        Responsable del Tratamiento de Datos:
                        </h2>
                        <p className="text-lg text-white leading-relaxed">
                        OrcaStudy, es el responsable del tratamiento de los datos personales que usted nos proporcione.
                        </p>
                    </div>
                </div>

                <div className="max-w-4xl w-full mx-auto">
                    <div className="mt-12">
                        <h2 className="text-4xl lg:text-5xl text-white mb-4">
                        Finalidad del Tratamiento de Datos: 
                        </h2>
                        <p className="text-lg text-white leading-relaxed">
                        Los datos personales recogidos serán utilizados exclusivamente para:
                        </p>
                        <p className="text-lg text-white leading-relaxed">
                        - La gestión y administración de su cuenta en la plataforma.
                        </p>
                        <p className="text-lg text-white leading-relaxed">
                        - La personalización de su experiencia de aprendizaje.
                        </p>
                        <p className="text-lg text-white leading-relaxed">
                        - La comunicación de información relevante sobre cursos, actividades académicas y actualizaciones de la plataforma.
                        </p>
                        <p className="text-lg text-white leading-relaxed">
                        - La realización de estudios y análisis internos para mejorar la calidad de nuestros servicios educativos.
                        </p>
                    </div>
                </div>

                <div className="max-w-4xl w-full mx-auto">
                    <div className="mt-12">
                        <h2 className="text-4xl lg:text-5xl text-white mb-4">
                        Datos Personales Recogidos:
                        </h2>
                        <p className="text-lg text-white leading-relaxed">
                        Los datos personales que podríamos recoger incluyen, pero no se limitan a:
                        </p>
                        <p className="text-lg text-white leading-relaxed">
                        - Nombre completo.
                        </p>
                        <p className="text-lg text-white leading-relaxed">
                        - Dirección de correo electrónico.
                        </p>
                        <p className="text-lg text-white leading-relaxed">
                        - Información de contacto.
                        </p>
                        <p className="text-lg text-white leading-relaxed">
                        - Historial académico y de cursos.
                        </p>
                        <p className="text-lg text-white leading-relaxed">
                        - Preferencias de aprendizaje.
                        </p>
                    </div>
                </div>

                <div className="max-w-4xl w-full mx-auto">
                    <div className="mt-12">
                        <h2 className="text-4xl lg:text-5xl text-white mb-4">
                        Derechos del Titular de los Datos:
                        </h2>
                        <p className="text-lg text-white leading-relaxed">
                        Como titular de los datos personales, usted tiene derecho a:
                        </p>
                        <p className="text-lg text-white leading-relaxed">
                        - Conocer, actualizar y rectificar sus datos personales.
                        </p>
                        <p className="text-lg text-white leading-relaxed">
                        - Solicitar prueba de la autorización otorgada para el tratamiento de sus datos.
                        </p>
                        <p className="text-lg text-white leading-relaxed">
                        - Ser informado sobre el uso que se le ha dado a sus datos personales.
                        </p>
                        <p className="text-lg text-white leading-relaxed">
                        - Presentar quejas ante la Superintendencia de Industria y Comercio por infracciones a lo dispuesto en la Ley 1581 de 2012.
                        </p>
                        <p className="text-lg text-white leading-relaxed">
                        - Revocar la autorización y/o solicitar la supresión de sus datos cuando no se respeten los principios, derechos y garantías constitucionales y legales.
                        </p>
                    </div>
                </div>
             </div>

             <div className="flex flex-col items-center mt-12 lg:mt-20 bg-white pt-20 px-8 lg:px-20 text-center">
                <div className="max-w-4xl w-full mx-auto mb-10">
                    <h2 className="text-4xl lg:text-5xl text-black mb-6">
                    Autenticación y Acceso con Clerk: 
                    </h2>
                    <p className="text-lg text-gray-800 leading-relaxed max-w-4xl">
                    OrcaStudy utiliza Clerk para gestionar el proceso de autenticación
                    y acceso a la plataforma. Clerk actuará como un tercero encargado 
                    del tratamiento de sus datos personales en relación con el 
                    registro y el inicio de sesión. Clerk implementa medidas de 
                    seguridad para proteger sus datos personales y cumple con las 
                    normativas de protección de datos aplicables. 
                    Para más información sobre cómo Clerk maneja sus datos personales,
                    puede consultar sus políticas.
                    </p>
                </div>
                
                <div className="max-w-4xl w-full mx-auto">
                    <h2 className="text-4xl lg:text-5xl text-black mb-6">
                    Confidencialidad y Transferencia de Datos:
                    </h2>
                    <p className="text-lg text-gray-800 leading-relaxed max-w-4xl mb-0">
                    Sus datos personales no serán compartidos con terceros sin
                    su consentimiento, excepto cuando sea necesario para cumplir
                    con una obligación legal o contractual. 
                    El uso de Clerk para la autenticación es una excepción permitida 
                    conforme a esta política.
                    </p>
                </div>
                

                <h2 className="text-4xl lg:text-5xl text-primary text-center mt-12">
                    ¡Haz parte de nuestra comunidad y potencia tus habilidades hoy!
                </h2>
                <div className="flex justify-center my-10">
                    <a
                    href="/sign-up"
                    className="bg-colorbotones py-3 px-6 rounded-md text-white hover:bg-colorprogreso transition duration-300"
                    >
                    ¡Quiero matricularme!
                    </a>
                </div>
             </div>
        </main>
    );
};