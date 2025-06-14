import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import Spline from "@splinetool/react-spline";

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

      <div className="relative max-w-[1440px] mx-auto px-4 md:px-8 lg:px-20 pt-8 md:pt-12 lg:pt-16">
        <div className="flex items-center min-h-[85vh]">
          {/* Left Side - Content (More space) */}
          <div className="w-full lg:w-[60%] space-y-6 lg:pr-8">
            {/* Rating Section */}
            <div className="flex items-center gap-2">
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
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-[72px] font-bold leading-tight lg:leading-[80px] tracking-[-2.16px] max-w-[916px]">
                <span className="text-white">Supercharge your skills</span>
                <span className="text-green-500">.</span>
                <br />
                <span className="text-white">Get career-ready with AI</span>
              </h1>

              <p className="text-white text-lg leading-6 max-w-[510px]">
                AI-powered learning paths, smart skill tests, and personalized
                course suggestions — all in one place.
              </p>

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8">
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
          </div>

          {/* Right Side - 3D Model (Smaller and positioned right) */}
          <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-[35%] h-[500px] mr-8">
            <div className="relative w-full h-full rounded-lg overflow-hidden">
              <Spline
                scene="https://prod.spline.design/IGcAq7gylHWdmxIv/scene.splinecode"
                className="w-full h-full object-cover spline-container"
              />
            </div>

            {/* Subtle overlay to blend with design */}
            <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-black/10 pointer-events-none"></div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute bottom-20 left-20 lg:left-[88px] flex items-center gap-8">
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
