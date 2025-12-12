import React from 'react';
import Link from 'next/link';
import { contactInfo, navLinks } from '../../data';

const Footer = () => {
  return (
    <footer className="bg-sand-900 text-sand-100">
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Brand & Description */}
          <div>
            <h3 className="text-2xl font-bold text-accent mb-4">Wingy</h3>
            <p className="text-sand-300 mb-4">
              Experience the authentic taste of Morocco in a warm and inviting atmosphere.
            </p>
            <div className="flex space-x-4">
              {contactInfo.socials.map((social) => (
                <a 
                  key={social.platform} 
                  href={social.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sand-300 hover:text-accent transition-colors"
                >
                  <span className="sr-only">{social.platform}</span>
                  {/* Simple placeholder circle for social icons */}
                  <div className="w-8 h-8 rounded-full bg-sand-800 flex items-center justify-center hover:bg-primary transition-colors">
                     {social.platform[0]}
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sand-300 hover:text-accent transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sand-300">
              <li className="flex items-start">
                <span className="mr-2">📍</span>
                <span>{contactInfo.address}</span>
              </li>
              <li className="flex items-center">
                <span className="mr-2">📞</span>
                <a href={`tel:${contactInfo.phone}`} className="hover:text-accent">{contactInfo.phone}</a>
              </li>
              <li className="flex items-center">
                <span className="mr-2">✉️</span>
                <a href={`mailto:${contactInfo.email}`} className="hover:text-accent">{contactInfo.email}</a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Opening Hours</h4>
            <ul className="space-y-2 text-sand-300">
              {contactInfo.hours.map((item, index) => (
                <li key={index} className="flex justify-between">
                  <span>{item.day}</span>
                  <span>{item.hours}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-sand-800 mt-12 pt-8 text-center text-sand-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Wingy Restaurant. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
