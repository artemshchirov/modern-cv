import Typography from '@/components/typography';

export default function Status() {
  return (
    <>
      <div className='bg-tab-active-dark shadow-status-dark dark:bg-section dark:shadow-status flex items-center gap-x-6 rounded-full py-1.5 px-6 w-[160px] md:w-[166px] 2xl:w-[192px]'>
        <div className='bg-status-signal shadow-status-signal animate-pulse w-3.5 h-3.5 rounded-full' />
        <Typography isThemeRevert>Available</Typography>
      </div>
    </>
  );
}
