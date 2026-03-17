import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { ProductCard } from '../components/ProductCard';
import { Star, ShoppingBag, Gift } from 'lucide-react';

interface ProductsPageProps {
  onOrder: (productName: string, productPrice: string) => void;
}

export function ProductsPage({ onOrder }: ProductsPageProps) {
  const chocolates = [
    { id: 1, name: 'Dark Chocolate Box', description: '12-piece premium dark chocolate', price: '₹1,500', imageUrl: 'https://images.unsplash.com/photo-1720924109595-161e675c792f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYW5keSUyMHN3ZWV0c3xlbnwxfHx8fDE3NjcwMTYwMzV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral' },
    { id: 2, name: 'Milk Chocolate Assortment', description: '24-piece variety box', price: '₹2,100', imageUrl: 'https://images.unsplash.com/photo-1720924109595-161e675c792f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYW5keSUyMHN3ZWV0c3xlbnwxfHx8fDE3NjcwMTYwMzV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral' },
    { id: 3, name: 'Truffle Collection', description: 'Handmade chocolate truffles', price: '₹2,700', imageUrl: 'https://images.unsplash.com/photo-1720924109595-161e675c792f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYW5keSUyMHN3ZWV0c3xlbnwxfHx8fDE3NjcwMTYwMzV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral' },
    { id: 4, name: 'White Chocolate Delights', description: 'Premium white chocolate pieces', price: '₹1,800', imageUrl: 'https://images.unsplash.com/photo-1720924109595-161e675c792f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYW5keSUyMHN3ZWV0c3xlbnwxfHx8fDE3NjcwMTYwMzV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral' },
  ];

  const candies = [
    { id: 1, name: 'Gummy Bears Mix', description: 'Colorful fruit-flavored gummies', price: '$8', imageUrl: 'https://images.unsplash.com/photo-1720924109595-161e675c792f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYW5keSUyMHN3ZWV0c3xlbnwxfHx8fDE3NjcwMTYwMzV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral' },
    { id: 2, name: 'Lollipop Bundle', description: 'Assorted flavored lollipops', price: '$12', imageUrl: 'https://images.unsplash.com/photo-1720924109595-161e675c792f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYW5keSUyMHN3ZWV0c3xlbnwxfHx8fDE3NjcwMTYwMzV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral' },
    { id: 3, name: 'Hard Candy Mix', description: 'Traditional hard candies', price: '$10', imageUrl: 'https://images.unsplash.com/photo-1720924109595-161e675c792f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYW5keSUyMHN3ZWV0c3xlbnwxfHx8fDE3NjcwMTYwMzV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral' },
    { id: 4, name: 'Sour Candy Pack', description: 'For those who love sour', price: '$9', imageUrl: 'https://images.unsplash.com/photo-1720924109595-161e675c792f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYW5keSUyMHN3ZWV0c3xlbnwxfHx8fDE3NjcwMTYwMzV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral' },
  ];

  const partySupplies = [
    { id: 1, name: 'Birthday Party Hat Set', description: 'Pack of 10 colorful hats', price: '₹1,250', imageUrl: 'https://images.unsplash.com/photo-1628753611124-5d20c4f3e177?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXJ0eSUyMGhhdHMlMjBjYXBzfGVufDF8fHx8MTc2NzA4OTI1OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral' },
    { id: 2, name: 'Balloon Bundle', description: '50-pack assorted balloons', price: '₹1,650', imageUrl: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXJ0eSUyMGJhbGxvb25zfGVufDF8fHx8MTc2NzA4OTI1OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral' },
    { id: 3, name: 'Party Decoration Kit', description: 'Complete decoration package', price: '₹3,750', imageUrl: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXJ0eSUyMGJhbGxvb25zfGVufDF8fHx8MTc2NzA4OTI1OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral' },
    { id: 4, name: 'Tablecloth & Napkins Set', description: 'Themed party tableware', price: '₹1,500', imageUrl: 'https://images.unsplash.com/photo-1628753611124-5d20c4f3e177?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXJ0eSUyMGhhdHMlMjBjYXBzfGVufDF8fHx8MTc2NzA4OTI1OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral' },
  ];

  return (
    <div className="min-h-screen pt-20 bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">
      {/* Header */}
      <section className="relative py-32 bg-gradient-to-r from-amber-100 to-orange-100">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23f59e0b%22%20fill-opacity%3D%220.03%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%224%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-2 text-amber-600 text-sm tracking-widest uppercase font-medium mb-4 block">
            Sweet Treats & Essentials
          </span>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-serif text-gray-800 mb-6 tracking-tight">
            Our Products
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-orange-400 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Premium chocolates, delightful candies, and everything you need to make your celebration extraordinary
          </p>
        </div>
      </section>

      {/* Features Bar */}
      <div className="bg-white/10 backdrop-blur-xl border-y border-white/20 py-6 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-8">
            {[
              { icon: Gift, text: 'Gift Wrapping Available' },
              { icon: Star, text: 'Premium Quality' },
              { icon: ShoppingBag, text: 'Easy Ordering' },
              { icon: Gift, text: 'Handpicked Selection' }
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-2 text-gray-600 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                <item.icon className="w-5 h-5 text-amber-600" />
                <span className="text-sm">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Products Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="chocolates" className="w-full">
            <TabsList className="grid w-full max-w-lg mx-auto grid-cols-3 mb-16 h-auto p-1 bg-gray-100 border border-gray-200 shadow-sm">
              <TabsTrigger
                value="chocolates"
                className="text-sm tracking-wide uppercase data-[state=active]:bg-amber-600 data-[state=active]:text-white py-4 rounded-md transition-all duration-300"
              >
                <span className="flex items-center gap-2">
                  <Gift className="w-4 h-4" />
                  Chocolates
                </span>
              </TabsTrigger>
              <TabsTrigger
                value="candies"
                className="text-sm tracking-wide uppercase data-[state=active]:bg-amber-600 data-[state=active]:text-white py-4 rounded-md transition-all duration-300"
              >
                <span className="flex items-center gap-2">
                  <Star className="w-4 h-4" />
                  Candies
                </span>
              </TabsTrigger>
              <TabsTrigger
                value="party"
                className="text-sm tracking-wide uppercase data-[state=active]:bg-amber-600 data-[state=active]:text-white py-4 rounded-md transition-all duration-300"
              >
                <span className="flex items-center gap-2">
                  <ShoppingBag className="w-4 h-4" />
                  Party Supplies
                </span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="chocolates">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {chocolates.map((product) => (
                  <ProductCard key={product.id} name={product.name} description={product.description} price={product.price} imageUrl={product.imageUrl} onOrder={onOrder} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="candies">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {candies.map((product) => (
                  <ProductCard key={product.id} name={product.name} description={product.description} price={product.price} imageUrl={product.imageUrl} onOrder={onOrder} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="party">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {partySupplies.map((product) => (
                  <ProductCard key={product.id} name={product.name} description={product.description} price={product.price} imageUrl={product.imageUrl} onOrder={onOrder} />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  );
}
