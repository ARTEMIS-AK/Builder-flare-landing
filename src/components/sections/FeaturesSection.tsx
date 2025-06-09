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
            <div className="h-[220px] mb-8 relative">
              {/* Y-axis labels */}
              <div className="absolute left-0 top-2 text-xs text-gray-400 font-medium">
                80
              </div>
              <div className="absolute left-0 top-12 text-xs text-gray-400 font-medium">
                60
              </div>
              <div className="absolute left-0 top-24 text-xs text-gray-400 font-medium">
                40
              </div>
              <div className="absolute left-0 top-36 text-xs text-gray-400 font-medium">
                20
              </div>
              <div className="absolute left-0 top-48 text-xs text-gray-400 font-medium">
                0
              </div>

              {/* Chart area */}
              <div className="ml-8 h-full relative">
                {/* Horizontal grid lines */}
                <div className="absolute w-full h-px bg-gray-200 top-2"></div>
                <div className="absolute w-full h-px bg-gray-200 top-12"></div>
                <div className="absolute w-full h-px bg-gray-200 top-24"></div>
                <div className="absolute w-full h-px bg-gray-200 top-36"></div>
                <div className="absolute w-full h-px bg-gray-200 top-48"></div>

                {/* Line Chart with exact curve from image */}
                <svg
                  className="absolute inset-0 w-full h-full"
                  viewBox="0 0 220 200"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M15 140 L45 90 L75 120 L105 70 L135 110 L165 80 L195 50"
                    stroke="#22c55e"
                    strokeWidth="2.5"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  {/* Data points */}
                  <circle cx="45" cy="90" r="3" fill="#22c55e" />
                  <circle cx="105" cy="70" r="3" fill="#22c55e" />
                  <circle cx="165" cy="80" r="3" fill="#22c55e" />
                </svg>
              </div>
            </div>

            <div className="space-y-3">
              <h3 className="text-gray-900 text-xl font-semibold">
                Track & Improve
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Personalized dashboards to track progress and skill gaps.
              </p>
            </div>
          </Card>

          {/* Skill Tests Card - Dark background with provided SVG */}
          <Card className="bg-gray-900 rounded-3xl p-8 h-[400px] relative">
            <div className="h-[220px] mb-8 flex items-center justify-center relative">
              {/* Using the provided SVG */}
              <svg
                width="200"
                height="200"
                viewBox="0 0 561 561"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full"
              >
                <path
                  d="M20.2944 20.042V540.722H540.974"
                  stroke="#28A263"
                  strokeWidth="29.4891"
                  strokeLinejoin="round"
                />
                <path
                  d="M140.454 260.354L240.584 360.485L400.794 120.171L540.977 220.302"
                  stroke="#C0F497"
                  strokeWidth="29.4891"
                  strokeLinejoin="round"
                />
              </svg>
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
            <div className="h-[220px] mb-8 flex items-end justify-center relative px-4">
              {/* Bar chart with exact heights from image */}
              <div className="flex items-end gap-2 h-32">
                <div className="w-5 h-20 bg-green-500 rounded-t-sm"></div>
                <div className="w-5 h-28 bg-green-400 rounded-t-sm"></div>
                <div className="w-5 h-16 bg-green-500 rounded-t-sm"></div>
                <div className="w-5 h-32 bg-green-400 rounded-t-sm"></div>
                <div className="w-5 h-12 bg-green-500 rounded-t-sm"></div>
                <div className="w-5 h-24 bg-green-400 rounded-t-sm"></div>
              </div>

              {/* Diamond sparkle icon in top right matching image exactly */}
              <div className="absolute top-8 right-8">
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
            <div className="h-[220px] mb-8 flex items-center justify-center">
              {/* Graduation cap in rounded square border exactly like image */}
              <div className="w-36 h-36 rounded-3xl border-4 border-green-400 bg-transparent flex items-center justify-center relative">
                {/* Graduation cap SVG */}
                <svg
                  width="72"
                  height="72"
                  viewBox="0 0 72 72"
                  fill="none"
                  stroke="currentColor"
                  className="text-green-400"
                >
                  <path
                    d="M36 15L12 25L36 35L60 25L36 15Z"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                  />
                  <path
                    d="M18 29V45C18 45 27 53 36 53C45 53 54 45 54 45V29"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                  />
                  <path d="M55 27V37" strokeWidth="4" strokeLinecap="round" />
                </svg>

                {/* Small green dot in bottom right */}
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
