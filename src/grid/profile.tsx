import Location from '@/grid/location';
import MyAvatar from '@/grid/my-avatar';
import Role from '@/grid/role';
import Section from '@/layouts/section';

export default function Profile() {
  return (
    <Section
      id='about'
      className='profile grid grid-cols-[160px_auto] md:grid-cols-[166px_auto] 2xl:grid-cols-[192px_auto] grid-rows-2 gap-x-4 gap-y-3 md:gap-x-[18px] md:gap-y-4 2xl:gap-x-5 2xl:gap-y-3'
    >
      <MyAvatar />
      <Role />
      <Location />
    </Section>
  );
}
