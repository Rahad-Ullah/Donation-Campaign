import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/Logo.png"

const Header = () => {
    const links = <>
        <li><NavLink to={"/"} className={"focus:font-semibold focus:underline focus:text-red"}>Home</NavLink></li>
        <li><NavLink to={"/donation"} className={"focus:font-semibold focus:underline focus:text-red"}>Donation</NavLink></li>
        <li><NavLink to={"/statistics"} className={"focus:font-semibold focus:underline focus:text-red"}>Statistics</NavLink></li>
    </>
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {links}
                        </ul>
                    </div>
                    <div className="">
                        <Link to={'/'}><img src={logo} alt="logo" className="w-4/5" /></Link>
                    </div>
                </div>
                <div className="navbar-end hidden lg:flex py-8">
                    <ul className="flex px-1 gap-12 text-lg font-medium">
                        {links}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;