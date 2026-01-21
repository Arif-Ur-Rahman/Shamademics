// components/layout/Footer.tsx
import React from 'react';
import Link from 'next/link';
import { Facebook, Twitter, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Shamademics</h3>
            <p className="text-gray-400">
              Connecting students with expert professors worldwide for academic success.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/consultants" className="text-gray-400 hover:text-white">Find Consultants</Link></li>
              <li><Link href="/become-consultant" className="text-gray-400 hover:text-white">Become a Consultant</Link></li>
              <li><Link href="/success-stories" className="text-gray-400 hover:text-white">Success Stories</Link></li>
              <li><Link href="/blog" className="text-gray-400 hover:text-white">Blog</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              <li><Link href="/help" className="text-gray-400 hover:text-white">Help Center</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-white">Contact Us</Link></li>
              <li><Link href="/privacy" className="text-gray-400 hover:text-white">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-gray-400 hover:text-white">Terms of Service</Link></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white"><Facebook size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-white"><Twitter size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-white"><Linkedin size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-white"><Mail size={20} /></a>
            </div>
            <p className="text-gray-400 mt-4">Subscribe to our newsletter</p>
            <div className="mt-2 flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="flex-1 px-4 py-2 rounded-l-lg text-gray-900"
              />
              <button className="px-4 py-2 bg-blue-600 rounded-r-lg">Join</button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Shamademics. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;