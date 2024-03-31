import React from 'react'

export const HomeSection = () => {
    return (
        <main class="font-roboto">

            <div className="flex flex-col items-center mt-9 lg:mt-20 bg-primary pt-20 px-20 top-0">
                <h2 className="text-4xl sm:text-3.5xl lg:text-4xl text-left tracking-wide text-white">
                    ¡LLeva tu desarrollo profesional al siguiente nivel 
                    {" "}
                    con nuestros cursos en linea!
                </h2>
                <img src="Orca.png" alt="Descripción de la imagen" class="w-21 h-21"/>
                
                <p className="mt-10 text-lg text-left text-white max-w-4xl">
                Encuentra cursos de diferentes industrias al mejor precio
                y creados por expertos en cada area.
                </p>
                <div className="flex justify-center my-10">
                    <a
                    href="#"
                    className="bg-colorbotones py-3 px-4 mx-3 rounded-md"
                    >
                    Empieza a aprender ahora
                    </a>
                </div>
             </div>

             <div className="flex flex-col items-center mt-9 lg:mt-20 bg-white pt-20 px-20 top-0">
                <h2 className="text-4xl sm:text-3.5xl lg:text-4xl text-left tracking-wide">
                    ¡LLeva tu desarrollo profesional al siguiente nivel 
                    {" "}
                    con nuestros cursos en linea!
                </h2>
                <p className="mt-10 text-lg text-left max-w-4xl">
                Encuentra cursos de diferentes industrias al mejor precio
                y creados por expertos en cada area.
                </p>
                <div className="flex justify-center my-10">
                    <a
                    href="#"
                    className="bg-colorbotones py-3 px-4 mx-3 rounded-md"
                    >
                    Empieza a aprender ahora
                    </a>
                </div>
             </div>
        </main>
        
    )
}