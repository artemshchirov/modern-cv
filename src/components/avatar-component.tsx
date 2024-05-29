import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export default function AvatarComponent() {
  return (
    <Avatar className='w-[100px] h-[100px]'>
      <AvatarImage
        src='https://ik.imagekit.io/webbuilder/avatars/ppWIMOOOQu8_VO6Xqbk5S.jpg?updatedAt=1717006440215'
        alt='Artem Shchirov'
      />
      <AvatarFallback>Ɐ</AvatarFallback>
    </Avatar>
  );
}
