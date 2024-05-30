import AvatarComponent from '@/components/avatar-component';

import Section from '@/layouts/section';

export default function AvatarSection() {
  return (
    <Section
      aria-label='Profile Image'
      className='item1 flex justify-center items-center outline outline-1 rounded-xl'
    >
      <div className='w-[120px] h-[120px] flex justify-center items-center rounded-full outline outline-1 outline-gray-500'>
        <AvatarComponent />
      </div>
    </Section>
  );
}
