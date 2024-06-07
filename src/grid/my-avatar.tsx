import AvatarComponent from '@/components/avatar-component';

import Section from '@/layouts/section';

export default function MyAvatar() {
  // TODO: Do the grid like other grids in grid.css
  return (
    <Section
      aria-label='Profile Image'
      className='shadow-section-outer col-span-1 row-span-2 flex justify-center items-center  rounded-xl'
    >
      <div className='bg-avatar-outer shadow-avatar-outer w-[120px] h-[120px] flex justify-center items-center rounded-full  outline-gray-500'>
        <AvatarComponent />
      </div>
    </Section>
  );
}
