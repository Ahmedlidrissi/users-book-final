import { Link } from "@inertiajs/react";
import Logo from '../../assets/logo.png';
import Userlogo from '../../assets/user_logo.png';
import { usePage } from "@inertiajs/react";
import './Layouts.css';
function NaveBar(){
    const { auth } = usePage().props;
    return(
        <nav className=' NavBar'>
                        <div className='Logo-Title'>
                            <Link href='/'><img className='logo' src={Logo} alt="Logo" /></Link>
                            <Link href='/'><h1 className='title'>User's Books</h1></Link>
                        </div>
                        <ul className='nav-links'>
                            <li className='li'><Link href='/'>Home</Link></li>
                            <li className='li'><Link href='/books'>Books</Link></li>
                            <li className='li'><Link href='/Gener'>Gener</Link></li>
                            <li className="li">
                                <div className='group'>
                                <svg className="icon" aria-hidden="true" viewBox="0 0 24 24"><g><path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path></g></svg>
                                <input placeholder="Search" type="search" className="input-search" />
                                </div>
                            </li>
                            <li className='li'>Contacts</li>
                            <li className='li'>About</li>
                            {auth.user ? (
                                <>
                                <li className="li">
                                    {auth.user.profilePicture ? (
                                        <Link href={`/dashboard/${auth.user.id}`}>
                                            <img className="profile-picture" src={auth.user.profilePicture} alt="Profile" />
                                        </Link>
                                    ) : (
                                        <Link href={`/dashboard/${auth.user.id}`}>
                                            <span className="default-profile">
                                                <img className="logo" src={Userlogo} alt="" />
                                            </span>
                                        </Link>
                                    )}
                                </li>
                                </>
                            ) : (
                                <>
                                    <li className='li'><Link href='/register'>Sign In</Link></li>
                                    <li className='li'>
                                        <Link href='/login'>Log In</Link>
                                    </li>
                                </>
                            )}
                        </ul>
               
        </nav>
    )
}

export default NaveBar;