'use client'
import React from 'react'

export const PrivacidadSection = () => {
    return (
        <main className="font-roboto">

            <div className="flex flex-col items-center mt-12 lg:mt-20 bg-primary pt-20 px-8 lg:px-20">
                
                <h1 className="text-5xl lg:text-6xl text-white text-center">
                    Políticas de privacidad
                </h1>
                <div className="max-w-4xl mx-auto">
                    <div className="mt-12">
                        <h2 className="text-4xl lg:text-5xl text-white mb-4">
                        Política de Protección de Datos Personales para OrcaStudy
                        </h2>
                        <p className="text-lg text-white leading-relaxed">
                        De acuerdo con la Ley 1581 de 2012, 
                        OrcaStudy se compromete a proteger la 
                        privacidad de sus usuarios y a utilizar 
                        sus datos personales únicamente para fines 
                        académicos. Al registrarse y utilizar nuestra plataforma, 
                        usted acepta los términos y condiciones previamente 
                        mencionados.
                        </p>
                    </div>
                    
                </div>
             </div>

             <div className="flex flex-col items-center mt-12 lg:mt-20 bg-white pt-20 px-8 lg:px-20 text-center">
                <h2 className="text-4xl lg:text-5xl text-black mb-6">
                Medidas de Seguridad:
                </h2>
                <p className="text-lg text-gray-800 leading-relaxed max-w-4xl">
                OrcaStudy implementa medidas de seguridad técnicas, 
                administrativas y físicas para proteger sus datos 
                personales contra el acceso no autorizado, la pérdida, 
                el uso indebido y la divulgación.
                </p>

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