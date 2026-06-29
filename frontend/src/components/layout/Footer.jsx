import { logo } from "../../assets/images";

function Footer() {
  return (
    <footer className="bg-[#1F2A1A] text-gray-300 py-16">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-4 gap-10">

          <div>
            <img
              src={logo}
              alt="SportsTracker"
              className="h-14"
            />

            <p className="mt-5 text-gray-400">
              Organize.
              Compete.
              Celebrate.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold">
              Product
            </h3>

            <ul className="mt-4 space-y-3">
              <li>Home</li>
              <li>Tournaments</li>
              <li>Teams</li>
              <li>Fixtures</li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold">
              Resources
            </h3>

            <ul className="mt-4 space-y-3">
              <li>Documentation</li>
              <li>GitHub</li>
              <li>Support</li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold">
              Contact
            </h3>

            <ul className="mt-4 space-y-3">
              <li>contact@sportstracker.com</li>
              <li>Kerala, India</li>
            </ul>
          </div>

        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-sm">
          © 2026 SportsTracker. All Rights Reserved.
        </div>

      </div>
    </footer>
  );
}

export default Footer;