import { redirectToSignIn } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import { ServerSidebar } from "@/components/server-sidebar/index";
import { db } from "@/lib/db";
import { currentProfile } from "@/lib/current-profile";

const ServerIdLayout = async ({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { serverId: string };
}) => {
  const profile = await currentProfile();

  if (!profile) {
    return redirectToSignIn();
  }

  const server = await db.server.findUnique({
    where: {
      id: params.serverId,
      members: {
        some: {
          profileId: profile.id
        }
      }
    }
  });

  if (!server) {
    return redirect("/");
  }

  return ( 
    <div className="h-full">
      <div 
      className="hidden md:flex h-full w-60 z-20 flex-col fixed inset-y-0">
        <ServerSidebar serverId={params.serverId}></ServerSidebar>
      </div>
      <main className="h-full">
        {children}
      </main>
    </div>
   );
}

export default ServerIdLayout;