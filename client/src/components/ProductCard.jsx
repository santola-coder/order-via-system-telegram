import { ShoppingCart, Star } from "lucide-react";
import { submitOrder } from "../services/api";

const ProductCard = ({ product }) => {
  const handleBuy = async () => {
    await submitOrder({
      customerName: "Sok Dara",
      productTitle: product.title,
      price: product.price,
      quantity: 1,
    });

    alert("Order sent to Telegram!");
  };

  return (
    <div className="relative bg-white rounded-3xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer">
      {/* Top Badge */}
      <span className="absolute top-4 left-4 bg-indigo-500/20 text-indigo-500 text-xs px-3 py-1 rounded-full shadow">
        New
      </span>

      {/* Discount Badge */}
      <span className="absolute top-4 right-4 bg-red-500/20 text-red-500 text-xs px-3 py-1 rounded-full shadow">
        -20%
      </span>

      {/* Image */}
      <div className="h-60 flex items-center justify-center bg-gray-100 p-6 rounded-xl">
        <img
          src={product.image}
          alt={product.title}
          className="h-40 object-contain group-hover:scale-110 transition duration-300"
        />
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Category */}
        <span className="text-xs text-indigo-600 font-medium uppercase tracking-wide">
          {product.category}
        </span>

        {/* Title */}
        <h3 className="mt-2 text-gray-800 font-semibold line-clamp-2">
          {product.title}
        </h3>

        {/* Rating */}
        <div className="flex items-center mt-2 space-x-1">
          <Star size={16} className="text-yellow-400 fill-yellow-400" />
          <span className="text-sm text-gray-600">
            {product.rating?.rate} ({product.rating?.count})
          </span>
        </div>

        {/* Price */}
        <div className="mt-4 flex items-center justify-between">
          <div>
            <p className="text-lg font-bold text-indigo-600">
              ${product.price}
            </p>
            <p className="text-sm text-gray-400 line-through">
              ${(product.price * 1.2).toFixed(2)}
            </p>
          </div>

          {/* Buy Button */}
          <button
            onClick={handleBuy}
            className="flex items-center space-x-2 bg-indigo-600 text-white px-4 py-2 rounded-full hover:bg-indigo-700 transition cursor-pointer"
          >
            <ShoppingCart size={18} />
            <span>Buy</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
