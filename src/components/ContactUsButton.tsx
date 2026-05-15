import { ArrowUpRight, MessageCircle } from "lucide-react";

export default function ContactUsButton() {
  return (
    <button className="group relative overflow-hidden rounded-full bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-600 px-3 py-2 text-white shadow-xl transition-all duration-300 hover:scale-105">
      
      {/* Glow Effect */}
      <span className="absolute inset-0 bg-white/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      {/* Content */}
      <span className="relative flex items-center gap-3">
        {/* Icon */}
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20 backdrop-blur-md">
          <MessageCircle className="h-4 w-4" />
        </span>

        {/* Text */}
        <span className="flex flex-col items-start">
          <span className="text-lg font-semibold">
            Contact Us
          </span>
        </span>

        {/* Arrow */}
        <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
      </span>
    </button>
  );
}