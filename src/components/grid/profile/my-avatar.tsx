import AvatarComponent from '@/components/avatar-component';

import Section from '@/layouts/section';

export default function MyAvatar() {
  // TODO: Do the grid like other grids in grid.css
  return (
    <Section
      aria-label='Profile Image'
      className='bg-page shadow-section-outer dark:bg-section-dark dark:shadow-section-outer-dark 2xl:bg-section-dark 2xl:shadow-section-outer-dark 2xl:dark:bg-page 2xl:dark:shadow-section-outer col-span-1 row-span-2 flex justify-center items-center rounded-xl'
    >
      <div className='bg-avatar-outer shadow-avatar-outer dark:bg-avatar-outer-dark dark:shadow-avatar-outer-dark 2xl:bg-avatar-outer-dark 2xl:shadow-avatar-outer-dark 2xl:dark:bg-avatar-outer 2xl:dark:shadow-avatar-outer w-[120px] h-[120px] md:w-[130px] md:h-[130px] 2xl:w-[152px] 2xl:h-[152px] flex justify-center items-center rounded-full'>
        <AvatarComponent />
      </div>
    </Section>
  );
}
