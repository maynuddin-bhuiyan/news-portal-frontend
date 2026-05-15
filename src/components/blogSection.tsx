'use client';

import Image from 'next/image';
import { MessageSquare} from 'lucide-react';
import { BsInstagram, BsTwitter, BsYoutube } from 'react-icons/bs';

const posts = [
  {
    title: 'The Art of Baking: From Classic Bread to Artisan Pastries',
    desc: 'To spread the word, the company embarked on a mass marketing drive. TV campaigns launched in the platform’s key markets.',
    image:
      '/slider-img.jpg',
  },
  {
    title: 'AI and Marketing: Unlocking Customer Insights',
    desc: 'To spread the word, the company embarked on a mass marketing drive. TV campaigns launched in the platform’s key markets.',
    image:
      '/slider-img.jpg',
  },
  {
    title: 'Hidden Gems: Underrated Travel Destinations Around the World',
    desc: 'To spread the word, the company embarked on a mass marketing drive. TV campaigns launched in the platform’s key markets.',
    image:
      '/slider-img.jpg',
  },
  {
    title: 'Eco-Tourism: Traveling Responsibly and Sustainably',
    desc: 'To spread the word, the company embarked on a mass marketing drive. TV campaigns launched in the platform’s key markets.',
    image:
      '/slider-img.jpg',
  },
];

const popularPosts = [
  {
    id: 1,
    title: 'Virtual Reality and Mental Health: Exploring the Therapeutic',
    time: '2mo ago',
    comments: 290,
  },
  {
    id: 2,
    title: 'The Future of Sustainable Living: Driving Eco-Friendly Lifestyles',
    time: '2mo ago',
    comments: 1,
  },
  {
    id: 3,
    title: 'Smart Homes, Smarter Living: Exploring IoT and AI',
    time: '23d ago',
    comments: 15,
  },
  {
    id: 4,
    title: 'How Businesses Are Adapting to E-Commerce and AI Integration',
    time: '29d ago',
    comments: 20,
  },
];

export default function BlogSection() {
  return (
    <section className="w-full bg-white py-10">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 lg:grid-cols-[1fr_320px]">
        {/* LEFT CONTENT */}
        <div className="space-y-8">
            <div className="mb-12">
          <h2 className="text-3xl font-bold text-red-600 md:text-5xl">
          Latest News
          </h2>

          <p className="mt-3 text-base text-gray-700 md:text-lg">
            Most searched keywords
          </p>
        </div>
          {posts.map((post, index) => (
            <div
              key={index}
              className="flex flex-col gap-5 border-b border-gray-200 pb-6 md:flex-row"
            >
              {/* IMAGE */}
              <div className="relative h-[220px] w-full overflow-hidden md:h-[170px] md:w-[260px]">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* CONTENT */}
              <div className="flex-1">
                <h2 className="mb-3 text-2xl font-semibold leading-snug text-black transition hover:text-red-600">
                  {post.title}
                </h2>

                <p className="mb-5 text-[16px] leading-7 text-gray-500">
                  {post.desc}
                </p>

                <button className="border-b-2 border-red-500 pb-1 text-sm font-semibold uppercase tracking-wide text-red-600">
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* SIDEBAR */}
        <div className="space-y-5">
          {/* POPULAR POSTS */}
          <div className="border border-gray-200 p-6">
            <h3 className="mb-6 text-center text-sm font-semibold uppercase tracking-[3px] text-gray-400">
              Popular Now
            </h3>

            <div className="space-y-6">
              {popularPosts.map((post) => (
                <div
                  key={post.id}
                  className="flex gap-4 border-b border-gray-200 pb-5 last:border-none"
                >
                  {/* NUMBER */}
                  <span className="text-5xl font-bold italic text-red-600">
                    {post.id}
                  </span>

                  {/* CONTENT */}
                  <div>
                    <h4 className="mb-3 text-[18px] font-medium leading-snug text-black hover:text-red-600">
                      {post.title}
                    </h4>

                    <div className="flex items-center gap-5 text-sm text-gray-400">
                      <span>{post.time}</span>

                      <div className="flex items-center gap-1">
                        <MessageSquare size={15} />
                        <span>{post.comments}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* SUBSCRIBE */}
          <div className="border border-gray-200 p-6">
            <h3 className="mb-6 text-center text-sm font-semibold uppercase tracking-[3px] text-gray-400">
              Follow @News5
            </h3>

            <input
              type="email"
              placeholder="Your email"
              className="mb-4 h-12 w-full border border-gray-300 px-4 outline-none placeholder:text-gray-400 focus:border-red-500"
            />

            <button className="mb-6 h-12 w-full bg-red-600 text-base font-semibold text-white transition hover:bg-black">
              Sign up
            </button>

            {/* SOCIAL */}
            <div className="flex items-center justify-center gap-4">
              {[BsInstagram, BsTwitter, BsYoutube].map((Icon, index) => (
                <button
                  key={index}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-300 text-gray-500 transition hover:border-red-500 hover:text-red-500"
                >
                  <Icon size={18} />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}