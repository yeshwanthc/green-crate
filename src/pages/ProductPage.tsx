import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useStore } from "../store/useStore";
import { products } from "../data/products";
import { Leaf, ShoppingBag, Check } from "lucide-react";
import { ProductModelViewer } from "../components/interactive/ProductModelViewer";
import Loader from "../components/interactive/Loader"; 

export function ProductPage() {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));
  const addToCart = useStore((state) => state.addToCart);

  const [selectedWeight, setSelectedWeight] = useState<"250g" | "500g" | "1kg">(
    "250g"
  );
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timeout);
  }, []);

  if (!product) return <div>Product not found</div>;

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price[selectedWeight],
      quantity,
      weight: selectedWeight,
      image: product.image,
    });
    setAdded(true);
    setTimeout(() => setAdded(false), 500);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="rounded-xl  overflow-hidden">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="relative">
              {loading ? (
                <div className="h-[200px] flex items-center justify-center">
                  <Loader />
                </div>
              ) : (
                <ProductModelViewer modelPath={product.model} />
              )}

              {product.organic && (
                <div className="absolute md:top-4 top-40 right-4 bg-accent2-500 text-primary-700 px-4 py-2 rounded-full flex items-center gap-2">
                  <Leaf size={20} />
                  <span className="font-medium">Organic Certified</span>
                </div>
              )}
            </div>

            <div className="p-8">
              <h1 className="text-4xl font-bold text-gray-800 mb-4">
                {product.name}
              </h1>
              <p className="text-gray-600 mb-6">{product.description}</p>

              <div className="mb-8">
                <h3 className="text-lg font-semibold mb-2">Benefits:</h3>
                <ul className="space-y-2">
                  {product.benefits.map((benefit, index) => (
                    <li
                      key={index}
                      className="flex items-center gap-2 text-gray-700"
                    >
                      <Check size={20} className="text-accent2-500" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-3">Select Size:</h3>
                <div className="flex gap-4">
                  {(
                    Object.keys(product.price) as Array<
                      keyof typeof product.price
                    >
                  ).map((weight) => (
                    <button
                      key={weight}
                      onClick={() => setSelectedWeight(weight)}
                      className={`px-4 py-2 rounded-lg border-2 ${
                        selectedWeight === weight
                          ? "border-primary-500 bg-primary-50 text-primary-700"
                          : "border-gray-200 hover:border-primary-200"
                      }`}
                    >
                      {weight}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-3">Quantity:</h3>
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    className="px-3 py-1 rounded-lg border-2 border-gray-200 hover:border-primary-200"
                  >
                    -
                  </button>
                  <span className="text-xl font-medium">{quantity}</span>
                  <button
                    onClick={() => setQuantity((q) => q + 1)}
                    className="px-3 py-1 rounded-lg border-2 border-gray-200 hover:border-primary-200"
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between mb-8">
                <div>
                  <p className="text-sm text-gray-500">Price per unit</p>
                  <p className="text-3xl font-bold text-primary-700">
                    ${product.price[selectedWeight].toFixed(2)}
                  </p>
                </div>
                <p className="text-lg text-gray-600">
                  Total: $
                  {(product.price[selectedWeight] * quantity).toFixed(2)}
                </p>
              </div>

              <button
                onClick={handleAddToCart}
                className={`w-full py-4 rounded-lg flex items-center justify-center gap-2 text-white font-medium transition-all ${
                  added
                    ? "bg-accent2-500"
                    : "bg-primary-700 hover:bg-primary-600"
                }`}
              >
                {added ? (
                  <>
                    <Check size={24} />
                    Added to Cart
                  </>
                ) : (
                  <>
                    <ShoppingBag size={24} />
                    Add to Cart
                  </>
                )}
              </button>

              <div className="mt-6 text-sm text-gray-500">
                Origin: {product.origin}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
