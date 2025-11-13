import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-background-light dark:bg-background-dark shadow-sm">
      <div className="border-b border-gray-200 dark:border-gray-700">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-between items-center py-2 text-xs text-gray-600 dark:text-gray-400">
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
              <div className="flex items-center">
                <span className="material-icons text-base text-primary mr-1">phone</span>
                <div>
                  <p>+91 94872 26644</p>
                  <p>+91 422 - 2226222</p>
                </div>
              </div>
              <div className="flex items-center">
                <span className="material-icons text-base text-primary mr-1">location_on</span>
                <p>Near Saravanampatty<br/>Coimbatore - 641107, Tamil Nadu</p>
              </div>
              <div className="flex items-center">
                <span className="material-icons text-base text-primary mr-1">local_hospital</span>
                <div>
                  <p>24x7 Ambulance</p>
                  <p>+91 9600554622</p>
                </div>
              </div>
            </div>
            <div className="mt-2 sm:mt-0">
              <p className="font-bold text-primary">CASHLESS INSURANCE FACILITY</p>
            </div>
          </div>
        </div>
      </div>
      <div className="border-b border-gray-200 dark:border-gray-700">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <img alt="Kumaran Medical Center Logo" className="h-12 mr-4" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAAu8Zn3Xas6oYMUqJ95Xy_2t54k12a74_I8lvHXRdONysNpq_9vAGbIMiWkhStbfkM6GnrQylwcGLxevutgliBtoKMKeeVI47mmOB4jG4AJtHpgUT8ie0rp8-vjhzijCXyPq7KagSVmyRRMtGbx7aqGKz_O4dHjGoI8ryWSPxa5h7IS1wf-ALx_lk5L0bPBgwuQzoDBc9VeH5srVfnyodWD8wbXpUev81pu3IANDAf3npIfL6I_jyCIeS9-LCO4zjHefUrWytP9ePy"/>
            </div>
            <nav className="hidden lg:flex items-center space-x-6 text-sm font-medium">
              <NavLink to="/" className="nav-link" activeClassName="active">HOME</NavLink>
              <NavLink to="/about-us" className="nav-link" activeClassName="active">ABOUT US</NavLink>
              <NavLink to="/department-details" className="nav-link" activeClassName="active">DEPARTMENTS</NavLink>
              <NavLink to="/doctors" className="nav-link" activeClassName="active">DOCTORS</NavLink>
              <NavLink to="/facilities" className="nav-link" activeClassName="active">FACILITIES</NavLink>
              <NavLink to="/room-types" className="nav-link" activeClassName="active">ROOM TYPES</NavLink>
            </nav>
            <div className="hidden lg:flex items-center space-x-2">
              <a className="bg-primary text-white text-sm font-bold py-2 px-4 rounded-sm hover:opacity-90 transition-opacity" href="#">BOOK APPOINTMENT</a>
              <a className="bg-gray-700 text-white text-sm font-bold py-2 px-4 rounded-sm hover:bg-gray-600 transition-colors" href="#">FEEDBACK</a>
            </div>
            <button className="lg:hidden p-2 rounded-md text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary">
              <span className="material-icons">menu</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
