import Link from 'next/link';

interface CookieProps {
    slug: string;
    name: string;
    description: string;
    price: number;
    image: string;

}

export function Cookie({ slug, name, description, price }: CookieProps){

    return (
        <div>
            <Link href={`/cookies/${slug}`}>
                <div><img src="https://picsum.photos/300" alt="Cookie"></img></div>
                <div>{ name }</div>
                <div>{ description }</div>
                <div>&#8369;{ price }</div>
            </Link>
        </div>
    );
}

