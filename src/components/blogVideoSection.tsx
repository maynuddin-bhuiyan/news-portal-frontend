'use client';

import Link from 'next/link';
import { Play, Eye } from 'lucide-react';

const videos = [
  {
    id: 1,
    title: 'How AI Is Changing The Future of Journalism',
    thumbnail: 'https://img.youtube.com/vi/bMknfKXIFA8/maxresdefault.jpg',
    videoUrl: 'https://www.youtube.com/watch?v=bMknfKXIFA8',
    views: '12.5K Views',
    category: 'Technology',
  },
  {
    id: 2,
    title: 'Top 10 Travel Destinations To Visit This Year',
    thumbnail: 'https://img.youtube.com/vi/tgbNymZ7vqY/maxresdefault.jpg',
    videoUrl: 'https://www.youtube.com/watch?v=tgbNymZ7vqY',
    views: '8.2K Views',
    category: 'Travel',
  },
  {
    id: 3,
    title: 'Inside The Modern Smart Home Revolution',
    thumbnail: 'https://img.youtube.com/vi/ysz5S6PUM-U/maxresdefault.jpg',
    videoUrl: 'https://www.youtube.com/watch?v=ysz5S6PUM-U',
    views: '15K Views',
    category: 'Lifestyle',
  },
  {
    id: 4,
    title: 'Breaking News Explained In 5 Minutes',
    thumbnail: 'https://img.youtube.com/vi/jNQXAC9IVRw/maxresdefault.jpg',
    videoUrl: 'https://www.youtube.com/watch?v=jNQXAC9IVRw',
    views: '20K Views',
    category: 'News',
  },
];

export default function BlogVideoSection() {
  return (
    <section className="bg-[#071633] py-16">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Heading */}
        <div className="mb-10 flex items-center justify-between">
          <div>
            <span className="mb-3 inline-block rounded-full bg-cyan-500/10 px-4 py-1 text-sm font-medium text-cyan-400">
              Trending Videos
            </span>

            <h2 className="text-3xl font-bold text-white lg:text-5xl">
              Watch Latest News & Stories
            </h2>
          </div>

          <Link
            href="#"
            className="hidden rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-white transition hover:bg-cyan-500 lg:block"
          >
            View All Videos
          </Link>
        </div>

        {/* Videos Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {videos.map((video) => (
            <a
              key={video.id}
              href={video.videoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] transition duration-300 hover:-translate-y-2 hover:border-cyan-500/40"
            >
              {/* Thumbnail */}
              <div className="relative h-[250px] overflow-hidden">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-red-600 text-white shadow-2xl transition duration-300 group-hover:scale-110">
                    <Play className="ml-1 h-7 w-7 fill-white" />
                  </div>
                </div>

                {/* Category */}
                <div className="absolute left-4 top-4 rounded-full bg-cyan-500 px-3 py-1 text-xs font-semibold text-white">
                  {video.category}
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="line-clamp-2 text-lg font-semibold leading-7 text-white transition group-hover:text-cyan-400">
                  {video.title}
                </h3>

                <div className="mt-4 flex items-center gap-2 text-sm text-gray-400">
                  <Eye size={16} />
                  {video.views}
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Mobile Button */}
        <div className="mt-8 text-center lg:hidden">
          <Link
            href="#"
            className="inline-flex rounded-full bg-cyan-500 px-6 py-3 text-sm font-medium text-white transition hover:bg-cyan-600"
          >
            View All Videos
          </Link>
        </div>
      </div>
    </section>
  );
}