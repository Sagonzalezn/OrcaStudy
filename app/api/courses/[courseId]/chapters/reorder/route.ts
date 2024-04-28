import { auth } from "@clerk/nextjs";
import { NextFetchEvent, NextRequest, NextResponse } from "next/server";

import { db } from "@/lib/db";

export async function PUT(
    req: Request,
    { params } : { params: { courseId: string; } }
) {
    try {
        const { userId } = auth();

        if (!userId) {
            return new NextResponse("No autorizado", { status: 401 });
        }

        const { list } = await req.json();

        const ownCourse = await db.course.findUnique({
            where: {
                id: params.courseId,
                userId: userId
            }
        });

        if (!ownCourse) {
            return new NextResponse("No autorizado", { status: 401 });
        }

        for (let item of list) {
            await db.chapter.update({
                where: { id: item.id },
                data: { position: item.position}
            });
        }

        return new NextResponse("Succes", { status: 200 })

    } catch (error) {
        console.log("[REORDENAR]", error);
        return new NextResponse("Error Interno", { status: 500 });
    }
}