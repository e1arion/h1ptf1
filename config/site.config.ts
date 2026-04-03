export const siteConfig = {
  name: "hilarión",
  logo: "/logo.png",
  tagline: "Multi Skilled Developer",
  description: "hire me because i need me that money",
  footerText: "© 2026 hilarión. All Money is reserved.",

  navLinks: [
    { key: "portfolio", label: "Portfolio" },
    { key: "pricing", label: "Pricing" },
    { key: "vouches", label: "Vouches" },
    { key: "about", label: "About" },
    { key: "tos", label: "TOS" },
  ] as const,
}

// ============================================
// about
// ============================================

export const aboutConfig = {
  title: "hilarión",
  bio: [
    "I'm an Roblox developer with over 7 years of experience.",
    "Focused on 3D animation, rigging, sculpting, and scripting for games and custom systems!",
  ],
  profileImage: "/body1.png",
  skills: [
    "Animation",
    "Rigging",
    "Weight Paint",
    "Caging",
    "Scripting",
    "Sculpting",
    "Blender",
  ],
}

// ============================================
// services
// ============================================

export const servicesConfig = [
  {
    title: "Animation",
    description: "Clean and smooth animations for characters and gameplay.",
    icon: "animation",
  },
  {
    title: "Rigging",
    description: "Reliable rigs built for performance and flexibility.",
    icon: "rigging",
  },
  {
    title: "Weight Paint & Caging",
    description: "Accurate deformation with clean results.",
    icon: "weightpaint",
  },
  {
    title: "Scripting & Programming",
    description: "Custom systems and tools for your project.",
    icon: "scripting",
  },
]

// ============================================
// portfolio (disabled template)
// ============================================

export type PortfolioItem = {
  id: string
  title: string
  description: string
  previewImage: string
  fullImage: string
  category: string
  dateCreated: string
  type: "commission" | "practice"
  disabled?: boolean
}

export const portfolioConfig: PortfolioItem[] = [
  {
    id: "1",
    title: "Body Revamp Male Minus",
    description: "MV Sculpt revamp for Male Minus Body Base",
    previewImage: "https://cdn.discordapp.com/attachments/1406432387415412756/1489738168344514702/Screenshot_2026-03-15_at_5.27.20_PM_-_e1arion.png?ex=69d18249&is=69d030c9&hm=34378799c3effad5c1978b495811da2d7759ed44b3b010f57382fa0cae902f43&",
    fullImage: "https://media.discordapp.net/attachments/1406432387415412756/1489742088651276469/image.png?ex=69d185f0&is=69d03470&hm=7ed0105722fcb7c48b78b9c739a07711b547a121a981962857bff09ea3f4b287&=&format=webp&quality=lossless&width=558&height=1366",
    category: "Redesign",
    dateCreated: "N/A",
    type: "commission",
  },
  {
    id: "2",
    title: "Body Revamp Male Plus",
    description: "MV Sculpt revamp for Male Plus Body Base",
    previewImage: "https://cdn.discordapp.com/attachments/1406432387415412756/1489738168092721183/Screenshot_2026-03-15_at_5.36.16_PM_-_e1arion.png?ex=69d18249&is=69d030c9&hm=2f73e35a1b6cbfd1f307f57723391aa982d8fc4cd948b68e1e0a78e8fe54cf3c&",
    fullImage: "https://media.discordapp.net/attachments/1406432387415412756/1489742088319795271/image.png?ex=69d185ef&is=69d0346f&hm=570156f1dc7ea9102ad2ad5aeeec01a0d44cfc2c8fd258a09cfd7f6233d16660&=&format=webp&quality=lossless&width=614&height=1286",
    category: "Redesign",
    dateCreated: "N/A",
    type: "commission",
  },
  {
    id: "3",
    title: "Body Revamp Female Minus",
    description: "MV Sculpt revamp for Female Minus Body Base",
    previewImage: "https://cdn.discordapp.com/attachments/1406432387415412756/1489738169061740644/Screenshot_2026-03-15_at_5.21.23_PM_-_e1arion.png?ex=69d18249&is=69d030c9&hm=88d91cebeb3c7ca573b72724382c71ae313ce624e00541b830d436e0d4f882c3&",
    fullImage: "https://media.discordapp.net/attachments/1406432387415412756/1489742089171370155/image.png?ex=69d185f0&is=69d03470&hm=cde601303d81876fda54ff6363243e89db8b3bec5ce5a3e212a4405115b5bf2e&=&format=webp&quality=lossless&width=562&height=1366",
    category: "Redesign",
    dateCreated: "N/A",
    type: "commission",
  },
  {
    id: "4",
    title: "Body Revamp Female Plus",
    description: "MV Sculpt revamp for Female Plus Body Base",
    previewImage: "https://cdn.discordapp.com/attachments/1406432387415412756/1489738168830787599/Screenshot_2026-03-15_at_5.25.13_PM_-_e1arion.png?ex=69d18249&is=69d030c9&hm=0bc0749928ab1e965b05cc2c7525e7a141defcc3a578299be6c3eb76a74a04c6&",
    fullImage: "https://media.discordapp.net/attachments/1406432387415412756/1489742088898744340/image.png?ex=69d185f0&is=69d03470&hm=f86359e3071da72847dc9b22e53cd98f45010ddeb5d95480796c0af007785f4d&=&format=webp&quality=lossless&width=622&height=1368",
    category: "Redesign",
    dateCreated: "N/A",
    type: "commission",
  },
]

