export interface Capability {
  id: string;
  slug: string;
  title: string;
  description: string;
  introduction: string;
  overview: string;
  deliverables: string[];
  pricing?: string;
}

export const capabilities: Capability[] = [
  {
    id: "01",
    slug: "consultancy",
    title: "Consultancy",
    description:
      "Find a clear direction for how you show up, communicate, and grow—with practical advice shaped around your goals.",
    introduction: "Clarity for the person, the brand, and what comes next.",
    overview:
      "We partner with you to clarify your current standing, define your strategic destination, and dismantle the obstacles in your path. Together, we architect a tailored blueprint for your personal brand or business—translating vision into decisive, actionable progress.",
    deliverables: [
      "A discovery session focused on your goals and audience",
      "A considered direction for your image and presence",
      "Practical recommendations and a clear action plan",
    ],
    pricing:
      "The cost of our consultancy engagements is based on the scope of the project and the duration of the advisory period, with services starting at 550 Thousand Naira.",
  },
  {
    id: "02",
    slug: "social-media-management",
    title: "Social Media Management",
    description:
      "Build a consistent social presence with thoughtful strategy, purposeful content, and a voice people recognise.",
    introduction: "A social presence with purpose, not just posts.",
    overview:
      "We bring strategy and day-to-day execution together to make your social channels feel like a true extension of your brand. From content planning to publishing, every detail works toward stronger connection and a more recognisable presence.",
    deliverables: [
      "Channel and audience direction",
      "Content pillars, calendar, and creative guidance",
      "Publishing, community support, and performance reviews",
    ],
    pricing:
      "Social media management is structured around your target platforms and content volume, starting at ₦550,000 monthly. Your retainer covers strategic content creation, editorial copywriting, visual asset coordination, community oversight, and monthly growth analytics.",
  },
  {
    id: "03",
    slug: "brand-identity",
    title: "Brand Identity",
    description:
      "Create a distinctive identity system that expresses who you are and stays consistent wherever people meet your brand.",
    introduction: "Make your brand unmistakable at every touchpoint.",
    overview:
      "We translate your purpose and personality into a cohesive identity. The result is more than a logo: it is a clear visual and verbal system that helps people understand, remember, and trust your brand.",
    deliverables: [
      "Brand discovery, positioning, and creative direction",
      "Logo suite, colour palette, and typography",
      "Voice guidance and practical brand-use guidelines",
    ],
    pricing:
      "Brand identity pricing is based on the scope of the identity system, the number of required assets, and the depth of the brand guidelines. We’ll provide a tailored quote after discussing your needs.",
  },
  {
    id: "04",
    slug: "pr-services",
    title: "PR Services",
    description:
      "Shape the story around your brand and bring it to the right people, platforms, and conversations.",
    introduction: "Put your story in the right conversation.",
    overview:
      "We help you communicate what makes your work worth noticing. From a focused launch story to ongoing visibility, we develop clear messaging and thoughtful outreach that builds credibility with the audiences that matter.",
    deliverables: [
      "Core messaging and story development",
      "Press materials and launch communications",
      "Media outreach planning and visibility support",
    ],
    pricing:
      "PR services are priced according to your communications goals, campaign scope, and the duration of support. We’ll provide a tailored quote after discussing your needs.",
  },
  {
    id: "05",
    slug: "web-design-app-development",
    title: "Web Design & App Dev",
    description:
      "Turn your brand and business goals into useful digital experiences, designed and built to work beautifully.",
    introduction: "Digital experiences made to move people forward.",
    overview:
      "We bring design and development together to create websites and apps that are clear, accessible, and easy to use. From the first user journey to the final interaction, we make sure the experience serves both your audience and your goals.",
    deliverables: [
      "Discovery, information architecture, and user flows",
      "Responsive interface and interaction design",
      "Development, quality checks, and launch support",
    ],
    pricing:
      "Web and app development pricing depends on the project’s features, complexity, and delivery scope. We’ll provide a tailored quote after discussing your requirements.",
  },
  {
    id: "06",
    slug: "documentaries",
    title: "Documentaries",
    description:
      "Tell meaningful real-world stories through carefully researched, human-centred documentary filmmaking.",
    introduction: "Real people. Real stories. Told with care.",
    overview:
      "We develop documentary concepts that find the human story inside a bigger idea. Through thoughtful research, interviews, and visual storytelling, we create films that give people and purpose the space to be heard.",
    deliverables: [
      "Story research, development, and treatment",
      "Interview planning and production",
      "Editing, sound, and a finished film for your intended channels",
    ],
    pricing:
      "Documentary pricing is based on the film’s length, research and production requirements, and post-production scope. We’ll provide a tailored quote after discussing your project.",
  },
  {
    id: "07",
    slug: "photography",
    title: "Photography",
    description:
      "Create intentional imagery for your brand, campaign, people, and products—with a consistent visual point of view.",
    introduction: "Images that make your point of view tangible.",
    overview:
      "We plan and produce photography that feels considered and unmistakably yours. From art direction and location planning to the final selects, we make images designed to work across your real-world brand touchpoints.",
    deliverables: [
      "Creative direction and shoot planning",
      "Portrait, product, campaign, or editorial photography",
      "A curated, edited image library for agreed uses",
    ],
    pricing:
      "Photography pricing depends on the shoot type, production requirements, and intended image usage. We’ll provide a tailored quote after discussing your brief.",
  },
];
