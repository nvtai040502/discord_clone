
import { currentProfile } from "@/lib/current-profile";
import { db } from "@/lib/db";
import { redirect } from "next/navigation";
import { ScrollArea } from "../ui/scroll-area";
import { AddAServerModal } from "../modals/add-a-server";
import { NavigationHeader } from "./navigation-header";
import { NavigationItem } from "./navigation-item";




export const NavigationSidebar = async () => {

  
  const profile = await currentProfile()
  if (!profile) {
    return redirect("/")
  }


  const servers = await db.server.findMany({
    where: {
      members: {
        some: {
          profileId: profile.id
        }
      }
    }
  })

  return (
    <div>

      <NavigationHeader></NavigationHeader>

      <ScrollArea>
        {servers.map((server) => (
          <div key={server.id} className="mb-4">
          <NavigationItem
            id={server.id}
            
            imageUrl={server.imageUrl}
          />
        </div>
        ))}
      </ScrollArea>

      <AddAServerModal></AddAServerModal>
        
    </div>
  )
}
