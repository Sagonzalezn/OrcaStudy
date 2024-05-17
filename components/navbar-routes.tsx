"use client"

import { UserButton } from "@clerk/nextjs"
import { usePathname } from "next/navigation"
import { Button } from "./ui/button";
import { Book, PencilRuler } from "lucide-react";
import Link from "next/link";
import { SearchInput } from "./search-input";

export const NavbarRoutes = () => {
    const pathname = usePathname();

    const isTeacherPage = pathname?.startsWith("/teacher");
    const isCoursePage = pathname?.includes("/courses");
    const isSearchPage = pathname === '/search';

    return (
        <>
            {isSearchPage && (
                <div className='hidden md-block'>
                    <SearchInput/>
                </div>
            )}
            <div className="flex gap-x-2 ml-auto">
                {isTeacherPage || isCoursePage ? (
                    <Link href="/dashboard">
                        <Button size="sm" variant="ghost">
                            <Book className="h-4 w-4 mr-2"/>
                            Cambiar a Estudiante
                        </Button>
                    </Link>
                ) : (
                    <Link href="/teacher/courses">
                        <Button size="sm" variant="ghost">
                            <PencilRuler className="h-4 w-4 mr-2"/>
                            Cambiar a Maestro
                        </Button> 
                    </Link>
                )}
                <UserButton
                    afterSignOutUrl="/"
                />
            </div>
        </>
    )
}