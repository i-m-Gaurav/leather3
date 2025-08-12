import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, Shield, Truck, Award } from "lucide-react";

const Products = () => {
  const productCategories = [
    {
      title: "Leather Jackets",
      description: "Premium motorcycle and fashion jackets crafted with precision",
      image: "/src/assets/product-jacket.jpg",
      features: ["Genuine leather", "Custom designs", "International quality", "Bulk orders"],
      priceRange: "$45-120",
      minOrder: "100 pieces"
    },
    {
      title: "Vintage Collection",
      description: "Classic designs with a timeless appeal for fashion brands",
      image: "/src/assets/vintage-collection.jpg", 
      features: ["Aged finish", "Retro styling", "Premium materials", "Custom branding"],
      priceRange: "$55-140",
      minOrder: "50 pieces"
    },
    {
      title: "Corporate Wear",
      description: "Professional leather garments for corporate and uniform needs",
      image: "/src/assets/manufacturing.jpg",
      features: ["Professional grade", "Consistent quality", "Bulk pricing", "Fast delivery"],
      priceRange: "$35-85",
      minOrder: "200 pieces"
    }
  ];

  const materials = [
    { name: "Sheep Leather", quality: "Premium", finish: "Soft & Supple" },
    { name: "Goat Leather", quality: "Luxury", finish: "Smooth & Durable" },
    { name: "Buffalo Leather", quality: "Heavy Duty", finish: "Strong & Rugged" },
    { name: "Synthetic Leather", quality: "Eco-Friendly", finish: "Vegan Alternative" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-hero bg-clip-text text-transparent">
              Our Product Range
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover our comprehensive collection of premium leather garments, crafted for global fashion brands and retailers.
            </p>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {productCategories.map((category, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-elegant transition-smooth">
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={category.image} 
                    alt={category.title}
                    className="w-full h-full object-cover hover:scale-105 transition-smooth"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-semibold">{category.title}</h3>
                    <Badge variant="secondary">{category.priceRange}</Badge>
                  </div>
                  <p className="text-muted-foreground mb-4">{category.description}</p>
                  
                  <div className="space-y-3 mb-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Min Order:</span>
                      <span className="font-medium">{category.minOrder}</span>
                    </div>
                  </div>
                  
                  <div className="space-y-2 mb-4">
                    {category.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm">
                        <Star className="h-4 w-4 text-primary mr-2" />
                        {feature}
                      </div>
                    ))}
                  </div>
                  
                  <Button className="w-full" variant="outline">
                    Request Samples
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Materials Section */}
      <section className="py-16 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Premium Materials</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We source the finest quality leather from trusted suppliers to ensure durability and luxury in every garment.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {materials.map((material, index) => (
              <Card key={index}>
                <CardContent className="p-6 text-center">
                  <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">{material.name}</h3>
                  <Badge variant="outline" className="mb-2">{material.quality}</Badge>
                  <p className="text-sm text-muted-foreground">{material.finish}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Features */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Choose Our Products</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <Award className="h-16 w-16 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Quality Assurance</h3>
              <p className="text-muted-foreground">
                Every garment undergoes rigorous quality checks to ensure it meets international standards.
              </p>
            </div>
            
            <div className="text-center">
              <Truck className="h-16 w-16 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Fast Delivery</h3>
              <p className="text-muted-foreground">
                Efficient production and logistics ensure your orders are delivered on time, every time.
              </p>
            </div>
            
            <div className="text-center">
              <Shield className="h-16 w-16 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Compliance Ready</h3>
              <p className="text-muted-foreground">
                All products meet international compliance standards for global market requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Place Your Order?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Get started with our premium leather products. Request samples or get a custom quote for your requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg">
              Request Samples
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
              Get Custom Quote
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Products;