export interface LandingTexts {
  hero: {
    title: string;
    subtitle: string;
    buttonText: string;
    noCreditCardText: string;
  };
  brand: {
    companiesText: string;
  };
  textBlock: {
    mainTitle: string;
    averageText: string;
    boostText: string;
  };
  conversionReady: {
    title: string;
    subtitle: string;
    cards: Array<{
      title: string;
      description: string;
    }>;
  };
  marketingCards: Array<{
    title: string;
    description: string;
  }>;
  everythingAbout: {
    title: string;
    description: string;
    testimonial: string;
  };
  questions: {
    title: string;
    subtitle: string;
    faqs: Array<{
      question: string;
      answer: string;
    }>;
  };
  enterpriseGrade: {
    title: string;
    subtitle: string;
    description: string;
    cards: Array<{
      title: string;
      description: string;
    }>;
  };
}

export const landing1Texts: LandingTexts = {
  hero: {
    title: "Meet your <br /><span class=\"text-gradient-blue\">AI Conversion </span><span class=\"text-[#FFFFFF3D]\"> & </span> Revenue engine.",
    subtitle: "Get instant +35-47% Uplift in Conversions.<br />Boost revenue — in minutes, not weeks.",
    buttonText: "Boost Page",
    noCreditCardText: "No credit card required"
  },
  brand: {
    companiesText: "<span class=\"text-gradient-blue\">2500+ companies </span> use Boostra to convert more"
  },
  textBlock: {
    mainTitle: "Boostra is like having a UX & CRO Expert who spots issues, learns user behaviors, and delivers instant solutions to boost revenue",
    averageText: "On average, Boostra customers see an instant",
    boostText: "35-47% boost in conversions"
  },
  conversionReady: {
    title: "Make every page<br /><span class=\"text-gradient-blue\"> Conversion-ready</span>",
    subtitle: "Spot leaks, fix usability gaps, and lift conversions instantly — without waiting weeks for results.",
    cards: [
      {
        title: "Clarity in messaging",
        description: "Cleaner layout that improves readability and trust"
      },
      {
        title: "Missing sections",
        description: "Complete page structure that answers user needs"
      },
      {
        title: "Content hierarchy",
        description: "Logical flow that increases engagement and clarity"
      },
      {
        title: "CTA optimization",
        description: "Complete page structure that answers user needs"
      },
      {
        title: "Visual aspects",
        description: "Consistent design that keeps visitors focused"
      },
      {
        title: "Text context",
        description: "Simplified copy that boosts user confidence"
      }
    ]
  },
  marketingCards: [
    {
      title: "Get exceptional usability",
      description: "Simplify navigation and reduce friction, creating effortless user journeys that convert."
    },
    {
      title: "Above the fold optimization",
      description: "Capture attention immediately with strategic placement of key elements and messaging."
    },
    {
      title: "Accessibility compliance",
      description: "Ensure your site is accessible to all users, improving reach and user experience."
    },
    {
      title: "Speed and performance",
      description: "Optimize loading times and performance to keep users engaged and reduce bounce rates."
    }
  ],
  everythingAbout: {
    title: "Get to know everything about your users",
    description: "Turn persona insights into action. See motivations, pain points, and behaviors — then use them to design journeys that convert faster.",
    testimonial: "When we looked at our Cycle insights recently, we noticed that we had completed twice the amount of issues than we had initially planned at the start of the cycle. It felt good."
  },
  questions: {
    title: "Have <span class=\"text-gradient-blue\"> Questions?</span>",
    subtitle: "Still have questions? Ask us directly and get expert guidance tailored to your business.",
    faqs: [
      {
        question: "What is the analysis and solutions based on?",
        answer: "Boostra's analysis combines multiple layers: your online and offline business context, customer personas, usability best practices, accessibility standards, and psychological factors. This holistic approach ensures recommendations are tailored to your goals and audience, not just generic benchmarks."
      },
      {
        question: "Does Boostra work for mobile websites?",
        answer: "Yes. Mobile is where most drop-offs happen, so every analysis includes mobile-specific usability, performance, and accessibility checks to ensure your site converts across all devices."
      },
      {
        question: "How fast can I see results?",
        answer: "Most businesses see measurable improvements within a first week after implementing Boostra's solutions."
      },
      {
        question: "What types of businesses use Boostra?",
        answer: "Boostra is trusted by eCommerce brands, SaaS companies, and enterprises looking to get more revenue from existing traffic."
      },
      {
        question: "Can I cancel anytime?",
        answer: "Yes. All plans are flexible — you can cancel or upgrade at any time, no questions asked."
      },
      {
        question: "How is Boostra different from tools like Google Analytics or Hotjar?",
        answer: "Analytics tools show you data, but don't tell you what to fix. Boostra goes further by giving clear, actionable solutions to increase revenue directly."
      },
      {
        question: "Is my data safe with Boostra?",
        answer: "Absolutely. We only store the minimum information needed to generate your reports. Your data is never sold, shared, or reused for any purpose."
      }
    ]
  },
  enterpriseGrade: {
    title: "Enterprise-grade",
    subtitle: "security & privacy",
    description: "Boostra is built with privacy by default. We collect only what's required for your analysis and keep all reports fully secure and accessible only to you.",
    cards: [
      {
        title: "Your data stays yours",
        description: "Your website data is only used to make an analysis and provide effective solutions. We never sell or share it with third parties."
      },
      {
        title: "Data encryption",
        description: "We use standard encryption practices to keep your information safe during processing. All reports remain private and visible only to you."
      }
    ]
  }
};

