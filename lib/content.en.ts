import type { Benefit, FAQItem, LandingDirection, RoadmapStep } from "@/lib/content";

export const landingDirections: LandingDirection[] = [
  {
    label: "Active Product",
    title: "AI Shop",
    description:
      "Digital products by Arvexo: VPN access, Telegram bots, AI subscriptions, mini apps and automation tools.",
    tags: ["VPN", "Telegram bots", "Mini Apps", "AI Services"],
    mockupTitle: "AI Shop",
    rows: [
      { label: "VPN Access", status: "Available" },
      { label: "Telegram Bots", status: "Available" },
      { label: "Mini Apps", status: "In development" },
      { label: "AI Services", status: "Planned" }
    ]
  },
  {
    label: "Core startup direction",
    title: "Family Ecosystem",
    description:
      "A family-focused digital ecosystem with profiles, AI assistant, shared tasks, reminders, personal services and one secure space for everyday life.",
    tags: ["Family Chat", "Family Profiles", "Secure Space", "AI Assistant"],
    mockupTitle: "Family Ecosystem",
    rows: [
      { label: "Family profiles", status: "Synced" },
      { label: "AI Assistant", status: "Ready" },
      { label: "Shared tasks", status: "Today" },
      { label: "Secure space", status: "Protected" }
    ]
  },
  {
    label: "Future R&D",
    title: "Robots R&D",
    description:
      "A future research direction focused on care robots, AI-powered devices and technologies that can support families in everyday life.",
    tags: ["Care Robot", "AI devices", "Research Phase", "Future Technology"],
    mockupTitle: "Robots R&D",
    rows: [
      { label: "Care scenarios", status: "Research" },
      { label: "AI behavior model", status: "Concept" },
      { label: "Prototype planning", status: "Future" },
      { label: "Device layer", status: "Exploration" }
    ]
  }
];

export const roadmapSteps: RoadmapStep[] = [
  {
    step: "Step 1",
    title: "AI Shop",
    description:
      "Digital products by Arvexo: VPN access, Telegram bots, AI services and mini apps for real everyday tasks.",
    labels: ["VPN Access", "Telegram Bots", "AI Services", "Mini Apps"],
    visual: "shop"
  },
  {
    step: "Step 2",
    title: "Family Ecosystem",
    description:
      "A family-focused platform with profiles, AI assistant, shared tasks, reminders and secure digital space.",
    labels: ["Family profiles", "AI Assistant", "Shared tasks", "Secure space"],
    visual: "family"
  },
  {
    step: "Step 3",
    title: "Robots R&D",
    description:
      "A future research direction focused on care robots, AI-powered devices and technologies for family support.",
    labels: ["Care scenarios", "AI devices", "Prototype planning", "Future R&D"],
    visual: "robot"
  },
  {
    step: "Step 4",
    title: "Unified Platform",
    description:
      "One Arvexo account, dashboard, subscriptions, connected services and future device integration.",
    labels: ["Arvexo account", "Connected services", "Family dashboard", "Device integration"],
    visual: "platform"
  }
];

export const visionFocus = [
  "AI Shop — digital products, VPN, Telegram bots and AI services",
  "Family Ecosystem — profiles, assistant, shared tasks and secure space",
  "Robots R&D — future care robots, AI devices and family support technologies",
  "Unified Platform — one account, dashboard and connected services"
];

export const benefits: Benefit[] = [
  {
    icon: "shield",
    title: "Privacy-first",
    description:
      "Digital products and family services should be built around secure access and protected digital activity."
  },
  {
    icon: "bolt",
    title: "AI automation",
    description:
      "Telegram bots, mini apps and assistant workflows help automate routine tasks and daily processes."
  },
  {
    icon: "bag",
    title: "Active products",
    description:
      "AI Shop gives Arvexo a practical commercial layer: VPN access, Telegram bots, AI services and mini apps."
  },
  {
    icon: "network",
    title: "Family-centered platform",
    description:
      "Family Ecosystem focuses on profiles, shared tasks, reminders, personal services and AI assistance."
  },
  {
    icon: "flask",
    title: "Future robotics vision",
    description:
      "Robots R&D explores care robots, AI-powered devices and technologies that can support families."
  },
  {
    icon: "apps",
    title: "Long-term ecosystem",
    description:
      "The goal is not one product, but a connected platform where services, family tools and future devices work together."
  }
];

export const faqItems: FAQItem[] = [
  {
    question: "What is Arvexo?",
    answer:
      "Arvexo is a digital ecosystem that combines AI Shop, Family Ecosystem and future Robots R&D into one long-term technology platform."
  },
  {
    question: "What is AI Shop?",
    answer:
      "AI Shop is the active product direction of Arvexo. It includes digital products such as VPN access, Telegram bots, AI services, mini apps and automation tools."
  },
  {
    question: "What is Family Ecosystem?",
    answer:
      "Family Ecosystem is the core startup direction of Arvexo. It focuses on family profiles, AI assistant, shared tasks, reminders, personal services and one secure digital space for everyday life."
  },
  {
    question: "What is Robots R&D?",
    answer:
      "Robots R&D is a future research direction focused on care robots, AI-powered devices and technologies that can support families. It is not presented as a finished product yet."
  },
  {
    question: "Is Arvexo already a finished platform?",
    answer:
      "Not fully. Arvexo is developing in stages: active digital products first, then Family Ecosystem, then Robots R&D and a unified platform experience."
  },
  {
    question: "How can I contact Arvexo?",
    answer:
      "You can contact Arvexo through Telegram or email to ask about products, partnerships, development or future collaboration."
  }
];

export const homeCopy = {
  directions: {
    badge: "Arvexo Directions",
    title: "Three directions. One AI ecosystem.",
    subtitle:
      "Arvexo connects privacy tools, Telegram automation, family technology and future Care Robot R&D into one long-term platform."
  },
  roadmap: {
    badge: "Roadmap",
    title: "How Arvexo grows from products to ecosystem.",
    subtitle:
      "We start with digital products, build the Family Ecosystem, move toward long-term Robots R&D, and connect everything into one platform."
  },
  investor: {
    badge: "Investor Snapshot",
    title: "From active products to a long-term AI ecosystem.",
    subtitle:
      "Arvexo combines current digital products, a family-focused platform and future Robots R&D into one technology direction."
  },
  benefits: {
    badge: "Benefits",
    title: "Why Arvexo can grow beyond one product",
    subtitle:
      "Arvexo starts with active digital products, builds a family-focused platform and creates a path toward future robotics R&D."
  },
  faq: {
    badge: "FAQ",
    title: "Questions about Arvexo",
    subtitle: "Quick answers about AI Shop, Family Ecosystem and Robots R&D."
  },
  cta: {
    title: "Build the Arvexo ecosystem",
    subtitle:
      "Connect privacy tools, Telegram automation, family technologies and future Robots R&D in one ecosystem.",
    buttonLabel: "Get in touch"
  }
};
