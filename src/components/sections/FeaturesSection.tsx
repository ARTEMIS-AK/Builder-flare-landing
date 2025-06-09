import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export function FeaturesSection() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <section className="relative py-24 bg-black">
      {/* Background gradient effects matching Figma design */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Main center blur */}
        <div className="absolute w-[956px] h-[476px] bg-[#C0F497]/40 rounded-full blur-[150px] transform rotate-[-6.48deg] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"></div>

        {/* Right side gradient path */}
        <div className="absolute right-0 top-20 w-[600px] h-[700px] bg-gradient-to-br from-[#2F2F2F] to-[#696969] opacity-30 rounded-full blur-[125px] transform rotate-12"></div>

        {/* Left side blurs */}
        <div className="absolute left-0 bottom-32 w-[600px] h-[464px] bg-[#C0F497]/30 rounded-full blur-[150px]"></div>
        <div className="absolute left-20 bottom-20 w-[450px] h-[337px] bg-[#2DDB81]/40 rounded-full blur-[100px]"></div>
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
          <Card
            className={`rounded-3xl p-8 h-[400px] relative overflow-hidden transition-all duration-300 transform hover:scale-105 hover:shadow-2xl ${
              hoveredCard === null || hoveredCard === 0
                ? "bg-white"
                : "bg-gray-900"
            }`}
            onMouseEnter={() => setHoveredCard(0)}
            onMouseLeave={() => setHoveredCard(null)}
          >
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

            <div className="space-y-2">
              <h3
                className={`text-xl font-semibold line-clamp-1 ${
                  hoveredCard === null || hoveredCard === 0
                    ? "text-gray-900"
                    : "text-gray-200"
                }`}
              >
                Track & Improve
              </h3>
              <p
                className={`text-sm leading-relaxed line-clamp-2 ${
                  hoveredCard === null || hoveredCard === 0
                    ? "text-gray-500"
                    : "text-gray-400"
                }`}
              >
                Personalized dashboards to track progress and skill gaps.
              </p>
            </div>
          </Card>

          {/* Skill Tests Card - Dark background with provided SVG */}
          <Card
            className={`rounded-3xl p-8 h-[400px] relative transition-all duration-300 transform hover:scale-105 hover:shadow-2xl ${
              hoveredCard === 1 ? "bg-white" : "bg-gray-900"
            }`}
            onMouseEnter={() => setHoveredCard(1)}
            onMouseLeave={() => setHoveredCard(null)}
          >
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

            <div className="space-y-2">
              <h3
                className={`text-xl font-semibold line-clamp-1 ${
                  hoveredCard === 1 ? "text-gray-900" : "text-gray-200"
                }`}
              >
                Skill Tests that Matter
              </h3>
              <p
                className={`text-sm leading-relaxed line-clamp-2 ${
                  hoveredCard === 1 ? "text-gray-500" : "text-gray-400"
                }`}
              >
                Benchmark your skills with smart assessments and instant
                reports.
              </p>
            </div>
          </Card>

          {/* AI Interview Prep Card - Dark background with voice AI SVG */}
          <Card
            className={`rounded-3xl p-8 h-[400px] relative transition-all duration-300 transform hover:scale-105 hover:shadow-2xl ${
              hoveredCard === 2 ? "bg-white" : "bg-gray-900"
            }`}
            onMouseEnter={() => setHoveredCard(2)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="h-[220px] mb-8 flex items-center justify-center relative">
              {/* Voice AI SVG */}
              <svg
                width="200"
                height="200"
                viewBox="0 0 728 727"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full"
              >
                <g clipPath="url(#clip0_108_4587)">
                  <path
                    d="M627.709 215.927L620.258 233.072C619.093 235.864 617.128 238.249 614.611 239.926C612.094 241.604 609.136 242.499 606.111 242.499C603.086 242.499 600.129 241.604 597.612 239.926C595.094 238.249 593.13 235.864 591.965 233.072L584.513 215.927C571.412 185.596 547.418 161.278 517.266 147.771L494.275 137.502C491.485 136.219 489.122 134.163 487.466 131.578C485.81 128.992 484.929 125.987 484.929 122.916C484.929 119.846 485.81 116.84 487.466 114.255C489.122 111.67 491.485 109.614 494.275 108.331L515.994 98.6678C546.903 84.7754 571.308 59.5577 584.18 28.2094L591.874 9.70118C593 6.83419 594.963 4.37282 597.508 2.63792C600.053 0.903027 603.062 -0.0249023 606.142 -0.0249023C609.222 -0.0249023 612.23 0.903027 614.775 2.63792C617.32 4.37282 619.283 6.83419 620.409 9.70118L628.073 28.1791C640.931 59.5333 665.325 84.7619 696.229 98.6678L717.979 108.361C720.759 109.648 723.114 111.704 724.764 114.285C726.414 116.867 727.291 119.867 727.291 122.931C727.291 125.996 726.414 128.996 724.764 131.577C723.114 134.159 720.759 136.215 717.979 137.502L694.957 147.74C664.811 161.261 640.828 185.591 627.74 215.927M257.757 181.758H197.174V545.258H257.757V181.758ZM121.445 302.925H60.8613V424.091H121.445V302.925ZM394.07 60.5912H333.486V666.425H394.07V60.5912ZM530.382 242.341H469.799V545.258H530.382V242.341ZM666.695 302.925H606.111V424.091H666.695V302.925Z"
                    fill="#2DDB81"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_108_4587">
                    <rect
                      width="727"
                      height="727"
                      fill="white"
                      transform="translate(0.271484 0.00830078)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>

            <div className="space-y-2">
              <h3 className="text-gray-200 text-lg font-semibold line-clamp-1">
                AI-Powered Interview Prep
              </h3>
              <p className="text-gray-400 text-xs leading-relaxed line-clamp-2">
                Practice with real-time simulations and intelligent feedback.
              </p>
            </div>
          </Card>

          {/* Learn from the Best Card - Dark background with course SVG */}
          <Card className="bg-gray-900 rounded-3xl p-8 h-[400px] relative">
            <div className="h-[220px] mb-8 flex items-center justify-center">
              {/* Course SVG */}
              <svg
                width="200"
                height="200"
                viewBox="0 0 740 740"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full"
              >
                <path
                  d="M215.134 60.6621C174.975 64.6349 147.936 73.566 127.733 93.7995C91.5469 130.047 91.5469 188.407 91.5469 305.158V428.961C91.5469 545.681 91.5469 604.072 127.733 640.35C163.919 676.629 222.187 676.598 338.691 676.598H400.5C517.005 676.598 575.272 676.598 611.458 640.35C644.319 607.398 647.367 556.675 647.645 460.312"
                  stroke="#C0F497"
                  strokeWidth="27.4767"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M325.038 215.791L355.927 323.579C373.173 357.764 394.823 366.695 448.625 369.774C491.402 368.727 516.224 363.677 537.412 345.26C551.856 332.695 558.385 313.755 561.557 294.907L572.151 231.189M649.39 169.595V323.579M265.754 152.134C314.628 111.574 358.175 89.8008 448.502 65.8409C458.692 63.1505 469.413 63.2037 479.576 65.9949C559.525 87.9838 602.702 107.509 660.538 150.932C663.002 152.78 663.741 156.23 662.016 158.786C643.138 186.564 600.977 209.077 497.561 249.174C476.021 257.463 452.149 257.331 430.702 248.805C320.572 205.073 269.942 181.668 263.783 157.369C263.583 156.399 263.662 155.393 264.011 154.466C264.359 153.539 264.964 152.731 265.754 152.134Z"
                  stroke="#28A263"
                  strokeWidth="27.4767"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            <div className="space-y-2">
              <h3 className="text-gray-200 text-lg font-semibold line-clamp-1">
                Learn from the Best
              </h3>
              <p className="text-gray-400 text-xs leading-relaxed line-clamp-2">
                Access curated courses from Udemy, Datacamp, and more.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
