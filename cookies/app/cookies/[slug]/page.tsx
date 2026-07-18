import { cookiesData } from "@/data/cookies"
import { notFound } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AddToCart } from "@/components/add-to-cart"

interface PageProps {
    params: Promise<{ slug: string}>;
}

export default async function CookieDetail({ params }: PageProps){
    const { slug } = await params;
    const cookie = cookiesData.find((c) => c.slug == slug);
    if (!cookie) {
        notFound();
    }
    return (
        <div>
            <Header/>
            <div><a href="/">Back</a></div>
            <div>
                <img src={cookie.image}></img>
            </div>
            <div>
                <h1>{cookie.name}</h1>
                <p>₱{cookie.price}</p>
                <p>{cookie.description}</p>
                <AddToCart/>
            </div>
            
            <Footer/>
        </div>
    );
    
}

