import { currentProfile } from "@/lib/current-profile";
import { db } from "@/lib/db";
import { ChannelType, MemberRole } from "@prisma/client";
import { NextResponse } from "next/server";


export async function POST(req: Request) {
  try {
    const profile = await currentProfile()
    if (!profile) {
      return new NextResponse("Unauthorized", {status: 401})
    }
    
    const { name, imageUrl } = await req.json()
    const server = await db.server.create({
      data: {
        profileId: profile.id,
        name,
        imageUrl,
        channels: {
          create: [
            { profileId: profile.id,  name: "general", type: ChannelType.TEXT}
          ]
        },
        members: {
          create: [
            { profileId: profile.id, role: MemberRole.ADMIN}
          ]
        }
      }
    })

    return NextResponse.json(server)
  } catch (error) {
    console.log("[SERVER POST]", error)
    return new NextResponse("Internal Error", {status: 500})
  }
}