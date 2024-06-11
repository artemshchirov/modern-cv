import Typography from '@/components/typography';
import { Button } from '@/components/ui/button';

import Section from '@/layouts/section';

import DownloadIcon from '~/svg/download.svg';
import ExternalLinkIcon from '~/svg/external-link.svg';

export default function Cv() {
  return (
    <Section
      id='cv'
      className='cv bg-section shadow-section-inner dark:bg-section-inner-dark dark:shadow-section-inner-dark flex flex-col gap-y-[18px] rounded-xl px-4 pt-3.5 pb-5'
    >
      <Typography isThemeRevert variant='h2' size='sm'>
        CV
      </Typography>
      <div className='flex flex-col gap-y-4'>
        <Button className='flex justify-between'>
          View PDF <ExternalLinkIcon className='w-4 h-4' />
        </Button>
        <Button className='flex justify-between'>
          Download <DownloadIcon className='w-4 h-4' />
        </Button>
      </div>
    </Section>
  );
}
