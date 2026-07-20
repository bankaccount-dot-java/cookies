export interface CookieData {
    name: string;
    description: string;
    price: number;
    image: string;
    slug: string;
}

export const cookiesData: CookieData[] = [
    { slug: "the-pawfect-chip", name: "The Pawfect Chip", description: "[AI] Indulge in our classic, chewy golden-brown cookie loaded with premium semi-sweet chocolate chips that melt in your mouth. [Original] choco chip cookie", price: 65, image: "https://picsum.photos/300" },
    { slug: "dalmation-delight", name: "Dalmation Delight", description: "[AI] A beautiful speckled cookie combining a rich milky batter with crunchy chocolate cookie bits and white chocolate chips. [Original] cookies n' cream", price: 75, image: "https://picsum.photos/300" },
    { slug: "happy-tail-mix", name: "Happy Tail Mix", description: "[AI] A fun and colorful cookie packed with crunchy sugar candies and chocolate pieces that make every bite a celebration. [Original] candy crunch cookie", price: 75, image: "https://picsum.photos/300" },
    { slug: "peanut-pawcket", name: "Peanut Pawcket", description: "[AI] A soft, melt-in-your-mouth cookie bursting with creamy, rich peanut butter and a perfectly sweet and nutty finish. [Original] peanut butter cookie", price: 75, image: "https://picsum.photos/300" },
];