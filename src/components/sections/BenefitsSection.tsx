import { Card } from "@/components/ui/card";
import { Edit3, Sparkles, TrendingUp, Shield, Clock } from "lucide-react";
import { useState } from "react";

export function BenefitsSection() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <section className="relative py-24 bg-black">
      {/* Background blur effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-[956px] h-[527px] bg-green-600/40 rounded-full blur-[150px] transform rotate-[-6.481deg] left-[148px] top-[198px]"></div>
      </div>

      <div className="relative max-w-[1340px] mx-auto px-12">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-white text-6xl font-semibold leading-tight mb-6">
            Why Skillful Sense
            <span className="text-green-500">?</span>
          </h2>
          <p className="text-white text-2xl leading-9 tracking-[-0.88px]">
            More Than Just Learning — It's a Career Companion
          </p>
        </div>

        {/* Top Row - Main Features */}
        <div className="grid grid-cols-3 gap-10 mb-16">
          {/* Smart Skill Assessments */}
          <Card
            className={`rounded-3xl p-11 text-center transition-all duration-300 transform hover:scale-105 hover:shadow-2xl ${
              hoveredCard === null || hoveredCard === 0
                ? "bg-green-600"
                : "bg-gray-900 border border-white/20"
            }`}
            onMouseEnter={() => setHoveredCard(0)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-7">
              <Edit3 className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="text-white text-xl font-semibold mb-2 tracking-[-0.62px]">
              Smart Skill Assessments
            </h3>
            <p className="text-white text-lg leading-7 tracking-[-0.18px]">
              Identify your strengths and gaps through targeted, AI-powered
              tests — fast, accurate, and personalized.
            </p>
          </Card>

          {/* AI-Driven Interview Practice */}
          <Card
            className={`rounded-3xl p-11 text-center transition-all duration-300 transform hover:scale-105 hover:shadow-2xl ${
              hoveredCard === 1
                ? "bg-green-600"
                : "bg-gray-900 border border-white/20"
            }`}
            onMouseEnter={() => setHoveredCard(1)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-7">
              <Sparkles className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="text-white text-xl font-semibold mb-2 tracking-[-0.62px]">
              AI-Driven Interview Practice
            </h3>
            <p className="text-white text-lg leading-7 tracking-[-0.18px]">
              Get job-ready with realistic mock interviews and instant feedback
              that improves you in real time.
            </p>
          </Card>

          {/* Personalized Growth Plans */}
          <Card
            className={`rounded-3xl p-11 text-center transition-all duration-300 transform hover:scale-105 hover:shadow-2xl ${
              hoveredCard === 2
                ? "bg-green-600"
                : "bg-gray-900 border border-white/20"
            }`}
            onMouseEnter={() => setHoveredCard(2)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-7">
              <TrendingUp className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="text-white text-xl font-semibold mb-2 tracking-[-0.62px]">
              Personalized Growth Plans
            </h3>
            <p className="text-white text-lg leading-7 tracking-[-0.18px]">
              Based on your test performance, we suggest what to learn next —
              from skills to focus areas.
            </p>
          </Card>
        </div>

        {/* Bottom Row - Additional Features */}
        <div className="grid grid-cols-2 gap-10 max-w-[840px] mx-auto">
          {/* Affiliate-powered & updated catalog */}
          <Card
            className={`rounded-3xl p-11 text-center transition-all duration-300 transform hover:scale-105 hover:shadow-2xl ${
              hoveredCard === 3
                ? "bg-green-600"
                : "bg-gray-900 border border-white/20"
            }`}
            onMouseEnter={() => setHoveredCard(3)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-7">
              <Shield className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="text-white text-xl font-semibold mb-2 tracking-[-0.62px]">
              Affiliate-powered & updated catalog
            </h3>
            <p className="text-white text-lg leading-7 tracking-[-0.18px]">
              Access top-rated content from Udemy, and more, constantly
              refreshed through trusted affiliate partners.
            </p>
          </Card>

          {/* Save Time, Skip the Guesswork */}
          <Card
            className={`rounded-3xl p-11 text-center transition-all duration-300 transform hover:scale-105 hover:shadow-2xl ${
              hoveredCard === 4
                ? "bg-green-600"
                : "bg-gray-900 border border-white/20"
            }`}
            onMouseEnter={() => setHoveredCard(4)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-7">
              <Clock className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="text-white text-xl font-semibold mb-2 tracking-[-0.62px]">
              Save Time, Skip the Guesswork
            </h3>
            <p className="text-white text-lg leading-7 tracking-[-0.18px]">
              No more browsing endlessly. Get actionable results in minutes and
              know your next step instantly.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
}
