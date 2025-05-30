import bag from '@/assets/bag.png';
import sneaker from '@/assets/sneaker.png';
import sunglasses from '@/assets/sunglasses.png';
import phone from '@/assets/phone.png';
import tshirt from '@/assets/tshirt.png'
import { StaticImageData } from 'next/image';

export interface Product {
  id: number;
  image: StaticImageData;
  title: string;
  price: number;
  rating: number;
  category: string;
  brand: string;
  cart: boolean,
  description: string;
}

export const products = [
  {
    id: 1,
    image: bag,
    title: "Orange Bag",
    price: 20,
    rating: 3,
    category: "Bag",
    brand: "Brand A",
    description: "A stylish orange bag for all your needs.",
  },
  {
    id: 2,
    image: sneaker,
    title: "Sneaker",
    price: 200,
    rating:4,
    category: "Clothing",
    brand: "Brand C",
    description: "Comfortable and trendy sneakers.",
  },
  {
    id: 3,
    image: sunglasses,
    title: "Sunglasses",
    rating: 2,
    price: 30,
    category: "Clothing",
    brand: "Brand B",
    description: "Cool sunglasses for sunny days."
  },
  {
    id: 4,
    image: phone,
    title: "Phone",
    rating: 5,
    price: 300,
    category: "Electronics",
    brand: "Brand A",
    description: "A modern smartphone with great features."
  },
  {
    id: 5,
    image: tshirt,
    title: "Tshirt",
    rating: 4,
    price: 50,
    category: "Clothing",
    brand: "Brand C",
    description: "A comfortable cotton t-shirt."
  },
];
