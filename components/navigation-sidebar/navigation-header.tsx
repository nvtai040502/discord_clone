"use client"

import { cn } from "@/lib/utils";
import { useParams, useRouter } from "next/navigation";
import { FaDiscord } from "react-icons/fa"
import { Separator } from "../ui/separator";
import { ActionTooltip } from "../action-tooltip";
export const NavigationHeader = () => {
  const params = useParams();
  const router = useRouter
  ();

  const onClick = () => {
    router.push(`/`);
  }
  return (
    <div>
      <p className="font-bold text-center text-sm text-zinc-250 my-1">
        Discord
      </p>
      <ActionTooltip
        label="Direct Messages"
      >
        <button
          onClick={onClick}
          className="group relative flex items-center"
        >
          <div className={cn(
            "absolute left-0 bg-primary rounded-r-full transition-all w-[4px]",
            params?.serverId && "group-hover:h-[20px]",
            !params?.serverId ? "h-[36px]" : "h-[8px]"
          )} />
          <div 
            className={cn(
              "flex mx-3 h-[48px] w-[48px]  group-hover:rounded-[16px]  items-center justify-center bg-background group-hover:bg-[#5865f2] dark:group-hover:bg-[#5865f2]  transition-all overflow-hidden",
              !params?.serverId ? "rounded-[16px] dark:bg-[#5865f2] bg-[#5865f2]" : "rounded-[24px] dark:bg-zinc-600 bg-background"
            )}
          >
            
            <FaDiscord size={30}/>
          </div>
        </button>
      </ActionTooltip>

      <Separator
        className="mx-auto mt-2 mb-2 bg-zinc-300 dark:bg-zinc-700 h-[2px] rounded-md w-10"
      />
    </div>

  )
}