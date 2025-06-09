import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, X, Heart, Crown, Zap } from "lucide-react";

export function PricingSection() {
  const plans = [
    {
      name: "Free",
      icon: Heart,
      price: "$0",
      period: "/month",
      description: "Perfect plan to get started",
      details:
        "A free plan grants you access to some cool features of Spend.In.",
      features: [
        { name: "Sync accross device", included: true },
        { name: "5 workspace", included: true },
        { name: "Collaborate with 5 user", included: true },
        { name: "Sharing permission", included: false },
        { name: "Admin tools", included: false },
        { name: "100+ integrations", included: false },
      ],
      buttonText: "Get Started",
      buttonVariant: "default" as const,
      bgColor: "bg-gray-900",
    },
    {
      name: "Pro",
      icon: Crown,
      price: "$12",
      period: "/month",
      description: "For serious learners preparing for interviews.",
      details:
        "For professional only! Start arranging your expenses with our best templates.",
      features: [
        { name: "Everything in Free Plan", included: true },
        { name: "Unlimited workspace", included: true },
        { name: "Collaborative workspace", included: true },
        { name: "Sharing permission", included: true },
        { name: "Admin tools", included: true },
        { name: "100+ integrations", included: true },
      ],
      buttonText: "Upgrade Now",
      buttonVariant: "default" as const,
      bgColor: "bg-gray-900",
      popular: true,
    },
    {
      name: "Ultimate",
      icon: Zap,
      price: "$33",
      period: "/month",
      description: "Lifetime access for career-driven users.",
      details:
        "If you a finance manager at big company, this plan is a perfect match.",
      features: [
        { name: "Everything in Pro Plan", included: true },
        { name: "Daily performance reports", included: true },
        { name: "Dedicated assistant", included: true },
        { name: "Artificial intelligence", included: true },
        { name: "Marketing tools & automations", included: true },
        { name: "Advanced security", included: true },
      ],
      buttonText: "Choose Plan",
      buttonVariant: "default" as const,
      bgColor: "bg-gray-900",
    },
  ];

  return (
    <section className="py-24 bg-black">
      <div className="max-w-[1440px] mx-auto px-20">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-white text-6xl font-semibold leading-tight mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-gray-400 text-xl leading-relaxed max-w-[583px] mx-auto">
            Flexible plans designed to match your learning and career goals.
          </p>
        </div>

        {/* Toggle & Discount */}
        <div className="flex justify-center mb-16">
          <div className="flex items-center gap-8">
            <span className="text-white text-xl font-semibold">Monthly</span>

            <div className="relative">
              <div className="w-[70px] h-9 bg-green-600 rounded-full relative">
                <div className="absolute right-1 top-1 w-7 h-7 bg-white rounded-full"></div>
              </div>
            </div>

            <span className="text-white text-xl font-semibold">Yearly</span>
          </div>

          {/* Save 35% Badge */}
          <div className="ml-8 mt-8 relative">
            <div className="bg-green-400 text-black px-3 py-1 rounded-full text-sm font-medium">
              Save 35%
            </div>
            {/* Arrow pointing to toggle */}
            <div className="absolute -top-6 -left-16 transform rotate-[153deg]">
              <svg
                width="57"
                height="50"
                viewBox="0 0 75 72"
                className="text-white"
              >
                <path
                  d="M47.97 23.96c.08.45.15.84.19 1.04.23 1.25.42 4.41 1.3 6.56.67 1.64 1.75 2.7 3.38 2.32 1.48-.35 2.41-1.83 2.85-3.87 1-4.4-.15-11.44-1.05-13.48-.1-.22-.36-.32-.58-.22-.22.1-.32.36-.22.58.86 1.95 1.96 8.7 1.04 12.93-.36 1.65-.99 2.92-2.19 3.2-1.18.28-1.88-.6-2.37-1.79-.86-2.09-1.03-5.17-1.25-6.38-.14-.76-.59-3.67-.69-3.91-.12-.3-.38-.29-.46-.28-.06.01-.39.07-.4.46-.21 5.69-4.47 14.27-10.74 20.01-6.21 5.69-14.42 8.59-22.65 2.95-.2-.14-.47-.09-.61.11-.13.2-.08.47.12.61 8.62 5.92 17.23 2.94 23.74-3.02 5.48-5.03 9.45-12.17 10.65-17.8z"
                  fill="currentColor"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-3 gap-8 max-w-[1030px] mx-auto">
          {plans.map((plan, index) => {
            const IconComponent = plan.icon;
            return (
              <Card
                key={index}
                className={`${plan.bgColor} rounded-lg p-7 relative h-[609px]`}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute top-8 right-7 bg-green-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                    Popular
                  </div>
                )}

                {/* Plan Header */}
                <div className="flex items-center gap-2 mb-4">
                  <IconComponent className="w-7 h-7 text-green-600" />
                  <h3 className="text-white text-3xl font-semibold">
                    {plan.name}
                  </h3>
                </div>

                <p className="text-gray-400 text-sm leading-relaxed mb-8">
                  {plan.description}
                </p>

                {/* Pricing */}
                <div className="mb-6">
                  <span className="text-white text-4xl font-semibold">
                    {plan.price}
                  </span>
                  <span className="text-gray-400 text-base ml-2">
                    {plan.period}
                  </span>
                </div>

                <p className="text-gray-400 text-sm leading-relaxed mb-8">
                  {plan.details}
                </p>

                {/* Features List */}
                <div className="space-y-5 mb-12 flex-grow">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start gap-3">
                      {feature.included ? (
                        <div className="w-5 h-5 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="w-3 h-3 text-white" />
                        </div>
                      ) : (
                        <div className="w-5 h-5 bg-gray-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <X className="w-3 h-3 text-gray-400" />
                        </div>
                      )}
                      <span
                        className={`text-base leading-6 ${feature.included ? "text-white" : "text-gray-400"}`}
                      >
                        {feature.name}
                      </span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <Button className="w-full bg-green-600 hover:bg-green-700 text-black font-semibold py-3 rounded-3xl">
                  {plan.buttonText}
                </Button>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
