import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import axios from "axios"
import { useModal } from "@/hooks/use-modal-store"
import { Label } from "@/components/ui/label"
import { useState } from "react"
import { useOrigin } from "@/hooks/use-origin"
import { Check, Copy } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

export function InvitePeopleModal() {
  const {isOpen, type, onClose, data, onOpen} = useModal()
  const isModalOpen = isOpen && type == "invitePeople"

  const { server } = data
  const origin = useOrigin()

  const inviteUrl = `${origin}/invite/${server?.inviteCode}`
  const [copied, setCopied] = useState(false)
  const onCopy = () => {
    navigator.clipboard.writeText(inviteUrl)
    setCopied(true)
    setTimeout(() => {
      setCopied(false)
    }, 1000)
  }

  const [isLoading, setIsLoading] = useState(false)
  
  const onNewLink = async () => {
    try {
      setIsLoading(true)
      const response = await axios.patch(`/api/servers/${server?.id}/invite-code`)

      onOpen("invitePeople", {server: response.data})
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Dialog open={isModalOpen} onOpenChange={onClose}>

<DialogContent className="bg-[#313338] text-white p-0 overflow-hidden">

<DialogHeader className="pt-4 px-6">
  <DialogTitle className=" mr-auto font-bold">
    Invite friends to {server?.name}
  </DialogTitle>

</DialogHeader>
<div className="p-6">
  <Label
    className="text-xs"
  >
    Share this link with others to grant access to this server
  </Label>
  <div className="flex items-center mt-2 gap-x-2">
    <Input
      disabled={isLoading}
      className="border-0 focus-visible:ring-0 focus-visible:ring-offset-0"
      value={inviteUrl}
    />
    <Button disabled={isLoading} onClick={onCopy} size="icon">
      {copied 
        ? <Check className="w-4 h-4" /> 
        : <Copy className="w-4 h-4" />
      }
    </Button>
  </div>
  <div className="flex pt-4">
    <Button  
      onClick={onNewLink}
      disabled={isLoading} 
      variant="secondary"
      >
      Generate A New Link
    </Button>
  </div>
</div>

</DialogContent>

    </Dialog>
  )
}