// ============================================
// pricing
// ============================================

export const pricingConfig = [
  {
    name: "Coding",
    price: "$10 / 2,000 R$",
    unit: "base price",
    description: "Small scripts and quick fixes.",
    features: [
      "Clean and simple code",
      "Minor adjustments",
      "1 revision",
    ],
    popular: false,
  },
  {
    name: "Weightpaint & Caging",
    price: "$50 / 6,700 R$",
    unit: "base price",
    description: "Mid-level character work.",
    features: [
      "Smooth weight painting",
      "Clean deformation",
      "3 revisions",
      "Rush delivery available",
    ],
    popular: false,
  },
  {
    name: "Animation & Rigging",
    price: "Unavailable",
    unit: "",
    description: "Currently not accepting new orders.",
    features: [],
    popular: false,
  },
]

// ============================================
// vouches
// ============================================

export type Vouch = {
  id: string
  name: string
  profileImage: string
  service: string
  message: string
  dateVouched: string
}

export const vouchesConfig: Vouch[] = [
  {
    id: "1",
    name: "bnnyirl",
    profileImage: "https://cdn.discordapp.com/avatars/1061508870108872764/ef73f971718df67453ffa78989a354cc.png?size=1024",
    service: "Animation",
    message: "Tysm, Sweet and patient!",
    dateVouched: "August 2025",
  },
    {
    id: "2",
    name: "angelique",
    profileImage: "https://cdn.discordapp.com/avatars/1225568047151190176/540ce4f8653bdfb14c8fcd5c67fb9251.png?size=1024",
    service: "Animation",
    message: "got an emote tysm!!",
    dateVouched: "August 2025",
  },
      {
    id: "3",
    name: "zekume",
    profileImage: "https://cdn.discordapp.com/avatars/969398675073806336/2327a59e735deca3fe743d42cc19aa7a.png?size=1024",
    service: "Layered Clothing",
    message: "made fire layered clothing",
    dateVouched: "August 2025",
  },
      {
    id: "4",
    name: "jer",
    profileImage: "https://cdn.discordapp.com/avatars/886984807341518878/cfcf06646b2483a3a68389cd062f99ad.png?size=1024",
    service: "Caging and Weightpaint Tutorial",
    message: "100 $$!!",
    dateVouched: "November 2025",
  },
  {
    id: "5",
    name: "bnnyirl",
    profileImage: "https://cdn.discordapp.com/avatars/1061508870108872764/ef73f971718df67453ffa78989a354cc.png?size=1024",
    service: "Animation",
    message: "tyy so kind",
    dateVouched: "August 2025",
  },
    {
    id: "6",
    name: "laura",
    profileImage: "https://cdn.discordapp.com/avatars/731140329281028198/b01db0a25185b54436652f0b9de27a76.png?size=1024",
    service: "Coding",
    message: "really nice and fast scripting <3",
    dateVouched: "August 2025",
  },
      {
    id: "7",
    name: "laura",
    profileImage: "https://cdn.discordapp.com/avatars/731140329281028198/b01db0a25185b54436652f0b9de27a76.png?size=1024",
    service: "Coding",
    message: "really nice and fast scripting <3",
    dateVouched: "August 2025",
  },
  {
    id: "8",
    name: "Nuitsuite",
    profileImage: "https://cdn.discordapp.com/avatars/793052515322167296/cdbae65479af28f56b903374e4c253c1.png?size=1024",
    service: "Rigging",
    message: "Rig 1 dress for me :3",
    dateVouched: "March 2026",
  },
  {
    id: "9",
    name: "henry",
    profileImage: "https://cdn.discordapp.com/avatars/1171555951959081073/16459b6cf0c6f76b9d7a79a0f8311c21.png?size=1024",
    service: "Game Scripts & UI",
    message: "game scripts and ui",
    dateVouched: "January 2026",
  },
  {
    id: "10",
    name: "ninicorn",
    profileImage: "https://cdn.discordapp.com/avatars/1075549837627510865/7ba8fff428f2e6b517f43354355ffa96.png",
    service: "Emote Commission",
    message: "emote comm",
    dateVouched: "November 2025",
  },
  {
    id: "11",
    name: "Nuitsuite",
    profileImage: "https://cdn.discordapp.com/avatars/793052515322167296/cdbae65479af28f56b903374e4c253c1.png?size=1024",
    service: "Rigging",
    message: "good rig :3",
    dateVouched: "November 2025",
  },
    {
    id: "12",
    name: "cynthia",
    profileImage: "https://cdn.discordapp.com/avatars/1326078938048368652/a_c42c0c1e27e606a3a15af6272bd50004.gif?size=1024",
    service: "Animatrion",
    message: "so sweet & was SO patient w me and helper me figure out poses and how to upload, bought 2 emothes from him that got tg",
    dateVouched: "August 2025",
  },
]

