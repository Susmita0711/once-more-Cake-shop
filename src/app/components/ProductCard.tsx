import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ShoppingBag, Gift } from 'lucide-react';

export interface ProductCardProps {
  name: string;
  description: string;
  price: string;
  imageUrl: string;
  onOrder: (productName: string, productPrice: string) => void;
}

export function ProductCard({ name, description, price, imageUrl, onOrder }: ProductCardProps) {
  return (
    <Card className="group relative overflow-hidden transition-all duration-500 bg-white border-0 shadow-soft hover:shadow-gold-xl">
      <div className="absolute inset-0 bg-gradient-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="relative h-64 overflow-hidden">
        <ImageWithFallback 
          src={imageUrl} 
          alt={name}
          className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-70" />
        <div className="absolute top-4 right-4 w-10 h-10 bg-gradient-gold rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-50 group-hover:scale-100 flex items-center justify-center">
          <Gift className="w-5 h-5 text-foreground" />
        </div>
      </div>
      <CardContent className="relative p-6">
        <h3 className="text-lg mb-2 text-foreground font-serif tracking-tight group-hover:text-gradient-gold transition-all duration-300">{name}</h3>
        <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{description}</p>
        <div className="flex items-center justify-between pt-3 border-t border-border/50 group-hover:border-accent/30 transition-colors duration-300">
          <div className="flex flex-col">
            <span className="text-xs text-muted-foreground uppercase tracking-wide">Price</span>
            <span className="text-2xl text-gradient-gold font-semibold tracking-tight">{price}</span>
          </div>
          <Button 
            onClick={() => onOrder(name, price)}
            size="sm"
            className="relative overflow-hidden bg-accent hover:bg-accent/90 text-accent-foreground px-4 py-2 rounded-md transition-all duration-300 hover:shadow-gold group/btn"
          >
            <span className="relative z-10 flex items-center gap-1">
              <ShoppingBag className="w-4 h-4" />
              Order
            </span>
          </Button>
        </div>
      </CardContent>
      <div className="absolute inset-0 border-2 border-accent/0 group-hover:border-accent/20 rounded-lg transition-all duration-500 pointer-events-none" />
    </Card>
  );
}
