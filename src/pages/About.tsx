import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Users, Award, Globe } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-hero bg-clip-text text-transparent">
              About Alignz Exports
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Crafting premium leather garments for over two decades with uncompromising quality and traditional Indian craftsmanship.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Founded in 1998, Alignz Exports began as a small family-owned leather workshop in the heart of India's leather manufacturing hub. What started as a passion for traditional craftsmanship has evolved into a globally recognized manufacturer of premium leather garments.
                </p>
                <p>
                  Our journey has been defined by our commitment to quality, innovation, and ethical manufacturing practices. We blend time-honored Indian leather crafting techniques with modern technology to create garments that meet international standards.
                </p>
                <p>
                  Today, we proudly serve clients across 40+ countries, maintaining our core values of excellence, integrity, and customer satisfaction in every piece we create.
                </p>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/src/assets/manufacturing.jpg" 
                alt="Alignz Exports manufacturing facility" 
                className="rounded-lg shadow-soft"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Company Stats */}
      <section className="py-16 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">25+</div>
              <div className="text-muted-foreground">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">40+</div>
              <div className="text-muted-foreground">Countries Served</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">500K+</div>
              <div className="text-muted-foreground">Garments Produced</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">150+</div>
              <div className="text-muted-foreground">Skilled Craftsmen</div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Values</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              These core principles guide everything we do, from sourcing materials to delivering finished products.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card>
              <CardContent className="p-6 text-center">
                <Award className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Quality Excellence</h3>
                <p className="text-sm text-muted-foreground">
                  Uncompromising commitment to the highest quality standards in every garment we produce.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6 text-center">
                <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Ethical Manufacturing</h3>
                <p className="text-sm text-muted-foreground">
                  Fair labor practices and sustainable manufacturing processes that respect our workers and environment.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6 text-center">
                <Globe className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Global Standards</h3>
                <p className="text-sm text-muted-foreground">
                  Meeting and exceeding international quality and compliance standards for global markets.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6 text-center">
                <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Local Heritage</h3>
                <p className="text-sm text-muted-foreground">
                  Preserving and celebrating traditional Indian leather craftsmanship in every piece we create.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Work With Us?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Experience the difference that 25+ years of expertise and Indian craftsmanship can make for your brand.
          </p>
          <Button variant="secondary" size="lg">
            Get Your Quote Today
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;