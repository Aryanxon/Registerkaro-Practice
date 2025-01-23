import { motion } from "framer-motion";
import React from 'react'
import '../../src/App.css'

import { MdEmail, MdLocationOn, MdPhone } from "react-icons/md";
// import footerImg from '../images/Learn_RKB_Logo_wHITE.png';
export default function Footer() {
 

  const usefulLinks = [
    { text: "Home", href: "/home" },
    { text: "Blog", href: "https://www.iamrakeshbansal.com/blogs" },
    { text: "Services", href: "https://www.iamrakeshbansal.com/" },
    { text: "About Us", href: "https://www.iamrakeshbansal.com/about-us" },
    { text: "Contact Us", href: "https://www.iamrakeshbansal.com/contact-us" },
  ];

  const quickLinks = [
    { text: "Features" },
    {
      text: "Solutions"    },
    { text: "Integrations" },
    { text: "Enterprise" },
    { text: "Solutions"},
  ];

  const contactInfo = [
    {
      Icon: MdPhone,
      text: "Partners",
      href: "tel:+919560884223",
    },
    {
      Icon: MdPhone,
      text: "community",
      href: "tel:+918851475191",
    },
    {
      Icon: MdEmail,
      text: "Developers",
      href: "mailto:wecare@iamrakeshbansal.com",
    },
    { Icon: MdLocationOn, text: "App", href: "#" },
    { Icon: MdLocationOn, text: "Blog", href: "#" },
  ];

  return (
    <footer className="relative bg-blue-900 text-white overflow-hidden">
      <svg
        className="absolute top-0 w-full h-12 sm:h-24 -mt-1 -rotate-180"
        preserveAspectRatio="none"
        viewBox="0 0 1440 120"
        fill="#f0f2f5"
      >
        <path d="M0 0L60 10C120 20 240 40 360 46.7C480 53 600 47 720 36.7C840 27 960 13 1080 16.3C1200 20 1320 40 1380 50L1440 60V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z" />
      </svg>
      <div className="container-fluid mx-auto px-5 pt-20 sm:pt-32 pb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[25%,30%,20%,15%] gap-8 sm:gap-12">
        
          <div className="grid grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center sm:text-left"
            >
              <h3 className="text-xl font-semibold mb-3">Navigation</h3>
              <ul className="space-y-1">
                {usefulLinks.map((link, index) => (
                  <motion.li
                    key={index}
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <a
                      key={link.href}
                      href={link.href}
                      rel="noreferrer"
                      target={link.text === 'Home' ? '_self' : '_blank'}// Security best practice for _blank
                      className="hover:text-purple-400 transition-colors text-sm"
                    >
                      {link.text}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center sm:text-left"
            >
              <h3 className="text-xl font-semibold mb-3">Start a business</h3>
              <ul className="space-y-2">
                {quickLinks.map((link, index) => (
                  <motion.li
                    key={index}
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >

                    <a
                      rel="noreferrer"
                      target="_blank"// Security best practice for _blank
                      className="hover:text-purple-400 transition-colors text-sm"
                    >
                      {link.text}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-center sm:text-left"
          >
            <h3 className="text-xl text-yellow-600 font-semibold mb-6">Government Registerations</h3>
            <ul className="space-y-4">
              {contactInfo.map(({ Icon, text, href }, index) => (
                <motion.li
                  key={index}
                  className="flex items-center  sm:justify-start space-x-3"
                  whileHover={{ scale: 1.05 }}
                >
                  <a
                    className="hover:text-purple-400 transition-colors text-sm"
                  >
                    {text}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-center sm:text-left"
          >
            <h3 className="text-xl text-yellow-600 font-semibold mb-6">Compliance & Tax</h3>
            <ul className="space-y-4">
                <motion.li
                  className="flex items-center  sm:justify-start space-x-3"
                  whileHover={{ scale: 1.05 }}
                >
                  <div
                    className="hover:text-purple-400 transition-colors text-sm"
                  >
                    Channels
                  </div>
                </motion.li>
                <motion.li
                  className="flex items-center  sm:justify-start space-x-3"
                  whileHover={{ scale: 1.05 }}
                >
                  <div
                    className="hover:text-purple-400 transition-colors text-sm"
                  >
                    Scales
                  </div>
                </motion.li>
                <motion.li
                  className="flex items-center  sm:justify-start space-x-3"
                  whileHover={{ scale: 1.05 }}
                >
                  <div
                    className="hover:text-purple-400 transition-colors text-sm"
                  >
                    Watch the demo
                  </div>
                </motion.li>
                <motion.li
                  className="flex items-center  sm:justify-start space-x-3"
                  whileHover={{ scale: 1.05 }}
                >
                  <div
                    className="hover:text-purple-400 transition-colors text-sm"
                  >
                    Our Competition
                  </div>
                </motion.li>
            </ul>
          </motion.div>
         
        </div>
        <motion.div
          className="mt-12 pt-8 border-t border-white/20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <div className="flex flex-col sm:flex-row justify-center items-center">
            <p style={{color:'white'}} className="text-sm mb-4 sm:mb-0 text-center sm:text-left">
              &copy; 2024 RagisterKaro All rights reserved.
            </p>
            
          </div>
        </motion.div>
      </div>
    </footer>
  );
}