import Sidebar from '@/components/sidebar';
import { products } from '../../utils/products';
import ProductCard from '@/components/productCards';

export default function Home() {
  return (
    <div className="main w-full h-screen bg-blue-100">
      <div className="flex min-h-screen">
        <Sidebar />
        <div className="flex-1 ml-64">
          <div className="main p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {products.map(product => (
              <ProductCard
                key={product.id}
                image={product.image}
                title={product.title}
                price={product.price}
                rating={product.rating}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
