import { Link } from "@inertiajs/react";
import Logo from '../../assets/logo.png';
import Facebook from '../../assets/facebook.png';
import Ig from '../../assets/ig.png';
import X from '../../assets/x.png';
import './Layouts.css';

function Footer(){
    return(
        <footer>
                    <div className='footer-container'>
                        <div className="footer-sec1">
                            <Link href='/' ><img className='logo' src={Logo} alt="site logo" /></Link>
                            <Link href='/' >User's Books</Link>
                            <p>Where You can feed your Hungry minds with different books ,paired with the highest  qualities in the market </p>
                            <img className='socialLogos' src={Facebook} alt="" />
                            <img className='socialLogos' src={Ig} alt="" />
                            <img className='socialLogos' src={X} alt="" />
                        </div>
                        <div className="footer-sec2">
                            <h3>Site Navigations</h3>
                            <ul>
                                <li><Link href='/'>Home</Link></li>
                                <li><Link href='books'>Books</Link></li>
                                <li><Link href='Gener'>Gener</Link></li>
                                <li><Link href='Contacts'>Contacts</Link></li>
                                <li><Link href='About'>About</Link></li>
                            </ul>
                        </div>
                        <div className="footer-sec3">
                            <h3>Legal</h3>
                            <ul>
                                <li><Link href='privacy-policy'>Privacy policy</Link> </li>
                                <li><Link href='termsOFservice'>Terms of service</Link> </li>
                            </ul>
                        </div>
                    </div>
                    <div className='footer-copyright'>
                        <p>© 2025 User's Books. All rights reserved.</p>
                    </div>
                </footer>
    )
}

export default Footer;