'use client';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import { ChevronLeft, ChevronRight, EyeIcon, MessageSquare } from 'lucide-react';


const slides = [
  {
    title: 'Smart Homes, Smarter Living: Exploring IoT and AI',
    image:
      '/slider-img.jpg',
    author: 'David Peterson',
    comments: 15,
    date: '23d',
  },
  {
    title: 'The Future of Technology in Everyday Life',
    image:
      '/slider-img.jpg',
    author: 'John Carter',
    comments: 22,
    date: '10d',
  },
  {
    title: 'AI Revolution: How Machines Are Changing the World',
    image:
      '/slider-img.jpg',
    author: 'Sarah Lee',
    comments: 31,
    date: '5d',
  },
];

export default function HeroSlider() {
  return (
    <div className="relative w-full">
      {/* Navigation Buttons */}
      <button className="hero-prev absolute left-5 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white backdrop-blur-md transition hover:bg-white hover:text-black">
        <ChevronLeft size={22} />
      </button>

      <button className="hero-next absolute right-5 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white backdrop-blur-md transition hover:bg-white hover:text-black">
        <ChevronRight size={22} />
      </button>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation={{
          prevEl: '.hero-prev',
          nextEl: '.hero-next',
        }}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        loop={true}
        className="hero-slider"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-140 w-full overflow-hidden rounded-lg">
              {/* Background Image */}
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                priority
                className="object-cover"
              />

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black/45" />

              {/* Content */}
              <div className="absolute bottom-12 left-12 z-10 max-w-2xl text-white">
                <p className="mb-4 text-sm text-gray-300">{slide.date}</p>

                <h2 className="mb-6 text-3xl font-bold leading-tight md:text-5xl">
                  {slide.title}
                </h2>

                <div className="flex items-center gap-5">
                  {/* Author */}
                  <div className="flex items-center gap-3">
                    {/* <Image
                      src="https://i.pravatar.cc/100"
                      alt="author"
                      width={40}
                      height={40}
                      className="rounded-full"
                    /> */}
                    <EyeIcon size={18} className="text-gray-300" />

                    <span className="font-medium">{slide.author}</span>
                  </div>

                  {/* Comments */}
                  <div className="flex items-center gap-2 text-gray-300">
                    <MessageSquare size={18} />
                    <span>{slide.comments}</span>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}