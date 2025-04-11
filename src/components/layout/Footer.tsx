import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Facebook, Twitter, Instagram, ArrowUp } from "lucide-react";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import Logo from "../../images/Logo.png";

gsap.registerPlugin(ScrollToPlugin);

export default function Footer() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    gsap.to(window, {
      duration: 1,
      scrollTo: { y: 0 },
      ease: "power2.out",
    });
  };
  const scrollToSection = (id: string) => {
    gsap.to(window, {
      duration: 1,
      scrollTo: { y: `#${id}`, offsetY: 80 },
      ease: "power2.inOut",
    });
  };
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <footer className="bg-[#fefbf4] border-t border-gray-200 pt-16 pb-16 px-6 md:px-12 relative text-sm">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
        <div className="flex-1">
          <h4 className="text-primary-700 font-semibold mb-4">Sitemap</h4>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-gray-700">
            <Link to="/" className="hover:text-primary-700 transition">
              Home
            </Link>

            {isHome ? (
              <button
                onClick={() => scrollToSection("products")}
                className="hover:text-primary-700 transition"
              >
                Products
              </button>
            ) : (
              <Link
                to="/#products"
                className="hover:text-primary-700 transition"
              >
                Products
              </Link>
            )}
          </div>
          <p className="text-xs text-gray-400 mt-6">
            © 2025 GreenCrate. All rights reserved.
          </p>
        </div>

        <div className="flex-1 flex flex-col items-center">
          <img src={Logo} alt="Logo" className="w-32 mb-4" />
          <div className="flex gap-5 mt-2 text-primary-700">
            <a href="#">
              <Facebook
                size={18}
                className="hover:text-primary-600 transition"
              />
            </a>
            <a href="#">
              <Twitter
                size={18}
                className="hover:text-primary-600 transition"
              />
            </a>
            <a href="#">
              <Instagram
                size={18}
                className="hover:text-primary-600 transition"
              />
            </a>
          </div>
        </div>

        <div className="flex-1">
          <h4 className="text-primary-700 font-semibold mb-4 leading-snug">
            All Natural Greens For A Healthier You.
          </h4>
          <form className="flex items-center gap-2 mt-4">
            <input
              type="email"
              placeholder="Enter email address"
              className="flex-1 px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-600 transition text-sm"
            />
            <button
              type="submit"
              className="px-5 py-2 bg-primary-700 text-white rounded-full text-sm hover:bg-primary-600 transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {showButton && (
        <button
          onClick={scrollToTop}
          className="fixed z-30 right-6 bottom-6 w-10 h-10 border border-primary-700 text-primary-700 rounded-full flex items-center justify-center hover:bg-primary-700 hover:text-white transition"
          aria-label="Scroll to top"
        >
          <ArrowUp size={18} />
        </button>
      )}
    </footer>
  );
}
