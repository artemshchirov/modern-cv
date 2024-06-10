import AvatarComponent from '@/components/avatar-component';

import Section from '@/layouts/section';

export default function MyAvatar() {
  // TODO: Do the grid like other grids in grid.css
  return (
    <Section
      aria-label='Profile Image'
      className='bg-section-dark shadow-section-outer-dark  dark:bg-page dark:shadow-section-outer col-span-1 row-span-2 flex justify-center items-center rounded-xl'
    >
      <div className='bg-avatar-outer-dark shadow-avatar-outer-dark dark:bg-avatar-outer dark:shadow-avatar-outer w-[120px] h-[120px] md:w-[130px] md:h-[130px] 2xl:w-[152px] 2xl:h-[152px] flex justify-center items-center rounded-full'>
        <AvatarComponent />
      </div>
    </Section>
  );
}
