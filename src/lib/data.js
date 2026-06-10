import indianLuxuryLiving from "@/assets/indian_luxury_living.png";
import indianLuxuryBedroom from "@/assets/indian_luxury_bedroom.jpg";
import indianLuxuryKitchen from "@/assets/indian_luxury_kitchen.png";
import indianLuxuryTvUnit from "@/assets/indian_luxury_tv_unit.png";
import indianLuxuryFoyer from "@/assets/indian_luxury_foyer.png";
import indianLuxuryDining from "@/assets/indian_luxury_dining.png";
import indianLuxuryOffice from "@/assets/indian_luxury_office.jpg";
import executiveSuiteImg from "@/assets/executive_suite.jpg";
import indianLuxuryBalcony from "@/assets/indian_luxury_balcony.png";
import noor from "@/assets/portrait-noor.jpg";
import serviceTurnkey from "@/assets/service-turnkey.png";
import serviceStorage from "@/assets/service-storage.png";
import userHome1 from "@/assets/user_home_1.png";
import userHome2 from "@/assets/user_home_2.jpg";
import userHome3 from "@/assets/user_home_3.jpg";
import userHome4 from "@/assets/user_home_4.jpg";
import userHome5 from "@/assets/user_home_5.jpg";
import heroSunset from "@/assets/hero-sunset.png";

// New service card images cropped from reference image
import service01 from "@/assets/service_card_01.png";
import service02 from "@/assets/service_card_02.png";
import service03 from "@/assets/service_card_03.png";
import service04 from "@/assets/service_card_04.png";
import service05 from "@/assets/service_card_05.png";
import service06 from "@/assets/service_card_06.png";
import service07 from "@/assets/service_card_07.png";
import service08 from "@/assets/service_card_08.png";
import service09 from "@/assets/service_card_09.png";
import service10 from "@/assets/service_card_10.png";

export const images = {
    hero: heroSunset,
    kitchen: indianLuxuryKitchen,
    bedroom: userHome4,
    foyer: userHome2,
    dining: indianLuxuryDining,
    office: indianLuxuryOffice,
    noor: noor,
    servicesHeaderDecor: indianLuxuryTvUnit,
    serviceTerrace: indianLuxuryBalcony,
    serviceKids: indianLuxuryBedroom,
    luxuryLiving: userHome1,
    luxuryKitchen: indianLuxuryKitchen,
    luxuryBedroom: userHome4
};

