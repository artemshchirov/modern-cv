import Location from '@/components/grid/profile/location';
import MyAvatar from '@/components/grid/profile/my-avatar';
import Role from '@/components/grid/profile/role';

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
