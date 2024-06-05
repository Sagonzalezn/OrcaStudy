import Link from "next/link";
import { Footer } from '../../_components/Footer'; // Importa el componente Footer utilizando la ruta relativa correcta
import { NavbarSimple } from '../../_components/NavbarSimple';
import { PrivacidadSection } from "../../_components/PrivacidadSection";

export default function PoliticasDePrivacidad() {
    return (
        <main className="bg-primary">
            <div>
                <NavbarSimple/>
            </div>
            <div>
                <PrivacidadSection/>
            </div>
            <div>
                <Footer/>
            </div>
        </main>
    )
}