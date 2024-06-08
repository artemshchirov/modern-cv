import Link from 'next/link';

export default function Copyright() {
  return (
    <Link
      href='https://github.com/artemshchirov'
      target='_blank'
      className='text-sm text-[#A5A9B0] max-w-max hover:underline'
    >
      © 2024 Ɐrtem
    </Link>
  );
}
