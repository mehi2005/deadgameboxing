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
  { label: "Blog", href: "/blog" },
  { label: "Shop", href: "/shop" },
];

export const programs = [
  {
    slug: "boxing-fundamentals",
    title: "Boxing Fundamentals",
    level: "Beginner",
    duration: "60 min",
    intensity: "Moderate",
    image: "/images/program-fundamentals.svg",
    description:
      "Master stance, footwork, and clean punch mechanics with high-energy drills.",
    details: [
      "Stance, guard, and footwork foundations",
      "Focus mitts, heavy bag, and partner drills",
      "Conditioning finisher every class",
      "Basic Membership: unlimited gym access during business hours",
      "Group training classes Monday and Wednesday, 5-6 PM",
      "Discounted personal training and mitt sessions",
      "1-day drop-in available after the free trial",
      "30-day cancellation policy",
    ],
  },
  {
    slug: "youth-boxing",
    title: "Youth Boxing",
    level: "Ages 10-16",
    duration: "60 min",
    intensity: "Moderate",
    image: "/images/program-youth.svg",
    description:
      "Confidence-building boxing classes designed for youth athletes.",
    details: [
      "Beginner class Tuesday and Thursday, 5-6 PM",
      "Stance, footwork, hands-up defense, and conditioning",
      "Builds discipline, confidence, and skill",
      "Open gym access during business hours with parental supervision",
      "Monthly kid camp membership option",
      "Family package for two kids available",
      "30-day cancellation policy",
    ],
  },
  {
    slug: "competition-team",
    title: "Competition Team",
    level: "Advanced",
    duration: "90 min",
    intensity: "High",
    image: "/images/program-competition.svg",
    description:
      "High-performance training for amateur bouts and tournament prep.",
    details: [
      "Competition boxers only (book required)",
      "Group training Monday through Thursday",
      "Focused boxing fundamentals and skill development",
      "Character building and self-confidence development",
      "Sparring, strategy, and ring IQ",
      "Strength + conditioning blocks",
      "Coach-led fight planning",
      "30-day cancellation policy",
    ],
  },
  {
    slug: "conditioning",
    title: "Conditioning",
    level: "All Levels",
    duration: "45 min",
    intensity: "High",
    image: "/images/program-conditioning.svg",
    description:
      "Metabolic conditioning with boxing circuits, ropes, and core work.",
    details: [
      "Intervals, footwork ladders, and sled work",
      "Boxing-inspired HIIT circuits",
      "Athletic recovery guidance",
      "Storm Fitness group training led by a USA Wrestling certified coach",
      "Monthly membership option available",
      "30-day cancellation policy",
    ],
  },
  {
    slug: "private-training",
    title: "Private Training",
    level: "Custom",
    duration: "60 min",
    intensity: "Custom",
    image: "/images/program-private.svg",
    description:
      "One-on-one coaching tailored to your goals and schedule.",
    details: [
      "Custom training plan and assessments",
      "Technique refinement and focus work",
      "Flexible scheduling options",
      "Gold Membership: one 60-minute personal session each week",
      "Platinum Membership: one 60-minute personal session plus a 30-minute mitt session each week",
      "Unlimited gym access during business hours (Gold and Platinum)",
      "1-on-1 personal training packages for boxing or strength + conditioning",
      "Each credit equals 1 hour; use within 30-60 days",
      "Mitt session packages: 30-minute ring work on footwork, movement, and form",
      "30-day cancellation policy",
    ],
  },
];

