import { AddAServerModal } from '@/components/modals/add-a-server'
import { ModeToggle } from '@/components/mode-toggle'
import InitalProfile from '@/lib/inital-profile'
import { UserButton } from '@clerk/nextjs'


export default async function Home() {
  const profile = await InitalProfile()

  return (
    <div>
      Database Setup with Prisma and Plannel Scale
      <AddAServerModal></AddAServerModal>
 
      Name: {profile.name}      
      <UserButton></UserButton>
      <ModeToggle></ModeToggle>
    </div>
  )
}
