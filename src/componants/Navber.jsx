import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";


const Navber = () => {
    const { user, logOut } = useContext(AuthContext);
    const handlelogOut = () => {
        logOut()
            .then(() => {
                console.log('user logOut succesfully');

            })
            .catch(error => {
                console.error(error)
            })
    }
    const navlinks = <>
        <li><NavLink to="/">Home</NavLink></li>


        {user && <>

            <li><NavLink to="/blog">Blog</NavLink></li>
            <li><NavLink to="profile">Update Profile</NavLink></li>

        </>

        }

    </>
    return (
        <div className="navbar bg-base-100 ">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">

                        {
                            navlinks
                        }
                    </ul>
                </div>
                <a className="btn btn-ghost lg:text-3xl text-[18px] font-bold">DreamHomeHub</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">

                    {
                        navlinks
                    }
                </ul>
            </div>
            <div className="navbar-end">
                <div>
                    {
                        user ?

                            <div className=" dropdown dropdown-end">
                                <label tabIndex={0} className="'btn btn-ghost btn-circle avatar tooltip tooltip-bottom" data-tip={user.displayName || 'not found'}>
                                    <div className="w-10 rounded-full" data-tip='hello'>
                                        <img src={user.photoURL || "https://i.ibb.co/jVcFCQf/businessman-icon-600nw-564112600.webp"} alt="" />

                                    </div>
                                </label>
                                <ul tabIndex={0} className="menu  menu-sm dropdown-content mt-8  z-[1] p-2  bg-base-100 rounded-box ">
                                    <li>
                                        <button className="btn btn-sm btn-ghost">{user?.displayName || 'user name not found'}</button>
                                    </li>

                                </ul>
                            </div>
                            :
                            ""



                    }
                </div>
                <div>
                    {
                        user ?
                            <>

                                <a onClick={handlelogOut} className="btn"> sign out</a>
                            </>
                            :
                            <Link to="/login">
                                <div className="navbar-end">

                                    <button className="btn ">login </button>
                                </div>
                            </Link>
                    }
                </div>

            </div>
        </div>
    );
};

export default Navber;