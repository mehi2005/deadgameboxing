export const siteInfo = {
  name: "Dead Game Boxing",
  address: "600 S Bell Blvd Ste 207, Cedar Park, TX",
  phone: "(512) 215-9086",
  email: "deadgamebox@gmail.com",
  hours: [
    { day: "Monday - Friday", time: "6:00 PM - 8:00 PM" },
    { day: "Sunday", time: "5:00 PM - 7:00 PM" },
  ],
  socials: [
    { label: "Instagram", href: "https://www.instagram.com/dead_game_boxing/" },
    { label: "YouTube", href: "#" },
    { label: "TikTok", href: "#" },
  ],
};

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Programs", href: "/programs" },
  { label: "Schedule", href: "/schedule" },
  { label: "Contact", href: "/contact" },
  { label: "Shop", href: "/shop" },
];

export const programs = [
  {
    slug: "kids-boxing-academy",
    title: "Kids Boxing Academy",
    level: "",
    duration: "",
    intensity: "",
    image: "/images/program-youth.svg",
    description:
      "Beginner boxing class Tue/Thu 5-6PM teaching stance, footwork, hands-up defense, and conditioning to build skill, discipline, and confidence; $130/mo, family deals. (includes open gym access during business hours with parental supervision.) 30 day cancellation policy.",
    details: [],
  },
  {
    slug: "1-day-drop-in",
    title: "1 Day Drop-In",
    level: "",
    duration: "",
    intensity: "",
    image: "/images/program-fundamentals.svg",
    description:
      "Once you've used your 1-day trial for a free workout the day pass is 15$ until you decide on a membership.",
    details: [],
  },
  {
    slug: "basic-membership",
    title: "Basic Membership",
    level: "",
    duration: "",
    intensity: "",
    image: "/images/program-fundamentals.svg",
    description:
      "This membership includes unlimited access to the gym during business hours, discounted rates for personal training and mitt sessions, full access to group training classes on Monday and Wednesday from 5-6PM. 30 day cancellation policy.",
    details: [],
  },
  {
    slug: "competition-boxing-membership",
    title: "Competition Boxing Membership",
    level: "",
    duration: "",
    intensity: "",
    image: "/images/program-competition.svg",
    description:
      "This membership is for competitive boxers only (book required) and includes group training four days a week, Monday through Thursday, focused boxing fundamentals and skill development, character building and self-confidence development. 30-day cancellation policy.",
    details: [],
  },
  {
    slug: "gold-membership",
    title: "Gold Membership",
    level: "",
    duration: "",
    intensity: "",
    image: "/images/program-fundamentals.svg",
    description:
      "This membership includes one one-hour personal session each week, unlimited access to the gym during business hours. 30-day cancellation policy.",
    details: [],
  },
  {
    slug: "platinum-membership",
    title: "Platinum Membership",
    level: "",
    duration: "",
    intensity: "",
    image: "/images/program-fundamentals.svg",
    description:
      "This membership includes unlimited access to the gym during business hours, one personal training session each week for one hour (strength and conditioning or boxing), one personal mitt session each week for 30 minutes. 30-day cancellation policy.",
    details: [],
  },
  {
    slug: "1-on-1-personal-training-package",
    title: "1 on 1 Personal Training Package",
    level: "",
    duration: "",
    intensity: "",
    image: "/images/program-private.svg",
    description: "One hour of boxing or strength and conditioning",
    details: [
      "Boxing fundamentals, mitts, self confidence and skill development",
      "Strength and conditioning",
      "Each Credit is 1 hour of one on one personal training",
      "Credit plans must be used within 30-60 days from date of purchase",
    ],
  },
  {
    slug: "fight-ready-fitness-training-camp",
    title: "Fight Ready Fitness Training Camp",
    level: "",
    duration: "",
    intensity: "",
    image: "/images/program-conditioning.svg",
    description:
      "We're kicking off a focused, high-energy training camp for adults beginning March 2nd and running through March 27th.",
    details: [
      "If you've been wanting to level up your fitness, sharpen your skills, or get back into a consistent routine, this is your moment.",
      "Limited slots available - secure your spot early.",
      "Classes will meet Monday, Wednesday, and Friday.",
      "Designed for adults who want to build strong boxing fundamentals",
      "High-quality, full-body workout focused on strength, conditioning, and technique",
      "Muscle-building and fat-burning routines built around proper boxing mechanics",
      "Learn authentic skills used by real competition boxers",
      "Led by certified USA Boxing coaches with real fight experience",
      "No sparring required - safe, skill-driven training for all fitness levels",
    ],
  },
  {
    slug: "mitt-session-package",
    title: "Mitt Session Package",
    level: "",
    duration: "",
    intensity: "",
    image: "/images/program-private.svg",
    description: "30 minutes on mitt work in the ring",
    details: [
      "Footwork, movement, and helping with proper form",
      "Learning how to relax and have fun in the ring",
      "Credit plans must be used within 30-60 days from date of purchase",
    ],
  },
  {
    slug: "storm-fitness",
    title: "Storm Fitness",
    level: "",
    duration: "",
    intensity: "",
    image: "/images/program-conditioning.svg",
    description: "USA Wrestling certified coach",
    details: ["30-day cancellation policy."],
  },
];

