// App.jsx
import { useState } from "react";
import "./App.css"; // ← keep your global styles if any
// or better: remove App.css and use only Tailwind

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 font-sans antialiased">
      <Header
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
      />

      <main>
        <HeroSection />
        <ServicesSection />
      </main>
    </div>
  );
}

// ────────────────────────────────────────────────
function Header({ isMobileMenuOpen, setIsMobileMenuOpen }) {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-gray-200/80 bg-white/80 backdrop-blur-xl transition-all duration-300">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="flex h-18 items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            className="flex items-center gap-3 font-bold text-xl tracking-tight"
          >
            <span className="text-indigo-600 text-2xl">N</span>ova
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-10">
            <a
              href="#features"
              className="text-gray-700 hover:text-indigo-600 transition-colors"
            >
              Features
            </a>
            <a
              href="#services"
              className="text-gray-700 hover:text-indigo-600 transition-colors"
            >
              Services
            </a>
            <a
              href="#pricing"
              className="text-gray-700 hover:text-indigo-600 transition-colors"
            >
              Pricing
            </a>
            <a
              href="#about"
              className="text-gray-700 hover:text-indigo-600 transition-colors"
            >
              About
            </a>
          </nav>

          {/* Actions + Mobile toggle */}
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="hidden sm:inline-flex text-gray-700 hover:text-indigo-600 transition"
            >
              Log in
            </a>

            <a
              href="#"
              className="rounded-full bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-indigo-200/50 hover:bg-indigo-700 hover:shadow-indigo-300/60 transition-all duration-300"
            >
              Get Started →
            </a>

            <button
              className="lg:hidden text-gray-700 hover:text-indigo-600"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <i
                className={`fas fa-${isMobileMenuOpen ? "times" : "bars"} text-2xl transition-transform duration-300 ${isMobileMenuOpen ? "rotate-90" : ""}`}
              ></i>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          isMobileMenuOpen ? "max-h-96 py-4" : "max-h-0"
        }`}
      >
        <div className="flex flex-col items-center gap-6 bg-white/95 backdrop-blur-lg border-t border-gray-200 px-5 pb-6 pt-2">
          <a
            href="#features"
            className="text-lg font-medium text-gray-800 hover:text-indigo-600"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Features
          </a>
          <a
            href="#services"
            className="text-lg font-medium text-gray-800 hover:text-indigo-600"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Services
          </a>
          <a
            href="#pricing"
            className="text-lg font-medium text-gray-800 hover:text-indigo-600"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Pricing
          </a>
          <a
            href="#about"
            className="text-lg font-medium text-gray-800 hover:text-indigo-600"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            About
          </a>
          <a
            href="#"
            className="text-lg font-medium text-gray-800 hover:text-indigo-600"
          >
            Log in
          </a>
          <a
            href="#"
            className="w-full max-w-xs rounded-full bg-indigo-600 py-3.5 text-center font-semibold text-white hover:bg-indigo-700"
          >
            Get Started →
          </a>
        </div>
      </div>
    </header>
  );
}

// ────────────────────────────────────────────────
function HeroSection() {
  return (
    <section className="relative pt-28 pb-20 md:pt-36 md:pb-32 lg:pt-40 lg:pb-36 overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-purple-50 to-blue-50 -z-10" />
      <div className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-indigo-100/40 to-transparent -z-10" />

      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Text */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-indigo-100/70 px-4 py-1.5 text-sm font-medium text-indigo-700 mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500" />
              </span>
              New v2.1 just released
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 leading-tight">
              Build beautiful products
              <span className="text-indigo-600 block mt-2">10× faster</span>
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-gray-600 leading-relaxed">
              The all-in-one platform for modern teams. Design, prototype,
              develop, collaborate, and ship — without switching tools every
              five minutes.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <button className="inline-flex items-center justify-center rounded-xl bg-indigo-600 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-indigo-200 hover:bg-indigo-700 hover:shadow-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-all duration-300">
                Start 14-day free trial
              </button>
              <button className="inline-flex items-center justify-center rounded-xl border-2 border-gray-300 px-8 py-4 text-base font-semibold text-gray-700 hover:border-gray-400 hover:bg-gray-50 transition-all duration-300">
                Watch demo
              </button>
            </div>

            <div className="mt-10 flex items-center gap-8 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <i className="fas fa-check-circle text-green-500 text-lg" />
                No credit card required
              </div>
              <div className="flex items-center gap-2">
                <i className="fas fa-shield-alt text-green-500 text-lg" />
                Enterprise-grade security
              </div>
            </div>
          </div>

          {/* Right - Visual (you can replace with real screenshot / 3D mockup) */}
          <div className="relative mt-12 lg:mt-0">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-indigo-200/40 border border-gray-200/60 bg-white">
              <img
                src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&auto=format&fit=crop&q=80"
                alt="Product dashboard preview"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent pointer-events-none" />
            </div>

            {/* Decorative floating blobs */}
            <div className="absolute -left-8 -top-8 w-32 h-32 bg-gradient-to-br from-pink-400 to-purple-500 rounded-2xl rotate-6 shadow-xl opacity-80 animate-float-slow pointer-events-none" />
            <div className="absolute -right-10 bottom-10 w-40 h-40 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full blur-2xl opacity-60 animate-float pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
}

// ────────────────────────────────────────────────
function ServicesSection() {
  return (
    <section id="services" className="py-20 md:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
            Everything you need to ship fast
          </h2>
          <p className="mt-5 text-lg text-gray-600">
            Powerful features packed into one beautiful platform — no bloated
            suites, no endless plugins.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          <FeatureCard
            icon="bolt"
            color="indigo"
            title="Lightning Fast"
            description="Hot-reloading, instant previews, zero-config deployments — ship in seconds, not hours."
          />
          <FeatureCard
            icon="users-gear"
            color="purple"
            title="Real-time Collaboration"
            description="Multiple team members editing the same project simultaneously — like Figma meets VS Code."
          />
          <FeatureCard
            icon="shield-halved"
            color="cyan"
            title="Enterprise Security"
            description="SOC 2 Type II, end-to-end encryption, SSO, SCIM, audit logs — built for serious teams."
          />
          {/* add more cards here */}
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ icon, color, title, description }) {
  return (
    <div className="group relative bg-white rounded-2xl p-8 shadow-lg shadow-gray-100/70 border border-gray-100 hover:border-indigo-200 hover:shadow-xl transition-all duration-300">
      <div
        className={`h-14 w-14 rounded-xl bg-${color}-100 flex items-center justify-center text-${color}-600 mb-6 group-hover:bg-${color}-600 group-hover:text-white transition-colors`}
      >
        <i className={`fas fa-${icon} text-2xl`} />
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
}

export default App;
