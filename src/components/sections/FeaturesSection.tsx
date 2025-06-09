import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Sparkles, GraduationCap } from "lucide-react";

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
              {/* Chart Background with grid */}
              <div className="absolute inset-0">
                {/* Horizontal grid lines */}
                <div className="absolute w-full h-px bg-gray-200 top-0"></div>
                <div className="absolute w-full h-px bg-gray-200 top-12"></div>
                <div className="absolute w-full h-px bg-gray-200 top-24"></div>
                <div className="absolute w-full h-px bg-gray-200 top-36"></div>
                <div className="absolute w-full h-px bg-gray-200 top-48"></div>
                <div className="absolute w-full h-px bg-gray-200 bottom-0"></div>

                {/* Y-axis labels */}
                <div className="absolute left-0 top-0 text-xs text-gray-500 -translate-y-1">
                  80
                </div>
                <div className="absolute left-0 top-12 text-xs text-gray-500 -translate-y-1">
                  60
                </div>
                <div className="absolute left-0 top-24 text-xs text-gray-500 -translate-y-1">
                  40
                </div>
                <div className="absolute left-0 top-36 text-xs text-gray-500 -translate-y-1">
                  20
                </div>
                <div className="absolute left-0 bottom-0 text-xs text-gray-500 translate-y-1">
                  0
                </div>

                {/* Line Chart */}
                <svg
                  className="absolute inset-0 w-full h-full"
                  viewBox="0 0 300 200"
                >
                  <path
                    d="M20 60 L60 40 L100 80 L140 30 L180 100 L220 50 L260 20"
                    stroke="#22c55e"
                    strokeWidth="3"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  {/* Data points */}
                  <circle cx="60" cy="40" r="4" fill="#22c55e" />
                  <circle cx="140" cy="30" r="4" fill="#22c55e" />
                  <circle cx="220" cy="50" r="4" fill="#22c55e" />
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

          {/* Skill Tests Card - Dark background */}
          <Card className="bg-gray-900 rounded-3xl p-8 h-[400px] relative">
            <div className="h-[240px] mb-6 flex items-center justify-center relative">
              {/* Line chart visualization */}
              <svg className="w-full h-full" viewBox="0 0 200 120">
                <defs>
                  <linearGradient
                    id="lineGradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="0%"
                  >
                    <stop offset="0%" stopColor="#22c55e" />
                    <stop offset="100%" stopColor="#84cc16" />
                  </linearGradient>
                </defs>
                {/* Grid lines */}
                <line
                  x1="0"
                  y1="20"
                  x2="200"
                  y2="20"
                  stroke="#374151"
                  strokeWidth="1"
                  opacity="0.3"
                />
                <line
                  x1="0"
                  y1="40"
                  x2="200"
                  y2="40"
                  stroke="#374151"
                  strokeWidth="1"
                  opacity="0.3"
                />
                <line
                  x1="0"
                  y1="60"
                  x2="200"
                  y2="60"
                  stroke="#374151"
                  strokeWidth="1"
                  opacity="0.3"
                />
                <line
                  x1="0"
                  y1="80"
                  x2="200"
                  y2="80"
                  stroke="#374151"
                  strokeWidth="1"
                  opacity="0.3"
                />
                <line
                  x1="0"
                  y1="100"
                  x2="200"
                  y2="100"
                  stroke="#374151"
                  strokeWidth="1"
                  opacity="0.3"
                />

                {/* Line chart */}
                <path
                  d="M20 90 L50 60 L80 40 L120 70 L160 30 L190 50"
                  stroke="url(#lineGradient)"
                  strokeWidth="3"
                  fill="none"
                  strokeLinecap="round"
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

          {/* AI Interview Prep Card - Dark background */}
          <Card className="bg-gray-900 rounded-3xl p-8 h-[400px] relative">
            <div className="h-[240px] mb-6 flex items-center justify-center relative">
              {/* Bar chart with sparkle */}
              <div className="relative w-full h-full flex items-end justify-center gap-3">
                {/* Bar chart bars */}
                <div className="w-6 h-20 bg-green-500 rounded-t"></div>
                <div className="w-6 h-32 bg-green-400 rounded-t"></div>
                <div className="w-6 h-16 bg-green-500 rounded-t"></div>
                <div className="w-6 h-28 bg-green-400 rounded-t"></div>
                <div className="w-6 h-12 bg-green-500 rounded-t"></div>
                <div className="w-6 h-24 bg-green-400 rounded-t"></div>

                {/* Sparkle/Star icon */}
                <div className="absolute top-0 right-0">
                  <Sparkles className="w-12 h-12 text-green-400" />
                </div>
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

          {/* Learn from the Best Card - Dark background */}
          <Card className="bg-gray-900 rounded-3xl p-8 h-[400px] relative">
            <div className="h-[240px] mb-6 flex items-center justify-center">
              {/* Graduation cap icon with modern design */}
              <div className="relative">
                <div className="w-32 h-32 rounded-3xl border-4 border-green-400 bg-transparent flex items-center justify-center">
                  <GraduationCap className="w-16 h-16 text-green-400 stroke-2" />
                </div>
                {/* Decorative elements */}
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-400 rounded-full"></div>
                <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-green-500 rounded-full"></div>
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
