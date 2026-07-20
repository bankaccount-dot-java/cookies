import Link from "next/link";

export function Header(){

    return(
        <header className="flex justify-between">
            <div>
                <Link className="flex" href="/">
                    <img src="https://picsum.photos/100" className="p-1" alt="Puppin' Logo"></img>
                    <h1 className="p-1">Puppin'</h1>
                </Link>
            </div>
            
            <div className="flex">
                <div className="m-1 underline"><Link href='/about'>About</Link></div>
                <div className="m-1 underline"><Link href='/search'>Search</Link></div>
                <div className="m-1 underline"><Link href='/cart'>Cart</Link></div>
            </div>
        </header>

    );
}

