import { ProductCard } from './ProductCard'
import { products } from '../../data/products'

const Products = () => {
  return (
    <div id="products" className="container mx-auto px-4 py-16">
    <div className="text-center container">
      <div className="mb-16">
        <p className="text-[#333] text-lg mb-2 lowercase tracking-wide">
          products
        </p>
        <h2 className="text-primary-700 text-3xl font-bold mb-4">
          Loved by Health-Conscious Foodies
        </h2>
        <p className="text-[#333] max-w-xl mx-auto text-lg">
          From guilt-free Makhana to antioxidant-rich Amla, our organic
          products have become staples in kitchens across the country.
          Discover why customers are raving about the taste, quality, and
          freshness.
        </p>
      </div>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  </div>
  )
}

export default Products