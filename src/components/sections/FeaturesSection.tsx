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
          <Card className="bg-white rounded-3xl p-8 h-[400px] relative overflow-hidden">
            <div className="h-[240px] mb-6 relative">
              {/* Y-axis labels */}
              <div className="absolute left-2 top-4 text-xs text-gray-500">
                80
              </div>
              <div className="absolute left-2 top-16 text-xs text-gray-500">
                60
              </div>
              <div className="absolute left-2 top-28 text-xs text-gray-500">
                40
              </div>
              <div className="absolute left-2 top-40 text-xs text-gray-500">
                20
              </div>
              <div className="absolute left-2 bottom-8 text-xs text-gray-500">
                0
              </div>

              {/* Chart area */}
              <div className="ml-8 h-full relative">
                {/* Horizontal grid lines */}
                <div className="absolute w-full h-px bg-gray-200 top-4"></div>
                <div className="absolute w-full h-px bg-gray-200 top-16"></div>
                <div className="absolute w-full h-px bg-gray-200 top-28"></div>
                <div className="absolute w-full h-px bg-gray-200 top-40"></div>
                <div className="absolute w-full h-px bg-gray-200 bottom-8"></div>

                {/* Line Chart with dots */}
                <svg
                  className="absolute inset-0 w-full h-full"
                  viewBox="0 0 280 200"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M10 120 L50 80 L90 100 L130 60 L170 140 L210 90 L250 40"
                    stroke="#22c55e"
                    strokeWidth="3"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  {/* Data points */}
                  <circle
                    cx="50"
                    cy="80"
                    r="4"
                    fill="#22c55e"
                    stroke="#fff"
                    strokeWidth="2"
                  />
                  <circle
                    cx="130"
                    cy="60"
                    r="4"
                    fill="#22c55e"
                    stroke="#fff"
                    strokeWidth="2"
                  />
                  <circle
                    cx="210"
                    cy="90"
                    r="4"
                    fill="#22c55e"
                    stroke="#fff"
                    strokeWidth="2"
                  />
                </svg>
              </div>
            </div>

            <div className="space-y-3">
              <h3 className="text-gray-900 text-xl font-semibold">
                Track & Improve
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Personalized dashboards to track progress and skill gaps.
              </p>
            </div>
          </Card>

          {/* Skill Tests Card - Dark background with line chart */}
          <Card className="bg-gray-900 rounded-3xl p-8 h-[400px] relative">
            <div className="h-[240px] mb-6 flex items-center justify-center relative">
              {/* Chart background rectangle */}
              <div className="w-full h-40 bg-gray-800/50 rounded-lg relative overflow-hidden">
                {/* Line chart going upward */}
                <svg
                  className="absolute inset-0 w-full h-full"
                  viewBox="0 0 200 100"
                >
                  <path
                    d="M20 80 L60 60 L100 40 L140 30 L180 20"
                    stroke="#84cc16"
                    strokeWidth="3"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  {/* Fill area under curve */}
                  <path
                    d="M20 80 L60 60 L100 40 L140 30 L180 20 L180 100 L20 100 Z"
                    fill="url(#gradient1)"
                    fillOpacity="0.2"
                  />
                  <defs>
                    <linearGradient
                      id="gradient1"
                      x1="0%"
                      y1="0%"
                      x2="0%"
                      y2="100%"
                    >
                      <stop offset="0%" stopColor="#84cc16" />
                      <stop offset="100%" stopColor="transparent" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>

            <div className="space-y-3">
              <h3 className="text-gray-200 text-xl font-semibold">
                Skill Tests that Matter
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Benchmark your skills with smart assessments and instant
                reports.
              </p>
            </div>
          </Card>

          {/* AI Interview Prep Card - Dark background with bar chart */}
          <Card className="bg-gray-900 rounded-3xl p-8 h-[400px] relative">
            <div className="h-[240px] mb-6 flex items-end justify-center relative px-4">
              {/* Bar chart */}
              <div className="flex items-end gap-2 h-32">
                <div className="w-4 h-16 bg-green-500 rounded-t-sm"></div>
                <div className="w-4 h-24 bg-green-400 rounded-t-sm"></div>
                <div className="w-4 h-12 bg-green-500 rounded-t-sm"></div>
                <div className="w-4 h-28 bg-green-400 rounded-t-sm"></div>
                <div className="w-4 h-8 bg-green-500 rounded-t-sm"></div>
                <div className="w-4 h-20 bg-green-400 rounded-t-sm"></div>
              </div>

              {/* Diamond sparkle icon in top right */}
              <div className="absolute top-4 right-4">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <path
                    d="M16 2 L20 12 L30 16 L20 20 L16 30 L12 20 L2 16 L12 12 Z"
                    fill="#22c55e"
                  />
                </svg>
              </div>
            </div>

            <div className="space-y-3">
              <h3 className="text-gray-200 text-xl font-semibold">
                AI-Powered Interview Prep
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Practice with real-time simulations and intelligent feedback.
              </p>
            </div>
          </Card>

          {/* Learn from the Best Card - Dark background with graduation cap */}
          <Card className="bg-gray-900 rounded-3xl p-8 h-[400px] relative">
            <div className="h-[240px] mb-6 flex items-center justify-center">
              {/* Graduation cap in rounded rectangle */}
              <div className="w-32 h-32 rounded-2xl border-4 border-green-400/60 bg-transparent flex items-center justify-center relative">
                {/* Graduation cap SVG */}
                <svg
                  width="64"
                  height="64"
                  viewBox="0 0 64 64"
                  fill="none"
                  className="text-green-400"
                >
                  <path
                    d="M32 8L8 20L32 32L56 20L32 8Z"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                  />
                  <path
                    d="M16 24V40C16 40 24 48 32 48C40 48 48 40 48 40V24"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                  />
                  <path
                    d="M52 22V32"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>

                {/* Small decorative dot */}
                <div className="absolute -bottom-2 -right-2 w-4 h-4 bg-green-400 rounded-full"></div>
              </div>
            </div>

            <div className="space-y-3">
              <h3 className="text-gray-200 text-xl font-semibold">
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
