import { useState, useEffect } from "react"
import { Link, matchPath, useLocation } from "react-router-dom"
import { NavbarLinks } from "../../data/navbar-links"
import logo from "../../assets/Logo/EduHub_LOGO_1.png"
import { useSelector } from "react-redux"
import { AiOutlineShoppingCart } from "react-icons/ai"
import ProfileDropDown from '../core/Auth/ProfileDropDown'
import { ACCOUNT_TYPE } from "../../utils/constants"
import { apiConnector } from "../../services/apiConnector"
import { categories } from "../../services/api"
import { toast } from "react-hot-toast"


function Navbar() {
    const { token } = useSelector(state => state.auth)
    const { user } = useSelector(state => state.profile)
    const { totalItems } = useSelector(state => state.cart)

    const location = useLocation()

    const [catagoryList, setCatagoryList] = useState([])

    const matchRoute = (route) => {
        return matchPath({ path: route }, location.pathname)
    }

    const fetchCatagories = async() => {
        try {
            const response = await apiConnector("GET", categories.CATEGORIES_API)
            setCatagoryList(response.data.data)
        } 
        catch (error) {
            console.log("Couldn't fetch the Catagories Data from Server", error.message)
            toast.error("Couldn't fetch the Catagories Data from Server")
        }
    }

    useEffect(() => {
        fetchCatagories()
    },[])


    return (
        <div className="flex h-14 items-center justify-center border-b-[1px] border-b-richblack-700">
            <div className="flex w-11/12 max-w-maxContent items-center justify-between">

                <Link to="/">
                    <img src={logo} width={160} height={42} loading='lazy' />
                </Link>

                {/* Nav Links */}

                <nav>
                    <ul className='flex gap-x-6'>
                        {
                            NavbarLinks.map((navItems, index) => {
                                return <li key={index}>
                                    {
                                        navItems.title == "Catalog" ? (
                                            <div className="relative flex items-center gap-2 group">

                                                <p className="cursor-pointer">
                                                    {navItems.title}
                                                </p>

                                                <div className='invisible absolute left-[-70%] top-[180%] flex flex-col gap-4 rounded-md bg-richblack-5 p-4  opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100 lg:w-[300px]'>

                                                    {
                                                        catagoryList.length > 0 ? (
                                                            catagoryList.map((catagory, index) => (
                                                                <Link to={`${catagory.name}`} key={index}>
                                                                    <span className="cursor-pointer hover:text-pink-300">{catagory.name}</span>
                                                                </Link>
                                                            ))
                                                        ) : (<div> No Catagory Found !</div>)
                                                    }

                                                </div>


                                            </div>
                                        ) : (
                                            <Link to={navItems?.path}>
                                                <p className={`${matchRoute(navItems?.path) ? "border-b-2 border-yellow-800" : "border-0"}`}>
                                                    {navItems.title}
                                                </p>
                                            </Link>
                                        )
                                    }
                                </li>
                            })
                        }
                    </ul>
                </nav>

                {/* Login/SignUp/Dashboard */}
                <div className='flex gap-x-4 items-center'>

                    {
                        user && user?.accountType != ACCOUNT_TYPE.INSTRUCTOR && (
                            <Link to="/dashboard/cart" className='relative'>
                                <AiOutlineShoppingCart />
                                {
                                    totalItems > 0 && (
                                        <span>
                                            {totalItems}
                                        </span>
                                    )
                                }
                            </Link>
                        )
                    }
                    {
                        token === null && (
                            <Link to="/login">
                                <button className='bg-yellow-50 text-black py-[8px] px-[12px] rounded-[8px] hover:scale-95 duration-200 transition-all'>
                                    Log in
                                </button>
                            </Link>
                        )
                    }
                    {
                        token === null && (
                            <Link to="/signup">
                                <button className='bg-yellow-50 text-black py-[8px] px-[12px] rounded-[8px] hover:scale-95 duration-200 transition-all'>
                                    Sign Up
                                </button>
                            </Link>
                        )
                    }
                    {
                        token !== null && <ProfileDropDown />
                    }

                </div>

            </div>
        </div>
    )
}

export default Navbar