import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../assets/images/cst-logo-2-180x108.png";
import { FaLinkedin } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { RiFacebookBoxFill } from "react-icons/ri";
import { ChevronRight, Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
    const socialLinks = [
        { icon: <FaLinkedin />, label: "LinkedIn" },
        { icon: <AiFillInstagram />, label: "Instagram" },
        { icon: <RiFacebookBoxFill />, label: "Facebook" },
    ];

    const services = [
        "Data Engineering",
        "Analytics",
        "Cloud Services",
        "App Services",
        "IT Services",
        "Salesforce & AppExchange",
    ];

    const company = [
        "About Us",
        "Our Team",
        "Careers",
        "Clients & Partners",
        "Our Locations",
        "Contact Us",
    ];

    const contacts = [
        {
            icon: <MapPin className="w-4 h-4 text-cyan-400 flex-shrink-0" />,
            title: "Headquarters",
            text: (
                <>
                    3515 ST 27 South, STE 234 <br />
                    Edison, NJ 08837 <br />
                    United States
                </>
            ),
        },
        {
            icon: <Phone className="w-4 h-4 text-cyan-400 flex-shrink-0" />,
            title: "Phone",
            text: <a href="tel:+17326256009">+1 732-625-6009</a>,
        },
        {
            icon: <Mail className="w-4 h-4 text-cyan-400 flex-shrink-0" />,
            title: "Email",
            text: (
                <a href="mailto:info@cyberspace.com">info@cyberspace.com</a>
            ),
        },
    ];

    const locations = [
        {
            country: "United States",
            address: (
                <>
                    3515 ST 27 South, STE 234 <br />
                    Edison, NJ 08837 <br /> +1 732-625-6009
                </>
            ),
        },
        {
            country: "India",
            address: (
                <>
                    NIBM EROS City <br />
                    Pune, Maharashtra 411048 <br /> +91 9765279615
                </>
            ),
        },
        {
            country: "United Kingdom",
            address: (
                <>
                    FL 25 Stanley Street <br />
                    London, WC2A 4AH <br /> +44 7779865902
                </>
            ),
        },
        {
            country: "Canada",
            address: (
                <>
                    3279 Bixby Avenue <br />
                    Weston, Ontario M9W 1X2 <br /> +1 (519) 864-7019
                </>
            ),
        },
    ];

    return (
        <footer className="bg-black text-white mt-10">
            {/* Main Section */}
            <div className="max-w-[1400px] mx-auto px-8 py-20 grid gap-12 lg:grid-cols-12">
                {/* Logo + Info */}
                <div className="lg:col-span-4">
                    <img src={Logo} alt="CST Logo" className="h-20 object-contain mb-6" />
                    <p className="text-sm text-white/60 mb-8 leading-relaxed">
                        Leading provider of innovative technology solutions in data
                        engineering, cloud services, and digital transformation across the
                        globe.
                    </p>

                    <div className="flex gap-2">
                        {socialLinks.map(({ icon, label }, i) => (
                            <NavLink
                                key={i}
                                to="#"
                                className="w-11 h-11 rounded-lg bg-white/5 flex items-center justify-center hover:bg-gradient-to-br hover:from-blue-500 hover:to-cyan-400 transition-all duration-300 group"
                                aria-label={label}
                            >
                                <span className="w-5 h-5 text-white/60 group-hover:text-white">
                                    {icon}
                                </span>
                            </NavLink>
                        ))}
                    </div>
                </div>

                {/* Link Sections */}
                <div className="lg:col-span-8 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
                    {/* Services */}
                    <FooterList title="Services" items={services} />
                    {/* Company */}
                    <FooterList title="Company" items={company} />
                    {/* Contact */}
                    <div>
                        <h3 className="text-sm mb-6 uppercase tracking-wider font-medium">
                            Get In Touch
                        </h3>
                        <div className="space-y-4">
                            {contacts.map(({ icon, title, text }, i) => (
                                <div key={i} className="flex gap-2">
                                    {icon}
                                    <div>
                                        <p className="text-xs text-white/40 mb-0.5">{title}</p>
                                        <p className="text-sm text-white/70 leading-relaxed font-manrope hover:text-white transition-colors">
                                            {text}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Global Presence */}
            <div className="border-t border-white/5">
                <div className="max-w-[1400px] mx-auto px-8 py-12 pt-0">
                    <h3 className="text-sm mb-8 uppercase tracking-wider text-white/90">
                        Global Presence
                    </h3>
                    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                        {locations.map(({ country, address }, i) => (
                            <div key={i}>
                                <div className="flex items-center gap-2 mb-3">
                                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500/20 to-cyan-400/20 flex items-center justify-center">
                                        <MapPin className="w-4 h-4 text-cyan-400" />
                                    </div>
                                    <h4 className="text-sm font-medium">{country}</h4>
                                </div>
                                <p className="text-xs text-white/50 leading-relaxed pl-10">
                                    {address}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-white/5">
                <div className="max-w-[1400px] mx-auto px-8 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-xs text-white/50">
                        © 2025 Cyber Space Technologies. All Rights Reserved.
                    </p>
                    <div className="flex items-center gap-3 text-xs text-white/50 font-manrope">
                        <NavLink to="#" className="hover:text-white transition-colors">Privacy Policy</NavLink>
                        <span>•</span>
                        <NavLink to="#" className="hover:text-white transition-colors">Terms of Service</NavLink>
                        <span>•</span>
                        <NavLink to="#" className="hover:text-white transition-colors">Cookie Policy</NavLink>
                    </div>
                </div>
            </div>
        </footer>
    );
}

/* ========== Reusable Footer List ========== */
function FooterList({ title, items }) {
    return (
        <div>
            <h3 className="text-sm mb-6 uppercase tracking-wider font-medium">
                {title}
            </h3>
            <ul className="space-y-3">
                {items.map((item) => (
                    <li key={item}>
                        <NavLink
                            to="#"
                            className="text-sm text-white/60 hover:text-white transition-colors flex items-center gap-1 group"
                        >
                            <ChevronRight className="w-3 h-3 opacity-0 -ml-4 group-hover:ml-0 group-hover:opacity-100 transition-all" />
                            {item}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </div>
    );
}
