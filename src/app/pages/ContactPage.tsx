import { Phone, Mail, MapPin, Clock, Facebook, Instagram, MessageCircle } from 'lucide-react';
import { Button } from '../components/ui/button';

interface ContactPageProps {
  onWhatsAppClick: () => void;
}

export function ContactPage({ onWhatsAppClick }: ContactPageProps) {
  return (
    <div className="min-h-screen pt-20 bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">
      {/* Hero */}
      <section className="relative py-32 bg-gradient-to-r from-amber-100 to-orange-100">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23f59e0b%22%20fill-opacity%3D%220.03%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%224%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-amber-600 text-sm tracking-widest uppercase font-medium mb-4 block">
            Connect With Us
          </span>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-serif text-gray-800 mb-6 tracking-tight">
            Get In Touch
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-orange-400 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            We'd love to hear from you. Contact us for orders, custom requests, or any inquiries
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-28 bg-white">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Details */}
            <div className="space-y-10">
              <div>
                <span className="text-amber-600 text-sm tracking-widest uppercase font-medium mb-6 block">
                  Contact Information
                </span>
                <h2 className="text-3xl font-serif text-gray-800 mb-8 tracking-tight">We'd Love to Hear From You</h2>

                <div className="space-y-6">
                  {[
                    { icon: Phone, label: 'Phone', value: '+1 (234) 567-8900', href: 'tel:+1234567890' },
                    { icon: Mail, label: 'Email', value: 'hello@oncemore.com', href: 'mailto:hello@oncemore.com' },
                    { icon: MapPin, label: 'Address', value: '123 Baker Street, Sweet Town, ST 12345' },
                    { icon: Clock, label: 'Business Hours', value: 'Mon - Fri: 9:00 AM - 6:00 PM\nSat: 10:00 AM - 4:00 PM\nSun: Closed' }
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-5 p-5 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 shadow-2xl hover:bg-white/15 hover:shadow-3xl transition-all duration-300"
                    >
                      <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-amber-100 to-orange-100 rounded-full flex items-center justify-center">
                        <item.icon className="w-6 h-6 text-amber-600" />
                      </div>
                      <div>
                        <p className="text-gray-800 font-medium mb-1">{item.label}</p>
                        {item.href ? (
                          <a href={item.href} className="text-gray-600 hover:text-amber-600 text-lg transition-colors leading-relaxed">
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-gray-600 text-lg leading-relaxed whitespace-pre-line">
                            {item.value}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-serif text-gray-800 mb-5 font-medium">Follow Us</h3>
                <div className="flex gap-4">
                  {[
                    { icon: Facebook, label: 'Facebook', href: 'https://facebook.com' },
                    { icon: Instagram, label: 'Instagram', href: 'https://instagram.com' }
                  ].map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-14 h-14 bg-gradient-to-br from-amber-100 to-orange-100 rounded-full flex items-center justify-center hover:bg-amber-600 hover:text-white transition-all duration-300 group"
                      aria-label={social.label}
                    >
                      <social.icon className="w-6 h-6 group-hover:scale-110 transition-transform" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Order Card */}
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-10 shadow-2xl border border-white/20 h-fit">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-amber-100 to-orange-100 rounded-full flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-amber-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-serif text-gray-800 tracking-tight">Ready to Order?</h3>
                  <p className="text-gray-600 text-sm">Quick & Easy</p>
                </div>
              </div>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Click the button below to send us a message on WhatsApp. We'll respond quickly to help you place your order and answer any questions!
              </p>
              <Button
                size="lg"
                onClick={onWhatsAppClick}
                className="w-full bg-amber-600 hover:bg-amber-700 text-white mb-10 py-6 text-base rounded-md transition-all duration-300 hover:shadow-lg"
              >
                Order via WhatsApp
              </Button>

              <div className="pt-8 border-t border-gray-200">
                <h4 className="text-lg font-serif text-gray-800 mb-5 font-medium">
                  Order Requirements
                </h4>
                <ul className="space-y-4 text-gray-600">
                  {[
                    'Orders should be placed at least 48 hours in advance',
                    'Custom cakes require 5-7 days notice',
                    'Complimentary delivery on orders over $100',
                    'Same-day delivery available for select items'
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-5 h-5 rounded-full bg-amber-100 flex items-center justify-center text-amber-600 text-sm mt-0.5">✓</span>
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map placeholder */}
      <section className="py-20 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white/10 backdrop-blur-xl rounded-2xl h-96 shadow-2xl border border-white/20 flex flex-col items-center justify-center relative overflow-hidden">
            <div className="relative z-10 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-100 to-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-amber-600" />
              </div>
              <p className="text-gray-600 text-lg">Visit Our Store</p>
              <p className="text-gray-800 font-medium mt-2">123 Baker Street, Sweet Town, ST 12345</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
