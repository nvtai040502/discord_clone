import { Plus } from "lucide-react"

export const AddAServerButton = () => {
  return (
    <button 
      className="flex items-center group"
    >
      <div className="bg-background dark:bg-neutral-700 group-hover:bg-emerald-500 items-center justify-center flex mx-3 h-[48px] w-[48px] rounded-[24px] hover:rounded-[16px] transition-all overflow-hidden">
        <Plus 
          className="group-hover:text-white transition text-emerald-500"
          size={25}
        />
        
      </div>
    </button>
  )
}