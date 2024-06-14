import { ReactNode } from 'react';

import EmailIcon from '~/svg/email.svg';
import GitHubIcon from '~/svg/github.svg';
import LinkedInIcon from '~/svg/linkedin.svg';
import WhatsAppIcon from '~/svg/whatsapp.svg';

export type Contact = {
  url: string;
  icon: ReactNode;
  label: string;
};

const contactsData: Contact[] = [
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

export default contactsData;
