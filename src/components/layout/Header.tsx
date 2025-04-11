import { ShoppingBag } from "lucide-react";
import { useStore } from "../../store/useStore";
import Logo from "../../images/Logo.png";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { Link, useLocation } from "react-router-dom";

gsap.registerPlugin(ScrollToPlugin);

const Header = () => {
  const cart = useStore((state) => state.cart);
  const cartTotal = cart.reduce((sum, item) => sum + item.quantity, 0);

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
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto py-3">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <img
              src={Logo}
              alt="Brand Logo"
              width={140}
              className="object-contain"
            />
          </Link>

          <div className="hidden md:flex items-center gap-6 text-gray-600 font-medium">
            {isHome ? (
              <>
                <button
                  onClick={() => scrollToSection("products")}
                  className="hover:text-[#468448]"
                >
                  Products
                </button>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="hover:text-[#468448]"
                >
                  Contact
                </button>
              </>
            ) : (
              <>
                <Link to="/#products" className="hover:text-[#468448]">
                  Products
                </Link>
                <Link to="/#contact" className="hover:text-[#468448]">
                  Contact
                </Link>
              </>
            )}
          </div>

          {/* Cart */}
          <div className="relative">
            <Link
              to="/cart"
              className="flex items-center gap-2 text-gray-600 hover:text-[#468448]"
            >
              <ShoppingBag className="w-6 h-6" />
              {cartTotal > 0 && (
                <span className="absolute -top-2 -right-2 bg-[#A3D977] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartTotal}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
