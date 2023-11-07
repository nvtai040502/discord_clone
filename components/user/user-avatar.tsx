import { Avatar, AvatarImage } from "@/components/ui/avatar";

interface UserAvatarProps {
  src?: string;
};

export const UserAvatar = ({
  src,
}: UserAvatarProps) => {
  return (
    <Avatar className= "h-7 w-7 md:h-10 md:w-10">
      <AvatarImage src={src} />
    </Avatar>
  )
}