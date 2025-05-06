import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import footerLogo from "../assets/farhat-altaf-2X1CbJ8kVL0-unsplash.jpg"

const Footer = () => {
  return (
    <footer className="bg-base-300 text-white pt-10 pb-5">
      <div className="w-11/12 ml-20 mx-auto px-4 grid md:grid-cols-3 gap-8 ">
        <div>
          <div className="flex items-center justify-center md:justify-start gap-2 mb-3">
            <img
              src={footerLogo}
              alt="Logo"
              className="w-8 h-8 rounded-4xl object-cover"
            />
            <h1 className="text-xl font-bold text-green-500">AppStore</h1>
          </div>
          <p className="text-black font-medium text-sm">
            Discover, install, and review your favorite apps in one place.
          </p>
        </div>
        <div>
          <h2 className="text-lg font-semibold text-green-500 mb-3">Quick Links</h2>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>
              <a href="/terms" className="text-black font-semibold">
                Terms of Service
              </a>
            </li>
            <li>
              <a href="/privacy" className="text-black font-semibold">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="/developer" className="text-black font-semibold">
                Developer Resources
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-lg font-semibold text-green-500 mb-3">Follow Us</h2>
          <div className="flex gap-4 text-xl text-blue-400">
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <FaFacebook className="hover:text-white transition" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer">
              <FaTwitter className="hover:text-white transition" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              <FaInstagram className="hover:text-white transition" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
              <FaLinkedin className="hover:text-white transition" />
            </a>
          </div>
        </div>
      </div>
      <div className="text-center text-sm text-gray-500 mt-10 border-t border-gray-700 pt-4">
        © 2025 AppStore. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
