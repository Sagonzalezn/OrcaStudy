"use client"

import { List, BarChart, Compass, Layout } from "lucide-react"
import { SidebarItem } from "./sidebar-item";
import { usePathname } from "next/navigation";

const guestRoutes = [
    { 
        icon: Layout,
        label: "Tablero",
        href: "/dashboard",
    },
    { 
        icon: Compass,
        label: "Navegar",
        href: "/search",
    },
];

const teacherRoutes = [
    { 
        icon: List,
        label: "Gestionar Cursos",
        href: "/teacher/courses",
    },
    { 
        icon: BarChart,
        label: "Estadísticas",
        href: "/teacher/analytics",
    },
];

export const SidebarRoutes = () => {

    const pathname = usePathname();

    const isTeacherPage = pathname?.includes("/teacher");

    const routes = isTeacherPage ? teacherRoutes : guestRoutes;

    return (
        <div className="flex flex-col w-full">
            {routes.map((route) => (
                <SidebarItem
                    key={route.href}
                    icon={route.icon}
                    label={route.label}
                    href={route.href}
                />
            ))}
        </div>
    )
}