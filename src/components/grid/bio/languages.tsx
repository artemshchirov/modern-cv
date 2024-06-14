import Typography from '@/components/typography';
import { Badge } from '@/components/ui/badge';

import Section from '@/layouts/section';

export default function Languages() {
  const languages = ['HE', 'EN', 'UA', 'RU'];

  return (
    <Section
      aria-label='Language Proficiency'
      className='flex flex-col gap-y-3'
    >
      <Typography isThemeRevert variant='h2' size='sm'>
        Languages
      </Typography>
      <ul className='flex gap-x-3'>
        {languages.map((language) => (
          <LanguageBadge key={language} language={language} />
        ))}
      </ul>
    </Section>
  );
}

const LanguageBadge = ({ language }: { language: string }) => (
  <li>
    <Badge
      variant='lang'
      className='dark:bg-section-dark bg-page dark:shadow-btn-lang-dark shadow-btn-lang 2xl:bg-section-dark 2xl:dark:bg-page 2xl:dark:shadow-btn-lang 2xl:shadow-btn-lang-dark rounded-xl 2xl:text-white 2xl:dark:text-[#29303E]'
    >
      {language}
    </Badge>
  </li>
);
