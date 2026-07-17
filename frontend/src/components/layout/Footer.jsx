import { Link } from "react-router-dom";
import { Trophy } from "lucide-react";

function Footer() {
  return (
    <footer className="bg-[#1F2A1A] text-gray-300">

      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid gap-12 md:grid-cols-3">

          {/* Brand */}

          <div>

            <div className="flex items-center gap-3">

              <Trophy
                className="text-[#84A83A]"
                size={28}
              />

              <h2 className="text-3xl font-extrabold tracking-tight">

                <span className="text-white">
                  Sports
                </span>

                <span className="text-[#84A83A]">
                  Tracker
                </span>

              </h2>

            </div>

            <p className="mt-5 leading-7 text-gray-400">
              A modern tournament management platform for colleges,
              clubs, and sports organizations.
            </p>

          </div>

          {/* Quick Links */}

          <div>

            <h3 className="font-semibold text-white">
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

            <h3 className="font-semibold text-white">
              Developer
            </h3>

            <p className="mt-5 text-gray-400">
              Designed & Developed by
            </p>

            <p className="mt-1 text-lg font-semibold text-white">
              Ashik S
            </p>

            <a
              href="https://github.com/ashikshahu7781"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-block text-[#84A83A] hover:text-white transition"
            >
              View GitHub →
            </a>

          </div>

        </div>

        {/* Bottom */}

        <div className="mt-12 border-t border-white/10 pt-8 flex flex-col items-center justify-between gap-3 text-sm text-gray-400 md:flex-row">

          <p>
            © 2026 SportsTracker. All rights reserved.
          </p>

        </div>

      </div>

    </footer>
  );
}

export default Footer;