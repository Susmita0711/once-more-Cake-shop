import React from 'react';
import { CakeCard } from '../components/CakeCard';
import { Filter, Star, Clock, Truck, Heart } from 'lucide-react';

interface CakesPageProps {
  onOrder: (cakeName: string, cakePrice: string) => void;
}

export function CakesPage({ onOrder }: CakesPageProps) {
  const cakes = [
    {
      id: 1,
      name: 'Chocolate Dream',
      description: 'Rich chocolate cake with silky ganache frosting',
      price: '₹3,750',
      imageUrl: 'https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaG9jb2xhdGUlMjBjYWtlfGVufDF8fHx8MTc2NzAyOTE2NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      id: 2,
      name: 'Wedding Elegance',
      description: 'Multi-tiered masterpiece for your special day',
      price: '₹29,000',
      imageUrl: 'https://images.unsplash.com/photo-1535254973040-607b474cb50d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwY2FrZXxlbnwxfHx8fDE3NjcwMTY4NDN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      id: 3,
      name: 'Birthday Celebration',
      description: 'Colorful and fun cake perfect for any birthday',
      price: '₹4,500',
      imageUrl: 'https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiaXJ0aGRheSUyMGNha2V8ZW58MXx8fHwxNzY2OTk5Mjk3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      id: 4,
      name: 'Strawberry Delight',
      description: 'Fresh strawberries with light vanilla cream',
      price: '₹4,200',
      imageUrl: 'https://images.unsplash.com/photo-1602663491496-73f07481dbea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHJhd2JlcnJ5JTIwY2FrZXxlbnwxfHx8fDE3NjcwNjMwNjh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      id: 5,
      name: 'Cupcake Collection',
      description: 'Assorted flavors, minimum order of 12',
      price: '₹3,000',
      imageUrl: 'https://images.unsplash.com/photo-1614707267537-b85aaf00c4b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdXBjYWtlc3xlbnwxfHx8fDE3NjcwODg1Mzd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      id: 6,
      name: 'Custom Creation',
      description: 'Let us bring your unique vision to life',
      price: 'Custom',
      imageUrl: 'https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaG9jb2xhdGUlMjBjYWtlfGVufDF8fHx8MTc2NzAyOTE2NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      id: 7,
      name: 'Red Velvet Classic',
      description: 'Smooth cream cheese frosting on moist red velvet',
      price: '₹4,000',
      imageUrl: 'https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiaXJ0aGRheSUyMGNha2V8ZW58MXx8fHwxNzY2OTk5Mjk3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      id: 8,
      name: 'Vanilla Heaven',
      description: 'Classic vanilla cake with buttercream',
      price: '₹3,500',
      imageUrl: 'https://images.unsplash.com/photo-1535254973040-607b474cb50d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwY2FrZXxlbnwxfHx8fDE3NjcwMTY4NDN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    }
  ];

  const features = [
    { icon: Star, title: 'Premium Ingredients', desc: 'Only the finest ingredients' },
    { icon: Heart, title: 'Handcrafted', desc: 'Made with love & care' },
    { icon: Truck, title: 'Free Delivery', desc: 'On orders over $100' },
    { icon: Clock, title: 'Fresh Daily', desc: 'Baked fresh to order' }
  ];

  return (
    <div className="min-h-screen pt-20 bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">
      {/* Header */}
      <section className="relative py-32 bg-gradient-to-r from-amber-100 to-orange-100">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23f59e0b%22%20fill-opacity%3D%220.03%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%224%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-amber-600 text-sm tracking-widest uppercase font-medium mb-4 block">
            Artisan Creations
          </span>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-serif text-gray-800 mb-6 tracking-tight">
            Our Custom Cakes
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-orange-400 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Handcrafted with premium ingredients and decorated with love for your most cherished moments
          </p>
        </div>
      </section>

      {/* Features Bar */}
      <div className="bg-gradient-to-r from-amber-600 to-orange-600 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-4 p-4 rounded-lg bg-white/15 backdrop-blur-xl border border-white/20 shadow-lg">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-white font-medium text-sm">{feature.title}</p>
                  <p className="text-white/80 text-xs">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Cakes Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-12">
            <div className="flex items-center gap-2 text-gray-600">
              <Filter className="w-4 h-4" />
              <span className="text-sm">Showing all cakes</span>
            </div>
            <div className="flex gap-2">
              {['All', 'Chocolate', 'Fruit', 'Specialty'].map((filter, index) => (
                <button
                  key={filter}
                  className={`px-4 py-2 text-sm rounded-lg transition-all duration-300 ${
                    index === 0
                      ? 'bg-amber-600 text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-amber-600 hover:text-white'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {cakes.map((cake) => (
              <CakeCard
                key={cake.id}
                name={cake.name}
                description={cake.description}
                price={cake.price}
                imageUrl={cake.imageUrl}
                onOrder={onOrder}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-20 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-10 shadow-2xl border border-white/20">
            <div className="text-center mb-8">
              <span className="text-amber-600 text-sm tracking-widest uppercase font-medium mb-4 block">
                Order Information
              </span>
              <h2 className="text-3xl md:text-4xl font-serif text-gray-800 mb-6 tracking-tight">How to Order</h2>
              <div className="w-16 h-1 bg-gradient-to-r from-amber-400 to-orange-400 mx-auto"></div>
            </div>
            <ul className="space-y-5 text-gray-600 max-w-2xl mx-auto">
              <li className="flex items-start gap-4 p-4 bg-white/10 backdrop-blur-sm rounded-lg border border-white/10">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center text-amber-600 font-medium mt-0.5">1</span>
                <span className="leading-relaxed">Browse our collection and select your desired cake design</span>
              </li>
              <li className="flex items-start gap-4 p-4 bg-white/10 backdrop-blur-sm rounded-lg border border-white/10">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center text-amber-600 font-medium mt-0.5">2</span>
                <span className="leading-relaxed">Click "Order Now" to chat with us on WhatsApp for customization and pricing</span>
              </li>
              <li className="flex items-start gap-4 p-4 bg-white/10 backdrop-blur-sm rounded-lg border border-white/10">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center text-amber-600 font-medium mt-0.5">3</span>
                <span className="leading-relaxed">Orders should be placed at least 48 hours in advance for standard designs</span>
              </li>
              <li className="flex items-start gap-4 p-4 bg-white/10 backdrop-blur-sm rounded-lg border border-white/10">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center text-amber-600 font-medium mt-0.5">4</span>
                <span className="leading-relaxed">Custom cakes and elaborate designs require 5-7 days advance notice</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

