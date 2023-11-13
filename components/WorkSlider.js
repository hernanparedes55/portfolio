// work slider data
export const workSlider = {
  slides: [
    {
      images: [
        {
          title: 'Buscador de Bebidas',
          path: '/bebidas.png',
          url: 'https://gallant-sammet-d14e73.netlify.app/',
        },
        {
          title: 'Citas para Mascotas',
          path: '/citas.png',
          url: 'https://happy-yonath-425aec.netlify.app/',
        },
        {
          title: 'Cotizador de Criptos',
          path: '/criptos.png',
          url: 'https://lucid-morse-57ae92.netlify.app/',
        },
        {
          title: 'Crud',
          path: '/crud.png',
          url: 'https://sleepy-austin-6eab97.netlify.app/productos/nuevo',
        },
      ],
    },
    {
      images: [
        {
          title: 'Ferreteria',
          path: '/ferreteria.png',
          url: 'https://quizzical-ride-099e6f.netlify.app/',
        },
        {
          title: 'Soho',
          path: '/soho.png',
          url: 'https://genuine-bublanina-8268f1.netlify.app/',
        },
        {
          title: 'title',
          path: '/thumb2.jpg',
          url: 'https://github.com/hernanparedes55/',
        },
        {
          title: 'title',
          path: '/thumb3.jpg',
          url: 'https://github.com/hernanparedes55/',
        },
      ],
    },
  ],
};

// import swiper react components
import { Swiper, SwiperSlide } from 'swiper/react';

// import swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper';

// icons
import { BsArrowRight } from 'react-icons/bs';
// next image
import Image from 'next/image';
import Link from 'next/link';

const WorkSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className='h-[280px] sm:h-[480px]'
    >
      {workSlider.slides.map((slide, SlideIndex) => {
        return (
          <SwiperSlide key={SlideIndex}>
            <div className='grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer'>
              {slide.images.map((image, ImageIndex) => {
                return (
                  <Link  href={image.url} key={ImageIndex} target="_blank">
                  <div
                    className='relative rounded-lg overflow-hidden flex items-center justify-center group'
                    key={ImageIndex}
                  >
                    <div className='flex items-center justify-center relative overflow-hidden group'>
                      {/* image */}
                      <Image src={image.path} width={500} height={300} alt='' />
                      {/* overlay gradient */}
                      <div className='absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700'></div>
                      {/* title */}
                      <div className='absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300'>
                        <div className='flex items-center gap-x-2 text-[13px] tracking-[0.2em]'>
                          {/* title part 1 */}
                          <div className='delay-100'>IR</div>
                          {/* title part 2 */}
                          <div className='translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150'>
                            AL PROYECTO
                          </div>
                          {/* icon */}
                          <div className='text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200'>
                            <BsArrowRight />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  </Link>
                );
              })}
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default WorkSlider;
