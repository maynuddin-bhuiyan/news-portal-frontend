import BlogSection from "@/components/blogSection";
import BlogVideoSection from "@/components/blogVideoSection";
import HeroSection from "@/components/heroSection";
import HotNewsBar from "@/components/hotNewsBar";
import { Navbar } from "@/components/navbar";
import NewsletterSection from "@/components/newsletterSection";
import NewsSlider from "@/components/newsSlider";
import PopularTags from "@/components/popularTags";

export default function Home() {
  return (
   <>
   <HotNewsBar />
   <Navbar />
   <NewsSlider />
   <HeroSection />
   <PopularTags />
   <BlogVideoSection />
   <BlogSection />
   <NewsletterSection />
   </>
  );
}
