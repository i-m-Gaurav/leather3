import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { 
  Factory, 
  Users, 
  Globe, 
  Shield, 
  Zap, 
  Target, 
  Award,
  Truck,
  CheckCircle,
  Clock
} from "lucide-react";

const Capabilities = () => {
  const capabilities = [
    {
      icon: Factory,
      title: "State-of-the-Art Facility",
      description: "15,000 sq ft modern manufacturing facility equipped with latest machinery and technology for efficient production."
    },
    {
      icon: Users,
      title: "Skilled Workforce",
      description: "150+ trained craftsmen and quality controllers ensuring consistent high-quality output with attention to detail."
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Serving 40+ countries with established logistics network and international compliance certifications."
    },
    {
      icon: Shield,
      title: "Quality Assurance",
      description: "ISO certified processes with 99.2% quality approval rate and comprehensive testing protocols."
    }
  ];

  const productionCapabilities = [
    { process: "Cutting & Pattern Making", capacity: "2000 pieces/day", technology: "CAD/CAM Systems" },
    { process: "Stitching & Assembly", capacity: "1500 pieces/day", technology: "Industrial Machines" },
    { process: "Finishing & Quality Check", capacity: "1800 pieces/day", technology: "Automated Systems" },
    { process: "Packaging & Dispatch", capacity: "2500 pieces/day", technology: "Automated Packaging" }
  ];

  const certifications = [
    "ISO 9001:2015 Quality Management",
    "OEKO-TEX Standard 100",
    "REACH Compliance",
    "CE Marking Certification",
    "Global Organic Textile Standard",
    "Leather Working Group Certified"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-hero bg-clip-text text-transparent">
              Manufacturing Capabilities
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Advanced manufacturing infrastructure and expertise delivering world-class leather garments with precision and scale.
            </p>
          </div>
        </div>
      </section>

      {/* Key Statistics */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">50K+</div>
                <div className="text-sm text-muted-foreground mb-3">Monthly Capacity</div>
                <Progress value={95} className="h-2" />
                <div className="text-xs text-muted-foreground mt-2">95% Capacity Utilization</div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">99.2%</div>
                <div className="text-sm text-muted-foreground mb-3">Quality Rate</div>
                <Progress value={99} className="h-2" />
                <div className="text-xs text-muted-foreground mt-2">Industry Leading</div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">40+</div>
                <div className="text-sm text-muted-foreground mb-3">Export Markets</div>
                <Progress value={85} className="h-2" />
                <div className="text-xs text-muted-foreground mt-2">Global Presence</div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">25+</div>
                <div className="text-sm text-muted-foreground mb-3">Years Experience</div>
                <Progress value={100} className="h-2" />
                <div className="text-xs text-muted-foreground mt-2">Industry Veteran</div>
              </CardContent>
            </Card>
          </div>

          {/* Core Capabilities */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {capabilities.map((capability, index) => (
              <Card key={index} className="hover:shadow-elegant transition-smooth">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <capability.icon className="h-8 w-8 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{capability.title}</h3>
                      <p className="text-muted-foreground">{capability.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Production Line */}
      <section className="py-16 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Production Capabilities</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our streamlined production process ensures efficient manufacturing while maintaining the highest quality standards.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {productionCapabilities.map((item, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="font-semibold">{item.process}</h3>
                    <Badge variant="secondary">{item.capacity}</Badge>
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Zap className="h-4 w-4 mr-2" />
                    {item.technology}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quality & Compliance */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Quality Assurance</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Incoming Material Inspection</h3>
                    <p className="text-sm text-muted-foreground">All raw materials undergo thorough quality checks before production</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">In-Process Quality Control</h3>
                    <p className="text-sm text-muted-foreground">Continuous monitoring and inspection at every production stage</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Final Product Inspection</h3>
                    <p className="text-sm text-muted-foreground">Comprehensive final inspection before packaging and dispatch</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Customer Feedback Integration</h3>
                    <p className="text-sm text-muted-foreground">Continuous improvement based on customer feedback and requirements</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold mb-6">Certifications & Compliance</h2>
              <div className="grid grid-cols-1 gap-3">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 bg-card rounded-lg">
                    <Award className="h-5 w-5 text-primary" />
                    <span className="text-sm font-medium">{cert}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline & Delivery */}
      <section className="py-16 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Production Timeline</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Efficient production schedules ensuring timely delivery without compromising on quality.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6 text-center">
                <Clock className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Sample Development</h3>
                <div className="text-2xl font-bold text-primary mb-2">5-7 Days</div>
                <p className="text-sm text-muted-foreground">Including design approval and modifications</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6 text-center">
                <Factory className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Bulk Production</h3>
                <div className="text-2xl font-bold text-primary mb-2">15-25 Days</div>
                <p className="text-sm text-muted-foreground">Depending on order quantity and complexity</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6 text-center">
                <Truck className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Delivery</h3>
                <div className="text-2xl font-bold text-primary mb-2">7-14 Days</div>
                <p className="text-sm text-muted-foreground">Global shipping with tracking</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Experience Our Manufacturing Excellence
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Partner with us to leverage our advanced capabilities and bring your leather garment designs to life.
          </p>
          <Button variant="secondary" size="lg">
            Schedule Facility Tour
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Capabilities;