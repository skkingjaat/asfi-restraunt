import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { Card } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Menu: [
      { label: "Appetizers", href: "/menu#appetizers" },
      { label: "Mains", href: "/menu#mains" },
      { label: "Combos", href: "/menu#combos" },
      { label: "Sides", href: "/menu#sides" },
    ],
    Company: [
      { label: "About Us", href: "#about" },
      { label: "Blog", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Press", href: "#" },
    ],
    Support: [
      { label: "Contact", href: "/contact" },
      { label: "FAQ", href: "#" },
      { label: "Feedback", href: "#" },
      { label: "Order Status", href: "#" },
    ],
    Legal: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
      { label: "Accessibility", href: "#" },
      { label: "Cookie Policy", href: "#" },
    ],
  };

  return (
    <footer className="bg-gray-900 text-gray-200 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand Section */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-3xl">🍗</span>
              <h3 className="font-bold text-2xl text-orange-500">Lick A Chick</h3>
            </div>
            <p className="text-gray-400 text-sm">
              Serving authentic fried chicken with love since 2020. Premium ingredients, perfect flavors, unforgettable experience.
            </p>
            <div className="flex gap-3 mt-4">
              <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-orange-500 transition" aria-label="Facebook">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 320 512">
                  <path d="M80 299.3V512H196V299.3h86.5l18-86H196V217c0-34.7 7.6-54 55.6-54h40.7V6.26C299.4 1.6 285.7 0 216 0c-77.59 0-129.3 47.9-129.3 136.7v63H70v86h47.3z"/>
                </svg>
              </Link>
              <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-orange-500 transition" aria-label="Twitter">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 512 512">
                  <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"/>
                </svg>
              </Link>
              <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-orange-500 transition" aria-label="Instagram">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 448 512">
                  <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.8 9-132.2 9s-102.7 2.6-132.2-9c-19.6-7.8-34.7-23-42.6-42.6-11.7-29.5-9-99.8-9-132.2s-2.6-102.7 9-132.2c7.8-19.6 23-34.7 42.6-42.6 29.5-11.7 99.8-9 132.2-9s102.7-2.6 132.2 9c19.6 7.8 34.7 23 42.6 42.6 11.7 29.5 9 99.8 9 132.2s2.7 102.7-9 132.2z"/>
                </svg>
              </Link>
            </div>
          </div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([category, links], idx) => (
            <div key={`footer-${category}-${idx}`}>
              <h4 className="font-semibold text-white mb-4">{category}</h4>
              <ul className="space-y-3">
                {links.map((link, linkIdx) => (
                  <li key={`link-${category}-${linkIdx}`}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-orange-500 transition text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          <div className="bg-gray-800 p-4 rounded-lg flex gap-3">
            <Phone className="w-5 h-5 text-orange-500 shrink-0 mt-1" />
            <div>
              <p className="text-sm text-gray-400">Call Us</p>
              <p className="text-white font-semibold">(555) 123-4567</p>
            </div>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg flex gap-3">
            <Mail className="w-5 h-5 text-orange-500 shrink-0 mt-1" />
            <div>
              <p className="text-sm text-gray-400">Email</p>
              <p className="text-white font-semibold">info@lickaChick.com</p>
            </div>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg flex gap-3">
            <Clock className="w-5 h-5 text-orange-500 shrink-0 mt-1" />
            <div>
              <p className="text-sm text-gray-400">Hours</p>
              <p className="text-white font-semibold">Mon-Sun: 11AM-11PM</p>
            </div>
          </div>
        </div>

        {/* Separator */}
        <Separator className="my-8 bg-gray-700" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © {currentYear} Lick A Chick Restaurant. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm">
            Designed with ❤️ for food lovers everywhere
          </p>
        </div>
      </div>
    </footer>
  );
}
