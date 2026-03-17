import React from 'react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import {
  Card,
  CardContent
} from '../components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '../components/ui/carousel';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { Camera, Cake, Gift, Star, ChevronLeft, ChevronRight } from 'lucide-react';

export function GalleryPage() {
  const galleryImages = {
    cakes: [
      {
        src: 'https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaG9jb2xhdGUlMjBjYWtlfGVufDF8fHx8MTc2NzAyOTE2NHww&ixlib=rb-4.1.0&q=80&w=1080',
        alt: 'Chocolate Dream Cake',
        category: 'cakes'
      },
      {
        src: 'https://images.unsplash.com/photo-1535254973040-607b474cb50d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwY2FrZXxlbnwxfHx8fDE3NjcwMTY4NDN8MA&ixlib=rb-4.1.0&q=80&w=1080',
        alt: 'Wedding Elegance Multi-tier Cake',
        category: 'events'
      },
      {
        src: 'https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiaXJ0aGRheSUyMGNha2V8ZW58MXx8fHwxNzY2OTk5Mjk3fDA&ixlib=rb-4.1.0&q=80&w=1080',
        alt: 'Birthday Celebration Cake',
        category: 'cakes'
      },
      {
        src: 'https://images.unsplash.com/photo-1602663491496-73f07481dbea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHJhd2JlcnJ5JTIwY2FrZXxlbnwxfHx8fDE3NjcwNjMwNjh8MA&ixlib=rb-4.1.0&q=80&w=1080',
        alt: 'Strawberry Delight',
        category: 'cakes'
      },
      {
        src: 'https://images.unsplash.com/photo-1614707267537-b85aaf00c4b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdXBjYWtlc3xlbnwxfHx8fDE3NjcwODg1Mzd8MA&ixlib=rb-4.1.0&q=80&w=1080',
        alt: 'Cupcake Collection',
        category: 'products'
      }
    ],
    events: [
      {
        src: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587206?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbm5pdmVyc2FyeSUyMGNha2V8ZW58MXx8fHwxNzY3MDI1MjgwfDA&ixlib=rb-4.1.0&q=80&w=1080',
        alt: 'Anniversary Celebration Cake',
        category: 'events'
      },
      {
        src: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWJ5JTIwc2hvd2VyfGVufDF8fHx8MTc2NzAyNTcxNHww&ixlib=rb-4.1.0&q=80&w=1080',
        alt: 'Baby Shower Cake',
        category: 'events'
      },
      {
        src: 'https://images.unsplash.com/photo-1628258334167-d823360d3dba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaHJpc3RtYXMlMjBjYWtlfGVufDF8fHx8MTc2NzAyNTczN3ww&ixlib=rb-4.1.0&q=80&w=1080',
        alt: 'Christmas Cake',
        category: 'events'
      }
    ],
    products: [
      {
        src: 'https://images.unsplash.com/photo-1720924109595-161e675c792f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYW5keSUyMHN3ZWV0c3xlbnwxfHx8fDE3NjcwMTYwMzV8MA&ixlib=rb-4.1.0&q=80&w=1080',
        alt: 'Premium Chocolates',
        category: 'products'
      },
      {
        src: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXJ0eSUyMGJhbGxvb25zfGVufDF8fHx8MTc2NzA4OTI1OHww&ixlib=rb-4.1.0&q=80&w=1080',
        alt: 'Party Balloons',
        category: 'products'
      }
    ]
  };

  const allImages = Object.values(galleryImages).flat();

  return (
    <div className="min-h-screen pt-20 bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-r from-amber-100 to-orange-100">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23f59e0b%22%20fill-opacity%3D%220.03%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%224%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-2 text-amber-600 text-sm tracking-widest uppercase font-medium mb-4 block">
            <Camera className="w-4 h-4" />
            Our Creations
          </span>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-serif text-gray-800 mb-6 tracking-tight">
            Gallery
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-orange-400 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            A visual journey through our sweetest creations and memorable celebrations
          </p>
        </div>
      </section>

      {/* Featured Carousel */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-amber-600 text-sm tracking-widest uppercase font-medium mb-4 block">Featured Highlights</span>
            <h2 className="text-3xl md:text-4xl font-serif text-gray-800 mb-6 tracking-tight">Customer Favorites</h2>
            <div className="w-16 h-1 bg-gradient-to-r from-amber-400 to-orange-400 mx-auto"></div>
          </div>
          <Carousel className="w-full max-w-4xl mx-auto">
            <CarouselContent>
              {allImages.slice(0, 8).map((image, index) => (
                <CarouselItem key={index}>
                  <div className="p-1">
                    <Card className="border border-white/20 shadow-2xl hover:shadow-3xl transition-all duration-300 overflow-hidden bg-white/10 backdrop-blur-xl">
                      <ImageWithFallback
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-500"
                      />
                      <CardContent className="p-6">
                        <h3 className="text-lg font-serif text-gray-800 mb-2">{image.alt}</h3>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-24 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="cakes" className="w-full">
            <TabsList className="grid w-full grid-cols-3 max-w-md mx-auto mb-16 bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl p-1 rounded-xl">
              <TabsTrigger value="cakes" className="text-sm uppercase tracking-wide data-[state=active]:bg-amber-600 data-[state=active]:text-white py-4 rounded-lg transition-all duration-300 flex items-center gap-2">
                <Cake className="w-4 h-4" /> Cakes
              </TabsTrigger>
              <TabsTrigger value="events" className="text-sm uppercase tracking-wide data-[state=active]:bg-amber-600 data-[state=active]:text-white py-4 rounded-lg transition-all duration-300 flex items-center gap-2">
                <Star className="w-4 h-4" /> Events
              </TabsTrigger>
              <TabsTrigger value="products" className="text-sm uppercase tracking-wide data-[state=active]:bg-amber-600 data-[state=active]:text-white py-4 rounded-lg transition-all duration-300 flex items-center gap-2">
                <Gift className="w-4 h-4" /> Products
              </TabsTrigger>
            </TabsList>

            <TabsContent value="cakes" className="space-y-6">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {galleryImages.cakes.map((image, index) => (
                  <div key={`cakes-${index}`}>
                    <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 h-64">
                      <ImageWithFallback
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                        <h3 className="text-white text-sm font-medium drop-shadow-lg">{image.alt}</h3>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="events" className="space-y-6">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {galleryImages.events.map((image, index) => (
                  <div key={`events-${index}`}>
                    <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 h-64">
                      <ImageWithFallback
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                        <h3 className="text-white text-sm font-medium drop-shadow-lg">{image.alt}</h3>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="products" className="space-y-6">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {galleryImages.products.map((image, index) => (
                  <div key={`products-${index}`}>
                    <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 h-64">
                      <ImageWithFallback
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                        <h3 className="text-white text-sm font-medium drop-shadow-lg">{image.alt}</h3>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  );
}
