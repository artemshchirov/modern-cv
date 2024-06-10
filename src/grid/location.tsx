import Typography from '@/components/typography';

import Section from '@/layouts/section';

import MapPinIcon from '~/svg/map-pin.svg';

export default function Location() {
  return (
    <Section className='bg-section-dark shadow-section-outer-dark dark:bg-page dark:shadow-section-outer col-span-1 flex flex-col gap-y-1 rounded-xl px-[17px] pt-3.5 pb-[13px]'>
      <Typography isThemeRevert variant='h2' size='sm' className='ml-[3px]'>
        Location
      </Typography>
      <div className='flex items-center gap-x-1'>
        <MapPinIcon className='w-[22px] h-[22px]' fill='#29303E' />
        <Typography>Israel</Typography>
      </div>
    </Section>
  );
}
