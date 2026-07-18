import Link from "next/link";

export function Footer(){

    return(
        <footer>
            <hr></hr>
            <div className="footer_nav">
                <h3>Quick Links</h3>
                <div><Link href='/'>Home</Link></div>
                <div><Link href='/about'>About</Link></div>
                <div><Link href='/search'>Search</Link></div>
                <div><Link href='/cart'>Cart</Link></div>
            </div>
            <div className="contact">
                <h3>Contact Us</h3>
                <div className="socmed">
                    <a href="https://www.instagram.com/puppincookies/">
                        <div><img src="https://picsum.photos/40" alt="Instagram Icon"></img></div>
                        <div>Instagram</div>
                    </a>
                    
                </div>
            </div>
            <p>
                Disclaimer: This website is created as a personal project for 
                Phoebe Bangco. 
            </p>
            <p>&copy; Puppin'</p>
            <p>{new Date().getFullYear()}</p>
        </footer>

    );
}
