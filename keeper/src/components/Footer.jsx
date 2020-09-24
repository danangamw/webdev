import React from 'react';

let today = new Date();
let n = today.getFullYear();

const Footer = () => {
    return(
        <footer>
            <p>
                Copyright {n}
            </p>
        </footer>
    )
}

export default Footer;