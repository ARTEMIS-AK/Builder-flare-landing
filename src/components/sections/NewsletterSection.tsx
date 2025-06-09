import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function NewsletterSection() {
  return (
    <section className="py-24 bg-black">
      <div className="max-w-[1440px] mx-auto px-20">
        {/* First CTA Section */}
        <div className="text-center mb-24">
          <div className="max-w-[556px] mx-auto space-y-8">
            {/* Try It Now Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-gray-800 rounded-full">
              <span className="text-gray-300 text-xs font-medium uppercase tracking-wider">
                Try It Now
              </span>
            </div>

            {/* Main Heading */}
            <h2 className="text-5xl font-semibold leading-tight tracking-[-0.96px]">
              <span className="text-white">Not Sure Where to Start</span>
              <span className="text-green-500">?</span>
              <br />
              <span className="text-white">Test Your Skills Free</span>
            </h2>

            {/* Description */}
            <p className="text-gray-400 text-lg leading-6">
              Start with a quick skill assessment to discover where you stand —
              then get personalized course recommendations that match your
              goals, interests, and current level.
            </p>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex items-center justify-center gap-14 mb-32">
          <Button className="bg-green-600 hover:bg-green-700 text-white px-6 py-4 h-14 text-lg font-semibold">
            Get a Free Demo
          </Button>

          <div className="flex items-center gap-4">
            <div className="w-px h-6 bg-green-500"></div>
            <div className="text-green-500 text-xs leading-4">
              Get started with a quick skill check.Uncover your strengths and
              gaps in minutes.
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="flex items-center justify-between">
          {/* Left side - divider */}
          <div className="w-[161px] h-px bg-white"></div>

          {/* Center - Newsletter Signup */}
          <div className="flex flex-col items-center text-center max-w-[540px]">
            <h3 className="text-green-500 text-4xl font-bold leading-tight tracking-[-0.86px] mb-5">
              Stay Ahead in Your Career Journey
            </h3>

            <p className="text-gray-400 text-xl leading-6 tracking-[-0.2px] mb-10 max-w-[447px]">
              Get exclusive tips, job prep insights, and smart learning
              suggestions — straight to your inbox.
            </p>

            {/* Email Form */}
            <div className="flex items-center gap-3">
              <div className="relative">
                <Input
                  type="email"
                  placeholder="name@email.com"
                  className="w-[295px] h-11 px-3 py-2 bg-white/20 border-0 rounded-lg text-white placeholder:text-white/50 focus:ring-2 focus:ring-green-500"
                />
              </div>
              <Button className="bg-white text-black hover:bg-gray-100 px-4 py-2 h-11 rounded-lg">
                Get access
              </Button>
            </div>
          </div>

          {/* Right side - empty space for balance */}
          <div className="w-[161px]"></div>
        </div>
      </div>
    </section>
  );
}
