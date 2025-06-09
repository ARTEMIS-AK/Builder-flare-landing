import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function FeaturesSection() {
  return (
    <section className="relative py-24 bg-gradient-to-b from-black via-green-900/20 to-black">
      {/* Background gradient effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-full h-full bg-gradient-to-b from-transparent via-green-500/10 to-transparent"></div>
      </div>

      <div className="relative max-w-[1440px] mx-auto px-4 md:px-8 lg:px-20">
        {/* Header with title and button */}
        <div className="flex items-center justify-between mb-16">
          <h2 className="text-white text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight max-w-2xl">
            Your smart learning journey starts here
            <span className="text-black">.</span>
          </h2>

          <Button
            variant="outline"
            className="border-2 border-white text-white hover:bg-white hover:text-black px-8 py-4 rounded-full text-lg hidden lg:flex"
          >
            Get Started Now
          </Button>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Track & Improve Card - White background */}
          <Card className="bg-white rounded-3xl p-6 h-[400px] relative overflow-hidden">
            <div className="h-[240px] mb-6 relative">
              {/* Y-axis labels positioned on the left */}
              <div className="absolute left-0 top-8 text-xs text-gray-400">
                80
              </div>
              <div className="absolute left-0 top-16 text-xs text-gray-400">
                60
              </div>
              <div className="absolute left-0 top-24 text-xs text-gray-400">
                40
              </div>
              <div className="absolute left-0 top-32 text-xs text-gray-400">
                20
              </div>
              <div className="absolute left-0 top-40 text-xs text-gray-400">
                0
              </div>

              {/* Chart area with padding for labels */}
              <div className="ml-6 h-full relative">
                {/* Horizontal grid lines */}
                <div className="absolute w-full h-px bg-gray-200 top-8"></div>
                <div className="absolute w-full h-px bg-gray-200 top-16"></div>
                <div className="absolute w-full h-px bg-gray-200 top-24"></div>
                <div className="absolute w-full h-px bg-gray-200 top-32"></div>
                <div className="absolute w-full h-px bg-gray-200 top-40"></div>

                {/* Line Chart with exact path from image */}
                <svg
                  className="absolute inset-0 w-full h-full"
                  viewBox="0 0 240 180"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M10 140 L40 80 L80 100 L120 60 L160 120 L200 70 L230 40"
                    stroke="#22c55e"
                    strokeWidth="2.5"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  {/* Data points as in the image */}
                  <circle cx="40" cy="80" r="3" fill="#22c55e" />
                  <circle cx="120" cy="60" r="3" fill="#22c55e" />
                  <circle cx="200" cy="70" r="3" fill="#22c55e" />
                </svg>
              </div>
            </div>

            <div className="space-y-2">
              <h3 className="text-gray-900 text-lg font-semibold">
                Track & Improve
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Personalized dashboards to track progress and skill gaps.
              </p>
            </div>
          </Card>

          {/* Skill Tests Card - Dark background with contained line chart */}
          <Card className="bg-gray-900 rounded-3xl p-6 h-[400px] relative">
            <div className="h-[240px] mb-6 flex items-center justify-center relative">
              {/* Chart container with border frame like in image */}
              <div className="w-full h-32 bg-gray-800 rounded-lg relative p-4 border border-gray-700">
                {/* Grid lines inside container */}
                <div className="absolute inset-4 border-l border-b border-gray-600"></div>

                {/* Line chart going upward */}
                <svg
                  className="absolute inset-4 w-[calc(100%-2rem)] h-[calc(100%-2rem)]"
                  viewBox="0 0 180 80"
                >
                  <path
                    d="M10 70 L50 50 L90 30 L130 20 L170 10"
                    stroke="#84cc16"
                    strokeWidth="3"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>

            <div className="space-y-2">
              <h3 className="text-gray-200 text-lg font-semibold">
                Skill Tests that Matter
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Benchmark your skills with smart assessments and instant
                reports.
              </p>
            </div>
          </Card>

          {/* AI Interview Prep Card - Dark background with bar chart */}
          <Card className="bg-gray-900 rounded-3xl p-6 h-[400px] relative">
            <div className="h-[240px] mb-6 flex items-end justify-center relative px-8">
              {/* Bar chart with varying heights like in image */}
              <div className="flex items-end gap-3 h-32">
                <div className="w-4 h-20 bg-green-500 rounded-t"></div>
                <div className="w-4 h-28 bg-green-400 rounded-t"></div>
                <div className="w-4 h-16 bg-green-500 rounded-t"></div>
                <div className="w-4 h-32 bg-green-400 rounded-t"></div>
                <div className="w-4 h-12 bg-green-500 rounded-t"></div>
                <div className="w-4 h-24 bg-green-400 rounded-t"></div>
              </div>

              {/* Diamond/star sparkle icon in top right exactly like image */}
              <div className="absolute top-8 right-8">
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                  <path
                    d="M14 0 L17.5 10.5 L28 14 L17.5 17.5 L14 28 L10.5 17.5 L0 14 L10.5 10.5 Z"
                    fill="#22c55e"
                  />
                </svg>
              </div>
            </div>

            <div className="space-y-2">
              <h3 className="text-gray-200 text-lg font-semibold">
                AI-Powered Interview Prep
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Practice with real-time simulations and intelligent feedback.
              </p>
            </div>
          </Card>

          {/* Learn from the Best Card - Dark background with graduation cap */}
          <Card className="bg-gray-900 rounded-3xl p-6 h-[400px] relative">
            <div className="h-[240px] mb-6 flex items-center justify-center">
              {/* Graduation cap in rounded square border like image */}
              <div className="w-32 h-32 rounded-3xl border-3 border-green-400 bg-transparent flex items-center justify-center relative">
                {/* Graduation cap SVG matching the image style */}
                <svg
                  width="60"
                  height="60"
                  viewBox="0 0 60 60"
                  fill="none"
                  className="text-green-400"
                >
                  <path
                    d="M30 12L10 22L30 32L50 22L30 12Z"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                  />
                  <path
                    d="M15 26V40C15 40 22 46 30 46C38 46 45 40 45 40V26"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                  />
                  <path
                    d="M46 24V32"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>

                {/* Small green dot in bottom right corner */}
                <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-400 rounded-full"></div>
              </div>
            </div>

            <div className="space-y-2">
              <h3 className="text-gray-200 text-lg font-semibold">
                Learn from the Best
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Access curated courses from Udemy, Datacamp, and more.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
