"use client";

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

  // ✅ Get header height dynamically
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

  // ✅ Scroll hide/show logic
  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      if (currentScroll > lastScrollY && currentScroll > 80) {
        // Scrolling down → hide header
        setShowHeader(false);
      } else {
        // Scrolling up → show header
        setShowHeader(true);
      }

      setLastScrollY(currentScroll);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // ✅ Toggle mobile menu
  const toggleMenu = () => setMenuOpen(true);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      ref={headerRef}
      className={`fixed left-0 w-full z-50 transition-all duration-500 bg-white shadow-sm`}
      style={{
        top: showHeader ? "0px" : `-${headerHeight}px`,
      }}
    >
      <nav className="max-w-[1440px] mx-auto lg:px-8 px-4 flex justify-between items-center gap-4 h-20">
        {/* ✅ Logo */}
        <div>
          <NavLink to="/" onClick={closeMenu}>
            <img src={Logo} alt="logo" className="md:w-28 w-20 object-contain" />
          </NavLink>
        </div>

        {/* ✅ Nav Links */}
        <ul
          className={`flex items-center lg:flex-row flex-col gap-6 font-manrope text-sm fixed lg:static transition-all duration-500 lg:translate-x-0 bg-white lg:bg-transparent
          ${menuOpen ? "translate-x-0 left-0" : "-translate-x-full left-0"} 
          top-0 h-full lg:h-fit max-w-[300px] w-4/5 lg:w-auto lg:max-w-none pt-20 lg:pt-0 px-6 lg:px-0 shadow-lg lg:shadow-none`}
        >
          <li className="flex items-center gap-2 group">
            <NavLink to="/" className="leading-none" onClick={closeMenu}>
              Our Services
            </NavLink>
            <span className="relative">
              <span className="size-[6px] bg-black rounded-full inline-block group-hover:scale-0 transition-transform duration-300"></span>
              <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-xl scale-0 group-hover:scale-100 transition-transform duration-300">
                <IoIosArrowDown />
              </span>
            </span>
          </li>
          <li>
            <NavLink to="/" onClick={closeMenu}>Clients & Partners</NavLink>
          </li>
          <li>
            <NavLink to="/careers" onClick={closeMenu}>Careers</NavLink>
          </li>
          <li>
            <NavLink to="/" onClick={closeMenu}>Our Team</NavLink>
          </li>
          <li>
            <NavLink to="/" onClick={closeMenu}>About Us</NavLink>
          </li>

          {/* ✅ Mobile Contact Button */}
          <li className="lg:hidden">
            <AnimatedButton
              label="Contact"
              to="/contact"
              className="py-2 px-6 border border-black rounded-full font-manrope font-medium text-sm bg-black text-white w-full"
            />
          </li>

          {/* ✅ Close button (mobile only) */}
          <button
            onClick={closeMenu}
            className="lg:hidden absolute top-5 right-5 text-xl bg-transparent outline-none border-none"
          >
            <X />
          </button>
        </ul>

        {/* ✅ Right Section */}
        <div className="flex items-center gap-6">
          <NavLink className="text-2xl">
            <FiSearch />
          </NavLink>
          <div className="lg:block hidden">
            <AnimatedButton
              label="Contact"
              to="/contact"
              className="py-2 px-6 border border-black rounded-full font-manrope font-medium text-sm bg-black text-white"
            />
          </div>

          {/* ✅ Mobile Menu Toggle */}
          <button onClick={toggleMenu} className="lg:hidden text-xl bg-transparent outline-none border-none">
            <TextAlignJustify />
          </button>
        </div>
      </nav>
    </header>
  );
}
