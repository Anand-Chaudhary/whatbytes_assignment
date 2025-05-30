import Sidebar from '@/components/sidebar';
import bag from '@/assets/bag.avif';
import sneaker from '@/assets/sneaker.png';
import sunglasses from '@/assets/sunglasses.avif';
import ProductCard from '@/components/productCards';

const products = [
  {
    id: 1,
    image: bag,
    title: "Orange Bag",
    price: 20
  },
  {
    id: 2,
    image: sneaker,
    title: "Sneaker",
    price: 200
  },
  {
    id: 3,
    image: sunglasses,
    title: "Sunglasses",
    price: 30
  },
];

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
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
