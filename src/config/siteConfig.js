// src/config/siteConfig.js

export const siteConfig = {
    brandName: "Tranquil Minds",
    brandTagline: "Find Peace and Healing",

    // colors: {
    //     primary: "#BFD8D2",        // Mint
    //     primaryHover: "#A6C5BC",   // Darker Mint
    //     secondary: "#F5EAEA",      // Soft Beige
    //     accent: "#E5DAF2",         // Lavender
    //     text: "#333333",           // Dark text
    //     subtext: "#666666",        // Lighter text
    //     background: "#FDFBF9",     // Page background
    //     surface: "#FFFFFF",        // Card BG
    //     border: "#DDD7D1",         // Borders
    //     error: "#D9534F",          // Errors
    //     success: "#4CAF50",        // Success
    // },

    meta: {
        title: "Tranquil Minds - Online Therapy Services",
        description:
            "Tranquil Minds offers compassionate online therapy for individuals and couples. Begin your healing journey today.",
        keywords:
            "therapy, mental health, online counseling, couples therapy, anxiety, stress",
        favicon: "/assets/favicon.png", // Optional favicon
    },

    navLinks: [
        { path: "/", label: "Home" },
        { path: "/about", label: "About" },
        { path: "/services", label: "Services" },
        { path: "/contact", label: "Contact" },
    ],

    about: {
        shortDescription: "Hi, I'm a dedicated therapist here to support you on your path to healing and self-discovery. I offer a safe, understanding space where you can feel heard, valued, and empowered. Let’s take the first step toward peace and growth together.",
    },

    services: [
        {
            title: "Individual Therapy",
            description: "Personalized 1-on-1 sessions to support your mental health.",
            icon: "🧠",
        },
        {
            title: "Couples Counseling",
            description: "Strengthen your relationships with guided therapy.",
            icon: "💑",
        },
        {
            title: "Anxiety & Stress Management",
            description: "Tools and strategies to find balance and calm.",
            icon: "🌿",
        },
        {
            title: "Depression Support",
            description: "Compassionate care and practical tools for managing depression.",
            icon: "🌧️",
        },
        {
            title: "Self-Esteem & Confidence Building",
            description: "Discover your strengths and build a more confident you.",
            icon: "🌟",
        },
        {
            title: "Mindfulness & Meditation Guidance",
            description: "Learn techniques to stay present and cultivate inner peace.",
            icon: "🧘",
        },
        // {
        //     title: "Grief & Loss Counseling",
        //     description: "Supportive space to process grief and find healing.",
        //     icon: "💔",
        // },
        // {
        //     title: "Work & Career Counseling",
        //     description: "Overcome burnout and find purpose in your professional life.",
        //     icon: "💼",
        // },
    ],


    contact: {
        email: "info@tranquilminds.com",
        phone: "+1 234 567 890",
        address: "123 Calm Street, Serenity City",
        socialLinks: {
            instagram: "https://instagram.com/tranquilminds",
            linkedin: "https://linkedin.com/in/tranquilminds",
        },
    },

    hours: {
        weekdays: "9am – 6pm",
        weekends: "10am – 2pm",
        closed: ["Sunday"],
    },

    bookingLink: "https://calendly.com/tranquilminds/therapy-session",
    themeMode: "light", // Optional for theme switch
};
