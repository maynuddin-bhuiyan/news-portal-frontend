'use client';

import { useEffect, useRef } from 'react';
import { Star } from 'lucide-react';

const newsItems = [
  'Build your sustainable business framework',
  'Climate change impact growing worldwide',
  'Explore the top 4 cheapest electric vehicles',
  'New study reveals health benefits of green spaces',
  'Global efforts to reduce plastic waste show progress',
  'Innovative solutions for clean energy emerging',
];

export default function HotNewsBar() {
  const tickerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ticker = tickerRef.current;

    if (!ticker) return;

    let animationFrameId: number;
    let position = 0;
    const speed = 0.5;

    const animate = () => {
      position -= speed;

      // Reset position for infinite loop
      if (Math.abs(position) >= ticker.scrollWidth / 2) {
        position = 0;
      }

      ticker.style.transform = `translateX(${position}px)`;

      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <div className="w-full overflow-hidden bg-red-600 text-white">
      <div className="flex items-center">
        {/* Label */}
        <div className="flex shrink-0 items-center gap-2 bg-black px-4 py-2 font-semibold uppercase">
          Hot News
        </div>

        {/* Ticker */}
        <div className="relative overflow-hidden w-full">
          <div
            ref={tickerRef}
            className="flex w-max items-center gap-8 whitespace-nowrap will-change-transform"
          >
            {[...newsItems, ...newsItems].map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-2 text-sm md:text-base"
              >
                <Star size={14} className="shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}