export const coaches = [
  {
    name: "Ricco Spencer",
    role: "Head Coach",
    image: "/images/coach-rafael.svg",
    bio: "Leads the coaching team with a fundamentals-first approach and competitive focus.",
    specialties: ["Competition prep", "Ring IQ", "Strategy"],
  },
  {
    name: "Gabe Benavides",
    role: "Coach",
    image: "/images/coach-naomi.svg",
    bio: "Hands-on coach focused on clean technique, discipline, and steady progress.",
    specialties: ["Fundamentals", "Footwork", "Conditioning"],
  },
  {
    name: "Jacob Acuna",
    role: "Coach",
    image: "/images/coach-malik.svg",
    bio: "Builds strong habits through structured training and accountable coaching.",
    specialties: ["Technique", "Defense", "Pad work"],
  },
  {
    name: "Storm Cosby",
    role: "Coach",
    image: "/images/coach-rafael.svg",
    bio: "Keeps sessions high-energy while reinforcing fundamentals and confidence.",
    specialties: ["Conditioning", "Footwork", "Confidence"],
  },
];

export const schedule = [
  { day: "Monday", time: "6:00 AM", program: "Conditioning", coach: "Malik" },
  { day: "Monday", time: "12:00 PM", program: "Boxing Fundamentals", coach: "Rafael" },
  { day: "Monday", time: "5:30 PM", program: "Youth Boxing", coach: "Naomi" },
  { day: "Monday", time: "7:00 PM", program: "Competition Team", coach: "Rafael" },
  { day: "Tuesday", time: "6:00 AM", program: "Conditioning", coach: "Malik" },
  { day: "Tuesday", time: "12:00 PM", program: "Private Training", coach: "Rafael" },
  { day: "Tuesday", time: "5:30 PM", program: "Boxing Fundamentals", coach: "Naomi" },
  { day: "Tuesday", time: "7:00 PM", program: "Competition Team", coach: "Rafael" },
  { day: "Wednesday", time: "6:00 AM", program: "Conditioning", coach: "Malik" },
  { day: "Wednesday", time: "12:00 PM", program: "Boxing Fundamentals", coach: "Rafael" },
  { day: "Wednesday", time: "5:30 PM", program: "Youth Boxing", coach: "Naomi" },
  { day: "Wednesday", time: "7:00 PM", program: "Competition Team", coach: "Rafael" },
  { day: "Thursday", time: "6:00 AM", program: "Conditioning", coach: "Malik" },
  { day: "Thursday", time: "12:00 PM", program: "Private Training", coach: "Rafael" },
  { day: "Thursday", time: "5:30 PM", program: "Boxing Fundamentals", coach: "Naomi" },
  { day: "Thursday", time: "7:00 PM", program: "Competition Team", coach: "Rafael" },
  { day: "Friday", time: "6:00 AM", program: "Conditioning", coach: "Malik" },
  { day: "Friday", time: "12:00 PM", program: "Boxing Fundamentals", coach: "Rafael" },
  { day: "Friday", time: "5:30 PM", program: "Youth Boxing", coach: "Naomi" },
  { day: "Saturday", time: "9:00 AM", program: "Boxing Fundamentals", coach: "Rafael" },
  { day: "Saturday", time: "10:30 AM", program: "Conditioning", coach: "Malik" },
  { day: "Saturday", time: "12:00 PM", program: "Private Training", coach: "Rafael" },
];

export const pricing = [
  {
    name: "Foundation",
    price: "$129",
    cadence: "per month",
    description: "Access to Boxing Fundamentals + Conditioning classes.",
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
    program: "Boxing Fundamentals",
  },
  {
    name: "Andre Caldwell",
    quote:
      "DeadGame is the real deal. Conditioning classes are brutal in the best way, and the energy stays high.",
    program: "Conditioning",
  },
  {
    name: "Maya Rivera",
    quote:
      "I started with zero experience. The fundamentals program made me fall in love with boxing.",
    program: "Youth Boxing",
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
    title: "Conditioning Camp Checklist",
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
    title: "Youth Boxing and Confidence",
    date: "November 30, 2025",
    category: "Community",
    excerpt:
      "Youth boxing builds focus, respect, and self-belief in a structured environment.",
    content: [
      "We teach young athletes how to move with purpose and keep their eyes up.",
      "Coaches emphasize discipline, consistency, and positive reinforcement.",
      "Parents love the clear progress milestones and safe training standards.",
    ],
  },
];
