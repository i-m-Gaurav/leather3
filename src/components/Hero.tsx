import { Button } from "@/components/ui/button";
import { ArrowRight, Award, Users, Factory } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-leather-workshop.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Premium leather workshop"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-leather/80 via-primary/60 to-vintage/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-white">
            <div className="inline-flex items-center px-4 py-2 bg-accent/20 backdrop-blur-sm rounded-full text-accent font-medium text-sm mb-6 border border-accent/30">
              <Award className="mr-2 h-4 w-4" />
              Your trusted supplier since 1996
            </div>

            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              Crafting Excellence in{" "}
              <span className="bg-gradient-premium bg-clip-text text-transparent">
                Leather &amp; Outwear
              </span>
            </h1>

            <p className="text-xl text-gray-200 mb-8 leading-relaxed">
              We are a family-run business unit that manufactures and exports leather garments and outerwear (made from fabrics such as denim, canvas, twill, etc).
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">250K+</div>
                <div className="text-sm text-gray-300">Annual Capacity</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">25+</div>
                <div className="text-sm text-gray-300">Years OF Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">50+</div>
                <div className="text-sm text-gray-300">Countries Served</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/products">
                <Button variant="premium" size="xl" className="group">
                  Explore Collection
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/capabilities">
                <Button variant="elegant" size="xl">
                  View our infrastructure
                </Button>
              </Link>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-background/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
              <Factory className="h-12 w-12 text-accent mb-4" />
              <h3 className="text-white font-semibold text-lg mb-2">Modern Facility</h3>
              <p className="text-gray-200 text-sm">Quality control at each stage of the production process</p>
            </div>
            <div className="bg-background/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
              <Users className="h-12 w-12 text-accent mb-4" />
              <h3 className="text-white font-semibold text-lg mb-2">Expert Team</h3>
              <p className="text-gray-200 text-sm">Seasoned pattern masters &amp; skilled craftsmen with over two decades of hands-on experience</p>
            </div>
            <div className="bg-background/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 col-span-2">
              <Award className="h-12 w-12 text-accent mb-4" />
              <h3 className="text-white font-semibold text-lg mb-2">High-quality raw materials</h3>
              <p className="text-gray-200 text-sm">Specializing in lamb, goat, cow, and buff leather with vintage and metallic finishes</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
