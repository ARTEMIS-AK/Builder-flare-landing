import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, X, Heart, Crown, Zap } from "lucide-react";
import { useState } from "react";

export function PricingSection() {
  const [isYearly, setIsYearly] = useState(true);

  const plans = [
    {
      name: "Free",
      icon: Heart,
      monthlyPrice: 0,
      yearlyPrice: 0,
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
    },
    {
      name: "Pro",
      icon: Crown,
      monthlyPrice: 12,
      yearlyPrice: 94, // $12 * 12 * 0.65 (35% discount)
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
      popular: true,
    },
    {
      name: "Ultimate",
      icon: Zap,
      monthlyPrice: 33,
      yearlyPrice: 257, // $33 * 12 * 0.65 (35% discount)
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
    },
  ];

  const getPrice = (plan: (typeof plans)[0]) => {
    if (plan.monthlyPrice === 0) return "$0";

    if (isYearly) {
      return `$${plan.yearlyPrice}`;
    } else {
      return `$${plan.monthlyPrice}`;
    }
  };

  const getPeriod = () => {
    return isYearly ? "/year" : "/month";
  };

  return (
    <section className="py-24 bg-black">
      <div className="max-w-[1440px] mx-auto px-[202px]">
        {/* Section Header */}
        <div className="text-center mb-[90px]">
          <h2 className="text-white text-[55px] font-semibold leading-[150%] tracking-[-1.65px] mb-[10px]">
            Ready to Get Started?
          </h2>
          <p className="text-[#A1A1A1] text-[20px] font-normal leading-[150%] tracking-[-0.4px] max-w-[583px] mx-auto">
            Flexible plans designed to match your learning and career goals.
          </p>
        </div>

        {/* Toggle & Discount */}
        <div className="relative w-[248px] h-[100px] mx-auto mb-[42px]">
          {/* Toggle Group */}
          <div className="relative w-[235px] h-[36px]">
            <span className="absolute left-0 top-[3px] text-white text-[20px] font-semibold leading-[150%] tracking-[-0.4px] w-[76px] h-[30px]">
              Monthly
            </span>

            <span className="absolute left-[178px] top-[3px] text-white text-[20px] font-semibold leading-[150%] tracking-[-0.4px] w-[57px] h-[30px]">
              Yearly
            </span>

            {/* Toggle Switch */}
            <div
              className="absolute left-[92px] top-0 w-[70px] h-[36px] cursor-pointer"
              onClick={() => setIsYearly(!isYearly)}
            >
              <div
                className={`w-[70px] h-[36px] rounded-[30px] relative transition-all duration-300 ${
                  isYearly ? "bg-[#28A263]" : "bg-gray-600"
                }`}
              >
                <div
                  className={`absolute top-[4px] w-[28px] h-[28px] bg-white rounded-[28px] transition-all duration-300 ${
                    isYearly ? "left-[38px]" : "left-[4px]"
                  }`}
                />
              </div>
            </div>
          </div>

          {/* Discount - positioned exactly like Figma */}
          {isYearly && (
            <div className="absolute left-[83px] top-[30px] w-[165px] h-[70px]">
              {/* Curved Arrow - positioned at left 92px from discount container */}
              <svg
                className="absolute left-[92px] top-0 transform rotate-[153deg]"
                width="57"
                height="50"
                viewBox="0 0 75 72"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_123_4876)">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M47.9735 23.9626C48.0499 24.4132 48.118 24.801 48.1551 25.0058C48.3837 26.2512 48.5761 29.4135 49.4578 31.5642C50.1298 33.2052 51.204 34.264 52.8376 33.8827C54.3224 33.536 55.2467 32.0557 55.6915 30.0092C56.6488 25.6048 55.4944 18.5684 54.5967 16.5328C54.4986 16.3106 54.2399 16.2099 54.0177 16.308C53.7965 16.4056 53.6958 16.6643 53.7939 16.8865C54.6549 18.8402 55.7529 25.5947 54.8339 29.8231C54.4745 31.4757 53.8371 32.748 52.6376 33.0278C51.4539 33.3044 50.7573 32.4213 50.2701 31.2317C49.4116 29.1388 49.2406 26.06 49.0187 24.8472C48.8792 24.087 48.429 21.1726 48.3303 20.9321C48.2068 20.6309 47.9513 20.6391 47.8677 20.6481C47.8029 20.655 47.4819 20.7102 47.4673 21.109C47.2563 26.7949 42.997 35.3741 36.732 41.117C30.5222 46.8096 22.3119 49.713 14.0866 44.0661C13.8865 43.9293 13.613 43.9802 13.4757 44.1793C13.339 44.3793 13.3899 44.6528 13.5899 44.7896C22.2084 50.7062 30.8193 47.7282 37.3249 41.7647C42.808 36.7388 46.7736 29.59 47.9735 23.9626Z"
                    fill="white"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M14.305 44.6631C15.3365 44.5782 16.3662 44.5264 17.3917 44.3613C20.1239 43.9218 22.8698 42.8864 25.0858 41.2124C25.2794 41.0655 25.3171 40.7903 25.1716 40.5972C25.0247 40.4036 24.7495 40.3659 24.5564 40.5113C22.4543 42.1014 19.8447 43.0774 17.2525 43.4941C16.0786 43.6826 14.8977 43.7205 13.7163 43.8332C13.6574 43.8396 13.1426 43.8729 13.0359 43.9098C12.7869 43.9942 12.7377 44.1882 12.7264 44.2809C12.7161 44.3582 12.7222 44.4533 12.7724 44.5594C12.8142 44.6463 12.9321 44.7925 13.1313 44.9546C13.7678 45.4756 15.427 46.4778 15.6819 46.6712C18.6044 48.8869 20.9514 51.4388 23.4895 54.0638C23.6586 54.2374 23.937 54.2425 24.1111 54.0743C24.2853 53.9062 24.2893 53.6283 24.1212 53.4542C21.5511 50.7958 19.1708 48.2148 16.2124 45.9726C16.0377 45.8391 15.029 45.1533 14.305 44.6631Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_123_4876">
                    <rect
                      width="57.0685"
                      height="50.03"
                      fill="white"
                      transform="translate(74.1777 45.3685) rotate(153.036)"
                    />
                  </clipPath>
                </defs>
              </svg>

              {/* Save Badge - positioned at left 0px, top 30px from discount container */}
              <div className="absolute left-0 top-[30px] inline-flex items-center px-3 py-1 bg-[#C0F497] text-[#0D121F] rounded-[30px] text-[14px] font-medium leading-[150%] tracking-[-0.28px] w-[89px] h-[29px]">
                Save 35%
              </div>
            </div>
          )}
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-3 gap-8 max-w-[1030px] mx-auto">
          {plans.map((plan, index) => {
            const IconComponent = plan.icon;
            return (
              <Card
                key={index}
                className="bg-[#0D0D0D] rounded-[10.3px] p-[27px] relative h-[609px] flex flex-col transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute top-[34px] right-[27px] bg-[#0C964E] text-white px-[14px] py-[3px] rounded-[26px] text-[14px] font-medium leading-[150%] tracking-[-0.28px]">
                    Popular
                  </div>
                )}

                {/* Plan Header */}
                <div className="flex items-center gap-[10px] mb-[11px]">
                  <IconComponent className="w-[27px] h-[27px] text-[#0C964E]" />
                  <h3 className="text-white text-[27px] font-semibold leading-[150%] tracking-[-0.82px]">
                    {plan.name}
                  </h3>
                </div>

                <p className="text-[#A1A1A1] text-[14px] font-normal leading-[150%] tracking-[-0.28px] mb-[21px] h-[42px]">
                  {plan.description}
                </p>

                {/* Pricing */}
                <div className="mb-[20px]">
                  <span className="text-white text-[34px] font-semibold leading-[150%] tracking-[-1.03px]">
                    {getPrice(plan)}
                  </span>
                  {plan.monthlyPrice > 0 && (
                    <span className="text-[#A1A1A1] text-[15px] font-medium leading-[150%] tracking-[-0.31px] ml-2">
                      {getPeriod()}
                    </span>
                  )}
                  {plan.monthlyPrice === 0 && (
                    <span className="text-[#A1A1A1] text-[15px] font-medium leading-[150%] tracking-[-0.31px] ml-2">
                      /month
                    </span>
                  )}
                </div>

                <p className="text-[#A1A1A1] text-[14px] font-normal leading-[150%] tracking-[-0.28px] mb-[27px] h-[42px]">
                  {plan.details}
                </p>

                {/* Features List */}
                <div className="space-y-[21px] mb-[35px] flex-grow">
                  {plan.features.map((feature, featureIndex) => (
                    <div
                      key={featureIndex}
                      className="flex items-start gap-[10px]"
                    >
                      {feature.included ? (
                        <div className="w-[21px] h-[21px] flex items-center justify-center flex-shrink-0">
                          <svg
                            width="22"
                            height="22"
                            viewBox="0 0 22 22"
                            fill="none"
                          >
                            <path
                              d="M10.7669 2.6499C6.03751 2.6499 2.18359 6.50382 2.18359 11.2332C2.18359 15.9627 6.03751 19.8166 10.7669 19.8166C15.4963 19.8166 19.3503 15.9627 19.3503 11.2332C19.3503 6.50382 15.4963 2.6499 10.7669 2.6499ZM14.8698 9.25907L10.003 14.1258C9.88284 14.246 9.71976 14.3147 9.54809 14.3147C9.37643 14.3147 9.21334 14.246 9.09318 14.1258L6.66409 11.6967C6.41518 11.4478 6.41518 11.0358 6.66409 10.7869C6.91301 10.538 7.32501 10.538 7.57393 10.7869L9.54809 12.7611L13.9599 8.34924C14.2088 8.10032 14.6208 8.10032 14.8698 8.34924C15.1187 8.59815 15.1187 9.00157 14.8698 9.25907Z"
                              fill="#0C964E"
                            />
                          </svg>
                        </div>
                      ) : (
                        <div className="w-[21px] h-[21px] flex items-center justify-center flex-shrink-0">
                          <svg
                            width="22"
                            height="22"
                            viewBox="0 0 22 22"
                            fill="none"
                          >
                            <path
                              d="M10.7669 2.44995C6.03751 2.44995 2.18359 6.30387 2.18359 11.0333C2.18359 15.7627 6.03751 19.6166 10.7669 19.6166C15.4963 19.6166 19.3503 15.7627 19.3503 11.0333C19.3503 6.30387 15.4963 2.44995 10.7669 2.44995ZM13.6509 13.0075C13.8998 13.2564 13.8998 13.6684 13.6509 13.9173C13.5222 14.046 13.3591 14.1061 13.196 14.1061C13.0329 14.1061 12.8698 14.046 12.7411 13.9173L10.7669 11.9431L8.79276 13.9173C8.66401 14.046 8.50093 14.1061 8.33784 14.1061C8.17476 14.1061 8.01168 14.046 7.88293 13.9173C7.63401 13.6684 7.63401 13.2564 7.88293 13.0075L9.85709 11.0333L7.88293 9.05912C7.63401 8.8102 7.63401 8.3982 7.88293 8.14929C8.13184 7.90037 8.54384 7.90037 8.79276 8.14929L10.7669 10.1235L12.7411 8.14929C12.99 7.90037 13.402 7.90037 13.6509 8.14929C13.8998 8.3982 13.8998 8.8102 13.6509 9.05912L11.6768 11.0333L13.6509 13.0075Z"
                              fill="#A1A1A1"
                            />
                          </svg>
                        </div>
                      )}
                      <span
                        className={`text-[15px] font-medium leading-[150%] tracking-[-0.31px] ${
                          feature.included ? "text-white" : "text-[#A1A1A1]"
                        }`}
                      >
                        {feature.name}
                      </span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <Button className="w-[275px] h-[45px] bg-[#0C964E] hover:bg-[#0C964E]/90 text-black font-semibold text-[14px] leading-[150%] tracking-[-0.28px] rounded-[26px] mx-auto">
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
