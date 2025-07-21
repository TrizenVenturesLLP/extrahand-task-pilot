import { Facebook, Instagram } from "lucide-react";

const footerColumns = [
  {
    title: "Discover",
    links: [
      { label: "How it works", href: "#" },
      { label: "Earn money", href: "#" },
      { label: "Cost Guides", href: "#" },
      { label: "Service Guides", href: "#" },
      { label: "New Users FAQ", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Media Enquiries", href: "#" },
      { label: "Community Guidelines", href: "#" },
      { label: "Tasker Principles", href: "#" },
      { label: "Terms & Conditions", href: "#" },
      { label: "Privacy Policy", href: "#" },
      { label: "Contact Us", href: "#" },
    ],
  },
  {
    title: "Members",
    links: [
      { label: "Post a Task", href: "#" },
      { label: "Browse Tasks", href: "#" },
      { label: "Login", href: "#" },
      { label: "Support Centre", href: "#" },
      { label: "Become a Tasker", href: "#" },
    ],
  },
  {
    title: "Popular Categories",
    links: [
      { label: "Electricians", href: "#" },
      { label: "Plumbers", href: "#" },
      { label: "Home Cleaning", href: "#" },
      { label: "Packers & Movers", href: "#" },
      { label: "Carpenters", href: "#" },
      { label: "AC Services", href: "#" },
      { label: "Appliance Repair", href: "#" },
    ],
  },
  {
    title: "Popular Cities",
    links: [
      { label: "Delhi NCR", href: "#" },
      { label: "Mumbai", href: "#" },
      { label: "Bangalore", href: "#" },
      { label: "Hyderabad", href: "#" },
      { label: "Chennai", href: "#" },
      { label: "Kolkata", href: "#" },
      { label: "Pune", href: "#" },
      { label: "Ahmedabad", href: "#" },
      { label: "Jaipur", href: "#" },
    ],
  },
];

const TikTok = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 32 32" width={24} height={24} fill="none" stroke="#F9FAFB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M23 2v5.5a5.5 5.5 0 0 0 5.5 5.5H29v4.5A10.5 10.5 0 1 1 18.5 7V2"/>
  </svg>
);

const AppStoreButton = () => (
  <a href="#" aria-label="Download on the App Store" className="inline-block">
    <svg width="135" height="40" viewBox="0 0 135 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="135" height="40" rx="8" fill="#fff"/>
      <g>
        <text x="44" y="17" fontSize="9" fill="#0D1B2A" fontWeight="500">Download on the</text>
        <text x="44" y="32" fontSize="17" fill="#0D1B2A" fontWeight="500">App Store</text>
        <g>
          <rect x="12" y="8" width="24" height="24" rx="6" fill="#0D1B2A"/>
          <text x="20" y="27" fontSize="18" fill="#F9FAFB" fontWeight="bold"></text>
        </g>
      </g>
    </svg>
  </a>
);

const GooglePlayButton = () => (
  <a href="#" aria-label="Get it on Google Play" className="inline-block">
    <svg width="135" height="40" viewBox="0 0 135 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="135" height="40" rx="8" fill="#fff"/>
      <g>
        <text x="44" y="17" fontSize="9" fill="#0D1B2A" fontWeight="500">Android App on</text>
        <text x="44" y="32" fontSize="17" fill="#0D1B2A" fontWeight="500">Google Play</text>
        <g>
          <polygon points="18,12 34,20 18,28" fill="#34A853"/>
          <polygon points="18,12 27,20 18,28" fill="#FBBC05"/>
          <polygon points="27,20 34,20 18,28" fill="#EA4335"/>
        </g>
      </g>
    </svg>
  </a>
);

const PartnershipBlock = () => (
  <div className="border border-offwhite p-4 rounded-md flex items-center justify-center bg-navy/80 w-64 mx-auto mb-6 mt-8">
    <span className="text-offwhite text-lg font-bold">Visa / Extrahand</span>
    <span className="ml-2 text-xs text-offwhite/70">OFFICIAL PARTNER</span>
  </div>
);

const Footer = () => {
  return (
      <footer className="bg-navy text-offwhite w-full rounded-2xl mx-2 sm:mx-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 pt-8 lg:pt-10 pb-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-8 text-center md:text-left">
          {footerColumns.map((col, idx) => (
            <div key={idx}>
            <h3 className="font-semibold text-base mb-4 tracking-wide text-offwhite/90">{col.title}</h3>
            <ul className="space-y-2">
                {col.links.map((link, linkIdx) => (
                  <li key={linkIdx}>
                    <a
                      href={link.href}
                      className="text-offwhite/60 hover:text-offwhite transition-colors text-sm font-normal"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="flex flex-col lg:flex-row items-center justify-between mt-8 lg:mt-12 gap-6 lg:gap-8">
          {/* <div className="flex-1 flex flex-col items-center md:items-start">
            <PartnershipBlock />
            <div className="text-xs text-offwhite/70 mt-2">Extrahand Limited 2024 ©, All rights reserved</div>
          </div> */}
          <div className="flex flex-col items-center gap-3 lg:gap-2">
            <div className="flex flex-col sm:flex-row gap-2 mb-2">
              <AppStoreButton />
              <GooglePlayButton />
            </div>
            <div className="flex gap-4 mt-2 items-center">
                <Facebook className="w-5 h-5 text-offwhite/70" strokeWidth={1.5} />
                <Instagram className="w-5 h-5 text-offwhite/70" strokeWidth={1.5} />
                {/* <TikTok className="w-5 h-5 text-offwhite/70" /> */}
              </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;