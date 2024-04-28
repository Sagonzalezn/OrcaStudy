import Link from "next/link";
import { Footer } from '../../_components/Footer'; // Importa el componente Footer utilizando la ruta relativa correcta
import { NavbarSimple } from '../../_components/NavbarSimple';
import { ContactSection } from "../../_components/ContactSection";

export default function Contact() {
    return (
        <main className="bg-primary">
            <div>
                <NavbarSimple/>
            </div>
            <div>
                <ContactSection/>
            </div>
            <div>
                <Footer/>
            </div>
        </main>
    )
}