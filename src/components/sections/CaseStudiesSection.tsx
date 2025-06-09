import { Card } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

export function CaseStudiesSection() {
  const caseStudies = [
    {
      title: "Tier-2 College Graduate (No Prior Prep)",
      description:
        "Placement call-back rate jumped from 8% to 30% after using AI-driven interview feedback for 2 weeks.",
      image: "/placeholder.svg",
      highlight: "8% to 30%",
    },
    {
      title: "Marketing Executive (Career Switch to Data)",
      description:
        "Reduced job search time from 3 months to 4 weeks by identifying skill gaps and following a guided growth plan.",
      image: "/placeholder.svg",
      highlight: "3 months to 4 weeks",
    },
    {
      title: "Final-Year CS Student",
      description:
        "Interview success rate increased from 1 out of 6 to 4 out of 6 after completing 5 AI mock sessions and 2 targeted assessments.",
      image: "/placeholder.svg",
      highlight: "1 out of 6 to 4 out of 6",
    },
  ];

  return (
    <section className="py-24 bg-black">
      <div className="max-w-[1440px] mx-auto px-20">
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="text-white text-6xl font-semibold leading-tight mb-6 max-w-[592px]">
            Learner Journeys That Inspire
            <span className="text-green-500">.</span>
          </h2>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <div key={index} className="relative">
              <Card className="rounded-lg overflow-hidden bg-gray-900 h-[537px]">
                {/* Image Section */}
                <div className="h-[297px] bg-gray-700 relative overflow-hidden">
                  <div
                    className="w-full h-full bg-gray-600"
                    style={{
                      backgroundImage: `url(${study.image})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  />
                </div>

                {/* Overlay Content */}
                <div className="absolute bottom-0 left-0 right-0 bg-black/70 p-6">
                  {/* White divider line */}
                  <div className="w-full h-px bg-white mb-4"></div>

                  <h3 className="text-white text-xl font-semibold mb-2 leading-tight">
                    {study.title}
                  </h3>

                  {/* Description with highlight */}
                  <p className="text-white text-lg leading-relaxed mb-4">
                    {study.description
                      .split(study.highlight)
                      .map((part, i, arr) => (
                        <span key={i}>
                          {part}
                          {i < arr.length - 1 && (
                            <span className="font-bold">{study.highlight}</span>
                          )}
                        </span>
                      ))}
                  </p>

                  {/* Read Case Study Link */}
                  <div className="flex items-center gap-2 text-white hover:text-green-400 cursor-pointer">
                    <span className="text-lg font-medium">Read Case Study</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
