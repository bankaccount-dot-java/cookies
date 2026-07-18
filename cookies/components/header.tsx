import Link from "next/link";

export function Header(){

    return(
        <header>
            <div>
                <Link href="/">
                    <img src="https://picsum.photos/100" alt="Puppin' Logo"></img>
                    <h1>Puppin'</h1>
                </Link>
            </div>
            
            <div className="nav">
                <div><Link href='/about'>About</Link></div>
                <div><Link href='/search'>Search</Link></div>
                <div><Link href='/cart'>Cart</Link></div>
            </div>
            <hr></hr>
        </header>

    );
}

