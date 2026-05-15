'use client';

import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

const articles = [
  {
    title: 'Solo Travel: Some Tips and Destinations for the...',
    image: '/news-image.jpg',
  },
  {
    title: 'AI-Powered Financial Planning: How Algorithms...',
    image: '/news-image.jpg',
  },
  {
    title: 'Tech Tools for your Time Management: Enhancing...',
    image: '/news-image.jpg',
  },
  {
    title: 'A Guide to The Rise of Gourmet Street Food...',
    image: '/news-image.jpg',
  },
  {
    title: 'Top Remote Work Trends You Should Know...',
    image: '/news-image.jpg',
  },
];

export default function NewsSlider() {
  return (
    <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 lg:block hidden">
      <div className="relative w-full bg-white py-2">
        
        {/* Desktop Navigation Buttons */}
        <button className="news-prev absolute left-2 top-1/2 z-10 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border bg-white shadow transition hover:bg-gray-100 lg:flex">
          <ChevronLeft size={20} />
        </button>

        <button className="news-next absolute right-2 top-1/2 z-10 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border bg-white shadow transition hover:bg-gray-100 lg:flex">
          <ChevronRight size={20} />
        </button>

        <Swiper
          modules={[Navigation, Autoplay]}
          navigation={{
            prevEl: '.news-prev',
            nextEl: '.news-next',
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          loop={true}
          spaceBetween={16}
          slidesPerView={2}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            1024: {
              slidesPerView: 4,
            },
          }}
          className="lg:px-14"
        >
          {articles.map((article, index) => (
            <SwiperSlide key={index} className="h-auto">
              <div className="flex items-center gap-3 bg-[#f5f5f5] p-2">
                
                {/* Image */}
                <div className="relative h-[65px] w-[90px] shrink-0 overflow-hidden">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Title */}
                <h3 className="line-clamp-2 text-sm font-medium leading-snug text-black lg:text-[17px]">
                  {article.title}
                </h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}