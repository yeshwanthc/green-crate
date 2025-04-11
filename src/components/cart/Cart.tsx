import { useStore } from '../../store/useStore';
import { Trash2, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Cart() {
  const { cart, removeFromCart, updateQuantity, getCartTotal } = useStore();

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Your cart is empty</h2>
          <Link
            to="/"
            className="text-primary-600 hover:underline inline-flex items-center gap-2 font-medium"
          >
            <ArrowLeft size={18} />
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white py-12 px-4">
      <div className="max-w-5xl mx-auto w-full ">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center md:text-left">Shopping Cart</h2>

        <div className="space-y-6">
          {cart.map((item) => (
            <div
              key={`${item.id}-${item.weight}`}
              className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 py-4 border-b"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-24 h-24 object-cover rounded-lg"
              />
              <div className="flex-1 w-full">
                <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
                <p className="text-sm text-gray-500">{item.weight}</p>
                <p className="text-primary-700 font-medium mt-1">${item.price.toFixed(2)}</p>
              </div>

              <div className="flex items-center gap-4 mt-4 sm:mt-0">
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => updateQuantity(item.id, item.weight, item.quantity - 1)}
                    className="w-8 h-8 border border-gray-300 rounded-full text-gray-700 text-lg leading-none hover:bg-gray-100"
                  >
                    −
                  </button>
                  <span className="w-8 text-center text-base">{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.id, item.weight, item.quantity + 1)}
                    className="w-8 h-8 border border-gray-300 rounded-full text-gray-700 text-lg leading-none hover:bg-gray-100"
                  >
                    +
                  </button>
                </div>

                <button
                  onClick={() => removeFromCart(item.id, item.weight)}
                  className="text-red-500 hover:text-red-600"
                >
                  <Trash2 size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col sm:flex-row justify-between items-center gap-6">
          <Link
            to="/"
            className="text-primary-600 hover:underline inline-flex items-center gap-2 font-medium"
          >
            <ArrowLeft size={18} />
            Continue Shopping
          </Link>

          <div className="text-right">
            <p className="text-sm text-gray-500 mb-1">Total</p>
            <p className="text-2xl font-bold text-primary-700">${getCartTotal().toFixed(2)}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
