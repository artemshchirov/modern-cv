import Typography from '@/components/typography';

import Section from '@/layouts/section';

import TrackLineSVG from '~/svg/track-line.svg';
import TrackLinesSVG from '~/svg/track-lines.svg';

export default function YearsSection() {
  return (
    <Section className='years shadow-section-inner w-full flex flex-col gap-y-2.5 rounded-xl px-[17px] pt-3.5 pb-[16.47px]'>
      <Typography variant='h2' size='sm'>
        Years
      </Typography>

      <div className='m-auto'>
        <div className='relative max-w-max'>
          <TrackLinesSVG className='w-[125.48px] h-[99.9px]' />
          <TrackLineSVG className='w-[93.7px] h-[65.26px] absolute top-[15.9px] left-[15.9px]' />
          <div className='absolute top-[28.98px] left-[29.28px] bg-page shadow-years-outer p-[3.35px] 0 rounded-full'>
            <div className='w-[60.24px] h-[60.24px] bg-page shadow-years-inner rounded-full flex justify-center items-center'>
              <p className='max-w-max bg-years-text-gradient text-transparent bg-clip-text text-[33.5px] leading-[36.8px]'>
                4
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
