import Link from 'next/link';
import { ReactNode } from 'react';

import Typography from '@/components/typography';

import Section from '@/layouts/section';

import EmailIcon from '~/svg/email.svg';
import GitHubIcon from '~/svg/github.svg';
import LinkedInIcon from '~/svg/linkedin.svg';
import WhatsAppIcon from '~/svg/whatsapp.svg';

// TODO: Add tooltip for whatsapp with QR image

const contacts = [
  {
    url: 'https://github.com/artemshchirov',
    icon: <GitHubIcon className='w-[28px] h-[28px]' />,
    label: 'GitHub',
  },
  {
    url: 'https://twitter.com/username',
    icon: <LinkedInIcon className='w-[22.75px] h-[22.75px]' />,
    label: 'Twitter',
  },
  {
    url: 'https://wa.me/+972584441705',
    icon: <WhatsAppIcon className='w-[24px] h-[24px]' />,
    label: 'Twitter',
  },
  {
    url: 'mailto:artemshchirov@gmail.com',
    icon: <EmailIcon className='w-[28px] h-[28px]' />,
    label: 'Twitter',
  },
];

export default function Contacts() {
  return (
    <Section
      id='contacts'
      className='contacts bg-section shadow-section-inner flex flex-col gap-y-4 rounded-xl px-5 pt-3.5 pb-8'
    >
      <Typography isThemeRevert variant='h2' size='sm'>
        Contacts
      </Typography>
      <ul className='mx-auto flex gap-x-5'>
        {contacts.map((contact, index) => (
          <li key={index} className=''>
            <ContactLink
              url={contact.url}
              icon={contact.icon}
              label={contact.label}
            />
          </li>
        ))}
      </ul>
    </Section>
  );
}

interface ContactLinkProps {
  url: string;
  icon: ReactNode;
  label: string;
}

function ContactLink({ url, icon, label }: ContactLinkProps) {
  return (
    <Link
      href={url}
      aria-label={label}
      target='_blank'
      className='bg-btn-outer shadow-contact-outer p-1.5 rounded-full flex'
    >
      <div className='w-[46px] h-[46px] bg-btn-inner shadow-contact-inner rounded-full flex justify-center items-center'>
        {icon}
      </div>
    </Link>
  );
}
