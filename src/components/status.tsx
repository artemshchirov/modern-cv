import Typography from '@/components/typography';

export default function Status() {
  return (
    <>
      <div className='bg-section shadow-status max-w-max flex items-center gap-x-6 rounded-full py-1.5 pr-[30px] pl-6'>
        <div className='bg-status-signal shadow-status-signal animate-pulse   w-3.5 h-3.5 rounded-full' />
        <Typography>Available</Typography>
      </div>
    </>
  );
}
