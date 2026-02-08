export const BUSINESS_INFO = {
    name: "Danny’s Delight",
    tagline: "100% Eggless | Custom Theme Cakes | Made with Love",
    phone: "081860 20202",
    whatsappNumber: "918186020202", // Formatted for WhatsApp API (91 + number without spaces/leading 0)
    email: "dannysdelight@gmail.com", // Placeholder as per brief
    address: "Bloomingdale Appt, opp. Gowtham Model School, Sri Ram Nagar Colony, Puppalguda, Hyderabad, तेलंगाना 500089",
    city: "Hyderabad",
    state: "Telangana",
    country: "India",
    mapsLink: "https://maps.app.goo.gl/oTzW8oqvr73ALU597",
    hours: [
        "Sunday: 9 am–11:30 pm",
        "Monday: 9 am–11:30 pm",
        "Tuesday: 9 am–11:30 pm",
        "Wednesday: 9 am–11:30 pm",
        "Thursday: 9 am–11:30 pm",
        "Friday: 9 am–11:30 pm",
        "Saturday: 9 am–11:30 pm"
    ],
    coordinates: {
        lat: 17.399325,
        lng: 78.385842
    },
    socialMedia: {
        instagram: "https://instagram.com/dannys_delight_21?igshid=MzRlODBiNWFlZA==",
        facebook: "https://facebook.com/dannysdelight", // Placeholder
    },
};

export const WHATSAPP_MESSAGES = {
    default: "Hi! I'd like to order a cake from Danny's Delight.",
    gallery: (theme: string) =>
        `Hi! I'm interested in ordering a ${theme} theme cake. Can you share details?`,
    contact: "Hi! I have a query about custom cakes.",
};

export const CAKE_IMAGES = Array.from({ length: 32 }, (_, i) => ({
    src: `/images/cakes/cake_${String(i + 1).padStart(3, '0')}.jpg`,
    alt: `Delicious Eggless Cake ${i + 1}`,
    width: 2048,
    height: 2048
}));
