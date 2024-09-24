import Link from 'next/link';
import React from 'react';
import { IoCartOutline ,IoSearchOutline} from "react-icons/io5";

const Navbar = () => {
  // navItems should be a constant array, not a function
  const navItems = [
    {
      title: "Home",
      path: "/"
    },
    {
      title: "About",
      path: "/about"
    },
    {
      title: "Services",
      path: "/services"
    },
    {
      title: "Blog",
      path: "/blog"
    },
    {
      title: "Contacts",
      path: "/contacts"
    },
  ];

  return (
    <div className='bg-base-100 text-slate-900'>
      <div className="container mx-auto"> 
        <div className="navbar">
          <div className="navbar-start">
            <Link href={"/"}>
              <img src="/assets/logo.svg" alt="logo" height={60} width={100} />
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <div className='flex item-center space-x-6'>
              {
                // Map over the array directly
                navItems.map((item) => (
                  <Link className='font-semibold hover:text-primary' href={item.path} key={item.path}>{item.title}</Link>
                ))
              }
            </div>
          </div>
          <div className="navbar-end">
         <div className='flex space-x-3 items-center'>
         <IoSearchOutline className='text-xl' />
          <IoCartOutline className='text-xl' />
            <a className="btn btn-outline btn-primary px-8">Appointment</a>
            <Link href="/login" className="btn btn-primary px-8">Login</Link>
         </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
