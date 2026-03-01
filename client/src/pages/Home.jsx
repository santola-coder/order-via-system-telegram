import { useEffect, useState } from "react";
import { fetchProducts } from "../services/api";
import Navbar from "../components/Navbar";
import Hero from "../components/HeroBanner";
import ProductCard from "../components/ProductCard";
import Footer from "../components/Footer";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts().then((data) => setProducts(data));
  }, []);

  return (
    <div className="bg-white/90 min-h-screen">
      <Navbar />
      <Hero />

      <section className="max-w-7xl mx-auto px-6 py-16 grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </section>
      <Footer />
    </div>
  );
};

export default Home;
