export const siteConfig = {
  name: "Faye Suleiman Foundation",
  shortName: "FSF",
  tagline: "Feeding Hope. Clothing Dignity. Building Futures.",
  description:
    "A multi-cause charitable organization operating from Cameroon, delivering food relief, education, health care, and dignity to communities across sub-Saharan Africa.",
  email: "info@fayesuleimanfoundation.org",
  website: "https://fayesuleimanfoundation.org",
  phones: ["+237 6 75 33 64 37", "+237 681 775 574"],
  address: "Douala, Littoral Region, Cameroon",
  founded: "2025",
};

export const socialLinks = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/faye-suleiman-foundation",
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61588838336643",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/fayesuleimanfoundation",
  },
  {
    name: "TikTok",
    href: "https://www.tiktok.com/@fayesuleimanfounda",
  },
];

/** Strip spaces for tel: links */
export function phoneHref(phone: string) {
  return `tel:${phone.replace(/\s/g, "")}`;
}

export const navLinks = [
  { href: "/about", label: "Who We Are" },
  { href: "/programs", label: "Our Programs" },
  { href: "/impact", label: "Impact" },
  { href: "/news", label: "News" },
  { href: "/transparency", label: "Transparency" },
  { href: "/contact", label: "Contact" },
];

export const impactStats = [
  { value: 12400, suffix: "+", label: "Meals served", detail: "across 8 communities in 2024" },
  { value: 3200, suffix: "+", label: "Children supported", detail: "through school meals & bursaries" },
  { value: 890, suffix: "", label: "Families clothed", detail: "via seasonal dignity drives" },
  { value: 47, suffix: "", label: "Communities reached", detail: "in Cameroon & beyond" },
];

export const pillars = [
  {
    id: "food",
    number: "01",
    title: "Food Relief & Nutrition",
    short: "Food Relief",
    description:
      "Emergency food distribution, community feeding programmes, school meals, and nutritional support for children, pregnant women, and vulnerable families facing hunger.",
    stat: "12,400 meals",
    image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&q=80",
    color: "#C8932A",
  },
  {
    id: "clothing",
    number: "02",
    title: "Clothing & Basic Needs",
    short: "Clothing",
    description:
      "Seasonal clothing drives, hygiene kits, blanket campaigns, and essential household items for displaced persons, orphans, and low-income families.",
    stat: "890 families",
    image: "https://images.unsplash.com/photo-1485968579580-b6d5abe91f66?w=800&q=80",
    color: "#2E7DC4",
  },
  {
    id: "education",
    number: "03",
    title: "Education & Scholarships",
    short: "Education",
    description:
      "Bursaries, school materials, library development, digital literacy training, and vocational skills sponsorships for students who cannot afford fees.",
    stat: "340 students",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80",
    color: "#0D2137",
  },
  {
    id: "health",
    number: "04",
    title: "Health & Wellbeing",
    short: "Health",
    description:
      "Health screenings, medical outreach camps, mental health awareness, disability support, maternal health initiatives, and community wellness programmes.",
    stat: "2,100 consultations",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
    color: "#2E7DC4",
  },
  {
    id: "orphans",
    number: "05",
    title: "Orphans & Vulnerable Children",
    short: "Orphans & Children",
    description:
      "Safe shelter support, psychosocial care, foster family linkages, mentorship, life skills training, and holistic support for orphaned and at-risk children.",
    stat: "180 children",
    image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=800&q=80",
    color: "#C8932A",
  },
];

export const newsArticles = [
  {
    slug: "school-meals-northwest-cameroon",
    title: "School meals programme reaches 800 children in Northwest Cameroon",
    excerpt:
      "Our latest feeding initiative brings daily nutrition to primary schools in rural communities where food insecurity threatens attendance.",
    category: "Food Relief",
    date: "2025-04-12",
    author: "FSF Field Team",
    image: "https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=800&q=80",
  },
  {
    slug: "hygiene-kits-displaced-families",
    title: "2,000 hygiene kits distributed to displaced families in the Far North",
    excerpt:
      "Working alongside local partners, FSF delivered essential hygiene supplies to families who fled conflict and now live in temporary settlements.",
    category: "Clothing & Basic Needs",
    date: "2025-03-28",
    author: "Marie Tchoupa",
    image: "https://images.unsplash.com/photo-1532629345422-7515f3d4bb93?w=800&q=80",
  },
  {
    slug: "digital-literacy-youth-bamenda",
    title: "Digital literacy centre opens for youth in Bamenda",
    excerpt:
      "Forty young people enrolled in the first cohort of our vocational skills programme, gaining computer literacy and job-ready certifications.",
    category: "Education",
    date: "2025-02-15",
    author: "Faye Rauda Nyuyfoni",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80",
  },
];

export const testimonials = [
  {
    quote:
      "Before FSF came to our village, my three children went to school hungry. Now they eat at school every day, and my eldest daughter is top of her class.",
    name: "Amina N.",
    location: "Bafut, Northwest Region",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&q=80",
  },
];

export const partners = [
  "UNHCR", "UNICEF", "World Food Programme", "Cameroon Red Cross",
  "Plan International", "Save the Children", "Local Parish Networks",
];

export const boardMembers = [
  {
    name: "Faye Rauda Nyuyfoni",
    role: "Founder & Executive Director",
    bio: "Humanitarian advocate with over a decade of community development experience across Cameroon. Founded FSF in honour of Suleiman's legacy of wisdom and compassion.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80",
  },
  {
    name: "Dr. Emmanuel Fon",
    role: "Board Chair",
    bio: "Public health specialist and former WHO consultant. Guides FSF's health programmes and institutional partnerships across Central Africa.",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&q=80",
  },
  {
    name: "Grace Mbeki",
    role: "Treasurer",
    bio: "Chartered accountant with experience in NGO financial governance. Ensures transparency and accountability in all FSF operations.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80",
  },
];

export const coreValues = [
  { title: "Dignity First", desc: "Every person deserves respect, regardless of circumstance." },
  { title: "Radical Transparency", desc: "Donors deserve to know exactly where their gifts go." },
  { title: "Community-Led", desc: "Local voices shape our programmes, not distant agendas." },
  { title: "Lasting Impact", desc: "Emergency relief paired with long-term rebuilding." },
];

export const volunteerRoles = [
  {
    title: "Remote Communications Volunteer",
    type: "Remote",
    description: "Help draft newsletters, manage social media, and tell beneficiary stories to global audiences.",
  },
  {
    title: "Field Programme Assistant",
    type: "In-person · Cameroon",
    description: "Support food distribution, school supply deliveries, and community outreach events on the ground.",
  },
  {
    title: "Grant Writing Fellow",
    type: "Remote · 6 months",
    description: "Research funding opportunities and assist in preparing proposals for institutional donors.",
  },
  {
    title: "Brand Ambassador",
    type: "Global",
    description: "Represent FSF at events, host fundraisers, and amplify our mission in your network.",
  },
];

export const transparencyBreakdown = [
  { label: "Programme delivery", percent: 82, color: "#C8932A" },
  { label: "Community operations", percent: 10, color: "#2E7DC4" },
  { label: "Administration", percent: 5, color: "#0D2137" },
  { label: "Fundraising", percent: 3, color: "#6B7280" },
];

export const donateAmounts = [10, 25, 50, 100];

export const currencies = ["USD", "EUR", "GBP", "XAF"];
