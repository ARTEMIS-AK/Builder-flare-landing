import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-screen bg-black overflow-hidden">
      {/* Background Blur Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-[319px] left-[258px] w-[1440px] h-[1309px] opacity-40">
          <div className="absolute w-[956px] h-[541px] bg-green-400/40 rounded-full blur-[150px] transform rotate-[173.678deg] -left-[449px] top-[1593px]"></div>
          <div className="absolute w-[1274px] h-[704px] bg-green-400/30 rounded-full blur-[150px] transform rotate-[173.678deg] -left-[214px] top-[1005px]"></div>
          <div className="absolute w-[517px] h-[280px] bg-green-500/30 rounded-full blur-[100px] transform rotate-[-178.361deg] left-[298px] top-[1697px]"></div>
          <div className="absolute w-[517px] h-[336px] bg-green-500/50 rounded-full blur-[100px] left-[941px] top-[700px]"></div>
        </div>
      </div>

      <div className="relative max-w-[1440px] mx-auto px-4 md:px-8 lg:px-20 pt-16 md:pt-24 lg:pt-32">
        {/* Rating Section */}
        <div className="flex items-center gap-2 mb-6">
          <div className="flex gap-1">
            {[...Array(4)].map((_, i) => (
              <Star
                key={i}
                className="w-6 h-6 fill-yellow-400 text-yellow-400"
              />
            ))}
            <Star className="w-6 h-6 fill-gray-400 text-gray-400" />
          </div>
          <span className="text-gray-400 text-sm">
            Based on <span className="text-gray-300">1000+</span> reviews
          </span>
        </div>

        {/* Main Heading */}
        <div className="max-w-[916px] mb-8">
          <h1 className="text-[72px] font-bold leading-[80px] tracking-[-2.16px] mb-6">
            <span className="text-white">Supercharge your skills</span>
            <span className="text-green-500">.</span>
            <br />
            <span className="text-white">Get career-ready with AI</span>
          </h1>

          <p className="text-white text-lg leading-6 max-w-[510px] mb-12">
            AI-powered learning paths, smart skill tests, and personalized
            course suggestions — all in one place.
          </p>

          <div className="flex items-center gap-8">
            <Button className="bg-green-600 hover:bg-green-700 text-white px-6 py-4 h-14 text-lg font-semibold">
              Get a Free Demo
            </Button>

            <div className="flex items-center gap-2">
              <div className="w-px h-6 bg-green-500"></div>
              <div className="text-green-500 text-xs leading-4 max-w-[273px]">
                Take a free skill assessment
                <br />
                Discover where you stand in just a few minutes.
              </div>
            </div>
          </div>
        </div>

        {/* Call-to-Action Button positioned on the right */}
        <div className="absolute top-[328px] right-[75px]">
          <Button
            variant="outline"
            className="border-2 border-white text-white hover:bg-white hover:text-black px-6 py-3 rounded-full"
          >
            Get Started Now
          </Button>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-[659px] left-[88px] flex items-center gap-8">
          <div className="flex gap-4">
            <div className="w-3 h-3 bg-white rounded-full"></div>
            <div className="w-3 h-3 bg-white rounded-full"></div>
            <div className="w-3 h-3 bg-white rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