export const projects = [
    {
        slug: "modern-living-room",
        name: "Modern Living Room",
        location: "Greater Noida West",
        type: "Living Room",
        category: "Living Rooms",
        year: "2025",
        area: "3,200 sq ft",
        cover: userHome1,
        gallery: [userHome1],
        vision: "A young family relocating from Singapore wanted a home that read as warm and grounded, but unmistakably modern.",
        approach: "We anchored the living spaces in travertine and dark walnut — materials that age with grace — then layered linen, brass, and hand-loomed textiles for warmth.",
        client: {
            quote: "Mr. Noor understood our vision before we could fully articulate it. The result is a home that feels entirely ours.",
            author: "Ananya & Vikram S.",
        },
    },
    {
        slug: "fluted-walnut-kitchen",
        name: "Fluted Walnut Kitchen",
        location: "Noida",
        type: "Modular Kitchen",
        category: "Kitchens",
        year: "2025",
        area: "320 sq ft",
        cover: indianLuxuryKitchen,
        gallery: [indianLuxuryKitchen],
        vision: "An apartment kitchen for a family that entertains weekly. The client wanted the kitchen to act as both workshop and stage.",
        approach: "Fluted dark walnut joinery wraps three walls; the island is a single slab of Calacatta. Brushed brass hardware adds tension between calm and capability.",
        client: {
            quote: "Every detail — lighting, hardware, storage — has been thought through with extraordinary care.",
            author: "Priya K.",
        },
    },
    {
        slug: "the-soft-room",
        name: "The Soft Room",
        location: "Gurgaon",
        type: "Master Bedroom",
        category: "Bedrooms",
        year: "2024",
        area: "480 sq ft",
        cover: indianLuxuryBedroom,
        gallery: [indianLuxuryBedroom],
        vision: "A primary bedroom for a couple who travel extensively. They wanted the room to feel like a private suite — restorative, hushed, free of digital intrusion.",
        approach: "An upholstered taupe boucle wall reduces ambient noise. Walnut floors, layered linens, and a single sculptural reading lamp do the rest.",
        client: {
            quote: "We sleep better. It is the single most valuable thing a designer has ever given us.",
            author: "Mr. & Mrs. K.",
        },
    },
    {
        slug: "the-rotunda-foyer",
        name: "The Rotunda Foyer",
        location: "Delhi",
        type: "Entry & Circulation",
        category: "Residential",
        year: "2024",
        area: "240 sq ft",
        cover: userHome2,
        gallery: [userHome2],
        vision: "A foyer that needed to do three things: receive guests, resolve an awkward circular geometry, and signal the quality of what lay beyond.",
        approach: "A curved travertine wall absorbs the geometry. A single sculptural console and one artwork are the only gestures. Restraint is what makes the moment land.",
        client: {
            quote: "Every visitor pauses here. That is exactly what we asked for.",
            author: "The R. Family",
        },
    },
    {
        slug: "evening-dining",
        name: "Evening Dining",
        location: "Greater Noida",
        type: "Dining & Entertainment",
        category: "Living Rooms",
        year: "2025",
        area: "360 sq ft",
        cover: indianLuxuryDining,
        gallery: [indianLuxuryDining],
        vision: "A formal dining room that needed to seat ten without feeling cavernous when it was just the family of four eating breakfast.",
        approach: "A solid oak table, a sculptural cluster chandelier, and a fluted screen that closes the room down to intimate scale on quiet nights.",
        client: {
            quote: "Dinner parties have become an event again. The room makes the evening.",
            author: "Mrs. M.",
        },
    },
    {
        slug: "luxury-bedroom-suite",
        name: "Luxury Bedroom Suite",
        location: "Noida",
        type: "Master Bedroom",
        category: "Bedrooms",
        year: "2024",
        area: "280 sq ft",
        cover: userHome3,
        gallery: [userHome3],
        vision: "A working library for a senior partner who reads three hours every morning. The room needed to hold 1,200 books.",
        approach: "Built-in dark walnut shelving wraps two walls. Lighting is layered: a brass desk lamp and indirect cove warmth for the books.",
        client: {
            quote: "I have started arriving early at home, just to spend time here.",
            author: "Mr. A.",
        },
    },
    {
        slug: "the-executive-suite",
        name: "The Executive Suite",
        location: "Gurgaon",
        type: "Corporate Office",
        category: "Offices",
        year: "2025",
        area: "900 sq ft",
        cover: executiveSuiteImg,
        gallery: [executiveSuiteImg],
        vision: "A refined workspace for a managing director who wanted an office that felt more like a private study than a corporate room.",
        approach: "Warm woods, ambient lighting, and bespoke Indian craftsmanship were combined to create an atmosphere of quiet luxury and focus.",
        client: {
            quote: "This space has transformed how I work. It is elegant and incredibly grounded.",
            author: "Mr. S. K.",
        },
    }
];

