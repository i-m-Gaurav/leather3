import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star } from "lucide-react";
import { Link } from "react-router-dom";
import productJacket from "@/assets/product-jacket.jpg";
import vintageCollection from "@/assets/vintage-collection.jpg";

const Products = () => {
  const productCategories = [
    {
      title: "Premium Leather Jackets",
      description: "Handcrafted leather jackets using finest lamb, goat, and cow leather",
      image: productJacket,
      features: ["Premium Leather", "Custom Fit", "Luxury Finish"]
    },
    {
      title: "Vintage Collection",
      description: "Specially washed and distressed leather with authentic vintage appeal",
      image: vintageCollection,
      features: ["Vintage Wash", "Distressed Look", "Authentic Feel"]
    },
    {
      title: "Specialty Designs",
      description: "Perforated, suede, and metallic leather garments for unique styling",
      image: productJacket,
      features: ["Perforated", "Suede Finish", "Metallic Designs"]
    }
  ];

  return (
    <section id="products" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-accent/10 rounded-full text-accent font-medium text-sm mb-6">
            <Star className="mr-2 h-4 w-4" />
            Our Product Range
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Crafted with{" "}
            <span className="bg-gradient-leather bg-clip-text text-transparent">
              Precision
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From premium leather jackets to specialty vintage collections, 
            every garment reflects our commitment to quality and craftsmanship.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {productCategories.map((product, index) => (
            <Card key={index} className="group overflow-hidden border-border/50 hover:shadow-leather transition-leather">
              <div className="relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-leather"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-leather/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex flex-wrap gap-2">
                    {product.features.map((feature, idx) => (
                      <span key={idx} className="px-3 py-1 bg-accent/20 backdrop-blur-sm text-accent text-xs font-medium rounded-full border border-accent/30">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {product.title}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {product.description}
                </p>
                <Link to="/products">
                  <Button variant="leather" className="w-full group">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Materials Section */}
        <div className="bg-card rounded-2xl p-8 border border-border/50">
          <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
            Premium Materials We Work With
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {["Lamb Leather", "Goat Leather", "Cow Leather", "Buff Leather"].map((material) => (
              <div key={material} className="text-center p-4 rounded-lg bg-muted/50">
                <div className="w-16 h-16 bg-gradient-leather rounded-full mx-auto mb-3 flex items-center justify-center">
                  <div className="w-8 h-8 bg-accent rounded-full"></div>
                </div>
                <h4 className="font-semibold text-foreground">{material}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;