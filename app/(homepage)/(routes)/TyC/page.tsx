import Link from "next/link";
import { Footer } from '../../_components/Footer'; // Importa el componente Footer utilizando la ruta relativa correcta
import { NavbarSimple } from '../../_components/NavbarSimple';
import { TerminosSection } from "../../_components/TerminosSection";


export default function TerminosYCondiciones() {
    return (
        <main className="bg-primary">
            <div>
                <NavbarSimple/>
            </div>
            <div>
                <TerminosSection/>
            </div>
            <div>
                <Footer/>
            </div>
        </main>
    )
}