// ============================================
// TOS
// ============================================

export const tosConfig = {
  lastUpdated: "March 2026",
  sections: [
    {
      title: "1. Services",
      content: "All work is custom and based on your request.",
    },
    {
      title: "2. Payment Methods",
      content: "Accepted payments are crypto, PayPal Friends and Family, Roblox gamepass (tax covered by buyer), or Roblox group funds for orders placed 2 weeks in advance.",
    },
    {
      title: "3. Payment Terms",
      content: "50% upfront is required. Final 50% must be paid before delivery.",
    },
    {
      title: "4. No Refunds",
      content: "All payments are final once work has started.",
    },
    {
      title: "5. Revisions",
      content: "Revisions are limited. Extra changes require additional payment.",
    },
    {
      title: "6. Deadlines",
      content: "Delays caused by the client may extend delivery time.",
    },
    {
      title: "7. Client Responsibility",
      content: "You must provide clear instructions and assets before work begins.",
    },
    {
      title: "8. Ownership",
      content: "Full rights are given after full payment. I may showcase the work.",
    },
    {
      title: "9. Cancellation",
      content: "No refunds if the project is cancelled after work has started.",
    },
    {
      title: "10. Usage",
      content: "You may not resell or claim the work as your own.",
    },
    {
      title: "11. Communication",
      content: "Slow responses may pause the project.",
    },
    {
      title: "12. Right to Refuse",
      content: "I can refuse any commission.",
    },
        {
      title: "13. Delays",
      content: "I am not responsible for delays caused by unforeseen circumstances, but will communicate any issues promptly.",
    },
    {
  title: "14. No Chargebacks",
  content: "Chargebacks or payment disputes are strictly prohibited. Doing so results in revoked rights to the work.",
},
{
  title: "15. Third Party Issues",
  content: "I am not responsible for platform issues, outages, or third party service failures.",
},
{
  title: "16. Client Provided Assets",
  content: "You are responsible for rights to any assets you provide. I am not liable for copyright issues.",
},
{
  title: "17. Compatibility",
  content: "I am not responsible for compatibility issues with your game, systems, or future updates.",
},
{
  title: "18. Modification by Client",
  content: "I am not responsible for issues caused after you modify the delivered work.",
},
{
  title: "19. Delivery Format",
  content: "Work is delivered in agreed format only. Extra conversions may require additional payment.",
},
{
  title: "20. Time Estimates",
  content: "All delivery times are estimates and not guaranteed.",
},
{
  title: "21. Liability Limit",
  content: "I am not liable for any indirect, incidental, or consequential damages.",
},
{
  title: "22. Loss of Data",
  content: "I am not responsible for lost files after delivery. You must keep backups.",
},
{
  title: "23. Project Scope",
  content: "Anything outside the agreed scope requires additional payment.",
},
{
  title: "24. Abandoned Projects",
  content: "Projects inactive for 14 days may be closed without refund.",
},
{
  title: "25. Force Majeure",
  content: "I am not responsible for delays caused by events outside my control.",
},
{
  title: "26. Agreement",
  content: "By commissioning me, you confirm that you have read, understood, and agreed to all terms listed here. Failure to read the terms does not exempt you from these conditions.",
}
  ],
}