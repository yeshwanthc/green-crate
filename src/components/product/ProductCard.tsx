import { Product } from '../../types/product';
import { Link } from 'react-router-dom';
import { Leaf, ArrowRight } from 'lucide-react';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (cardRef.current) {
      gsap.fromTo(
        cardRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.4,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: cardRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }
  }, []);

  return (
    <Link
      to={`/product/${product.id}`}
      className="group"
      aria-label={`View details for ${product.name}`}
    >
      <div
        ref={cardRef}
        style={{ backgroundColor: product.background }}
        className="rounded-xl shadow-sm overflow-hidden transition-transform duration-300 group-hover:shadow-lg"
      >
        <div className="relative w-full h-60 flex justify-center items-center bg-white">
          <img
            src={product.image}
            alt={product.name}
            loading="lazy"
            className="h-40 w-40 object-contain transition-transform duration-300 group-hover:scale-105"
          />
          {product.organic && (
            <div className="absolute top-3 right-3 bg-green-100 text-green-800 px-3 py-1 text-xs rounded-full font-medium flex items-center gap-1 shadow-sm">
              <Leaf size={14} />
              Organic
            </div>
          )}
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-900 group-hover:text-primary-600 transition-colors">
            {product.name}
          </h3>
          <p className="text-gray-600 mt-1 text-sm leading-snug">
            {product.description}
          </p>
          <div className="mt-4 flex items-center justify-between">
            <span className="text-base font-bold text-primary-700">
              From ${product.price['250g'].toFixed(2)}
            </span>
            <span className="text-primary-700 font-semibold text-sm inline-flex items-center gap-1 hover:underline">
              Shop Now
              <ArrowRight size={16} />
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
