import Link from "next/link"
import { Navbar } from "./_components/Navbar"

export default function Homepage() {
    return (
        <main>
            <div>
                <Navbar/>
            </div>
            <div>
                <Link href="/About-us">
                quienes somos
                </Link>
            </div>
            <div>
            <Link href="/sign-in">
                login
            </Link>
            </div>
            
        </main>
    )
}