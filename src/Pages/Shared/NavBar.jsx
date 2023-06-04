/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';
import { FaShoppingCart } from "react-icons/fa";
const NavBar = () => {
    const {user, logout} = useContext(AuthContext)
    const handleLogout = ()=>{
        logout()
        .then(()=>{})
        .catch(error => console.log(error))
    }
    const navOption = 
    <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='contact'>Contact Us</Link></li>
        <li><Link to='dashboard'>Dashboard</Link></li>
        <li><Link to='Menu'>Our Menu</Link></li>
        <li><Link to='/order/salad'>Our Shop</Link></li>
        <li>
            <Link to='/'>
                <button className='btn gap-2'>
                    <FaShoppingCart/>
                    <div className='badge badge-secondary'>+0</div>
                </button>
            </Link>
        </li>
        {
            user ? <><button onClick={handleLogout} className='btn btn-ghost'>Logout</button></> : <> <li><Link to='login'>Login</Link></li></>
        }
    </>
    return (
        <div>
            <div className="navbar fixed bg-opacity-30 z-10 bg-black text-white max-w-screen-xl">
                <div className="navbar-start">
                    <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact text-black dropdown-content mt-3 p-2 shadow bg-indigo-100 bg-opacity-90 rounded-box w-52">
                       {navOption}
                    </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl">Bisstro Boss</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                   {navOption}
                    </ul>
                </div>
                <div className="navbar-end">
                {user && (
                    <div className="profile mb-1 mr-5">
                      <img className="w-12 h-12 rounded-full" src={user.photoURL} />
                    </div>
                  )}
                    <a className="btn">Get started</a>
                </div>
            </div>
        </div>
    );
};

export default NavBar;