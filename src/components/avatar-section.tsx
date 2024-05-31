import AvatarComponent from '@/components/avatar-component';

import Section from '@/layouts/section';

export default function AvatarSection() {
  // TODO: Do the grid like other grids in grid.css
  return (
    <Section
      aria-label='Profile Image'
      className='col-span-1 row-span-2 flex justify-center items-center outline outline-1 rounded-xl'
    >
      <div className='w-[120px] h-[120px] flex justify-center items-center rounded-full outline outline-1 outline-gray-500'>
        <AvatarComponent />
      </div>
    </Section>
  );
}
