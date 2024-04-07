import Link from "next/link"
import { Navbar } from "./_components/Navbar"
import { Footer } from "./_components/Footer"
import { HomeSection } from "./_components/HomeSection"

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
                <Footer/>
            </div>
            
        </main>
    )
}