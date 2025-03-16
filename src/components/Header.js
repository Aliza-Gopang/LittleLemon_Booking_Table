import React from "react";
import food1 from "../images/food1.avif"
import { Link } from "react-router-dom";


const Header = () => {
    return(
        <header>
            <section>
            <div>
            <h2>Little Lemon</h2>
            <h3>Aleeza's kitchen</h3>
            <p>We are a family-run Mediterranean restaurant, bringing a modern flair to classic recipes.</p>
            <Link to="/Booking"><button aria-label="On Click">Reserve Table</button></Link>
            </div>
            <div>
                <img src={food1} />
            </div>
            </section>
        </header>
    )
}

export default Header;