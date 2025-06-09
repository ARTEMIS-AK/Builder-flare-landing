import { Card } from "@/components/ui/card";
import { CheckCircle, BarChart3, Mic, BookOpen } from "lucide-react";

export function FeaturesSection() {
  return (
    <section className="relative py-24 bg-black">
      {/* Background blur effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-[956px] h-[527px] bg-green-600/40 rounded-full blur-[150px] transform rotate-[-6.481deg] left-[148px] top-[198px]"></div>
      </div>

      <div className="relative max-w-[1440px] mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-white text-6xl font-semibold leading-tight mb-6">
            Your smart learning journey starts here
            <span className="text-black">.</span>
          </h2>
        </div>

        {/* Features Grid */}
        <div className="flex justify-center gap-6 mb-24">
          {/* Track & Improve Card */}
          <Card className="w-[302px] h-[383px] bg-white rounded-3xl p-8 relative overflow-hidden">
            <div className="h-[228px] mb-8 relative">
              {/* Chart Background */}
              <div className="absolute inset-0">
                {/* Grid lines */}
                {[0, 38, 75, 112, 148, 186, 222].map((top, i) => (
                  <div
                    key={i}
                    className="absolute w-full h-px bg-gray-900/5"
                    style={{ top: `${top}px` }}
                  />
                ))}

                {/* Y-axis labels */}
                <div className="absolute left-0 top-[70px] text-right text-[10px] text-gray-900/70 w-[13px]">
                  <div className="absolute top-0">80</div>
                  <div className="absolute top-[37px]">60</div>
                  <div className="absolute top-[73px]">40</div>
                  <div className="absolute top-[110px]">20</div>
                  <div className="absolute top-[146px]">0</div>
                </div>

                {/* Chart Line */}
                <svg
                  className="absolute left-[22px] top-[88px] w-[355px] h-[110px]"
                  viewBox="0 0 355 110"
                >
                  <path
                    d="M5 37L9 43C13 49 22 61 30 70C39 78 47 84 56 72C64 61 72 31 81 31C89 32 98 61 106 70C115 78 123 66 132 72C140 78 149 102 157 93C165 84 174 43 182 46C191 49 199 70 208 93C216 117 224 117 233 102C243 88 247 83 258 75C268 68 275 78 284 67C292 55 301 20 309 14C317 8 326 31 334 34C343 37 351 20 355 11L359 2"
                    stroke="#28A263"
                    strokeWidth="2.86"
                    strokeLinecap="round"
                    fill="none"
                  />
                </svg>

                {/* Data points */}
                <div className="absolute">
                  <div className="absolute w-[10px] h-[10px] bg-gray-900 rounded-full border-2 border-green-600 left-[93px] top-[93px]"></div>
                  <div className="absolute w-[10px] h-[10px] bg-gray-900 rounded-full border-2 border-green-600 left-[110px] top-[38px]"></div>
                  <div className="absolute w-[10px] h-[10px] bg-gray-900 rounded-full border-2 border-green-600 left-[57px] top-[64px]"></div>
                </div>

                {/* Progress bar */}
                <div className="absolute w-[117px] h-px bg-green-600 left-[261px] top-[104px]"></div>
              </div>
            </div>

            <div className="space-y-2">
              <h3 className="text-gray-900 text-lg font-medium">
                Track & Improve
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Personalized dashboards to track progress and skill gaps.
              </p>
            </div>
          </Card>

          {/* Skill Tests Card */}
          <Card className="w-[302px] h-[383px] bg-gray-900 rounded-3xl p-8 relative">
            <div className="h-[213px] mb-8 flex items-center justify-center">
              <BarChart3
                className="w-[213px] h-[213px] text-green-400"
                strokeWidth={1}
              />
            </div>

            <div className="space-y-2 text-center">
              <h3 className="text-gray-200 text-lg font-medium">
                Skill Tests that Matter
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Benchmark your skills with smart assessments and instant
                reports.
              </p>
            </div>
          </Card>

          {/* AI Interview Prep Card */}
          <Card className="w-[302px] h-[383px] bg-gray-900 rounded-3xl p-8 relative">
            <div className="h-[213px] mb-8 flex items-center justify-center">
              <Mic
                className="w-[184px] h-[184px] text-green-500"
                strokeWidth={1}
              />
            </div>

            <div className="space-y-2 text-center">
              <h3 className="text-gray-200 text-lg font-medium">
                AI-Powered Interview Prep
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Practice with real-time simulations and intelligent feedback.
              </p>
            </div>
          </Card>

          {/* Learn from the Best Card */}
          <Card className="w-[302px] h-[383px] bg-gray-900 rounded-3xl p-8 relative">
            <div className="h-[213px] mb-8 flex items-center justify-center">
              <BookOpen
                className="w-[184px] h-[184px] text-green-400"
                strokeWidth={1}
              />
            </div>

            <div className="space-y-2 text-center">
              <h3 className="text-gray-200 text-lg font-medium">
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
