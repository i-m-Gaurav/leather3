import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Factory, Users, Globe, CheckCircle } from "lucide-react";
import manufacturingImage from "@/assets/manufacturing.jpg";

const Capabilities = () => {
  const stats = [
    { label: "Annual Production Capacity", value: "250,000+", unit: "Garments", progress: 100 },
    { label: "Quality Control Rate", value: "99.8%", unit: "Pass Rate", progress: 99.8 },
    { label: "Export Markets", value: "50+", unit: "Countries", progress: 85 },
    { label: "Product Development Time", value: "7-14", unit: "Days", progress: 90 }
  ];

  const capabilities = [
    {
      icon: Factory,
      title: "Manufacturing Excellence",
      description: "State-of-the-art facility with advanced machinery and quality control systems"
    },
    {
      icon: Users,
      title: "Skilled Workforce",
      description: "Expert craftspeople with decades of experience in leather garment production"
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Established export network serving clients across 50+ countries worldwide"
    },
    {
      icon: CheckCircle,
      title: "Quality Assurance",
      description: "Rigorous quality control at every stage ensuring premium finished products"
    }
  ];

  const specializations = [
    "Washed & Vintage Leather Treatments",
    "Perforated Leather Designs",
    "Suede & Nubuck Finishing",
    "Metallic & Special Effects",
    "Custom Color Matching",
    "Private Label Manufacturing"
  ];

  return (
    <section id="capabilities" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our{" "}
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              Capabilities
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Advanced manufacturing infrastructure combined with skilled craftsmanship 
            to deliver excellence at scale.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="border-border/50 hover:shadow-soft transition-smooth">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-accent mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground mb-4">{stat.unit}</div>
                <Progress value={stat.progress} className="h-2 mb-2" />
                <div className="text-xs text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Image */}
          <div className="relative">
            <img
              src={manufacturingImage}
              alt="Manufacturing facility"
              className="w-full h-96 object-cover rounded-2xl shadow-leather"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-leather/60 via-transparent to-transparent rounded-2xl"></div>
            <div className="absolute bottom-6 left-6 right-6">
              <div className="bg-background/90 backdrop-blur-sm p-4 rounded-lg">
                <h4 className="font-semibold text-foreground mb-2">
                  Modern Manufacturing Facility
                </h4>
                <p className="text-sm text-muted-foreground">
                  Advanced equipment and quality control systems ensure consistent excellence
                </p>
              </div>
            </div>
          </div>

          {/* Capabilities List */}
          <div className="space-y-6">
            {capabilities.map((capability, index) => (
              <div key={index} className="flex items-start space-x-4 p-4 bg-card rounded-lg border border-border/50">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-hero rounded-lg flex items-center justify-center">
                    <capability.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">
                    {capability.title}
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    {capability.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Specializations */}
        <Card className="border-border/50 bg-card">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
              Our Specializations
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {specializations.map((spec, index) => (
                <div key={index} className="flex items-center space-x-3 p-3 bg-muted/50 rounded-lg">
                  <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                  <span className="text-foreground font-medium">{spec}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Capabilities;