export const coaches = [
  {
    name: "Gabe Benavides",
    role: "Coach",
    image: "/images/coach-rafael.svg",
    bio: "Competition-minded coach focused on sharp fundamentals and ring IQ.",
    specialties: ["Fundamentals", "Combinations", "Defense"],
  },
  {
    name: "Jacob Acuna",
    role: "Coach",
    image: "/images/coach-naomi.svg",
    bio: "Patient, detail-driven coaching with a focus on technique and timing.",
    specialties: ["Footwork", "Timing", "Ring movement"],
  },
  {
    name: "Ricco Spencer",
    role: "Coach",
    image: "/images/coach-malik.svg",
    bio: "High-energy sessions that build pace, endurance, and clean mechanics.",
    specialties: ["Storm Fitness", "Bag work", "Pace"],
  },
  {
    name: "Storm Cosby",
    role: "Coach",
    image: "/images/coach-malik.svg",
    bio: "Strength-first training that translates to sharper, faster rounds.",
    specialties: ["Strength", "Explosiveness", "Recovery"],
  },
];

export const schedule = [
  { day: "Monday", time: "6:00 AM", program: "Storm Fitness", coach: "Malik" },
  { day: "Monday", time: "5:00 PM", program: "Basic Membership", coach: "Naomi" },
  { day: "Monday", time: "7:00 PM", program: "Competition Boxing Membership", coach: "Rafael" },
  { day: "Tuesday", time: "6:00 AM", program: "Storm Fitness", coach: "Malik" },
  { day: "Tuesday", time: "12:00 PM", program: "1 on 1 Personal Training Package", coach: "Rafael" },
  { day: "Tuesday", time: "5:00 PM", program: "Kids Boxing Academy", coach: "Naomi" },
  { day: "Tuesday", time: "7:00 PM", program: "Competition Boxing Membership", coach: "Rafael" },
  { day: "Wednesday", time: "6:00 AM", program: "Storm Fitness", coach: "Malik" },
  { day: "Wednesday", time: "5:00 PM", program: "Basic Membership", coach: "Naomi" },
  { day: "Wednesday", time: "7:00 PM", program: "Competition Boxing Membership", coach: "Rafael" },
  { day: "Thursday", time: "6:00 AM", program: "Storm Fitness", coach: "Malik" },
  { day: "Thursday", time: "12:00 PM", program: "1 on 1 Personal Training Package", coach: "Rafael" },
  { day: "Thursday", time: "5:00 PM", program: "Kids Boxing Academy", coach: "Naomi" },
  { day: "Thursday", time: "7:00 PM", program: "Competition Boxing Membership", coach: "Rafael" },
  { day: "Friday", time: "6:00 AM", program: "Storm Fitness", coach: "Malik" },
  { day: "Saturday", time: "10:30 AM", program: "Storm Fitness", coach: "Malik" },
  { day: "Saturday", time: "12:00 PM", program: "1 on 1 Personal Training Package", coach: "Rafael" },
];

