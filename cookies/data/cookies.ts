export interface CookieData {
    name: string;
    description: string;
    price: number;
    image: string;
    slug: string;
}

export const cookiesData: CookieData[] = [
    { slug: "the-pawfect-chip", name: "The Pawfect Chip", description: "choco chip cookie", price: 65, image: "https://picsum.photos/300" },
    { slug: "dalmation-delight", name: "Dalmation Delight", description: "cookies n' cream", price: 75, image: "https://picsum.photos/300" },
    { slug: "happy-tail-mix", name: "Happy Tail Mix", description: "candy crunch cookie", price: 75, image: "https://picsum.photos/300" },
    { slug: "peanut-pawcket", name: "Peanut Pawcket", description: "peanut butter cookie", price: 75, image: "https://picsum.photos/300" },
];