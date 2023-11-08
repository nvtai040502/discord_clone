import { MobileToggle } from '@/components/mobile-toggle'
import { ModeToggle } from '@/components/mode-toggle'
import InitalProfile from '@/lib/inital-profile'
import { UserButton } from '@clerk/nextjs'


export default async function Home() {
  const profile = await InitalProfile()

  return (
    <div>
      <MobileToggle></MobileToggle>
      Navigation Sidebar Back End

      Name: {profile.name}
      <ModeToggle></ModeToggle>
      <UserButton></UserButton>
    </div>
  )
}
