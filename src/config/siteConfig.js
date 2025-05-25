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
