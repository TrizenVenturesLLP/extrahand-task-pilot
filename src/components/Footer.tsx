import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const footerSections = [
    {
      title: "Platform",
      links: [
        { label: "How it Works", href: "#" },
        { label: "Post a Task", href: "#" },
        { label: "Become a Tasker", href: "#" },
        { label: "Pricing", href: "#" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About Us", href: "#" },
        { label: "Careers", href: "#" },
        { label: "Press", href: "#" },
        { label: "Blog", href: "#" },
      ],
    },
    {
      title: "Support",
      links: [
        { label: "Help Center", href: "#" },
        { label: "Safety", href: "#" },
        { label: "Community Guidelines", href: "#" },
        { label: "Contact Us", href: "#" },
      ],
    },
    {
      title: "Legal",
      links: [
        { label: "Terms of Service", href: "#" },
        { label: "Privacy Policy", href: "#" },
        { label: "Cookie Policy", href: "#" },
        { label: "Disclaimer", href: "#" },
      ],
    },
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
  ];

  return (
    <footer className="bg-secondary text-white">
      {/* Main footer content */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-5 gap-8">
          {/* Brand section */}
          <div className="lg:col-span-1 space-y-4">
            <div className="flex items-center gap-3">
              <img 
                src="/lovable-uploads/83b553c5-31a3-40ab-a031-6070c5e52e2b.png" 
                alt="Extrahand Logo" 
                className="w-10 h-10"
              />
              <div>
                <span className="text-xl font-bold">Extrahand</span>
                <div className="text-sm text-white/70">Help when you need it</div>
              </div>
            </div>
            <p className="text-white/70 text-sm leading-relaxed">
              The most trusted platform for remote task delegation. 
              Get things done anywhere, anytime.
            </p>
            
            {/* Contact info */}
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2 text-white/70">
                <Mail className="w-4 h-4" />
                <span>hello@extrahand.com</span>
              </div>
              <div className="flex items-center gap-2 text-white/70">
                <Phone className="w-4 h-4" />
                <span>1-800-EXTRAHAND</span>
              </div>
              <div className="flex items-center gap-2 text-white/70">
                <MapPin className="w-4 h-4" />
                <span>Available nationwide</span>
              </div>
            </div>
          </div>

          {/* Links sections */}
          {footerSections.map((section, index) => (
            <div key={index} className="space-y-4">
              <h3 className="font-semibold text-lg">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      className="text-white/70 hover:text-primary transition-colors duration-300 text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter signup */}
        <div className="mt-12 pt-8 border-t border-white/20">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-xl font-bold mb-2">Stay Updated</h3>
              <p className="text-white/70 text-sm">
                Get the latest updates, tips, and exclusive offers delivered to your inbox.
              </p>
            </div>
            <div className="flex gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button className="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-dark transition-colors duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Social links and app downloads */}
        <div className="mt-8 pt-8 border-t border-white/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Social links */}
            <div className="flex items-center gap-4">
              <span className="text-white/70 text-sm">Follow us:</span>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors duration-300"
                  >
                    <social.icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>

            {/* App download buttons (placeholder) */}
            <div className="flex gap-3">
              <div className="bg-white/10 px-4 py-2 rounded-lg border border-white/20">
                <div className="text-xs text-white/70">Download on the</div>
                <div className="text-sm font-semibold">App Store</div>
              </div>
              <div className="bg-white/10 px-4 py-2 rounded-lg border border-white/20">
                <div className="text-xs text-white/70">Get it on</div>
                <div className="text-sm font-semibold">Google Play</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/20 py-6">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/70">
            <div>
              © 2024 Extrahand, Inc. All rights reserved.
            </div>
            <div className="flex gap-6">
              <a href="#" className="hover:text-primary transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-primary transition-colors duration-300">
                Terms of Service
              </a>
              <a href="#" className="hover:text-primary transition-colors duration-300">
                Accessibility
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;