export const services = [
    {
        slug: "residential-interior-design",
        name: "Residential Interior Design",
        shortName: "Residential Design",
        tagline: "Whole-home interiors, designed and delivered end-to-end.",
        intro: "Complete home interior solutions for luxury apartments, penthouses, and villas.",
        scope: ["Space planning", "Concept design", "3D visualization", "Material curation"],
        philosophy: "A home should be a sanctuary of comfort and style.",
        cover: service01,
    },
    {
        slug: "modular-kitchen-design",
        name: "Modular Kitchen Design",
        shortName: "Modular Kitchens",
        tagline: "Kitchens designed for how you actually cook, entertain, and live.",
        intro: "From layout planning to precision hardware, our kitchens are built around real cooking patterns.",
        scope: ["Kitchen layout planning", "Custom modular unit design", "Hardware and appliance integration"],
        philosophy: "Beauty must survive daily use.",
        cover: service02,
    },
    {
        slug: "luxury-living-room-interiors",
        name: "Luxury Living Room Interiors",
        shortName: "Living Rooms",
        tagline: "Living rooms composed for conversation, for stillness, for guests.",
        intro: "Composing living rooms that balance elegance, comfort, and direct interaction.",
        scope: ["Seating layouts", "Feature walls", "Custom lighting design", "Furniture curation"],
        philosophy: "The living room is the stage for your life's best moments.",
        cover: service03,
    },
    {
        slug: "luxury-bedroom-design",
        name: "Luxury Bedroom Design",
        shortName: "Bedrooms",
        tagline: "Bedrooms as private suites — restorative, hushed, intimate.",
        intro: "We treat the bedroom as a sanctuary. Materials, lighting, and acoustics are designed for sleep first.",
        scope: ["Layout planning", "Upholstered walls", "Layered lighting design"],
        philosophy: "If the room does not improve your sleep, the design has failed.",
        cover: service04,
    },
    {
        slug: "false-ceiling-lighting-design",
        name: "False Ceiling & Lighting Design",
        shortName: "False Ceilings",
        tagline: "Lighting as architecture. Ceilings as composition.",
        intro: "Designing custom ceiling profiles and architectural lighting schemes to elevate your spaces.",
        scope: ["Ceiling layouts", "Lighting layouts", "Cove and accent lighting detail"],
        philosophy: "Lighting is the invisible dress of a room.",
        cover: service05,
    },
    {
        slug: "custom-furniture-design",
        name: "Custom Furniture Design",
        shortName: "Custom Furniture",
        tagline: "Furniture made for your space, by craftspeople we have worked with for years.",
        intro: "Bespoke furniture pieces tailored precisely to your functional needs and style preferences.",
        scope: ["Bespoke design sketches", "Material selection", "Production oversight"],
        philosophy: "Furniture should fit the space, not the other way around.",
        cover: service06,
    },
    {
        slug: "turnkey-interior-solutions",
        name: "Turnkey Interior Solutions",
        shortName: "Turnkey Solutions",
        tagline: "From empty shell to move-in ready. One studio. One accountability.",
        intro: "A complete turnkey delivery for clients who want one team accountable for design, procurement, fabrication, execution, and final styling.",
        scope: ["Full scope brief", "Design development", "Civil & electrical coordination", "Project management"],
        philosophy: "Turnkey means one number to call, one team to trust.",
        cover: service07,
    },
    {
        slug: "office-commercial-interiors",
        name: "Office & Commercial Interiors",
        shortName: "Office Interiors",
        tagline: "Workplaces designed for focus, presence, and the brand they represent.",
        intro: "Senior offices and boutique studios — designed with the same restraint as our residential work.",
        scope: ["Workplace strategy", "Reception design", "Acoustic and lighting design"],
        philosophy: "Your office is your most under-used brand asset.",
        cover: service08,
    },
    {
        slug: "space-planning-storage",
        name: "Space Planning & Storage",
        shortName: "Storage & Planning",
        tagline: "Planning that solves the rooms you actually live in.",
        intro: "Intelligent layouts and custom storage systems designed to maximize space and enhance daily functionality.",
        scope: ["Space optimization analysis", "Custom wardrobe design", "Built-in shelving & cabinetry"],
        philosophy: "Storage is not about hiding things; it is about finding them with ease.",
        cover: service09,
    },
    {
        slug: "tv-unit-feature-wall-design",
        name: "TV Unit & Feature Wall Design",
        shortName: "Feature Walls",
        tagline: "Feature walls that anchor the room without dominating it.",
        intro: "We design feature walls as composition, not as decoration — with material, light, and proportion.",
        scope: ["Concept studies", "Material specification", "Custom joinery"],
        philosophy: "A feature wall should reward you on the hundredth day.",
        cover: service10,
    }
];

export const STUDIO = {
    name: "Souvenir Interiors",
    phone: "+91 81782 32328",
    whatsapp: "+918178232328",
    email: "welcome@souvenirinteriors.com",
    address: "Galaxy Diamond Plaza, Sector 4",
    addressLine2: "Opposite Gaur City Mall, Greater Noida West",
    hours: "Mon–Sat · 10:00 AM – 7:00 PM",
};

export const videos = [
    {
        id: "video-1",
        title: "The Travertine Villa — Walkthrough",
        description: "A complete cinematic walkthrough of the 3,200 sq ft modern villa featuring natural travertine details.",
        url: "https://assets.mixkit.co/videos/preview/mixkit-interior-of-a-modern-living-room-with-plants-41956-large.mp4",
        duration: "0:45",
        category: "Residential"
    }
];
