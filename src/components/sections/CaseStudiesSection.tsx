import { Card } from "@/components/ui/card";
import { ArrowRight, X } from "lucide-react";
import { useState } from "react";

export function CaseStudiesSection() {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  const caseStudies = [
    {
      title: "Tier-2 College Graduate (No Prior Prep)",
      description:
        "Placement call-back rate jumped from 8% to 30% after using AI-driven interview feedback for 2 weeks.",
      highlight: "8% to 30%",
      bgImage:
        "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      fullStory: {
        name: "Priya Sharma",
        background:
          "Recent Computer Science graduate from a Tier-2 college in Pune with no prior interview preparation or industry exposure.",
        challenge:
          "After 6 months of job hunting, Priya had received callbacks from only 8% of companies she applied to. Her technical skills were solid, but she struggled with behavioral questions and lacked confidence during interviews.",
        solution:
          "Priya discovered Skillful Sense and started with a comprehensive skill assessment that identified her interview preparation gaps. She then used the AI-powered interview simulator for 2 weeks, practicing behavioral questions, mock technical rounds, and receiving real-time feedback on her communication style.",
        process: [
          "Week 1: Completed skill assessment and identified weak areas in communication and interview techniques",
          "Week 2: Daily 30-minute AI mock interviews focusing on behavioral and technical questions",
          "Week 3-4: Applied learnings to real interviews with improved confidence and structured responses",
        ],
        results:
          "Within 2 weeks of using Skillful Sense, Priya's callback rate jumped to 30%. She received 4 job offers within the next month and landed a software developer role at a leading tech company in Bangalore.",
        quote:
          "The AI feedback was incredibly detailed. It helped me understand not just what to say, but how to structure my thoughts and present myself confidently. I went from nervous to confident in just two weeks!",
      },
    },
    {
      title: "Marketing Executive (Career Switch to Data)",
      description:
        "Reduced job search time from 3 months to 4 weeks by identifying skill gaps and following a guided growth plan.",
      highlight: "3 months to 4 weeks",
      bgImage:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80",
      fullStory: {
        name: "Rajesh Kumar",
        background:
          "5-year marketing executive looking to transition into data analytics due to growing interest in data-driven decision making and better career prospects.",
        challenge:
          "Despite having an MBA, Rajesh lacked technical skills in data analysis tools like Python, SQL, and data visualization. His first 3 months of job hunting yielded no results as he applied randomly without understanding what skills were actually required.",
        solution:
          "Skillful Sense's skill assessment revealed specific gaps in his technical knowledge and suggested a personalized learning path. The platform recommended targeted courses and provided a clear roadmap for his career transition.",
        process: [
          "Month 1: Completed comprehensive skill gap analysis identifying need for Python, SQL, and Tableau skills",
          "Month 2: Followed curated course recommendations from Udemy and DataCamp integrated within the platform",
          "Month 3: Used AI interview prep to practice explaining his career transition and technical projects",
          "Month 4: Applied to relevant positions with a clear understanding of role requirements",
        ],
        results:
          "By following the guided growth plan, Rajesh reduced his job search from an ineffective 3 months to a focused 4 weeks. He successfully transitioned to a Data Analyst role at a fintech startup with a 40% salary increase.",
        quote:
          "The personalized learning path was a game-changer. Instead of learning everything, I focused on exactly what I needed. The platform's guidance helped me transition careers efficiently and land my dream job in data.",
      },
    },
    {
      title: "Final-Year CS Student",
      description:
        "Interview success rate increased from 1 out of 6 to 4 out of 6 after completing 5 AI mock sessions and 2 targeted assessments.",
      highlight: "1 out of 6 to 4 out of 6",
      bgImage:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2371&q=80",
      fullStory: {
        name: "Arjun Patel",
        background:
          "Final-year Computer Science student at IIT Delhi with strong academic performance but poor interview performance due to anxiety and lack of practical experience.",
        challenge:
          "Despite having excellent grades and technical knowledge, Arjun was failing interviews. Out of 6 campus interviews, he cleared only 1. He struggled with coding under pressure, explaining his thought process, and managing interview anxiety.",
        solution:
          "Arjun used Skillful Sense's AI-powered interview simulator to practice coding interviews in a low-pressure environment. The platform provided detailed feedback on his problem-solving approach, communication style, and technical explanations.",
        process: [
          "Week 1: Two targeted skill assessments to identify specific coding interview weak points",
          "Week 2-3: Five comprehensive AI mock interview sessions covering data structures, algorithms, and system design",
          "Week 4: Applied improved techniques in actual interviews with better preparation strategy",
        ],
        results:
          "After completing the AI mock sessions, Arjun's interview success rate improved dramatically from 1/6 to 4/6. He received multiple job offers from top tech companies and chose to join Google as a Software Engineer.",
        quote:
          "The AI mock interviews felt incredibly realistic. The pressure was there, but the detailed feedback helped me understand my mistakes and improve. I went from dreading interviews to actually looking forward to them!",
      },
    },
  ];

  const handleCardClick = (index: number) => {
    setExpandedCard(expandedCard === index ? null : index);
  };

  const getCardTransform = (cardIndex: number) => {
    if (expandedCard === null) return "translateX(0)";

    // For the expanded card, always move it to the leftmost position (card 1's position)
    if (cardIndex === expandedCard) {
      if (expandedCard === 0) return "translateX(0)"; // Card 1 is already in position
      if (expandedCard === 1) return "translateX(-33.33%)"; // Card 2 moves to card 1's position
      if (expandedCard === 2) return "translateX(-66.66%)"; // Card 3 moves to card 1's position
    }

    // All other cards move out of view to the right
    if (cardIndex !== expandedCard) return "translateX(100vw)";

    return "translateX(0)";
  };

  return (
    <section className="py-24 bg-black overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-20">
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="text-white text-6xl font-semibold leading-tight mb-6 max-w-[592px]">
            Learner Journeys That Inspire
            <span className="text-green-500">.</span>
          </h2>
        </div>

        {/* Case Studies Grid */}
        <div className="relative">
          <div className="grid grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <div
                key={index}
                className="relative transition-all duration-700 ease-in-out"
                style={{
                  transform: getCardTransform(index),
                  width: expandedCard === index ? "calc(300% + 4rem)" : "100%",
                  zIndex: expandedCard === index ? 10 : 1,
                }}
                onMouseLeave={() =>
                  expandedCard === index && setExpandedCard(null)
                }
              >
                <Card className="rounded-lg overflow-hidden bg-gray-900 h-[537px] relative">
                  {/* Background Image */}
                  <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: `url(${study.bgImage})` }}
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/40" />

                  {/* Content Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 bg-black/70 p-6">
                    {/* White divider line */}
                    <div className="w-full h-px bg-white mb-4"></div>

                    {expandedCard !== index ? (
                      // Collapsed State
                      <>
                        <h3 className="text-white text-xl font-semibold mb-2 leading-tight">
                          {study.title}
                        </h3>

                        <p className="text-white text-lg leading-relaxed mb-4">
                          {study.description
                            .split(study.highlight)
                            .map((part, i, arr) => (
                              <span key={i}>
                                {part}
                                {i < arr.length - 1 && (
                                  <span className="font-bold">
                                    {study.highlight}
                                  </span>
                                )}
                              </span>
                            ))}
                        </p>

                        <div
                          className="flex items-center gap-2 text-white hover:text-green-400 cursor-pointer"
                          onClick={() => handleCardClick(index)}
                        >
                          <span className="text-lg font-medium">
                            Read Case Study
                          </span>
                          <ArrowRight className="w-4 h-4" />
                        </div>
                      </>
                    ) : (
                      // Expanded State
                      <div className="max-h-[400px] overflow-y-auto pr-4">
                        <div className="flex justify-between items-start mb-4">
                          <h3 className="text-white text-2xl font-bold">
                            {study.fullStory.name} - {study.title}
                          </h3>
                          <button
                            onClick={() => setExpandedCard(null)}
                            className="text-white hover:text-green-400 transition-colors"
                          >
                            <X className="w-6 h-6" />
                          </button>
                        </div>

                        <div className="space-y-4 text-white">
                          <div>
                            <h4 className="text-green-400 font-semibold mb-2">
                              Background
                            </h4>
                            <p className="text-sm leading-relaxed">
                              {study.fullStory.background}
                            </p>
                          </div>

                          <div>
                            <h4 className="text-green-400 font-semibold mb-2">
                              Challenge
                            </h4>
                            <p className="text-sm leading-relaxed">
                              {study.fullStory.challenge}
                            </p>
                          </div>

                          <div>
                            <h4 className="text-green-400 font-semibold mb-2">
                              Solution
                            </h4>
                            <p className="text-sm leading-relaxed">
                              {study.fullStory.solution}
                            </p>
                          </div>

                          <div>
                            <h4 className="text-green-400 font-semibold mb-2">
                              Process
                            </h4>
                            <ul className="text-sm space-y-1">
                              {study.fullStory.process.map((step, i) => (
                                <li key={i} className="flex items-start gap-2">
                                  <span className="text-green-400 mt-1">•</span>
                                  <span>{step}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div>
                            <h4 className="text-green-400 font-semibold mb-2">
                              Results
                            </h4>
                            <p className="text-sm leading-relaxed">
                              {study.fullStory.results}
                            </p>
                          </div>

                          <div className="bg-green-900/30 p-4 rounded-lg border-l-4 border-green-400">
                            <p className="text-sm italic">
                              "{study.fullStory.quote}"
                            </p>
                            <p className="text-xs text-green-300 mt-2">
                              - {study.fullStory.name}
                            </p>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
