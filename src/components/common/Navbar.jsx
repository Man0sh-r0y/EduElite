//import { useState, useEffect } from "react"
import { Link, matchPath, useLocation } from "react-router-dom"
import { NavbarLinks } from "../../data/navbar-links"
import { useSelector } from "react-redux"

const subLinks = [
    {
        title: "Python",
        link: "/catalog/python"
    },
    {
        title: "Java",
        link: "/catalog/java"
    }
]

function Navbar() {
    // const { token } = useSelector(state => state.auth)

    // const location = useLocation()

    // const matchRoute = (route) => {
    //     return matchPath(location.pathname, {
    //         path: route
    //     })
    // }


    return (
        <div className="flex h-14 bg-richblack-200">
            <div className="flex w-11/12 max-w-maxContent items-center justify-between bg-caribbeangreen-50">

                <Link to={"/"} className="bg-pink-300">
                    LOGO
                </Link>

                {/* Nav Links */}

                <nav>
                    <ul className='flex gap-x-6 bg-brown-200'>
                        {
                            NavbarLinks.map((navItems, index) => {
                                return <li key={index}>
                                    {
                                        // navItems.title == "Catalog" ? (
                                        //     <div>
                                        //         <p>{navItems.title}</p>
                                        //     </div>    
                                        // ): (
                                            <Link to={navItems?.path}>
                                                <p>{navItems.title}</p>
                                            </Link>
                                        //)
                                    }
                                </li>
                            })
                        }
                    </ul>
                </nav>

            </div>
        </div>
    )
}

export default Navbar