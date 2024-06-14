import Link from 'next/link';
import { ReactNode } from 'react';

import { Contact } from '@/components/grid/contacts/contacts-data';

interface ContactLinksProps {
  contacts: Contact[];
}

export default function ContactLinks({
  contacts,
}: Readonly<ContactLinksProps>) {
  return (
    <ul className='mx-auto flex gap-x-5'>
      {contacts.map((contact, index) => (
        <li key={index}>
          <ContactLink
            url={contact.url}
            icon={contact.icon}
            label={contact.label}
          />
        </li>
      ))}
    </ul>
  );
}

interface ContactLinkProps {
  url: string;
  icon: ReactNode;
  label: string;
}

function ContactLink({ url, icon, label }: Readonly<ContactLinkProps>) {
  return (
    <Link
      href={url}
      aria-label={label}
      target='_blank'
      className='bg-btn-outer-dark shadow-contacts-btn-outer-dark dark:bg-btn-outer dark:shadow-contacts-btn-outer p-1.5 rounded-full flex'
    >
      <div className='w-[46px] h-[46px] bg-btn-inner-dark shadow-contacts-btn-inner-dark dark:bg-page dark:shadow-contacts-btn-inner rounded-full flex justify-center items-center'>
        {icon}
      </div>
    </Link>
  );
}
