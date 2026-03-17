import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { useStaggerReveal } from '../../utils/gsap';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { Calendar, Cake, Users, Gift, Bookmark, ChevronRight } from 'lucide-react';

export function BlogPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const postsRef = useRef<HTMLDivElement>(null);

  useStaggerReveal(postsRef as React.MutableRefObject<HTMLDivElement>);

  const posts = [
    {
      id: 1,
      title: 'Top Cake Trends for 2025',
      excerpt: 'Discover the hottest cake designs and flavors that will dominate celebrations next year.',
      image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWtlcnklMjBjYWtlcyUyMHRyZW5kc3xlbnwxfHx8fDE3NjcwMTU5NTF8MA&ixlib=rb-4.1.0&q=80&w=1080',
      date: 'Dec 15, 2024',
      category: 'Trends',
      readTime: '5 min'
    },
    {
      id: 2,
      title: 'Perfect Wedding Cakes Guide',
      excerpt: 'Everything you need to know about choosing the perfect cake for your big day.',
      image: 'https://images.unsplash.com/photo-1535254973040-607b474cb50d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwY2FrZXxlbnwxfHx8fDE3NjcwMTY4NDN8MA&ixlib=rb-4.1.0&q=80&w=1080',
      date: 'Nov 28, 2024',
      category: 'Weddings',
      readTime: '8 min'
    },
    {
      id: 3,
      title: 'How to Order Custom Cakes',
      excerpt: 'Step-by-step guide to ordering your dream cake with perfect timing and details.',
      image: 'https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaG9jb2xhdGUlMjBjYWtlfGVufDF8fHx8MTc2NzAyOTE2NHww&ixlib=rb-4.1.0&q=80&w=1080',
      date: 'Nov 20, 2024',
      category: 'Guides',
      readTime: '4 min'
    },
    {
      id: 4,
      title: 'Best Birthday Cake Flavors',
      excerpt: 'Our top recommendations for birthday cakes that will make everyone happy.',
      image: 'https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiaXJ0aGRheSUyMGNha2V8ZW58MXx8fHwxNzY2OTk5Mjk3fDA&ixlib=rb-4.1.0&q=80&w=1080',
      date: 'Nov 10, 2024',
      category: 'Birthdays',
      readTime: '6 min'
    },
    {
      id: 5,
      title: 'Chocolate Making Secrets',
      excerpt: 'Behind-the-scenes look at how we craft our premium chocolate collections.',
      image: 'https://images.unsplash.com/photo-1720924109595-161e675c792f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYW5keSUyMHN3ZWV0c3xlbnwxfHx8fDE3NjcwMTYwMzV8MA&ixlib=rb-4.1.0&q=80&w=1080',
      date: 'Oct 25, 2024',
      category: 'Chocolates',
      readTime: '7 min'
    },
    {
      id: 6,
      title: 'Party Planning Essentials',
      excerpt: 'Complete guide to party supplies and how to create unforgettable celebrations.',
      image: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXJ0eSUyMGJhbGxvb25zfGVufDF8fHx8MTc2NzA4OTI1OHww&ixlib=rb-4.1.0&q=80&w=1080',
      date: 'Oct 15, 2024',
      category: 'Parties',
      readTime: '5 min'
    }
  ];

  const categories = ['All', 'Trends', 'Weddings', 'Guides', 'Birthdays', 'Chocolates', 'Parties'];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section ref={heroRef} className="relative py-32 bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="blog-pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle cx="10" cy="10" r="1" fill="#f59e0b" opacity="0.3"/>
                <circle cx="2" cy="18" r="0.5" fill="#d97706" opacity="0.2"/>
                <circle cx="18" cy="5" r="0.5" fill="#d97706" opacity="0.2"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#blog-pattern)"/>
          </svg>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-2 text-amber-700 text-sm tracking-[0.3em] uppercase font-medium mb-6">
            <Bookmark className="w-5 h-5" />
            Insights & Inspiration
          </span>
          <h1 className="text-5xl sm:text-6xl md:text-7xl text-gray-900 mb-6 tracking-tight">
            Blog & Stories
          </h1>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed">
            Fresh baking tips, celebration ideas, and behind-the-scenes stories from Once More
          </p>
        </div>
      </section>

      {/* Posts Grid */}
      <section ref={postsRef} className="py-24 bg-gradient-to-br from-amber-50/50 via-white to-orange-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl text-gray-900 mb-6 tracking-tight">Latest Articles</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-orange-500 mx-auto rounded-full" />
          </div>

          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid w-full grid-cols-4 lg:grid-cols-7 gap-1 max-w-4xl mx-auto mb-20 bg-white/10 backdrop-blur-xl shadow-2xl border border-white/20 p-2 rounded-2xl justify-items-center">
              {categories.slice(0, 4).map((category) => (
                <TabsTrigger 
                  key={category} 
                  value={category.toLowerCase()} 
                  className="text-xs lg:text-sm tracking-wide uppercase data-[state=active]:bg-gradient-to-r data-[state=active]:from-amber-400 data-[state=active]:to-orange-500 data-[state=active]:text-white py-3 px-3 rounded-xl transition-all flex items-center gap-1 h-auto"
                >
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>

            <TabsContent value="all" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {posts.map((post) => (
                  <Card key={post.id} className="group overflow-hidden bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl hover:shadow-3xl hover:bg-white/15 transition-all duration-300">
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-amber-500/90 text-white text-xs font-medium rounded-full uppercase tracking-wide">
                          {post.category}
                        </span>
                      </div>
                    </div>
                    <CardHeader className="p-6 pb-3">
                      <div className="flex items-center gap-4 text-xs text-gray-500 mb-2">
                        <Calendar className="w-3 h-3" />
                        {post.date} • {post.readTime}
                      </div>
                      <CardTitle className="text-xl leading-tight group-hover:text-amber-600 transition-colors line-clamp-2">
                        {post.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-6 pt-0">
                      <CardDescription className="line-clamp-2 mb-6 text-sm text-gray-600">{post.excerpt}</CardDescription>
                      <Button variant="ghost" asChild className="gap-2 h-auto p-0 font-medium text-amber-600 hover:text-amber-700">
                        <Link to={`/blog/${post.id}`} className="flex items-center">
                          Read More
                          <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>

          <div className="text-center mt-20">
            <Button size="lg" className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white px-8 py-6 text-base rounded-xl shadow-lg hover:shadow-xl transition-all">
              View All Posts
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
