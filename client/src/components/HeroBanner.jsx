import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section
      className="relative pt-32 pb-24 overflow-hidden border-b-2 border-gray-200"
      style={{
        background:
          "radial-gradient(125% 125% at 50% 10%, #fff 50%, #6366f1 100%)",
      }}
    >
      {/* Floating Gradient Blobs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-300 rounded-full blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-purple-300 rounded-full blur-3xl opacity-20 animate-pulse"></div>

      <div className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        {/* Left Content */}
        <div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-800 leading-tight">
            Elevate Your
            <span className="bg-gradient-to-tl from-slate-100 via-violet-600 to-slate-100 bg-clip-text text-transparent 0 block">
              Shopping Experience
            </span>
          </h1>

          <p className="mt-6 text-lg text-gray-600 max-w-lg">
            Discover premium products with a modern checkout system. Built with
            React, Express & Telegram integration.
          </p>

          <div className="mt-8 flex space-x-4">
            <button className="flex items-center space-x-2 bg-indigo-600 text-white px-6 py-3 rounded-2xl shadow-lg hover:scale-105 transition">
              <span>Shop Now</span>
              <ArrowRight size={18} />
            </button>

            <button className="px-6 py-3 rounded-2xl border border-gray-300 hover:bg-gray-100 transition">
              Learn More
            </button>
          </div>
        </div>

        {/* Right Image / Product Mockup */}
        <div className="relative">
          <div className="bg-white rounded-3xl shadow-xl p-8 backdrop-blur-lg">
            <img
              src="https://imageio.forbes.com/specials-images/imageserve/68af4181b1628ca633ac8a03/0x0.jpg?format=jpg&height=600&width=1200&fit=bounds"
              alt="Product Preview"
              className="w-full h-80 object-contain hover:scale-105 transition"
            />
          </div>

          {/* Floating Card */}
          <div className="absolute -bottom-6 -left-6 bg-white shadow-lg rounded-2xl px-6 py-4">
            <p className="text-sm text-gray-500">Best Seller</p>
            <p className="font-semibold text-indigo-600">$199.99</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
