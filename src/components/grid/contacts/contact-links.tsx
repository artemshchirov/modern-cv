import Link from 'next/link';
import { ReactNode } from 'react';

import { Contact } from '@/components/grid/contacts/contacts-data';
import { cn } from '@/lib/utils';

interface ContactLinksProps {
  contacts: Contact[];
  isDialog?: boolean;
}

export default function ContactLinks({
  contacts,
  isDialog = false,
}: Readonly<ContactLinksProps>) {
  return (
    <ul
      className={cn('mx-auto flex gap-x-5', {
        'my-auto flex-col gap-y-5': isDialog,
      })}
    >
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
