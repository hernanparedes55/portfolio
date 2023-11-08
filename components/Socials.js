// links
import Link from 'next/link';

// icons
import {
  RiLinkedinLine,
  RiInstagramLine,
  RiFacebookLine,
  RiGithubLine,
  RiProfileLine
} from 'react-icons/ri';

const Socials = () => {
  return (
    <div className='flex items-center gap-x-5 text-lg'>
      <Link href={'https://www.linkedin.com/in/hernanparedes55/'} target='_blank' className='hover:text-accent transition-all duration-300'>
        <RiLinkedinLine />
      </Link>
      <Link href={'https://github.com/hernanparedes55'} target='_blank' className='hover:text-accent transition-all duration-300'>
        <RiGithubLine />
      </Link>
      <Link href={'https://www.facebook.com/hernanparedes55/'} target='_blank' className='hover:text-accent transition-all duration-300'>
        <RiFacebookLine />
      </Link>
      <Link href={'https://www.instagram.com/hernanparedes9/'} target='_blank' className='hover:text-accent transition-all duration-300'>
        <RiInstagramLine />
      </Link>
      <Link href={'./CV-HernanParedes2023.pdf'} target='_blank' className='hover:text-accent transition-all duration-300'>
        <RiProfileLine />
      </Link>
    </div>
  );
};

export default Socials;
