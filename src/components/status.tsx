import Typography from '@/components/typography';

export default function Status() {
  return (
    <>
      <div className='bg-section shadow-status dark:bg-section-inner-dark dark:shadow-status-dark 2xl:bg-section-inner-dark 2xl:shadow-status-dark 2xl:dark:bg-section 2xl:dark:shadow-status flex items-center gap-x-6 rounded-full py-1.5 px-6 min-w-[160px] md:min-w-[166px] 2xl:w-[192px]'>
        <div className='bg-status-signal shadow-status-signal dark:shadow-status-signal-dark 2xl:shadow-status-signal-dark 2xl:dark:shadow-status-signal animate-pulse w-3.5 h-3.5 rounded-full' />
        <Typography isThemeRevert>Available</Typography>
      </div>
    </>
  );
}
