import Link from "next/link";
import { Footer } from '../../_components/Footer'; 
import { NavbarSimple } from '../../_components/NavbarSimple';
import { AboutUsSection } from "../../_components/AboutUsSection";

export default function AboutUs() {
    return (
        <main className="bg-primary">
            <div>
                <NavbarSimple/>
            </div>
            <div>
                <AboutUsSection/>
            </div>
            <div>
                <Footer/>
            </div>
        </main>
    )
}