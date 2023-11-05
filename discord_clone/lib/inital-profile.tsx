import { redirectToSignIn, currentUser } from "@clerk/nextjs";
import { PrismaClient } from "@prisma/client";

const db = new PrismaClient()

export default async function InitalProfile() {
  try {
    const user = await currentUser()
    if (!user) {
      return redirectToSignIn()
    }

    const profile = await db.profile.findUnique({
      where: {
        userId: user.id
      }
    })

    if (profile) {
      return profile
    }

    const newProfile = await db.profile.create({
      data: {
        userId: user.id,
        name: `${user.lastName} ${user.firstName}`,
        imageUrl: user.imageUrl,
        email: user.emailAddresses[0].emailAddress
      }
    })
    return newProfile

  } catch (error) {
    console.error("An error occurred: ", error);
    return <div>An error occurred. Please try again later.</div>;
  }
}