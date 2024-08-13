import Link from "next/link"
import { Navbar } from "./_components/Navbar"
import { Footer } from "./_components/Footer"
import { HomeSection } from "./_components/HomeSection"
import Accordian, {AccordianItem} from "./_components/Accordion"

export default function Homepage() {
    return (
        <main className="bg-primary">
            <div>
                <Navbar/>
            </div>
            <div>
                <HomeSection/>
            </div>
            <div>
                <Accordian classname="max-w-lg">
                    <AccordianItem value="1" trigger="¿Cómo me inscribo en un curso?">
                    Para inscribirte en un curso, simplemente crea una cuenta gratuita, navega por nuestra selección de cursos, y haz clic en el botón "Comprar" en la página del curso que te interesa. Puedes completar el pago utilizando tu método de pago preferido.
                    </AccordianItem>
                    <AccordianItem value="2" trigger="¿Los cursos tienen fechas de inicio y finalización?">
                    Nuestros cursos son autoguiados, lo que significa que puedes comenzar y completar el curso a tu propio ritmo. Por esto, no tienen fechas específicas de inicio y finalización.
                    </AccordianItem>
                    <AccordianItem value="3" trigger="¿Puedo acceder a los cursos desde mi dispositivo móvil?">
                    Sí, nuestra plataforma es completamente compatible con dispositivos móviles.
                    </AccordianItem>
                    <AccordianItem value="4" trigger="¿Qué temáticas están disponibles en los cursos?">
                    Ofrecemos cursos en diferentes áreas del conocimiento. Puedes filtrar los cursos por categoría en la página de búsqueda y mediante la barra de búsqueda.
                    </AccordianItem>
                    <AccordianItem value="5" trigger="¿Cómo puedo obtener soporte si tengo problemas con la plataforma?">
                    Si tienes alguna dificultad técnica o preguntas sobre la plataforma, tienes dos opciones, nuestro chat inteligente al que le puedes realizar preguntas del funcionamiento de la plataforma, y en caso de que quieras hablar con asistencia técnica, nuestro equipo de soporte está disponible 3 de 24/7 a través de correo electrónico.
                    </AccordianItem>
                </Accordian>
            </div>
            <div>
                <Footer/>
            </div>
        </main>
    )
}