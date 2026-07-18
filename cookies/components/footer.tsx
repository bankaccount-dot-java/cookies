export function Footer(){

    return(
        <footer>
            <hr></hr>
            <div className="footer_nav">
                <h3>Quick Links</h3>
                <div><a href='about'>About</a></div>
                <div><a href='search'>Search</a></div>
                <div><a href='cart'>Cart</a></div>
            </div>
            <div className="contact">
                <h3>Contact Us</h3>
                <div className="socmed">
                    <div>[Icon]</div>
                    <div>Facebook</div>
                </div>
                <div className="socmed">
                    <div>[Icon]</div>
                    <div>Instagram</div>
                </div>
            </div>
            <p>Disclaimer: Only for fun</p>
            <p>&copy; Puppin'</p>
            <p>{new Date().getFullYear()}</p>
        </footer>

    );
}
