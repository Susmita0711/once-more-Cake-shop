import React, { useEffect, useRef, useState } from 'react';
import { useStaggerReveal } from '../../utils/gsap';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Cake, Candy, PartyPopper, ArrowRight, Star, Clock, Heart, ChevronLeft, ChevronRight, Phone, MessageCircle, Award, Users, Truck } from 'lucide-react';
import { CakeCard } from '../components/CakeCard';
import { ProductCard } from '../components/ProductCard';
import type { CakeCardProps } from '../components/CakeCard';
import type { ProductCardProps } from '../components/ProductCard';

interface HomePageProps {
  onWhatsAppClick: () => void;
}

export function HomePage({ onWhatsAppClick }: HomePageProps) {
  const heroRef = useRef<HTMLDivElement>(null);
  const categoriesRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);
  const staggerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useStaggerReveal(staggerRef as React.MutableRefObject<HTMLDivElement>);

  // Scroll progress tracking
  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scroll = totalScroll / windowHeight;
      setScrollProgress(scroll);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % 5);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const categories = [
    {
      title: 'Custom Cakes',
      description: 'Handcrafted cakes for every celebration',
      icon: Cake,
      image: 'https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaG9jb2xhdGUlMjBjYWtlfGVufDF8fHx8MTc2NzAyOTE2NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      link: '/cakes'
    },
    {
      title: 'Chocolates & Candies',
      description: 'Premium chocolates and sweet treats',
      icon: Candy,
      image: 'https://images.unsplash.com/photo-1720924109595-161e675c792f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYW5keSUyMHN3ZWV0c3xlbnwxfHx8fDE3NjcwMTYwMzV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      link: '/products'
    },
    {
      title: 'Party Supplies',
      description: 'Everything you need for your celebration',
      icon: PartyPopper,
      image: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXJ0eSUyMGJhbGxvb25zfGVufDF8fHx8MTc2NzA4OTI1OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      link: '/products'
    }
  ];

  const features = [
    {
      icon: Star,
      title: 'Premium Quality',
      description: 'Only the finest, hand-selected ingredients for exceptional taste and quality'
    },
    {
      icon: Heart,
      title: 'Bespoke Designs',
      description: 'Personalized cakes and treats tailored to your unique vision'
    },
    {
      icon: Clock,
      title: 'Swift Delivery',
      description: 'Reliable and timely delivery to ensure perfect celebrations'
    },
    {
      icon: Heart,
      title: 'Crafted with Love',
      description: 'Every creation reflects dedication to artistry and passion'
    }
  ];

  return (
    <div className="relative min-h-screen">
      {/* Subtle page background pattern */}
      <div className="fixed inset-0 opacity-[0.015] pointer-events-none z-0">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,theme(colors.accent)_1px,transparent_1px),linear-gradient(-45deg,theme(colors.accent)_1px,transparent_1px)] bg-[length:20px_20px]" />
      </div>

      {/* Scroll Progress Indicator */}
      <div className="fixed top-0 left-0 w-full h-1 bg-accent/20 z-50">
        <div
          className="h-full bg-gradient-to-r from-accent to-accent/80 transition-all duration-300 ease-out"
          style={{ width: `${scrollProgress * 100}%` }}
        />
      </div>

      {/* Hero Section */}
      <section ref={heroRef} className="relative h-screen flex items-center overflow-hidden z-10">
        {/* Enhanced Background */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed transform scale-105"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1711672284661-bd70e38f31b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWtlcnklMjBzaG9wfGVufDF8fHx8MTc2NzAyNTY0OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral')`
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-black/85 via-black/70 to-black/50" />
          {/* Animated overlay elements */}
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl animate-pulse delay-1000" />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-accent/8 rounded-full blur-2xl animate-pulse delay-500" />
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 pointer-events-none">
          
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
          <div className="max-w-5xl">
            {/* Enhanced Badge */}
            <div className="reveal mb-8">
              <div className="inline-flex items-center gap-3 bg-white/20 backdrop-blur-xl border border-white/30 rounded-full px-6 py-3 shadow-2xl">
                <Award className="w-5 h-5 text-accent" />
                <span className="text-white text-sm tracking-[0.2em] uppercase font-medium">
                  Artisan Bakery & Party Supplies
                </span>
              </div>
            </div>

            {/* Enhanced Main Heading */}
            <h1 className="text-7xl sm:text-8xl md:text-9xl lg:text-[10rem] text-white mb-8 tracking-tight leading-[0.9] reveal font-bold">
              <span className="block">Once</span>
              <span className="block text-accent">
                More
              </span>
            </h1>

            {/* Enhanced Subtitle */}
            <p className="text-xl sm:text-2xl lg:text-3xl text-white/90 mb-12 leading-relaxed max-w-3xl reveal font-light" style={{ transitionDelay: '200ms' }}>
              Crafting unforgettable moments with <span className="text-accent font-semibold">custom cakes</span>,
              <span className="text-accent font-semibold"> premium chocolates</span>, and
              <span className="text-accent font-semibold"> curated party essentials</span>
            </p>

            {/* Enhanced CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 reveal" style={{ transitionDelay: '400ms' }}>
              <Button
                size="lg"
                onClick={onWhatsAppClick}
                className="bg-accent hover:bg-accent/90 text-accent-foreground px-10 py-8 text-lg rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              >
                <span className="flex items-center gap-3 font-semibold">
                  <MessageCircle className="w-6 h-6" />
                  Start Your Order
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Button>

              <Button
                size="lg"
                variant="outline"
                asChild
                className="bg-white/10 backdrop-blur-md text-white border-2 border-white/30 hover:bg-white/20 hover:border-accent/50 px-10 py-8 text-lg rounded-2xl transition-all duration-300 transform hover:scale-105"
              >
                <Link to="/cakes" className="flex items-center gap-3 font-semibold">
                  <Cake className="w-6 h-6" />
                  Explore Our Cakes
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center gap-8 mt-16 reveal" style={{ transitionDelay: '600ms' }}>
              <div className="flex items-center gap-2 text-white/80">
                <Users className="w-5 h-5 text-accent" />
                <span className="text-sm font-medium">5000+ Happy Customers</span>
              </div>
              <div className="flex items-center gap-2 text-white/80">
                <Award className="w-5 h-5 text-accent" />
                <span className="text-sm font-medium">Award Winning Bakery</span>
              </div>
              <div className="flex items-center gap-2 text-white/80">
                <Truck className="w-5 h-5 text-accent" />
                <span className="text-sm font-medium">Free Delivery</span>
              </div>
            </div>
          </div>
        </div>

      </section>

      {/* Enhanced Categories Section */}
      <section className="py-32 bg-gradient-to-br from-accent/5 via-background to-secondary/10 relative overflow-hidden z-10">
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_25%_25%,theme(colors.accent),transparent_50%)]" />
          <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_75%_75%,theme(colors.secondary),transparent_50%)]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-24">
            <div className="reveal">
              <span className="inline-flex items-center gap-2 bg-accent/10 text-accent text-sm tracking-[0.3em] uppercase font-semibold px-4 py-2 rounded-full mb-6">
                
                Our Collections
              </span>
            </div>
            <h2 className="text-5xl sm:text-6xl md:text-7xl text-foreground mb-8 tracking-tight reveal font-bold" style={{ transitionDelay: '100ms' }}>
              What We <span className="text-accent">Offer</span>
            </h2>
            <div className="divider-gold reveal mx-auto max-w-sm" style={{ transitionDelay: '200ms' }} />
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed reveal mt-6" style={{ transitionDelay: '300ms' }}>
              Discover our carefully curated selection of products, each crafted with exceptional care and attention to detail
            </p>
          </div>

          <div ref={staggerRef} className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {categories.map((category, index) => {
              const Icon = category.icon;
              return (
                <Card
                  key={index}
                  className="group relative overflow-hidden bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl hover:shadow-3xl hover:bg-white/15 transition-all duration-500 transform hover:scale-105 reveal"
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  {/* Image Container with Enhanced Effects */}
                  <div className="relative h-80 overflow-hidden">
                    <ImageWithFallback
                      src={category.image}
                      alt={category.title}
                      className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-70 group-hover:opacity-60 transition-opacity duration-500" />

                    <div className="absolute top-6 left-6 w-16 h-16 bg-white/95 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-2xl transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-12">
                      <Icon className="w-8 h-8 text-accent" />
                    </div>

                    <div className="absolute top-6 right-6 w-8 h-8 bg-accent/90 backdrop-blur-sm rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">{index + 1}</span>
                    </div>
                  </div>

                  <CardContent className="relative p-8">
                    <h3 className="text-2xl mb-4 text-foreground font-bold tracking-tight group-hover:text-accent transition-colors duration-300">
                      {category.title}
                    </h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed text-lg">
                      {category.description}
                    </p>
                    <Link to={category.link}>
                      <Button
                        variant="ghost"
                        className="group/btn p-0 h-auto text-accent hover:text-accent/80 font-semibold text-lg transition-all duration-300 hover:scale-105"
                      >
                        <span className="flex items-center gap-3">
                          Explore Collection
                          <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                        </span>
                      </Button>
                    </Link>
                  </CardContent>

                  {/* Enhanced Border Effect */}
                  <div className="absolute inset-0 border-2 border-accent/0 group-hover:border-accent/30 rounded-lg transition-all duration-500 pointer-events-none" />
                </Card>
              );
            })}
          </div>

          {/* Section CTA */}
          <div className="text-center mt-20 reveal" style={{ transitionDelay: '800ms' }}>
            <Button
              size="lg"
              asChild
              className="bg-gradient-to-r from-accent to-accent/90 hover:from-accent/90 hover:to-accent text-accent-foreground px-12 py-6 text-lg rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105"
            >
              <Link to="/products" className="flex items-center gap-3 font-semibold">
                <span>View All Collections</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Section Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent"></div>

      {/* Why Choose Us */}
      <section ref={featuresRef} className="py-28 bg-gradient-to-br from-secondary/15 via-background to-accent/8 relative overflow-hidden z-10">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-gold/50" />
        {/* Subtle geometric pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute top-20 left-20 w-32 h-32 border border-accent/30 rounded-full" />
          <div className="absolute bottom-20 right-20 w-24 h-24 border border-secondary/40 rounded-full" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 border border-accent/20 rounded-full" />
        </div>
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-72 h-72 bg-accent rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="reveal">
              <span className="text-accent text-sm tracking-[0.3em] uppercase font-medium mb-4">
                Our Promise
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl text-foreground mb-6 tracking-tight reveal" style={{ transitionDelay: '100ms' }}>
              The Once More Difference
            </h2>
            <div className="divider-gold reveal" style={{ transitionDelay: '200ms' }} />
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div 
                    key={index} 
                    className={`flex gap-6 p-6 bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl shadow-2xl hover:bg-white/15 hover:shadow-3xl transition-all duration-500 reveal ${index % 2 === 0 ? 'reveal-left' : 'reveal-right'}`}
                    style={{ transitionDelay: `${index * 150}ms` }}
                  >
                    <div className="flex-shrink-0 w-14 h-14 bg-gradient-gold/10 rounded-full flex items-center justify-center group-hover:bg-gradient-gold/20 transition-all duration-500">
                      <Icon className="w-7 h-7 text-accent" />
                    </div>
                    <div>
                      <h3 className="text-xl mb-2 text-foreground font-serif group-hover:text-gradient-gold transition-all duration-300">{feature.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="relative reveal-right" style={{ transitionDelay: '400ms' }}>
              <div className="relative h-[600px] rounded-lg overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-gradient-gold/10 z-10" />
                <img 
                  src="https://images.unsplash.com/photo-1535254973040-607b474cb50d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwY2FrZXxlbnwxfHx8fDE3NjcwMTY4NDN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Beautiful wedding cake"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
              {/* Decorative Corner */}

            </div>
          </div>
        </div>
      </section>

      {/* Section Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-secondary/30 to-transparent"></div>

      {/* Featured Products Grid */}
      <section className="py-28 bg-gradient-cream relative z-10">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-gold" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <span className="text-accent text-sm tracking-[0.3em] uppercase font-medium mb-6">
              Featured Collection
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl text-foreground mb-6 tracking-tight">
              Best Sellers
            </h2>
            <div className="divider-gold mx-auto max-w-sm" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mt-6 leading-relaxed">
              Our most popular cakes, chocolates, and party favorites
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            <CakeCard 
              name="Chocolate Dream" 
              description="Rich dark chocolate ganache cake" 
              price="₹3,750"
              imageUrl="https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
              onOrder={onWhatsAppClick}
            />
            <ProductCard 
              name="Dark Chocolate Box" 
              description="12-piece premium truffles" 
              price="₹1,500"
              imageUrl="https://images.unsplash.com/photo-1578985545062-69928b1d9587?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
              onOrder={onWhatsAppClick}
            />
            <CakeCard 
              name="Strawberry Delight" 
              description="Fresh strawberries with vanilla cream" 
              price="₹4,200"
              imageUrl="https://images.unsplash.com/photo-1602663491496-73f07481dbea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
              onOrder={onWhatsAppClick}
            />
            <ProductCard 
              name="Gummy Bears Mix" 
              description="Organic fruit gummies - 6 flavors" 
              price="₹450"
              imageUrl="https://images.unsplash.com/photo-1582131726694-b7a5a8542b95?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
              onOrder={onWhatsAppClick}
            />
            <CakeCard 
              name="Wedding Elegance" 
              description="Multi-tier masterpiece" 
              price="₹29,000"
              imageUrl="https://images.unsplash.com/photo-1535254973040-607b474cb50d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
              onOrder={onWhatsAppClick}
            />
            <ProductCard 
              name="Party Hats Set" 
              description="Premium metallic foil hats (12)" 
              price="₹1,250"
              imageUrl="https://images.unsplash.com/photo-1628753611124-5d20c4f3e177?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
              onOrder={onWhatsAppClick}
            />
          </div>

          <div className="text-center mt-16">
            <Button size="lg" asChild className="bg-accent hover:bg-accent/90 text-accent-foreground px-10 py-6 text-lg rounded-xl shadow-gold-lg hover:shadow-gold-xl">
              <Link to="/products">View All Products</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Section Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-accent/15 to-transparent"></div>

      {/* Enhanced Testimonials Section */}
      <section className="py-32 bg-gradient-to-br from-accent/8 via-secondary/12 to-background relative overflow-hidden z-10">
        {/* Enhanced Background */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-32 left-20 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-32 right-20 w-80 h-80 bg-secondary/15 rounded-full blur-3xl animate-pulse delay-1000" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-accent/10 rounded-full blur-2xl animate-pulse delay-500" />
        </div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="reveal">
              <span className="inline-flex items-center gap-2 bg-accent/10 text-accent text-sm tracking-[0.3em] uppercase font-semibold px-4 py-2 rounded-full mb-6">
                <Star className="w-4 h-4 fill-current" />
                What Our Customers Say
              </span>
            </div>
          <h2 className="text-5xl sm:text-6xl md:text-7xl text-foreground mb-8 tracking-tight reveal font-bold" style={{ transitionDelay: '100ms' }}>
              Happy <span className="text-accent">Celebrations</span>
            </h2>
            <div className="divider-gold reveal mx-auto max-w-sm" style={{ transitionDelay: '200ms' }} />
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed reveal mt-6" style={{ transitionDelay: '300ms' }}>
              Real stories from our satisfied customers who made their special moments unforgettable
            </p>
          </div>

          <div className="reveal" style={{ transitionDelay: '400ms' }}>
            <div className="relative max-w-4xl mx-auto">
              {/* Enhanced Carousel */}
              <div className="relative overflow-hidden rounded-3xl bg-white/10 backdrop-blur-xl shadow-2xl border border-white/30">
                <div
                  className="flex transition-transform duration-700 ease-in-out"
                  style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
                >
                  {[
                    {
                      quote: "The wedding cake was absolutely breathtaking! Everyone was talking about it for weeks. The attention to detail and the taste were phenomenal.",
                      author: "Priya Sharma",
                      role: "Bride",
                      rating: 5,
                      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=120&h=120"
                    },
                    {
                      quote: "Best chocolate box I've ever tasted. Perfect for gifting and they arrived beautifully packed. The presentation was as impressive as the quality.",
                      author: "Rahul Patel",
                      role: "Corporate Client",
                      rating: 5,
                      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=120&h=120"
                    },
                    {
                      quote: "Our birthday party was a hit thanks to the amazing cake and decorations. The kids were thrilled and so were all the adults. Highly recommend!",
                      author: "Neha Gupta",
                      role: "Mother",
                      rating: 5,
                      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=120&h=120"
                    },
                    {
                      quote: "Professional service and stunning custom designs. Will definitely order again. The team was responsive and made the entire process enjoyable.",
                      author: "Amit Singh",
                      role: "Event Planner",
                      rating: 5,
                      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=120&h=120"
                    },
                    {
                      quote: "The cupcakes were fresh and delicious. Perfect for our office celebration! Everyone loved them and we got so many compliments.",
                      author: "Sonia Mehra",
                      role: "Office Manager",
                      rating: 5,
                      avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=120&h=120"
                    }
                  ].map((testimonial, index) => (
                    <div key={index} className="w-full flex-shrink-0 p-8 md:p-12">
                      <div className="text-center">
                        {/* Rating Stars */}
                        <div className="flex justify-center gap-1 mb-8">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="w-6 h-6 text-accent fill-accent animate-pulse" style={{ animationDelay: `${i * 100}ms` }} />
                          ))}
                        </div>

                        {/* Quote */}
                        <blockquote className="text-2xl md:text-3xl text-foreground/90 italic leading-relaxed mb-12 font-light">
                          "{testimonial.quote}"
                        </blockquote>

                        {/* Author Info */}
                        <div className="flex items-center justify-center gap-6">
                          <img
                            src={testimonial.avatar}
                            alt={testimonial.author}
                            className="w-16 h-16 rounded-full object-cover ring-4 ring-accent/20 shadow-lg"
                          />
                          <div className="text-left">
                            <h4 className="font-bold text-foreground text-xl">{testimonial.author}</h4>
                            <p className="text-muted-foreground font-medium">{testimonial.role}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Enhanced Navigation */}
                <div className="absolute left-6 top-1/2 -translate-y-1/2 z-10">
                  <button
                    onClick={() => setCurrentTestimonial((prev) => (prev - 1 + 5) % 5)}
                    className="w-12 h-12 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 text-accent hover:text-accent/80"
                    aria-label="Previous testimonial"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                </div>
                <div className="absolute right-6 top-1/2 -translate-y-1/2 z-10">
                  <button
                    onClick={() => setCurrentTestimonial((prev) => (prev + 1) % 5)}
                    className="w-12 h-12 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 text-accent hover:text-accent/80"
                    aria-label="Next testimonial"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </div>

                {/* Dots Indicator */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3">
                  {[...Array(5)].map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentTestimonial(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === currentTestimonial
                          ? 'bg-accent scale-125'
                          : 'bg-accent/30 hover:bg-accent/50'
                      }`}
                      aria-label={`Go to testimonial ${index + 1}`}
                    />
                  ))}
                </div>
              </div>

              {/* Trust Metrics */}
              <div className="grid grid-cols-3 gap-8 mt-16 text-center">
                <div className="reveal p-6 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl" style={{ transitionDelay: '500ms' }}>
                  <div className="text-4xl font-bold text-accent mb-2">5000+</div>
                  <div className="text-muted-foreground font-medium">Happy Customers</div>
                </div>
                <div className="reveal p-6 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl" style={{ transitionDelay: '600ms' }}>
                  <div className="text-4xl font-bold text-accent mb-2">4.9★</div>
                  <div className="text-muted-foreground font-medium">Average Rating</div>
                </div>
                <div className="reveal p-6 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl" style={{ transitionDelay: '700ms' }}>
                  <div className="text-4xl font-bold text-accent mb-2">98%</div>
                  <div className="text-muted-foreground font-medium">Satisfaction Rate</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Final CTA Section */}
      <section className="relative py-32 overflow-hidden z-10">
        {/* Dynamic Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-foreground via-foreground to-accent/30" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.05),transparent_50%)]" />

        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-96 h-96 bg-accent rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-accent rounded-full blur-3xl animate-pulse delay-1000" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-accent rounded-full blur-2xl animate-pulse delay-500" />
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-10 left-10 w-24 h-24 border-t-4 border-l-4 border-accent/30 rounded-tl-3xl" />
        <div className="absolute top-10 right-10 w-24 h-24 border-t-4 border-r-4 border-accent/30 rounded-tr-3xl" />
        <div className="absolute bottom-10 left-10 w-24 h-24 border-b-4 border-l-4 border-accent/30 rounded-bl-3xl" />
        <div className="absolute bottom-10 right-10 w-24 h-24 border-b-4 border-r-4 border-accent/30 rounded-br-3xl" />

        {/* Floating Icons */}
        <div className="absolute inset-0 pointer-events-none">
          
        </div>

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <div className="reveal mb-8">
            <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-3 mb-8">
              
              <span className="text-white text-sm tracking-[0.2em] uppercase font-medium">
                Ready to Create Magic?
              </span>
            </div>
          </div>

          <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white mb-8 tracking-tight reveal font-bold leading-[0.9]" style={{ transitionDelay: '100ms' }}>
            Let's Make Your
            <br />
            <span className="text-accent">
              Celebration
            </span>
            <br />
            Unforgettable
          </h2>

          <p className="text-xl sm:text-2xl text-white/80 mb-12 leading-relaxed max-w-3xl mx-auto reveal font-light" style={{ transitionDelay: '200ms' }}>
            Connect with us on WhatsApp for personalized consultations, custom orders, and quick responses to all your celebration needs
          </p>

          {/* Enhanced CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center reveal mb-16" style={{ transitionDelay: '300ms' }}>
            <Button
              size="lg"
              onClick={onWhatsAppClick}
              className="bg-accent hover:bg-accent/90 text-accent-foreground px-12 py-8 text-xl rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 min-w-[280px]"
            >
              <span className="flex items-center gap-3 font-bold">
              </span>
            </Button>

            <Button
              size="lg"
              variant="outline"
              asChild
              className="bg-white/10 backdrop-blur-md text-white border-2 border-white/40 hover:bg-white/20 hover:border-accent px-12 py-8 text-xl rounded-2xl transition-all duration-300 transform hover:scale-105 min-w-[280px]"
            >
              <Link to="/contact" className="flex items-center gap-3 font-bold">
                <Phone className="w-7 h-7" />
                Call Us Directly
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>

          {/* Contact Information */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto reveal" style={{ transitionDelay: '500ms' }}>
            <div className="bg-white/15 backdrop-blur-xl rounded-2xl p-6 border border-white/30 shadow-2xl hover:bg-white/20 transition-all duration-300">
              <MessageCircle className="w-8 h-8 text-accent mx-auto mb-4" />
              <h3 className="text-white font-semibold mb-2">WhatsApp</h3>
              <p className="text-white/80 text-sm">Instant responses & consultations</p>
            </div>
            <div className="bg-white/15 backdrop-blur-xl rounded-2xl p-6 border border-white/30 shadow-2xl hover:bg-white/20 transition-all duration-300">
              <Phone className="w-8 h-8 text-accent mx-auto mb-4" />
              <h3 className="text-white font-semibold mb-2">Phone</h3>
              <p className="text-white/80 text-sm">Direct line for urgent orders</p>
            </div>
            <div className="bg-white/15 backdrop-blur-xl rounded-2xl p-6 border border-white/30 shadow-2xl hover:bg-white/20 transition-all duration-300">
              <Clock className="w-8 h-8 text-accent mx-auto mb-4" />
              <h3 className="text-white font-semibold mb-2">24/7 Support</h3>
              <p className="text-white/80 text-sm">Always here for your celebrations</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
