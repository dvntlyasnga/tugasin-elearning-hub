import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const menuItems = [
  { name: "Home", path: "/" },
  { name: "Dashboard", path: "/dashboard" },
  { name: "Courses", path: "/courses" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-primary px-6 py-3 shadow-sm">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <NavLink to="/" className="flex items-center">
          <div className="bg-accent text-accent-foreground font-bold text-lg px-3 py-1 rounded cursor-pointer hover:opacity-90 transition-opacity">
            Ti
          </div>
        </NavLink>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-4">
          {menuItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end
              className={({ isActive }) =>
                `text-foreground font-medium uppercase text-sm tracking-wide transition-all duration-200 px-5 py-2 rounded-full ${
                  isActive
                    ? "bg-nav-activeBg font-bold"
                    : "hover:bg-nav-hover"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </div>

        {/* Profile Avatar */}
        <div className="hidden md:block">
          <Avatar className="h-9 w-9 border-2 border-foreground">
            <AvatarImage src="" alt="Profile" />
            <AvatarFallback className="bg-accent text-accent-foreground font-semibold text-sm">
              U
            </AvatarFallback>
          </Avatar>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden mt-4 pb-4 space-y-2">
          {menuItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end
              onClick={() => setIsMenuOpen(false)}
              className={({ isActive }) =>
                `block text-foreground font-medium uppercase text-sm tracking-wide transition-all duration-200 px-4 py-2 rounded-lg ${
                  isActive
                    ? "bg-nav-activeBg font-bold"
                    : "hover:bg-nav-hover"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
          <div className="flex items-center gap-3 px-4 py-2">
            <Avatar className="h-10 w-10 border-2 border-foreground">
              <AvatarImage src="" alt="Profile" />
              <AvatarFallback className="bg-accent text-accent-foreground font-semibold">
                U
              </AvatarFallback>
            </Avatar>
            <span className="text-foreground font-medium">Profile</span>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
