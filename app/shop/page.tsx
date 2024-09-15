'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import HeaderOverlay from '@/components/HeaderOverlay';

interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  image: string;
  description: string;
  paymentLink: string;
}

const productsData: Product[] = [
  { 
    id: '1', 
    name: 'Meatless Monday Recipe eBook', 
    category: 'eBooks', 
    price: 30.00, 
    image: '/shop/meatlessmondayebook.png', 
    description: 'Discover delicious meatless dinner recipes for every Monday of the year. Includes 53 recipes.',
    paymentLink: 'https://buy.stripe.com/cN202sgns0XS8PC3cc'
  },
  { 
    id: '2', 
    name: 'Plant Based Eating eBook', 
    category: 'eBooks', 
    price: 20.00, 
    image: '/shop/plantbasedeatingebook.png', 
    description: 'Learn about the benefits of plant-based eating and get started with easy recipes. Includes 30 recipes: a mix of breakfast, lunch, and dinner.',
    paymentLink: 'https://buy.stripe.com/5kA9D25IO5e82re9AB'
  },
  { 
    id: '3', 
    name: 'Raw Pet Foods Webinar', 
    category: 'Webinars', 
    price: 15.00, 
    image: '/shop/rawpetfoodwebinar.png', 
    description: 'Explore the benefits and components of raw diets for pets in this informative webinar.',
    paymentLink: 'https://buy.stripe.com/4gw7uU7QW0XSd5SeUW'
  },
  { 
    id: '4', 
    name: 'Pet Food Labels Webinar', 
    category: 'Webinars', 
    price: 15.00, 
    image: '/shop/petfoodlabelswebinar.png', 
    description: 'Learn how to decipher pet food labels and make informed choices for your pet\'s nutrition.',
    paymentLink: 'https://buy.stripe.com/3cs7uU4EK4a4e9WdQT'
  },
  { 
    id: '5', 
    name: 'Nutritional Necessities for Pets eBook', 
    category: 'eBooks', 
    price: 15.00, 
    image: '/shop/nutritionalnecessitiesebook.png', 
    description: 'A comprehensive guide to understanding and meeting your pet\'s essential nutritional needs.',
    paymentLink: 'https://buy.stripe.com/14kg1q5IO7mgd5S9AE'
  },
  { 
    id: '6', 
    name: 'So You Want a Dog eBook', 
    category: 'eBooks', 
    price: 15.00, 
    image: '/shop/soyouwantadogebook.png', 
    description: 'Everything you need to know before bringing a dog into your life, from choosing the right breed to preparing your home. Discover a puppy\'s life stages and how to help them grow into well-balanced dogs.',
    paymentLink: 'https://buy.stripe.com/eVaaH6b38360c1ObIN'
  },
];

export default function ShopPage() {
  const [products] = useState(productsData);
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (categoryFilter === '' || product.category === categoryFilter)
  );

  const categories = Array.from(new Set(products.map(product => product.category)));

  return (
    <div className="container mx-auto px-4 py-8">
      <HeaderOverlay title="Shop" backgroundImage="/Headerbanner/lightwood.png" />
      
      <div className="my-12">
        <div className="flex flex-col md:flex-row gap-6 mb-12">
          <div className="flex-1">
            <input
              type="text"
              placeholder="Search products"
              className="input input-bordered w-full bg-slate-100 pl-4"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="flex-1 bg-slate-200">
            <select
              className="select select-bordered w-full bg-slate-100"
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
            >
              <option value="">All Categories</option>
              {categories.map((category) => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredProducts.map((product) => (
            <div 
              key={product.id} 
              className="card bg-white shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden cursor-pointer flex flex-col"
              onClick={() => setSelectedProduct(product)}
            >
              <figure className="px-6 pt-6">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={400}
                  height={300}
                  className="rounded-xl object-cover h-64 w-full"
                />
              </figure>
              <div className="card-body p-6 flex flex-col flex-grow">
                <h2 className="card-title text-xl font-semibold mb-2">{product.name}</h2>
                <p className="text-gray-600 mb-2">{product.category}</p>
                <p className="text-2xl font-bold text-primary mb-4">${product.price.toFixed(2)}</p>
                <div className="mt-auto flex justify-center">
                  <Link href={product.paymentLink}>
                    <button
                      className="btn px-6 py-2 bg-[#6b8e23] hover:bg-[#5a7a1e] text-white font-bold rounded-full transition-colors duration-300 ease-in-out"
                      onClick={(e) => {
                        e.stopPropagation();
                      }}
                    >
                      Purchase
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {selectedProduct && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white p-8 rounded-lg max-w-2xl w-full relative">
              <button 
                className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                onClick={() => setSelectedProduct(null)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <h2 className="text-2xl font-bold mb-4">{selectedProduct.name}</h2>
              <p className="text-gray-600 mb-2">{selectedProduct.category}</p>
              <p className="text-xl font-bold text-primary mb-4">${selectedProduct.price.toFixed(2)}</p>
              <p className="mb-6">{selectedProduct.description}</p>
              <div className="flex justify-between">
                <button className="btn btn-secondary" onClick={() => setSelectedProduct(null)}>
                  Close
                </button>
                <Link href={selectedProduct.paymentLink}>
                  <button
                    className="btn px-6 py-2 bg-[#6b8e23] hover:bg-[#5a7a1e] text-white font-bold rounded-full transition-colors duration-300 ease-in-out"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedProduct(null);
                    }}
                  >
                    Purchase Now
                  </button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
