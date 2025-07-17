import { useState, useRef, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const categories = [
  "Accountants", "Admin", "Alterations", "Appliances", "Assembly", "Auto Electricians", "Bakers", "Barbers", "Beauticians", "Bicycle Service", "Bricklaying", "Building & Construction", "Business", "Car Body Work", "Car Detailing", "Car Repair", "Car Service", "Carpentry", "Cat Care", "Catering", "Chef", "Cladding", "Cleaning", "Computers & IT", "Concreting", "Decking", "Delivery", "Design", "Dog Care", "Draftsman", "Driving", "Electricians", "Entertainment", "Events", "Fencing", "Flooring", "Florist", "Furniture Assembly", "Gardening", "Gate Installation", "Hairdressers", "Handyman", "Heating & Cooling", "Home", "Automation And Security", "Home Theatre", "Interior Designer", "Landscaping", "Laundry", "Lawn Care", "Lessons", "Locksmith", "Makeup Artist", "Marketing", "Mobile Mechanic", "Painting", "Paving", "Pet Care", "Photographers", "Plasterer", "Plumbing", "Pool Maintenance", "Removals", "Roofing", "Sharpening", "Staffing", "Tailors", "Tattoo Artists", "Tiling", "Tradesman", "Tutoring", "Wall Hanging & Mounting", "Wallpapering", "Waterproofing", "Web", "Wheel & Tyre Service", "Writing"
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeNav, setActiveNav] = useState("Post a Task");
  const [activeAction, setActiveAction] = useState("");
  const [showCategories, setShowCategories] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Navigation items (center)
  const navItems = [
    { label: "Post a Task", href: "#post-task", isButton: true },
    { label: "Browse Tasks", href: "#browse-tasks", isDropdown: true },
    { label: "How it works", href: "#how-it-works" },
    { label: "Benefits", href: "#benefits" },
  ];

  // Action items (right)
  const actionItems = [
    { label: "Login", href: "#login", variant: "ghost" },
    { label: "Signup", href: "#signup", variant: "outline" },
    { label: "Become a Tasker", href: "#become-tasker", variant: "hero" },
  ];

  // Bar style
  const barClass = 'before:content-[" "] before:absolute before:-top-2 before:left-0 before:right-0 before:h-0.5 before:bg-gray-500 before:rounded-t';

  // Split categories into columns for desktop
  const getCategoryColumns = (cols = 4) => {
    const perCol = Math.ceil(categories.length / cols);
    return Array.from({ length: cols }, (_, i) => categories.slice(i * perCol, (i + 1) * perCol));
  };

  // Close dropdown on outside click
  useEffect(() => {
    if (!showCategories) return;
    function handleClick(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setShowCategories(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [showCategories]);

  // Close dropdown when another nav/action is clicked
  const handleNavClick = (item: any) => {
    setActiveNav(item.label);
    setActiveAction("");
    if (!item.isDropdown) setShowCategories(false);
    else setShowCategories((prev) => !prev);
  };
  const handleActionClick = (item: any) => {
    setActiveAction(item.label);
    setActiveNav("");
    setShowCategories(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-border z-50">
      <div className="container mx-auto px-6 relative">
        <div className="flex items-center justify-between h-16 relative">
          {/* Logo */}
          <div className="flex items-center gap-3 z-10">
            <img 
              src="/lovable-uploads/83b553c5-31a3-40ab-a031-6070c5e52e2b.png" 
              alt="Extrahand Logo" 
              className="w-8 h-8"
            />
            <span className="text-xl font-bold text-foreground">Extrahand</span>
          </div>

          {/* Centered Navigation */}
          <nav className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 items-center gap-2 lg:gap-4 xl:gap-6">
            {navItems.map((item) =>
              item.isButton ? (
                <Button
                  key={item.label}
                  asChild
                  className={`font-semibold px-5 py-2 text-base shadow-sm bg-yellow-400 hover:bg-yellow-500 text-black transition-colors duration-200 relative ${activeNav === item.label ? barClass : ''}`}
                  onClick={() => handleNavClick(item)}
                >
                  <a href={item.href}>{item.label}</a>
                </Button>
              ) : item.isDropdown ? (
                <div
                  key={item.label}
                  className={`relative flex flex-col items-center px-3 py-2 cursor-pointer ${activeNav === item.label ? barClass : ''}`}
                  ref={dropdownRef}
                >
                  <div className="flex items-center gap-1" onClick={() => handleNavClick(item)}>
                    <span className="text-text-light hover:text-foreground transition-colors duration-200 font-medium">{item.label}</span>
                    <ChevronDown className="w-4 h-4 text-gray-400" />
                  </div>
                  {/* Dropdown */}
                  {showCategories && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[700px] bg-white rounded-xl shadow-xl border border-gray-200 z-50 p-6 flex gap-8 max-h-80 overflow-x-auto overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100" style={{ minWidth: 600 }}>
                      {getCategoryColumns(4).map((col, i) => (
                        <ul key={i} className="space-y-2 min-w-[120px]">
                          {col.map((cat) => (
                            <li key={cat}>
                              <a href="#" className="block text-gray-700 hover:text-primary text-sm font-medium transition-colors duration-150 py-1 px-2 rounded">
                                {cat}
                              </a>
                            </li>
                          ))}
                        </ul>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <a
                  key={item.label}
                  href={item.href}
                  className={`text-text-light hover:text-foreground transition-colors duration-200 font-medium px-3 py-2 relative flex flex-col items-center ${activeNav === item.label ? barClass : ''}`}
                  onClick={() => handleNavClick(item)}
                >
                  {item.label}
                </a>
              )
            )}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-2 lg:gap-3 z-10">
            {actionItems.map((item) => (
              <Button
                key={item.label}
                asChild
                variant={item.variant as "ghost" | "outline" | "hero"}
                className={
                  `${item.label === "Become a Tasker"
                    ? "font-semibold px-5 py-2 text-base bg-yellow-400 hover:bg-yellow-500 text-black border-yellow-400 border shadow-sm transition-colors duration-200"
                    : "font-medium px-4 py-2 text-base"}
                  relative ${activeAction === item.label ? barClass : ''}`
                }
                onClick={() => handleActionClick(item)}
              >
                <a href={item.href}>{item.label}</a>
              </Button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-foreground hover:text-primary transition-colors duration-200 z-20"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-white border-b border-border shadow-lg z-50">
            <nav className="p-6 space-y-2">
              {navItems.map((item) =>
                item.isButton ? (
                  <Button
                    key={item.label}
                    asChild
                    className={`w-full font-semibold px-5 py-2 text-base shadow-sm bg-yellow-400 hover:bg-yellow-500 text-black mb-2 transition-colors duration-200 relative ${activeNav === item.label ? barClass : ''}`}
                    onClick={() => handleNavClick(item)}
                  >
                    <a href={item.href} onClick={() => setIsMenuOpen(false)}>{item.label}</a>
                  </Button>
                ) : item.isDropdown ? (
                  <div
                    key={item.label}
                    className={`relative flex flex-col items-center w-full mb-2 px-3 py-2 cursor-pointer ${activeNav === item.label ? barClass : ''}`}
                    ref={dropdownRef}
                  >
                    <div className="flex items-center gap-1 w-full justify-between" onClick={() => handleNavClick(item)}>
                      <span className="text-text-light hover:text-foreground transition-colors duration-200 font-medium">{item.label}</span>
                      <ChevronDown className="w-4 h-4 text-gray-400" />
                    </div>
                    {/* Dropdown */}
                    {showCategories && (
                      <div className="absolute left-0 right-0 top-full mt-2 bg-white rounded-xl shadow-xl border border-gray-200 z-50 p-4 max-h-72 overflow-y-auto grid grid-cols-2 gap-4 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
                        {getCategoryColumns(2).map((col, i) => (
                          <ul key={i} className="space-y-2 min-w-[120px]">
                            {col.map((cat) => (
                              <li key={cat}>
                                <a href="#" className="block text-gray-700 hover:text-primary text-sm font-medium transition-colors duration-150 py-1 px-2 rounded">
                                  {cat}
                                </a>
                              </li>
                            ))}
                          </ul>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <a
                    key={item.label}
                    href={item.href}
                    className={`block text-text-light hover:text-foreground transition-colors duration-200 font-medium py-2 relative flex flex-col items-center ${activeNav === item.label ? barClass : ''}`}
                    onClick={() => handleNavClick(item)}
                  >
                    {item.label}
                  </a>
                )
              )}
              <div className="pt-4 space-y-2">
                {actionItems.map((item) => (
                  <Button
                    key={item.label}
                    asChild
                    variant={item.variant as "ghost" | "outline" | "hero"}
                    className={
                      `${item.label === "Become a Tasker"
                        ? "w-full font-semibold px-5 py-2 text-base bg-yellow-400 hover:bg-yellow-500 text-black border-yellow-400 border shadow-sm transition-colors duration-200"
                        : "w-full font-medium px-4 py-2 text-base"}
                      relative ${activeAction === item.label ? barClass : ''}`
                    }
                    onClick={() => handleActionClick(item)}
                  >
                    <a href={item.href} onClick={() => setIsMenuOpen(false)}>{item.label}</a>
                  </Button>
                ))}
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;