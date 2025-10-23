"use client";

import React, { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../assets/images/cst-logo-2-180x108.png";
import { FiSearch } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";
import AnimatedButton from "./ui/AnimatedButton";

export default function NavBar() {
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [headerHeight, setHeaderHeight] = useState(0);
  const headerRef = useRef(null);

  // Get header height dynamically
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

  // Scroll behavior logic
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

  return (
    <header
      ref={headerRef}
      className={`fixed left-0 w-full z-50 transition-all duration-500 bg-white shadow-sm`}
      style={{
        top: showHeader ? "0px" : `-${headerHeight}px`,
      }}
    >
      <nav className="max-w-[1440px] mx-auto lg:px-8 px-4 flex justify-between items-center gap-4 h-20">
        {/* Logo */}
        <div>
          <NavLink to="/">
            <img src={Logo} alt="logo" className="w-28 object-contain" />
          </NavLink>
        </div>

        {/* Nav Links */}
        <ul className="flex items-center gap-6 font-manrope text-sm">
          <li className="flex items-center gap-2 group">
            <NavLink to="/" className="leading-none">
              Our Services
            </NavLink>
            <span className="relative">
              <span className="size-[6px] bg-black rounded-full inline-block group-hover:scale-0 transition-transform duration-300"></span>
              <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-xl scale-0 group-hover:scale-100 transition-transform duration-300">
                <IoIosArrowDown />
              </span>
            </span>
          </li>
          <li><NavLink to="/">Clients & Partners</NavLink></li>
          <li><NavLink to="/">Careers</NavLink></li>
          <li><NavLink to="/">Our Team</NavLink></li>
          <li><NavLink to="/">About Us</NavLink></li>
        </ul>

        {/* Right Section */}
        <div className="flex items-center gap-6">
          <NavLink className="text-2xl">
            <FiSearch />
          </NavLink>
          <AnimatedButton
            label="Contact"
            to="/contact"
            className="py-2 px-6 border border-black rounded-full font-manrope font-medium text-sm bg-black text-white"
          />
        </div>
      </nav>
    </header>
  );
}
