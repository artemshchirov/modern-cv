'use client';

import { useEffect, useRef, useState } from 'react';

import { cn } from '@/lib/utils';

import Typography from '@/components/typography';

import Section from '@/layouts/section';

export default function AboutSection() {
  const [isExpanded, setIsExpanded] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const [isOverflowing, setIsOverflowing] = useState(false);

  useEffect(() => {
    const contentHeight = contentRef.current?.clientHeight ?? 0;
    setIsOverflowing(contentHeight >= 144);
  }, []);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <Section aria-label='About Artem' className='flex flex-col gap-y-3'>
      <Typography variant='h2' size='sm'>
        About
      </Typography>
      <div
        ref={contentRef}
        className={cn(
          'relative overflow-hidden transition-max-height duration-300 ease-in-out',
          { 'max-h-[144px]': !isExpanded }
        )}
      >
        <Typography className=''>
          Hi, I am Artem. Web developer with a strong passion for innovation,
          creativity, and the transformation of more ideas into remarkable web
          applications. My background in various programming languages and
          frameworks Hi, I am Artem. Web developer with a strong passion for
          innovation, creativity, and the transformation of more ideas into
          remarkable web applications. My background in various programming
          languages and frameworks
          {isExpanded && (
            <button onClick={toggleExpand}>
              <span className='text-[#29303E]/50 pl-1 lg:hover:underline'>
                hide
              </span>
            </button>
          )}
        </Typography>
        {isOverflowing && (
          <button
            onClick={toggleExpand}
            className='text-base text-[#29303E]/50 lg:hover:underline absolute bottom-0 right-0 bg-[#EEF0F5] pr-5'
          >
            {!isExpanded && <span className='text-[#29303E]'>...</span>}
            {!isExpanded && 'more'}
          </button>
        )}
      </div>
    </Section>
  );
}
