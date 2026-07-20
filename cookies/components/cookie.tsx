import Link from 'next/link';

interface CookieProps {
    slug: string;
    name: string;
    description: string;
    price: number;
    image: string;
    isEven: boolean;

}

export function Cookie({ slug, name, description, price, isEven }: CookieProps){

    return (
        <div className={`m-5 p-10 rounded-[5rem]  ${isEven ? "bg-gray-100" : "bg-white"}`}>
            
            <Link className={`flex ${isEven ? "flex-row" : "flex-row-reverse"}`} href={`/cookies/${slug}`}>
                <div><img src="https://picsum.photos/700" alt="Cookie"></img></div>
                <div className='mx-10'>
                    <div>{ name }</div>
                    <div>{ description }</div>
                    <div>&#8369;{ price }</div>
                </div>
                
            </Link>
        </div>
    );
}

