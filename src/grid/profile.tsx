import Location from '@/grid/location';
import MyAvatar from '@/grid/my-avatar';
import Role from '@/grid/role';

export default function Profile() {
  return (
    <div className='profile grid grid-cols-[160px_auto] xl:grid-cols-[192px_auto] grid-rows-2 gap-x-4 gap-y-3 xl:gap-x-5'>
      <MyAvatar />
      <Role />
      <Location />
    </div>
  );
}
