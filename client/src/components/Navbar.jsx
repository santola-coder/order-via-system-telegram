import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  ShoppingCart,
  Menu,
  X,
  Store,
  House,
  ShoppingBag,
  CircleQuestionMark,
} from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const cartCount = 2;

  const navStyle = ({ isActive }) =>
    isActive
      ? "text-indigo-600 font-semibold flex items-center gap-2"
      : "text-gray-600 hover:text-indigo-600 transition flex items-center gap-2";

  return (
    <nav className="fixed w-full backdrop-blur-md  z-50 border border-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <Store className="text-indigo-600" size={28} />
          <span className="text-2xl font-bold text-gray-800">
            Fake<span className="text-indigo-600">Store</span>
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <NavLink to="/" className={navStyle}>
            <House size={18} />
            Home
          </NavLink>

          <NavLink to="/shop" className={navStyle}>
            <ShoppingBag size={18} />
            Shop
          </NavLink>

          <NavLink to="/about" className={navStyle}>
            <CircleQuestionMark size={18} />
            About
          </NavLink>

          

          {/* Cart */}
          <button className="relative bg-indigo-500 text-white px-4 py-2 rounded-xl hover:bg-indigo-700 transition flex items-center gap-2">
            <ShoppingCart size={20} />
            <span>Cart</span>

            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-xs px-2 py-1 rounded-full">
                {cartCount}
              </span>
            )}
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md px-6 py-4 space-y-4">
          <NavLink to="/" className="flex items-center gap-2 text-gray-600">
            <House size={18} />
            Home
          </NavLink>

          <NavLink to="/shop" className="flex items-center gap-2 text-gray-600">
            <ShoppingBag size={18} />
            Shop
          </NavLink>

          <NavLink
            to="/about"
            className="flex items-center gap-2 text-gray-600"
          >
            <CircleQuestionMark size={18} />
            About
          </NavLink>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