export const landing2Texts: LandingTexts = {
  hero: {
    title: "Transform your website into a <br /><span class=\"text-gradient-blue\">conversion powerhouse </span><span class=\"text-[#FFFFFF3D]\"> with AI</span>",
    subtitle: "Discover hidden opportunities and boost your revenue by 40-60%.<br />Get results in days, not months.",
    buttonText: "Start Free Trial",
    noCreditCardText: "Free 14-day trial"
  },
  brand: {
    companiesText: "<span class=\"text-gradient-blue\">3000+ businesses </span> trust Boostra for growth"
  },
  textBlock: {
    mainTitle: "Boostra analyzes your website like a team of conversion experts, identifying bottlenecks and implementing solutions that drive real results",
    averageText: "Our clients typically experience",
    boostText: "40-60% increase in conversions"
  },
  conversionReady: {
    title: "Turn every visitor into<br /><span class=\"text-gradient-blue\"> a paying customer</span>",
    subtitle: "AI-powered insights reveal exactly what's stopping conversions and how to fix it — with proven results.",
    cards: [
      {
        title: "Smart messaging",
        description: "AI-optimized content that resonates with your audience"
      },
      {
        title: "Complete user journey",
        description: "Full funnel analysis that identifies every opportunity"
      },
      {
        title: "Strategic flow",
        description: "Data-driven user experience that maximizes engagement"
      },
      {
        title: "Button optimization",
        description: "High-converting CTAs that drive action"
      },
      {
        title: "Design consistency",
        description: "Cohesive visual experience that builds trust"
      },
      {
        title: "Clear communication",
        description: "Compelling copy that converts visitors to customers"
      }
    ]
  },
  marketingCards: [
    {
      title: "Advanced user experience",
      description: "AI-driven UX optimization that creates seamless, intuitive user journeys that maximize conversions."
    },
    {
      title: "Strategic content placement",
      description: "Data-backed positioning of key elements and messaging for maximum impact and engagement."
    },
    {
      title: "Universal accessibility",
      description: "Comprehensive accessibility features that expand your reach and improve user experience for everyone."
    },
    {
      title: "Lightning-fast performance",
      description: "Advanced optimization techniques that deliver blazing-fast load times and superior user experience."
    }
  ],
  everythingAbout: {
    title: "Understand your audience like never before",
    description: "Deep dive into user behavior patterns and preferences. Transform insights into actionable strategies that drive higher conversion rates and customer satisfaction.",
    testimonial: "After implementing Boostra's recommendations, we saw a 45% increase in user engagement and a 30% boost in conversion rates within just two weeks."
  },
  questions: {
    title: "Need <span class=\"text-gradient-blue\"> Answers?</span>",
    subtitle: "Get personalized guidance from our experts. We're here to help you maximize your conversion potential.",
    faqs: [
      {
        question: "How does Boostra's AI analysis work?",
        answer: "Our AI combines machine learning algorithms with conversion optimization expertise to analyze your website's performance, user behavior patterns, and conversion bottlenecks. It provides specific, actionable recommendations tailored to your industry and audience."
      },
      {
        question: "Is Boostra compatible with all website platforms?",
        answer: "Yes! Boostra works with any website platform including WordPress, Shopify, custom-built sites, and more. Our analysis is platform-agnostic and focuses on user experience and conversion optimization."
      },
      {
        question: "How quickly will I see improvements?",
        answer: "Most clients see initial improvements within 48-72 hours of implementing our recommendations. Significant conversion increases typically occur within 1-2 weeks of full implementation."
      },
      {
        question: "What types of businesses benefit most from Boostra?",
        answer: "E-commerce stores, SaaS companies, service providers, lead generation sites, and any business looking to increase online conversions. Our AI adapts to different business models and goals."
      },
      {
        question: "Can I try Boostra before committing?",
        answer: "Absolutely! We offer a free analysis and trial period so you can see the value before making any commitment. No long-term contracts required."
      },
      {
        question: "How is Boostra different from other conversion tools?",
        answer: "Unlike tools that only show you data, Boostra provides specific, actionable solutions. Our AI doesn't just identify problems—it tells you exactly how to fix them with step-by-step guidance."
      },
      {
        question: "What about data privacy and security?",
        answer: "Your data security is our top priority. We use enterprise-grade encryption, never share your data with third parties, and only collect what's necessary for analysis. All data is processed securely and deleted after analysis completion."
      }
    ]
  },
  enterpriseGrade: {
    title: "Enterprise-level",
    subtitle: "security & compliance",
    description: "Built with enterprise security standards. Your data is protected with military-grade encryption and strict privacy controls that meet the highest industry standards.",
    cards: [
      {
        title: "Complete data ownership",
        description: "You maintain full control over your data. We only analyze what you provide and never retain or share your information with any third parties."
      },
      {
        title: "Advanced encryption",
        description: "All data transmission and storage uses AES-256 encryption. Your information is protected with the same security standards used by banks and government agencies."
      }
    ]
  }
};
