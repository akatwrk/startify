// Arrays for generating startup ideas
const firstParts = [
  "Airbnb",
  "Uber",
  "Netflix",
  "Spotify",
  "Amazon",
  "Shopify",
  "Tinder",
  "TikTok",
  "Instagram",
  "Discord",
  "LinkedIn",
  "Doordash",
  "Etsy",
  "Dropbox",
  "Slack",
  "Google Maps",
  "Subscription box",
  "AI assistant",
  "Voice-activated",
  "Blockchain",
  "3D printing",
  "AR/VR",
  "Smart mirror",
  "Digital marketplace",
  "Niche social network",
  "Personalized",
  "On-demand",
  "Sustainable",
  "Eco-friendly",
  "Community-driven",
];

const secondParts = [
  "for office spaces",
  "for remote workers",
  "for pet owners",
  "for home chefs",
  "for students",
  "for travelers",
  "for artists",
  "for freelancers",
  "for parents",
  "for fitness enthusiasts",
  "for gamers",
  "for seniors",
  "for neighborhoods",
  "for gardeners",
  "for fashion enthusiasts",
  "for book lovers",
  "for small businesses",
  "for mental health",
  "for plant lovers",
  "for museums",
  "for car owners",
  "for content creators",
  "for healthcare providers",
  "for education",
  "for foodies",
  "for event planners",
  "for startups",
  "for real estate",
  "for non-profits",
  "for sustainability",
];

const aiParts = [
  "personal trainers",
  "writers",
  "chefs",
  "interior designers",
  "financial advisors",
  "language learning",
  "music composition",
  "art creation",
  "video editing",
  "content curation",
  "legal document review",
  "fitness coaching",
  "mental health support",
  "resume building",
  "wardrobe styling",
  "travel planning",
  "email management",
  "presentation creation",
  "social media management",
  "home organization",
  "data visualization",
  "customer service",
  "meeting summarization",
  "code generation",
  "voice transcription",
  "medical diagnosis",
  "gardening assistance",
  "career counseling",
  "nutrition planning",
  "speech coaching",
];

// Arrays for generating next steps
const nextSteps = [
  "Interview 5 potential customers about this problem",
  "Create a landing page to test interest",
  "Sketch the main screens of the app",
  "Research 3 existing competitors",
  "Build a quick prototype in Figma",
  "Write a one-page business model",
  "Find a technical co-founder",
  "Join a related online community to validate the idea",
  "Create a simple logo and brand identity",
  "Set up social media accounts for the idea",
  "Calculate the basic startup costs",
  "Identify key metrics to track success",
  "Create a 30-second elevator pitch",
  "List potential revenue streams",
  "Identify potential investors or grants",
  "Define your target customer persona",
  "Sign up 10 beta testers",
  "Build a simple MVP (Minimum Viable Product)",
  "Draft your mission and vision statements",
  "Create a 90-day roadmap",
  "Make a list of required skills and resources",
  "Research relevant industry trends",
  "Create a user journey map",
  "Validate pricing model with potential users",
  "Develop a content marketing strategy",
  "Create a list of potential partnerships",
  "Build an email list of interested users",
  "Prepare a short pitch deck",
  "Set up analytics for your MVP",
  "Join a startup accelerator or incubator",
];

interface Idea {
  id: string;
  title: string;
  nextStep: string;
  score?: number;
}

export const generateIdea = (category: string = "All"): Idea => {
  // 40% chance for "AI tool for X" format if category is All or AI
  const isAiIdea = (category === "All" || category === "AI") && Math.random() < 0.4;
  
  let title = "";
  
  if (isAiIdea) {
    title = `AI tool for ${aiParts[Math.floor(Math.random() * aiParts.length)]}`;
  } else {
    const relevantFirstParts = category === "All" 
      ? firstParts 
      : firstParts.filter(part => part.toLowerCase().includes(category.toLowerCase()));
    
    const relevantSecondParts = category === "All"
      ? secondParts
      : secondParts.filter(part => part.toLowerCase().includes(category.toLowerCase()));

    title = `${
      relevantFirstParts[Math.floor(Math.random() * relevantFirstParts.length)]
    } ${
      relevantSecondParts[Math.floor(Math.random() * relevantSecondParts.length)]
    }`;
  }
  
  const nextStep = nextSteps[Math.floor(Math.random() * nextSteps.length)];
  const score = Math.floor(Math.random() * 100) + 1;
  
  return {
    id: Date.now().toString(),
    title,
    nextStep,
    score
  };
}; 