function getRandomValue(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const destinationsItems = [
    {
        id: "1",
        image: "/destinations/baluran.png",
        title: "Taman Nasional Baluran",
        rating: getRandomValue(1, 5),
        period: "2 Days 1 Night",
        price: getRandomValue(50, 1000),
    },
    
    {
        id: "2",
        image: "/destinations/borobudur.jpg",
        title: "Borobudur Temple",
        rating: getRandomValue(1, 5),
        period: "4 Days 3 Nights",
        price: getRandomValue(50, 1000),
    },
    
    {
        id: "3",
        image: "/destinations/ciletuh.png",
        title: "Geopark Ciletuh",
        rating: getRandomValue(1, 5),
        period: "3 Days 2 Nights",
        price: getRandomValue(50, 1000),
    },
    
    {
        id: "4",
        image: "/destinations/desa_pinggan.png",
        title: "Desa Pinggan Bali",
        rating: getRandomValue(1, 5),
        period: "5 Days 4 Nights",
        price: getRandomValue(50, 1000),
    },
    
    {
        id: "5",
        image: "/destinations/diamond_beach.jpg",
        title: "Diamond Beach",
        rating: getRandomValue(1, 5),
        period: "6 Days 5 Nights",
        price: getRandomValue(50, 1000),
    },
    
    {
        id: "6",
        image: "/destinations/kelingking_beach.jpg",
        title: "Kelingking Beach",
        rating: getRandomValue(1, 5),
        period: "3 Days 2 Nights",
        price: getRandomValue(50, 1000),
    },
    
    {
        id: "7",
        image: "/destinations/pink_beach.png",
        title: "Pink Beach",
        rating: getRandomValue(1, 5),
        period: "7 Days 6 Nights",
        price: getRandomValue(50, 1000),
    },
    
    {
        id: "8",
        image: "/destinations/prambanan.png",
        title: "Prambanan Temple",
        rating: getRandomValue(1, 5),
        period: "4 Days 3 Nights",
        price: getRandomValue(50, 1000),
    },
    
    {
        id: "9",
        image: "/destinations/pulau_cinta.png",
        title: "Pulau Cinta",
        rating: getRandomValue(1, 5),
        period: "5 Days 4 Nights",
        price: getRandomValue(50, 1000),
    },
    
    {
        id: "10",
        image: "/destinations/pulau_padar.jpg",
        title: "Pulau Padar NTT",
        rating: getRandomValue(1, 5),
        period: "3 Days 2 Nights",
        price: getRandomValue(50, 1000),
    },
    
    {
        id: "11",
        image: "/destinations/raja_ampat.png",
        title: "Raja Ampat Papua",
        rating: getRandomValue(1, 5),
        period: "4 Days 3 Nights",
        price: getRandomValue(50, 1000),
    },
    
    {
        id: "12",
        image: "/destinations/tana_toraja.png",
        title: "Tana Toraja",
        rating: getRandomValue(1, 5),
        period: "3 Days 2 Nights",
        price: getRandomValue(50, 1000),
    },
];

const adjectives = [
    "Duluxe",
    "Executive",
    "Family",
    "Luxury",
    "Standard",
    "Single",
    "Double",
    "Superior",
    "Economy",
    "Presidential"
];

const nouns = [
    "Suite",
    "Room"
];

function generateRandomTitle() {
    const randomAdjective = 
        adjectives[Math.floor(Math.random() * adjectives.length)];
    const randomNoun = nouns[Math.floor(Math.random() * nouns.length)];

    return `${randomAdjective} ${randomNoun}`;
}

export const hotels = [
    {
        id: "1",
        image: "/hotels/arus.jpg",
        title: generateRandomTitle(),
        bed: "Kings Bed",
        capacity: getRandomValue(1, 10),
        rating: getRandomValue(1, 5),
        price: getRandomValue(50, 1000),
    },
    
    {
        id: "2",
        image: "/hotels/tentrem.jpg",
        title: generateRandomTitle(),
        bed: "Kings Bed",
        capacity: getRandomValue(1, 10),
        rating: getRandomValue(1, 5),
        price: getRandomValue(50, 1000),
    },

    {
        id: "3",
        image: "/hotels/tulip.jpg",
        title: generateRandomTitle(),
        bed: "Kings Bed",
        capacity: getRandomValue(1, 10),
        rating: getRandomValue(1, 5),
        price: getRandomValue(50, 1000),
    },

    {
        id: "4",
        image: "/hotels/tentrem2.jpg",
        title: generateRandomTitle(),
        bed: "Kings Bed",
        capacity: getRandomValue(1, 10),
        rating: getRandomValue(1, 5),
        price: getRandomValue(50, 1000),
    },
];

export const testimonials = [
    {
        name: "Emily Johnson",
        rating: 5,
        description: "Exceptional service! The team went above and beyond to meet my expectations. I'm impressed with the attention to detail and prompt communication. Highly recommend!",
        country: "United States",
        image: "/testimonial/profile1.webp",
    },
    
    {
        name: "John Anderson",
        rating: 4,
        description: "Great experience overall. The product quality is good, and the delivery was on time. A minor hiccup in communication, but the team quickly resolved it. Will consider for future purchase.",
        country: "Canada",
        image: "/testimonial/profile3.jpg",
    },

    {
        name: "Sophia Ramirez",
        rating: 5,
        description: "Outstanding customer service! The team was incredibly helpful and responsive. They addressed all my concerns, making the entire process smooth. Very satisfied with the outcome!",
        country: "Australia",
        image: "/testimonial/profile2.jpg",
    },
]