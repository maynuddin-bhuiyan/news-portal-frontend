export default function NewsletterSection() {
  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto flex flex-col items-center justify-between gap-8 rounded-3xl border border-white/10 bg-gradient-to-r from-[#0B1F45] to-[#102B5C] px-6 py-10 shadow-2xl lg:flex-row lg:px-10">
        
        {/* Left Content */}
        <div>
          <div className="flex items-center gap-3">
            {/* Logo */}
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-cyan-500 shadow-lg">
              <span className="text-xl font-bold text-white">K</span>
            </div>

            {/* Title */}
            <h2 className="text-3xl font-extrabold tracking-wide text-white lg:text-4xl">
              Kriams's News
            </h2>
          </div>

          {/* Description */}
          <p className="mt-4 max-w-md text-base leading-7 text-gray-300">
            Stay updated with breaking news, trending stories, and exclusive
            reports delivered directly to your inbox.
          </p>
        </div>

        {/* Subscribe Form */}
        <form className="flex w-full max-w-2xl flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md sm:flex-row">
          
          {/* Input */}
          <div className="flex flex-1 items-center gap-3 px-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="h-5 w-5 text-cyan-400"
            >
              <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
            </svg>

            <input
              type="email"
              placeholder="Enter your email address"
              className="h-14 w-full bg-transparent text-white placeholder:text-gray-400 focus:outline-none"
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className="h-14 bg-cyan-500 px-8 text-sm font-semibold uppercase tracking-wide text-white transition hover:bg-cyan-600"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}