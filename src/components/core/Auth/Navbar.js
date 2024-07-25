import { ToastContainer, toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import logo from '../assets/Logo.svg';

function Navbar(props) {
    const { isLoggedIn, setIsLoggedIn } = props; // destructuring props object
    // isLoggedIn shows whether user is logged in or not
    // setIsLoggedIn is used to set the value of isLoggedIn

    function logOutHandler() {
        { /* When I click on the Log out button, then isLoggedIn will be false */ }
        setIsLoggedIn(false); // set isLoggedIn to false
        toast.success("Logged out !", { position: toast.POSITION.TOP_CENTER, autoClose: 1000, theme: "colored" }); // show success toast
    }

    return (

        <div>
            <ToastContainer /> {/* Toast Container */}
            <div className='flex justify-between items-center w-11/12 max-w-[1160px] py-4 mx-auto'>


                {/* Link to Home Page */}
                <Link to="/">
                    <img src={logo} alt='Logo' loading='lazy' width={160} height={32} /> {/* Logo Image */}
                </Link>
                {/* When I click on the logo, I'll go the Home Page */}

                <nav> {/* navbar */}
                    <ul className='text-red-50 flex gap-x-6'> {/* unordered list */}
                        <li> {/* list item */}
                            <Link to="/" >Home</Link>
                            {/* When I click on the Home link, I'll go the Home Page */}
                        </li>
                        <li>
                            <Link to="/" >About</Link>
                            {/* When I click on the About link, I'll go the About Page */}
                        </li>
                        <li>
                            <Link to="/" >Contact</Link>
                            {/* When I click on the Contact link, I'll go the Contact Page */}
                        </li>
                    </ul>
                </nav>

                {/* Login - SignUp - LogOut - Dashboard */}
                <div className='flex items-center gap-x-4'>
                    {/* If user isn't logged in then only Show the "Log in" button. 
                If isLoggedIn = true, that's mean user is logged in, So don't show Log in button  */}
                    {!isLoggedIn &&
                        <Link to="/login" >
                            <button className='bg-fuchsia-900 text-red-50 py-[8px] px-[12px] rounded-[8px] border border-red-50'>
                                Log in
                            </button>
                        </Link>
                    }

                    {/* If user isn't logged in then only Show the "Sign up" button.*/}
                    {!isLoggedIn &&
                        <Link to="/signup" >
                            <button className='bg-fuchsia-900 text-red-50 py-[8px] px-[12px] rounded-[8px] border border-red-50'>
                                Sign up
                            </button>
                        </Link>
                    }

                    {/* If user is logged in then only Show the "Log out" button.*/}
                    {isLoggedIn &&
                        <Link to="/"> {/* When I click on the Log out button, I'll go the Home Page */}
                            <button className='bg-fuchsia-900 text-red-50 py-[8px] px-[12px] rounded-[8px] border border-red-50'
                                onClick={() => logOutHandler()}>
                                Log out
                            </button>
                        </Link>
                    }

                    {/* If user is logged in then only Show the "Dashboard" button.*/}
                    {isLoggedIn &&
                        <Link to="/dashboard" >
                            <button className='bg-fuchsia-900 text-red-50 py-[8px] px-[12px] rounded-[8px] border border-red-50'>
                                Dashboard
                            </button>
                        </Link>
                    }

                </div>

            </div>

        </div>
    );
}

export default Navbar;