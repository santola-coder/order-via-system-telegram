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
    Support: ["FAQ", "Shipping & Returns", "Track Order", "Size Guide", "Contact Us"],
    Company: ["About Us", "Careers", "Press", "Sustainability", "Affiliates"],
    Legal: ["Privacy Policy", "Terms of Use", "Cookie Settings", "Accessibility"],
  };

  const socialLinks = [
    { name: "Instagram", Icon: Instagram },
    { name: "Twitter", Icon: Twitter },
    { name: "YouTube", Icon: Youtube },
    { name: "Facebook", Icon: Facebook },
  ];

  const trustBadges = [
    { Icon: Truck, label: "Free Shipping", sub: "Orders over $75" },
    { Icon: RotateCcw, label: "Easy Returns", sub: "30-day policy" },
    { Icon: ShieldCheck, label: "Secure Pay", sub: "256-bit SSL" },
    { Icon: Headphones, label: "24/7 Support", sub: "Always here" },
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
        fontFamily: "'DM Sans', 'Helvetica Neue', sans-serif",
        background: "#0a0a0a",
        color: "#e8e8e0",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,300;0,400;0,500;0,600;1,300&family=Cormorant+Garamond:ital,wght@0,300;0,500;1,300&display=swap');
        @keyframes shimmer { 0%{background-position:0%} 100%{background-position:200%} }
        @keyframes checkPop { 0%{transform:scale(0)} 60%{transform:scale(1.2)} 100%{transform:scale(1)} }
        .footer-link { position:relative; display:inline-flex; align-items:center; gap:6px; }
        .footer-link::after { content:''; position:absolute; bottom:-1px; left:0; width:0; height:1px; background:#6366f1; transition:width 0.3s ease; }
        .footer-link:hover::after { width:100%; }
        .social-btn { transition: all 0.25s cubic-bezier(0.34,1.56,0.64,1); }
        .social-btn:hover { transform: translateY(-4px) scale(1.1); color: #818cf8 !important; background: #2e2a5e !important; border-color: #6366f1 !important; }
        .trust-card { transition: all 0.2s ease; }
        .trust-card:hover { background: #141414 !important; border-color: #6366f1 !important; }
        .trust-card:hover .trust-icon { color: #6366f1 !important; }
        .app-btn { transition: all 0.2s ease; }
        .app-btn:hover { border-color: #6366f1 !important; background: #141414 !important; }
        .sub-input:focus { border-color: #6366f1 !important; outline: none; }
      `}</style>

      {/* Top Announcement Strip */}
      <div
        style={{
          background: "linear-gradient(90deg, #4f46e5 0%, #818cf8 50%, #4f46e5 100%)",
          backgroundSize: "200% 100%",
          animation: "shimmer 4s linear infinite",
        }}
        className="py-3 text-center"
      >
        <p className="text-xs font-medium tracking-[0.2em] uppercase flex items-center justify-center gap-2" style={{ color: "#fff" }}>
          <Sparkles size={12} />
          Free shipping on orders over $75 · Easy 30-day returns · New arrivals every Friday
          <Sparkles size={12} />
        </p>
      </div>

      {/* Trust Badges */}
      <div className="border-b" style={{ borderColor: "#161616", background: "#0d0d0d" }}>
        <div className="max-w-6xl mx-auto px-6 py-8 grid grid-cols-2 md:grid-cols-4 gap-4">
          {trustBadges.map(({ Icon, label, sub }) => (
            <div
              key={label}
              className="trust-card flex items-center gap-4 px-5 py-4 rounded-lg cursor-default"
              style={{ border: "1px solid #1a1a1a", background: "#111" }}
            >
              <div className="trust-icon p-2 rounded-md" style={{ background: "#2e2a5e", color: "#6366f1" }}>
                <Icon size={18} strokeWidth={1.5} />
              </div>
              <div>
                <p className="text-sm font-medium" style={{ color: "#e8e8e0" }}>{label}</p>
                <p className="text-xs" style={{ color: "#555" }}>{sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Newsletter */}
      <div className="border-b" style={{ borderColor: "#1a1a1a", background: "#0f0f0f" }}>
        <div className="max-w-6xl mx-auto px-6 py-14 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <p className="text-xs tracking-[0.25em] uppercase mb-2 flex items-center gap-2" style={{ color: "#6366f1" }}>
              <Mail size={12} strokeWidth={1.5} /> Stay in the loop
            </p>
            <h3
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "2rem",
                fontWeight: 300,
                letterSpacing: "-0.01em",
                lineHeight: 1.1,
              }}
            >
              Subscribe &amp; Get 15% Off
              <span className="block italic" style={{ color: "#6366f1" }}>your first order</span>
            </h3>
          </div>
          <form onSubmit={handleSubscribe} className="flex w-full md:w-auto gap-0 max-w-md flex-1">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              className="sub-input flex-1 px-5 py-3.5 text-sm"
              style={{
                background: "#1a1a1a",
                border: "1px solid #2a2a2a",
                borderRight: "none",
                borderRadius: "4px 0 0 4px",
                color: "#e8e8e0",
                fontFamily: "inherit",
                transition: "border-color 0.2s",
              }}
            />
            <button
              type="submit"
              className="px-7 py-3.5 text-xs font-semibold tracking-[0.15em] uppercase transition-all duration-200 flex items-center gap-2"
              style={{
                background: subscribed ? "#2d6a4f" : "#6366f1",
                color: "#fff",
                borderRadius: "0 4px 4px 0",
                fontFamily: "inherit",
                minWidth: "150px",
                justifyContent: "center",
              }}
            >
              {subscribed ? (
                <span className="flex items-center gap-2" style={{ animation: "checkPop 0.4s ease" }}>
                  <Check size={14} /> Subscribed!
                </span>
              ) : (
                <span className="flex items-center gap-1.5">
                  Subscribe <ChevronRight size={14} />
                </span>
              )}
            </button>
          </form>
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
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "1.8rem",
                  fontWeight: 500,
                  letterSpacing: "0.06em",
                  color: "#e8e8e0",
                }}
              >
                LUMIÈRE
              </span>
            </div>
            <p className="text-sm leading-relaxed mb-6" style={{ color: "#555", fontWeight: 300 }}>
              Curated fashion for those who move through the world with intention. Every piece tells a story.
            </p>

            {/* Socials */}
            <div className="flex gap-3 mb-8">
              {socialLinks.map(({ name, Icon }) => (
                <button
                  key={name}
                  className="social-btn p-2.5 rounded-lg"
                  style={{ color: "#555", background: "#161616", border: "1px solid #1e1e1e" }}
                  title={name}
                >
                  <Icon size={16} strokeWidth={1.5} />
                </button>
              ))}
            </div>

            {/* Contact */}
            <div className="flex flex-col gap-3 mb-8">
              {contactInfo.map(({ Icon, text }) => (
                <div key={text} className="flex items-start gap-3">
                  <Icon size={13} strokeWidth={1.5} className="mt-0.5 shrink-0" style={{ color: "#6366f1" }} />
                  <span className="text-xs leading-relaxed" style={{ color: "#555" }}>{text}</span>
                </div>
              ))}
            </div>

            {/* App Buttons */}
            <div className="flex flex-col gap-2">
              {[
                { Icon: Apple, pre: "DOWNLOAD ON THE", label: "App Store" },
                { Icon: Smartphone, pre: "GET IT ON", label: "Google Play" },
              ].map(({ Icon, pre, label }) => (
                <button
                  key={label}
                  className="app-btn flex items-center gap-3 px-4 py-2.5"
                  style={{
                    border: "1px solid #2a2a2a",
                    borderRadius: "8px",
                    background: "#121212",
                    fontFamily: "inherit",
                    width: "fit-content",
                  }}
                >
                  <Icon size={16} strokeWidth={1.5} style={{ color: "#6366f1" }} />
                  <div className="text-left">
                    <div style={{ fontSize: "0.55rem", color: "#555", letterSpacing: "0.05em" }}>{pre}</div>
                    <div style={{ fontSize: "0.75rem", fontWeight: 500, color: "#888" }}>{label}</div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title} className="col-span-1">
              <h4 className="text-xs tracking-[0.2em] uppercase mb-5 font-medium" style={{ color: "#6366f1" }}>
                {title}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="footer-link text-sm transition-colors duration-200"
                      style={{ color: hoveredLink === link ? "#e8e8e0" : "#555", fontWeight: 300 }}
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
                          transform: hoveredLink === link ? "translateX(0)" : "translateX(-4px)",
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
      <div className="border-t" style={{ borderColor: "#161616" }}>
        <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs flex items-center gap-1.5" style={{ color: "#333" }}>
            © 2025 Lumière. Made with <Heart size={10} fill="#6366f1" stroke="none" /> in New York.
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

          <div className="flex items-center gap-4 text-xs" style={{ color: "#333" }}>
            <button className="flex items-center gap-1.5 hover:text-gray-400 transition-colors" style={{ fontFamily: "inherit" }}>
              <Globe size={12} strokeWidth={1.5} style={{ color: "#6366f1" }} />
              <span>EN / USD</span>
            </button>
            <span style={{ color: "#1e1e1e" }}>·</span>
            <button className="flex items-center gap-1.5 hover:text-gray-400 transition-colors" style={{ fontFamily: "inherit" }}>
              🇺🇸 <span>United States</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;