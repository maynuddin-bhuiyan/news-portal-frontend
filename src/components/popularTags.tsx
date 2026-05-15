import Image from "next/image";

const popularTags = [
   {
    id: 1,
    name: "Politics",
    image:
       "/slider-img.jpg",
  },
  {
    id: 2,
    name: "World",
    image:
      "/slider-img.jpg",
  },
  {
    id: 3,
    name: "Technology",
    image:
      "/slider-img.jpg",
  },
  {
    id: 4,
    name: "Business",
    image:
      "/slider-img.jpg",
  },
  {
    id: 5,
    name: "Sports",
    image:
      "/slider-img.jpg",
  },
  {
    id: 6,
    name: "Entertainment",
    image:
      "/slider-img.jpg",
  },
  {
    id: 7,
    name: "Health",
    image:
      "/slider-img.jpg",
  },
  {
    id: 8,
    name: "Science",
    image:
      "/slider-img.jpg",
  },
  {
    id: 9,
    name: "Education",
    image:
      "/slider-img.jpg",
  },
  {
    id: 10,
    name: "Climate",
    image:
      "/slider-img.jpg",
  },
  {
    id: 11,
    name: "Economy",
    image:
      "/slider-img.jpg",
  },
  {
    id: 12,
    name: "Breaking News",
    image:
      "/slider-img.jpg",
  },
];

export default function PopularTags() {
  return (
    <section className="py-16">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-red-600 md:text-5xl">
            Popular Tags
          </h2>

          <p className="mt-3 text-base text-gray-700 md:text-lg">
            Most searched keywords
          </p>
        </div>

        {/* Tags */}
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
          {popularTags.map((tag) => (
            <button
              key={tag.id}
              className="flex items-center gap-3 rounded-lg border border-black/10 bg-[#f5f5f5] px-4 py-5 transition-all duration-300 hover:border-cyan-400/40 hover:bg-white/[0.06]"
            >
              {/* Image */}
              <div className="relative h-10 w-10 overflow-hidden rounded-full">
                <Image
                  src={tag.image}
                  alt={tag.name}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Text */}
              <span className="text-sm font-medium text-black md:text-base">
                {tag.name}
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}