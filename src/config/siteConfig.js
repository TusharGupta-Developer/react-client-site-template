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
        longDescription: "Hello and welcome. I’m so glad you’re here.I’m a passionate therapist dedicated to helping individuals find healing, clarity, and strength through life’s most challenging moments. My mission is to create a safe, non-judgmental space where you can feel heard, supported, and empowered to grow. <br/>With a deep understanding of emotional well-being, I work with clients experiencing anxiety, stress, trauma, relationship struggles, and self-esteem issues. Whether you’re navigating a difficult transition or simply looking to better understand yourself, I’m here to walk alongside you. <br/> My approach combines compassion with proven therapeutic techniques to support your unique journey. Together, we’ll explore what’s holding you back and uncover ways to move forward with greater peace and purpose. <br/> You are not alone. Healing starts here.<br/> Let’s begin this journey — one step at a time."
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
            title: "Confidence Building",
            description: "Discover your strengths and build a more confident you.",
            icon: "🌟",
        },
        {
            title: "Meditation Guidance",
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

    testimonials: {
        Individual: [
            {
                name: "Emily Parker",
                title: "Wellness Coach, BloomWell",
                image: "src/assets/img/Testimonials/IndividualImagesWomen/pexels-yankrukov-7693223.jpg",
                message: "The guidance I received was transformative. I felt truly heard and supported every step of the way. An incredible experience!"
            },
            {
                name: "Clara Bennett",
                title: "HR Manager, Zenith Solutions",
                image: "src/assets/img/Testimonials/IndividualImagesWomen/Smiling Woman.jpg",
                message: "Professional, compassionate, and insightful — I couldn't have asked for a better experience. Highly recommend to anyone seeking real change."
            },
            {
                name: "James Carter",
                title: "Freelance Designer",
                image: "src/assets/img/Testimonials/IndividualImagesWomen/Young Man in Casual Attire.jpg",
                message: "A calming environment and a highly skilled team. I finally feel balanced, focused, and ready to take on anything."
            },

        ],

        Couple: [
            {
                name: "Nina & Marcus",
                title: "Newlyweds",
                image: "https://images.pexels.com/photos/3699321/pexels-photo-3699321.jpeg",
                message: "We felt seen and understood from the moment we walked in. The sessions brought us even closer. Thank you, Tranquil Minds!"
            },
            {
                name: "Ava & Daniel",
                title: "Young Couple",
                image: "https://images.pexels.com/photos/3699322/pexels-photo-3699322.jpeg",
                message: "The team helped us communicate better and reconnect emotionally. It was more than therapy — it was healing."
            },
            {
                name: "Lena & Oliver",
                title: "Engaged Partners",
                image: "https://images.pexels.com/photos/3699323/pexels-photo-3699323.jpeg",
                message: "Every session brought us closer. We feel more aligned, more in love, and ready for our future together. Highly recommend!"
            },

        ]
    },

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
