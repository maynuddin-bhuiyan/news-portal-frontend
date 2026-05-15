import Image from "next/image";
import HeroSlider from "./heroSlider";

export default function HeroSection() {
    return (
        <div className="max-w-360 mx-auto px-4 sm:px-6 lg:px-8 mt-5">
            <div className="grid grid-cols-1 xl:grid-cols-10 gap-8">
                <div className="col-span-7">
                    <HeroSlider />
                </div>
                <div className="col-span-3">
                    <div className="relative h-80 lg:h-140 w-full overflow-hidden rounded-lg">
                        <Image
                            src="/ad-desktop.jpg"
                            alt="Hero Image"
                            fill
                            priority
                            className="object-cover"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}