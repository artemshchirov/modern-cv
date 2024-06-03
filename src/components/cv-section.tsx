import Typography from '@/components/typography';
import { Button } from '@/components/ui/button';

import Section from '@/layouts/section';

export default function CvSection() {
  return (
    <Section className='cv shadow-section-inner flex flex-col gap-y-[18px] rounded-xl px-5 pt-3.5 pb-5'>
      <Typography variant='h2' size='sm'>
        CV
      </Typography>
      <div className='flex flex-col gap-y-4'>
        <Button>View PDF</Button>
        <Button>Download</Button>
      </div>
    </Section>
  );
}
