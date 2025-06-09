import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { User } from "lucide-react";

export function TestimonialsSection() {
  const testimonials = [
    {
      quote: "Amazing tool! Saved me months.",
      content:
        "Skillful Sense helped me focus on exactly what I needed to learn. The skill test was spot-on, and I got course recommendations that matched my goals. No more wasting time on random content.",
      name: "Ananya R.",
      title: "Computer Science Graduate, Pune University",
      bgColor: "bg-gray-800",
    },
    {
      quote: "Felt like a real interview!",
      content:
        "The AI interview feature was super realistic. It made me rethink my answers, improve my confidence, and perform better in actual job interviews. Game-changer for freshers like me.",
      name: "Aditya Nair",
      title: "Final Year Engineering Student, Chennai",
      bgColor: "bg-gray-900",
    },
    {
      quote: "Finally, a platform that gets me.",
      content:
        "I've tried many learning sites, but this one actually understands where I'm lacking and gives targeted solutions. Skillful Sense doesn't just teach — it guides.",
      name: "Sarah Thomas",
      title: "Junior Data Analyst, Bengaluru",
      bgColor: "bg-gray-900",
    },
    {
      quote: "The smartest way to upskill.",
      content:
        "I was overwhelmed by too many courses online. Skillful Sense gave me clarity — I took one test and instantly got personalized, actionable recommendations. It's like a GPS for your career.",
      name: "Rahul Mehta",
      title: "Marketing Executive, Mumbai",
      bgColor: "bg-gray-800",
    },
  ];

  return (
    <section className="relative py-24 bg-black">
      <div className="max-w-[1280px] mx-auto px-12">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-16">
          <div>
            <h2 className="text-white text-6xl font-semibold leading-tight mb-6">
              Hear from our learners
              <span className="text-green-500">.</span>
            </h2>
          </div>
          <Button
            variant="outline"
            className="border-2 border-white text-green-400 hover:bg-white hover:text-black px-6 py-3 rounded-full"
          >
            Read customer stories
          </Button>
        </div>

        {/* Testimonials Grid */}
        <div className="space-y-6">
          {/* First Row */}
          <div className="grid grid-cols-2 gap-6">
            <Card
              className={`${testimonials[0].bgColor} rounded-3xl p-8 h-[251px] transition-all duration-300 transform hover:scale-105 hover:shadow-2xl`}
            >
              <div className="space-y-2 mb-6">
                <h3 className="text-green-500 text-2xl font-medium leading-6 tracking-[-0.48px]">
                  "{testimonials[0].quote}"
                </h3>
                <p className="text-gray-300 text-base italic leading-6">
                  {testimonials[0].content}
                </p>
              </div>
              <div className="flex items-center gap-4">
                <Avatar className="w-12 h-12 border-2 border-gray-600">
                  <AvatarFallback className="bg-gray-300">
                    <User className="w-6 h-6 text-black" />
                  </AvatarFallback>
                </Avatar>
                <div>
                  <div className="text-gray-200 text-base font-medium">
                    {testimonials[0].name}
                  </div>
                  <div className="text-gray-400 text-sm">
                    {testimonials[0].title}
                  </div>
                </div>
              </div>
            </Card>

            <Card
              className={`${testimonials[1].bgColor} rounded-3xl p-8 h-[251px] transition-all duration-300 transform hover:scale-105 hover:shadow-2xl`}
            >
              <div className="space-y-2 mb-6">
                <h3 className="text-green-500 text-2xl font-medium leading-6 tracking-[-0.48px]">
                  "{testimonials[1].quote}"
                </h3>
                <p className="text-gray-300 text-base italic leading-6">
                  {testimonials[1].content}
                </p>
              </div>
              <div className="flex items-center gap-4">
                <Avatar className="w-12 h-12 border-2 border-gray-600">
                  <AvatarFallback className="bg-gray-300">
                    <User className="w-6 h-6 text-black" />
                  </AvatarFallback>
                </Avatar>
                <div>
                  <div className="text-gray-200 text-base font-medium">
                    {testimonials[1].name}
                  </div>
                  <div className="text-gray-400 text-sm">
                    {testimonials[1].title}
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Second Row */}
          <div className="grid grid-cols-2 gap-6">
            <Card
              className={`${testimonials[2].bgColor} rounded-3xl p-8 h-[251px] transition-all duration-300 transform hover:scale-105 hover:shadow-2xl`}
            >
              <div className="space-y-2 mb-6">
                <h3 className="text-green-500 text-2xl font-medium leading-6 tracking-[-0.48px]">
                  "{testimonials[2].quote}"
                </h3>
                <p className="text-gray-300 text-base italic leading-6">
                  {testimonials[2].content}
                </p>
              </div>
              <div className="flex items-center gap-4">
                <Avatar className="w-12 h-12 border-2 border-gray-600">
                  <AvatarFallback className="bg-gray-300">
                    <User className="w-6 h-6 text-black" />
                  </AvatarFallback>
                </Avatar>
                <div>
                  <div className="text-gray-200 text-base font-medium">
                    {testimonials[2].name}
                  </div>
                  <div className="text-gray-400 text-sm">
                    {testimonials[2].title}
                  </div>
                </div>
              </div>
            </Card>

            <Card
              className={`${testimonials[3].bgColor} rounded-3xl p-8 h-[251px]`}
            >
              <div className="space-y-2 mb-6">
                <h3 className="text-green-600 text-2xl font-medium leading-6 tracking-[-0.48px]">
                  "{testimonials[3].quote}"
                </h3>
                <p className="text-gray-300 text-base italic leading-6">
                  {testimonials[3].content}
                </p>
              </div>
              <div className="flex items-center gap-4">
                <Avatar className="w-12 h-12 border-2 border-gray-600">
                  <AvatarFallback className="bg-gray-300">
                    <User className="w-6 h-6 text-black" />
                  </AvatarFallback>
                </Avatar>
                <div>
                  <div className="text-gray-200 text-base font-medium">
                    {testimonials[3].name}
                  </div>
                  <div className="text-gray-400 text-sm">
                    {testimonials[3].title}
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-4 mt-12">
          <div className="w-3 h-3 bg-green-600 rounded-full"></div>
          <div className="w-3 h-3 bg-gray-700 rounded-full"></div>
          <div className="w-3 h-3 bg-gray-700 rounded-full"></div>
        </div>
      </div>
    </section>
  );
}
