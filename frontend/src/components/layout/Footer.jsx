import { Link } from "react-router-dom";
import { Trophy } from "lucide-react";

function Footer() {
  return (
    <footer className="bg-[#1F2A1A] text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-14 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 sm:gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3">
              <Trophy
                className="text-[#84A83A]"
                size={28}
              />

              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                <span className="text-white">
                  Sports
                </span>

                <span className="text-[#84A83A]">
                  Tracker
                </span>
              </h2>
            </div>

            <p className="mt-5 text-sm sm:text-base leading-7 text-gray-400">
              A modern tournament management platform for colleges,
              clubs, and sports organizations.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-white text-lg">
              Quick Links
            </h3>

            <div className="mt-5 flex flex-col gap-3">
              <Link
                to="/"
                className="hover:text-white transition"
              >
                Home
              </Link>

              <Link
                to="/about"
                className="hover:text-white transition"
              >
                About
              </Link>

              <Link
                to="/login"
                className="hover:text-white transition"
              >
                Login
              </Link>

              <Link
                to="/register"
                className="hover:text-white transition"
              >
                Register
              </Link>
            </div>
          </div>

          {/* Developer */}
          <div>
            <h3 className="font-semibold text-white text-lg">
              Developer
            </h3>

            <p className="mt-5 text-gray-400 text-sm sm:text-base">
              Designed & Developed by
            </p>

            <p className="mt-1 text-lg font-semibold text-white">
              Ashik S
            </p>

            <a
              href="https://github.com/ashikshahu7781"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-block text-[#84A83A] hover:text-white transition break-all"
            >
              View GitHub →
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 sm:mt-12 border-t border-white/10 pt-6 sm:pt-8 flex flex-col md:flex-row items-center justify-between gap-3 text-center md:text-left text-sm text-gray-400">
          <p>
            © 2026 SportsTracker. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;