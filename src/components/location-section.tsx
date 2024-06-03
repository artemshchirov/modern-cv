import Typography from '@/components/typography';

import Section from '@/layouts/section';

import MapPinIcon from '~/svg/map-pin.svg';

export default function LocationSection() {
  return (
    <Section className='col-span-1 shadow-section-outer flex flex-col gap-y-1 rounded-xl px-[17px] pt-3.5 pb-3'>
      <Typography variant='h2' size='sm' className='ml-[3px]'>
        Location
      </Typography>
      <div className='flex items-center gap-x-1'>
        <MapPinIcon className='w-[22px] h-[22px]' fill='#29303E' />
        <Typography size='base'>Israel</Typography>
      </div>
    </Section>
  );
}
