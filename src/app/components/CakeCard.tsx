import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';

export interface CakeCardProps {
  name: string;
  description: string;
  price: string;
  imageUrl: string;
  onOrder: (cakeName: string, cakePrice: string) => void;
}

export function CakeCard({ name, description, price, imageUrl, onOrder }: CakeCardProps) {
  return (
    <Card className="group relative overflow-hidden transition-all duration-500 bg-white border-0 shadow-soft hover:shadow-gold-xl">
      {/* Golden Glow Effect */}
      <div className="absolute inset-0 bg-gradient-gold/10 opacity-100" />
      
      {/* Image Container */}
      <div className="relative h-72 overflow-hidden">
        <ImageWithFallback 
          src={imageUrl} 
          alt={name}
          className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
        
        {/* No badge/sparkle */}
      </div>
      
      <CardContent className="relative p-8">
        {/* Content */}
        <div className="relative z-10">
          <div className="flex items-start justify-between mb-3">
            <h3 className="text-2xl font-serif text-foreground hover:text-gradient-gold transition-colors duration-300">{name}</h3>
          </div>
          
          <p className="text-muted-foreground mb-6 leading-relaxed group-hover:text-muted-foreground/80 transition-colors">{description}</p>
          
          <div className="flex items-center justify-between pt-4 border-t border-border/50 group-hover:border-accent/30 transition-colors duration-300">
            <div className="flex flex-col">
              <span className="text-xs text-muted-foreground uppercase tracking-wide mb-1">Price</span>
              <span className="text-3xl font-serif text-gradient-gold font-semibold tracking-tight">{price}</span>
            </div>
            <Button 
              onClick={() => onOrder(name, price)}
              className="relative overflow-hidden bg-accent hover:bg-accent/90 text-accent-foreground px-6 py-2.5 rounded-md transition-all duration-300 hover:shadow-gold group/btn"
            >
              <span className="relative z-10">Order Now</span>
              <div className="absolute inset-0 bg-gradient-gold-light opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
            </Button>
          </div>
        </div>
      </CardContent>
      
      {/* Subtle border */}
      <div className="absolute inset-0 border border-accent/10 rounded-lg pointer-events-none" />
    </Card>
  );
}
