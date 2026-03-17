import { Star, Heart, Clock, Award, Users } from 'lucide-react';

export function AboutPage() {
  const values = [
    {
      icon: Star,
      title: 'Quality First',
      description: 'We use only the finest ingredients and maintain the highest standards in everything we create.'
    },
    {
      icon: Heart,
      title: 'Made with Love',
      description: 'Every product is handcrafted with care, attention to detail, and genuine passion for what we do.'
    },
    {
      icon: Users,
      title: 'Customer Delight',
      description: 'Your happiness is our success. We go the extra mile to ensure you are completely satisfied.'
    }
  ];

  const features = [
    { icon: Award, title: 'Custom Designs', description: 'Work with our team to create personalized cakes and products that perfectly match your vision and theme.' },
    { icon: Clock, title: 'Reliable Delivery', description: 'We ensure your orders arrive fresh and on time, with careful handling and packaging for perfect condition.' },
    { icon: Award, title: 'Expert Bakers', description: 'Our experienced team brings years of expertise in baking, decorating, and creating memorable treats.' },
    { icon: Heart, title: 'Fresh Daily', description: 'Everything is made fresh to order - no pre-made items. You always get the freshest possible product.' }
  ];

  const milestones = [
    { year: '2015', title: 'Founded', description: 'Started as a small home bakery' },
    { year: '2018', title: 'First Store', description: 'Opened our first retail location' },
    { year: '2020', title: 'Expanded', description: 'Added party supplies to our catalog' },
    { year: '2024', title: 'Today', description: 'Serving thousands of happy customers' }
  ];

  return (
    <div className="min-h-screen pt-20 bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">
      {/* Hero */}
      <section className="relative py-32 bg-gradient-to-r from-amber-100 to-orange-100">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23f59e0b%22%20fill-opacity%3D%220.03%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%224%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-amber-600 text-sm tracking-widest uppercase font-medium mb-4 block">
            Our Story
          </span>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-serif text-gray-800 mb-6 tracking-tight">
            About Once More
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-orange-400 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Your trusted partner for celebrations and sweet moments since the beginning
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-28 bg-white">
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-amber-600 text-sm tracking-widest uppercase font-medium mb-4 block">
              Our Journey
            </span>
            <h2 className="text-4xl md:text-5xl font-serif text-gray-800 mb-6 tracking-tight">Our Story</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-orange-400 mx-auto"></div>
          </div>

          {/* Timeline */}
          <div className="relative max-w-3xl mx-auto">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-amber-200 to-orange-200"></div>
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center gap-8 ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}>
                  <div className="flex-1">
                    <div className={`${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                      <span className="text-3xl font-serif text-amber-600 font-bold">{milestone.year}</span>
                      <h4 className="text-xl text-gray-800 mt-2 mb-2 font-serif">{milestone.title}</h4>
                      <p className="text-gray-600 leading-relaxed">{milestone.description}</p>
                    </div>
                  </div>
                  <div className="relative z-10 w-4 h-4 bg-amber-400 rounded-full border-4 border-white shadow-md"></div>
                  <div className="flex-1"></div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16 max-w-3xl mx-auto space-y-6 text-gray-600 leading-relaxed text-lg">
            <p>
              Once More was founded with a simple vision: to bring joy to every celebration through quality baked goods and party essentials. What started as a small home bakery has grown into a beloved shop serving our community with passion and dedication.
            </p>
            <p>
              We believe that every celebration deserves to be special. That's why we pour our hearts into every cake we bake, every chocolate we craft, and every party supply we curate. Our team is committed to making your special moments truly memorable.
            </p>
            <p>
              Today, Once More is proud to offer a wide range of products - from custom cakes that become the centerpiece of your celebrations, to premium chocolates and candies that delight your taste buds, to party supplies that complete the perfect event setup.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-28 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-amber-600 text-sm tracking-widest uppercase font-medium mb-4 block">
              What We Stand For
            </span>
            <h2 className="text-4xl md:text-5xl font-serif text-gray-800 mb-6 tracking-tight">Our Values</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-orange-400 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="text-center p-8 bg-white/10 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/20 hover:bg-white/15 hover:shadow-3xl transition-all duration-300"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-amber-100 to-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-10 h-10 text-amber-600" />
                </div>
                <h3 className="text-2xl mb-4 text-gray-800 font-serif">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-28 bg-white">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-amber-600 text-sm tracking-widest uppercase font-medium mb-4 block">
              Why Choose Us
            </span>
            <h2 className="text-4xl md:text-5xl font-serif text-gray-800 mb-6 tracking-tight">What Makes Us Special</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-orange-400 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex gap-6 p-8 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 shadow-2xl hover:bg-white/15 hover:shadow-3xl transition-all duration-300"
              >
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-amber-100 to-orange-100 rounded-full flex items-center justify-center">
                  <feature.icon className="w-8 h-8 text-amber-600" />
                </div>
                <div>
                  <h3 className="text-xl mb-3 text-gray-800 font-serif">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