export const pricing = [
  {
    name: "Foundation",
    price: "$129",
    cadence: "per month",
    description: "Access to Storm Fitness classes.",
    features: ["Up to 8 classes/month", "Free hand-wrap demo", "Gym amenities"],
  },
  {
    name: "Fighter",
    price: "$189",
    cadence: "per month",
    highlight: true,
    description: "Unlimited classes with priority schedule access.",
    features: [
      "Unlimited group classes",
      "One quarterly private session",
      "Performance tracking",
    ],
  },
  {
    name: "Elite",
    price: "$299",
    cadence: "per month",
    description: "Competition prep with private coaching support.",
    features: [
      "Unlimited classes + sparring",
      "Two private sessions/month",
      "Custom fight camp plan",
    ],
  },
];

export const testimonials = [
  {
    name: "Jasmine Lee",
    quote:
      "The coaches are locked in. I improved my footwork in the first month and finally feel confident in the ring.",
    program: "Basic Membership",
  },
  {
    name: "Andre Caldwell",
    quote:
      "DeadGame is the real deal. Storm Fitness classes are brutal in the best way, and the energy stays high.",
    program: "Storm Fitness",
  },
  {
    name: "Maya Rivera",
    quote:
      "I started with zero experience. The Kids Boxing Academy made me fall in love with boxing.",
    program: "Kids Boxing Academy",
  },
];

export const faqs = [
  {
    question: "Do I need experience to start?",
    answer:
      "No. Our fundamentals classes are designed for complete beginners, and coaches guide every step.",
  },
  {
    question: "Do you offer sparring?",
    answer:
      "Sparring is available for competition team members after coaches confirm readiness.",
  },
  {
    question: "What should I bring?",
    answer:
      "Hand wraps, water, and a can-do mindset. Gloves are available for your first visit.",
  },
  {
    question: "Is there a drop-in option?",
    answer:
      "Yes. Drop-ins are available for $29 and apply toward any membership upgrade.",
  },
  {
    question: "What ages do you train?",
    answer:
      "We coach youth athletes and adults. Kids Boxing Academy is designed for ages 10-16.",
  },
  {
    question: "How do I book a trial?",
    answer:
      "Use the Book a Free Trial button and we will confirm your first session by email.",
  },
];

export const blogPosts = [
  {
    slug: "building-the-perfect-jab",
    title: "Building the Perfect Jab",
    date: "January 10, 2026",
    category: "Technique",
    excerpt:
      "A fast, clean jab is the heartbeat of boxing. Here are three habits to sharpen it.",
    content: [
      "Great jabs begin with balance. Keep your stance grounded and let your lead shoulder roll forward.",
      "Aim to snap back to guard. The jab is as much about recovery as it is about extension.",
      "Work the jab in layers: touch, snap, and power. Each version has a place in your rounds.",
    ],
  },
  {
    slug: "conditioning-camp-checklist",
    title: "Fight Ready Fitness Camp Checklist",
    date: "December 18, 2025",
    category: "Training",
    excerpt:
      "Get the most out of camp with a smart recovery routine and performance plan.",
    content: [
      "Pair your hardest sessions with the best sleep you can manage. Recovery is training.",
      "Hydration starts before you feel thirsty. Keep electrolytes ready for longer sessions.",
      "Track your rounds, heart rate, and perceived effort to spot trends early.",
    ],
  },
  {
    slug: "youth-boxing-confidence",
    title: "Kids Boxing Academy and Confidence",
    date: "November 30, 2025",
    category: "Community",
    excerpt:
      "Kids Boxing Academy builds focus, respect, and self-belief in a structured environment.",
    content: [
      "We teach young athletes how to move with purpose and keep their eyes up.",
      "Coaches emphasize discipline, consistency, and positive reinforcement.",
      "Parents love the clear progress milestones and safe training standards.",
    ],
  },
];
