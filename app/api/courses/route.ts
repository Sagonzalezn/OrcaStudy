import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";

export async POST(
    req: Request,
) {
    try{
        const {userId} = auth();
        const { title } = await
    } catch (error) {
        console.log("[COURSES]", error);
        return new NextResponse("Internal Error", {status: 500})
    }
}