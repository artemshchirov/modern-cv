import Section from '@/layouts/section';

import ExternalLinkIcon from '~/svg/external-link.svg';

export default function ContactsSection() {
  return (
    <Section className='template shadow-section-inner flex justify-between gap-x-[22px] rounded-xl px-5 py-2.5'>
      <div className='flex items-center gap-x-2 rounded-[100px] outline outline-1 outline-[#95A3B6] pl-4 pr-3.5 py-1.5 text-[#95A3B6] whitespace-nowrap opacity-60'>
        Buy my Template
        <ExternalLinkIcon className='w-[18px] h-[18px]' fill='#95A3B6' />
      </div>
      <p className='whitespace-nowrap text-sm my-auto text-[#95A3B6] opacity-60'>
        in developing
      </p>
    </Section>
  );
}
