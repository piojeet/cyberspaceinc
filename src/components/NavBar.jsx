import React, { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../assets/images/cst-logo-2-180x108.png";
import { FiSearch } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";
import AnimatedButton from "./ui/AnimatedButton";
import { TextAlignJustify, X } from "lucide-react";

export default function NavBar() {
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [headerHeight, setHeaderHeight] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const headerRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    if (headerRef.current) {
      setHeaderHeight(headerRef.current.offsetHeight);
    }
    const handleResize = () => {
      if (headerRef.current) {
        setHeaderHeight(headerRef.current.offsetHeight);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);


  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      if (currentScroll > lastScrollY && currentScroll > 80) {

        setShowHeader(false);
      } else {

        setShowHeader(true);
      }

      setLastScrollY(currentScroll);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);


  const toggleMenu = () => setMenuOpen(true);
  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    const handlesResize = () => {
      setIsMobile(window.innerWidth < 1023);
    };

    handlesResize();
    window.addEventListener("resize", handlesResize);
    return () => window.removeEventListener("resize", handlesResize);
  }, [])

  const handleMouseEnter = () => {
    if (!isMobile) setIsOpen(true)
  }

  const handleMouseLeave = () => {
    if (!isMobile) setIsOpen(false)
  }

  const handleClick = () => {
    if (isMobile) setIsOpen(!isOpen)
  }

  return (
    <header
      ref={headerRef}
      className={`fixed left-0 w-full z-50 transition-all duration-500 bg-white shadow-sm`}
      style={{
        top: showHeader ? "0px" : `-${headerHeight}px`,
      }}
    >
      <nav className="max-w-[1440px] mx-auto lg:px-8 px-4 flex justify-between items-center gap-4 h-20">

        <div>
          <NavLink to="/" onClick={closeMenu}>
            <img src={Logo} alt="logo" className="md:w-28 w-20 object-contain" />
          </NavLink>
        </div>

        <ul
          className={`flex items-center lg:flex-row flex-col gap-6 font-manrope text-sm fixed lg:static transition-all duration-500 lg:translate-x-0 bg-white lg:bg-transparent
          ${menuOpen ? "translate-x-0 left-0" : "-translate-x-full left-0"} 
          top-0 h-full lg:h-fit max-w-[300px] w-4/5 lg:w-auto lg:max-w-none pt-20 lg:pt-0 px-6 lg:px-0 shadow-lg lg:shadow-none`}
        >
          <li className="group relative w-full lg:w-auto space-y-2"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={handleClick}
          >
            <span className="inline-flex items-center justify-center lg:justify-start gap-2 w-full">
              <NavLink to="/" className="leading-none">
                Our Services
              </NavLink>
              <span className="relative">
                <span className={`size-[6px] bg-black rounded-full inline-block transition-transform duration-300 ${!isOpen ? 'scale-100' : 'scale-0'}`}></span>
                <span className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-xl transition-transform duration-300 ${isOpen ? 'scale-100' : 'scale-0'}`}>
                  <IoIosArrowDown />
                </span>
              </span>
            </span>
            <div className={`lg:absolute left-0 top-full lg:mt-2 bg-gray-100 transition-all duration-300 overflow-hidden ${isOpen ? "lg:opacity-100 lg:visible lg:translate-y-0 max-h-[500px]" : "lg:opacity-0 lg:invisible lg:translate-y-4 max-h-0"}`}>
              <div
                className={`lg:min-w-[600px] w-full lg:bg-white text-gray-700 rounded-lg shadow-lg overflow-hidden lg:grid grid-cols-3 lg:p-4`}
              >
                <ul className="py-2 lg:grid grid-cols-2 col-span-2 flex flex-col items-center justify-center">
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    Web Development
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    App Design
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    SEO Optimization
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    SEO Optimization
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    SEO Optimization
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    SEO Optimization
                  </li>
                </ul>

                <div className="col-span-1 lg:flex justify-end items-center hidden">
                  <img src="https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1752" alt="" className="w-[10vw]" />
                </div>
              </div>
            </div>
          </li>
          <li>
            <NavLink to="/clients-partners" onClick={closeMenu}>Clients & Partners</NavLink>
          </li>
          <li>
            <NavLink to="/careers" onClick={closeMenu}>Careers</NavLink>
          </li>
          <li>
            <NavLink to="/our-team" onClick={closeMenu}>Our Team</NavLink>
          </li>
          <li>
            <NavLink to="/" onClick={closeMenu}>About Us</NavLink>
          </li>

          <li className="lg:hidden">
            <AnimatedButton
              label="Contact"
              to="/contact"
              className="py-2 px-6 border border-black rounded-full font-manrope font-medium text-sm bg-black text-white w-full"
            />
          </li>

          <button
            onClick={closeMenu}
            className="lg:hidden absolute top-5 right-5 text-xl bg-transparent outline-none border-none"
          >
            <X />
          </button>
        </ul>


        <div className="flex items-center gap-6">
          <div className="lg:block hidden">
            <AnimatedButton
              label="Contact"
              to="/contact"
              className="py-2 px-6 rounded-full font-manrope font-medium text-sm bg-gradient-to-br from-cyan-400 to-blue-600 text-white"
            />
          </div>

          <button onClick={toggleMenu} className="lg:hidden text-xl bg-transparent outline-none border-none">
            <TextAlignJustify />
          </button>
        </div>
      </nav>
    </header>
  );
}
