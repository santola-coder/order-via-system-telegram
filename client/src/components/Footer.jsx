import { useState } from "react";
import {
  Instagram,
  Twitter,
  Youtube,
  Facebook,
  Mail,
  MapPin,
  Phone,
  Truck,
  RotateCcw,
  ShieldCheck,
  Headphones,
  Smartphone,
  Apple,
  Globe,
  ChevronRight,
  Check,
  Sparkles,
  Heart,
} from "lucide-react";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [hoveredLink, setHoveredLink] = useState(null);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 3000);
      setEmail("");
    }
  };

  const footerLinks = {
    Shop: ["New Arrivals", "Best Sellers", "Sale", "Collections", "Gift Cards"],
    Support: [
      "FAQ",
      "Shipping & Returns",
      "Track Order",
      "Size Guide",
      "Contact Us",
    ],
    Company: ["About Us", "Careers", "Press", "Sustainability", "Affiliates"],
    Legal: [
      "Privacy Policy",
      "Terms of Use",
      "Cookie Settings",
      "Accessibility",
    ],
  };

  const trustBadges = [
    {
      Icon: Truck,
      label: "Free Shipping",
      sub: "Orders over $75",
      bg: "bg-orange-50",
      text: "text-orange-500",
    },
    {
      Icon: RotateCcw,
      label: "Easy Returns",
      sub: "30-day policy",
      bg: "bg-green-50",
      text: "text-green-600",
    },
    {
      Icon: ShieldCheck,
      label: "Secure Pay",
      sub: "256-bit SSL",
      bg: "bg-blue-50",
      text: "text-blue-600",
    },
    {
      Icon: Headphones,
      label: "24/7 Support",
      sub: "Always here",
      bg: "bg-purple-100",
      text: "text-purple-600",
    },
  ];

  const paymentIcons = ["VISA", "MC", "AMEX", "PAYPAL", "APPLE PAY", "GPay"];

  const contactInfo = [
    { Icon: MapPin, text: "123 Fashion Ave, New York, NY 10001" },
    { Icon: Phone, text: "+1 (800) 555-0198" },
    { Icon: Mail, text: "hello@lumiere.com" },
  ];

  return (
    <footer
      style={{
        backgroundSize: "200% 100%",
        animation: "shimmer 4s linear infinite",
        color: "#e8e8e0",
      }}
    >
      {/* Top Announcement Strip */}
      <div
        style={{
          background:
            "linear-gradient(90deg, #4f46e5 0%, #818cf8 50%, #4f46e5 100%)",
          backgroundSize: "200% 100%",
          animation: "shimmer 4s linear infinite",
        }}
        className="py-3 text-center"
      >
        <p
          className="text-xs font-medium tracking-[0.2em] uppercase flex items-center justify-center gap-2"
          style={{ color: "#fff" }}
        >
          <Sparkles size={12} />
          Free shipping on orders over $75 · Easy 30-day returns · New arrivals
          every Friday
          <Sparkles size={12} />
        </p>
      </div>

      {/* Trust Badges */}
      <div className="border-b ">
        <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
          {trustBadges.map(({ Icon, label, sub, color, text, bg }) => (
            <div
              key={label}
              className="trust-card flex items-center gap-4 px-5 py-4 rounded-lg cursor-default border border-gray-300"
            >
              <div className="trust-icon p-3 rounded-xl  ">
                <div className={`p-3 rounded-xl ${bg}`}>
                  <Icon className={`${color} w-7 h-7 ${text}`} />
                </div>
              </div>
              <div>
                <p className="text-sm font-medium mb-2 text-indigo-500">
                  {label}
                </p>
                <p className="text-xs" style={{ color: "#292524" }}>
                  {sub}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Main Grid */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-10">
          {/* Brand Column */}
          <div className="col-span-2">
            <div className="mb-5">
              <span
                style={{
                  fontSize: "1.8rem",
                  fontWeight: 500,
                  letterSpacing: "0.06em",
                  color: "#6366f1",
                }}
              >
                FAKESTORE
              </span>
            </div>
            <p className="text-lg leading-relaxed mb-6 text-black/70">
              Curated fashion for those who move through the world with
              intention. Every piece tells a story.
            </p>

            {/* Socials */}
            {/* <div className="flex gap-3 mb-8">
              {socialLinks.map(({ name, Icon }) => (
                <button
                  key={name}
                  className="social-btn p-2.5 rounded-full border border-indigo-500 cursor-pointer"
                  style={{
                    color: "#6366f1",
                    background: "#e0e7ff",
                  }}
                  title={name}
                >
                  <Icon size={16} strokeWidth={1.5} />
                </button>
              ))}
            </div> */}

            {/* Contact */}
            <div className="flex flex-col gap-3 mb-8">
              {contactInfo.map(({ Icon, text }) => (
                <div key={text} className="flex items-start gap-3">
                  <Icon
                    size={20}
                    strokeWidth={1.5}
                    className="mt-0.5 shrink-0"
                    style={{ color: "#6366f1" }}
                  />
                  <span
                    className="text-sm leading-relaxed"
                    style={{ color: "#292524" }}
                  >
                    {text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title} className="col-span-1">
              <h4
                className="text-xs tracking-[0.2em] uppercase mb-5 font-medium"
                style={{ color: "#6366f1" }}
              >
                {title}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="footer-link text-sm transition-colors duration-200"
                      style={{
                        color: hoveredLink === link ? "#4f39f6" : "#555",
                        fontWeight: 300,
                      }}
                      onMouseEnter={() => setHoveredLink(link)}
                      onMouseLeave={() => setHoveredLink(null)}
                    >
                      <ChevronRight
                        size={11}
                        strokeWidth={2.5}
                        style={{
                          color: "#6366f1",
                          opacity: hoveredLink === link ? 1 : 0,
                          transition: "opacity 0.2s, transform 0.2s",
                          transform:
                            hoveredLink === link
                              ? "translateX(0)"
                              : "translateX(-4px)",
                          flexShrink: 0,
                        }}
                      />
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      {/* <div className="border-t" style={{ borderColor: "#161616" }}>
        <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p
            className="text-xs flex items-center gap-1.5"
            style={{ color: "#333" }}
          >
            © 2025 Lumière. Made with{" "}
            <Heart size={10} fill="#6366f1" stroke="none" /> in New York.
          </p>

          <div className="flex items-center gap-2 flex-wrap justify-center">
            {paymentIcons.map((p) => (
              <span
                key={p}
                className="px-2.5 py-1 font-semibold"
                style={{
                  border: "1px solid #1e1e1e",
                  borderRadius: "4px",
                  color: "#3a3a3a",
                  background: "#0f0f0f",
                  fontSize: "0.58rem",
                  letterSpacing: "0.06em",
                }}
              >
                {p}
              </span>
            ))}
          </div>

          <div
            className="flex items-center gap-4 text-xs"
            style={{ color: "#333" }}
          >
            <button
              className="flex items-center gap-1.5 hover:text-gray-400 transition-colors"
              style={{ fontFamily: "inherit" }}
            >
              <Globe size={12} strokeWidth={1.5} style={{ color: "#6366f1" }} />
              <span>EN / USD</span>
            </button>
            <span style={{ color: "#1e1e1e" }}>·</span>
            <button
              className="flex items-center gap-1.5 hover:text-gray-400 transition-colors"
              style={{ fontFamily: "inherit" }}
            >
              🇺🇸 <span>United States</span>
            </button>
          </div>
        </div>
      </div> */}
    </footer>
  );
};

export default Footer;
