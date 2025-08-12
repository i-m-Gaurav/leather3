import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock,
  Send,
  MessageSquare,
  Users,
  Factory
} from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      details: "export@alignzexports.com",
      secondary: "info@alignzexports.com"
    },
    {
      icon: Phone,
      title: "Phone",
      details: "+91 98765 43210",
      secondary: "+91 98765 43211"
    },
    {
      icon: MapPin,
      title: "Address",
      details: "Industrial Area, Sector 45",
      secondary: "Gurgaon, Haryana 122003, India"
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: "Mon - Sat: 9:00 AM - 6:00 PM",
      secondary: "Sunday: Closed"
    }
  ];

  const offices = [
    {
      title: "Head Office & Manufacturing",
      location: "Gurgaon, India",
      address: "Industrial Area, Sector 45, Gurgaon, Haryana 122003",
      phone: "+91 98765 43210",
      email: "export@alignzexports.com"
    },
    {
      title: "International Sales Office",
      location: "Mumbai, India", 
      address: "Trade Center, Bandra East, Mumbai, Maharashtra 400051",
      phone: "+91 98765 43212",
      email: "sales@alignzexports.com"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-hero bg-clip-text text-transparent">
              Get In Touch
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ready to discuss your leather garment requirements? Our team is here to help you bring your designs to life.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((item, index) => (
              <Card key={index} className="text-center hover:shadow-elegant transition-smooth">
                <CardContent className="p-6">
                  <item.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-foreground font-medium">{item.details}</p>
                  <p className="text-sm text-muted-foreground">{item.secondary}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Contact Form & Info */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card>
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <MessageSquare className="h-6 w-6 text-primary mr-3" />
                  <h2 className="text-2xl font-bold">Send us a Message</h2>
                </div>
                
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input id="name" placeholder="Your full name" />
                    </div>
                    <div>
                      <Label htmlFor="company">Company Name</Label>
                      <Input id="company" placeholder="Your company" />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input id="email" type="email" placeholder="your@email.com" />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" placeholder="+1 (555) 000-0000" />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="product">Product Interest</Label>
                      <Input id="product" placeholder="Leather jackets, etc." />
                    </div>
                    <div>
                      <Label htmlFor="quantity">Estimated Quantity</Label>
                      <Input id="quantity" placeholder="500 pieces/month" />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Tell us about your requirements, specifications, timeline, etc."
                      className="min-h-[120px]"
                    />
                  </div>
                  
                  <Button type="submit" className="w-full" size="lg">
                    <Send className="h-4 w-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Additional Information */}
            <div className="space-y-8">
              {/* Why Contact Us */}
              <Card>
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <Users className="h-6 w-6 text-primary mr-3" />
                    <h2 className="text-2xl font-bold">Why Contact Us?</h2>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                      <div>
                        <h3 className="font-semibold mb-1">Expert Consultation</h3>
                        <p className="text-sm text-muted-foreground">Get professional advice on materials, designs, and production requirements</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                      <div>
                        <h3 className="font-semibold mb-1">Custom Solutions</h3>
                        <p className="text-sm text-muted-foreground">Tailored manufacturing solutions for your specific business needs</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                      <div>
                        <h3 className="font-semibold mb-1">Competitive Pricing</h3>
                        <p className="text-sm text-muted-foreground">Best-in-class pricing with transparent cost breakdown</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                      <div>
                        <h3 className="font-semibold mb-1">Sample Development</h3>
                        <p className="text-sm text-muted-foreground">Quick turnaround on samples and prototypes</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Manufacturing Details */}
              <Card>
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <Factory className="h-6 w-6 text-primary mr-3" />
                    <h2 className="text-2xl font-bold">Manufacturing Info</h2>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Minimum Order Quantity:</span>
                      <span className="font-medium">50-100 pieces</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Sample Development:</span>
                      <span className="font-medium">5-7 days</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Bulk Production:</span>
                      <span className="font-medium">15-25 days</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Payment Terms:</span>
                      <span className="font-medium">30% advance, 70% before shipping</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Quality Standard:</span>
                      <span className="font-medium">ISO 9001:2015 Certified</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-16 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Offices</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Connect with us at our strategic locations for seamless communication and support.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {offices.map((office, index) => (
              <Card key={index}>
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold mb-2">{office.title}</h3>
                  <p className="text-primary font-medium mb-4">{office.location}</p>
                  
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <MapPin className="h-5 w-5 text-muted-foreground mt-0.5" />
                      <p className="text-sm text-muted-foreground">{office.address}</p>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Phone className="h-5 w-5 text-muted-foreground" />
                      <p className="text-sm font-medium">{office.phone}</p>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Mail className="h-5 w-5 text-muted-foreground" />
                      <p className="text-sm font-medium">{office.email}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Don't wait! Get in touch today and let's discuss how we can bring your leather garment vision to reality.
          </p>
          <Button variant="secondary" size="lg">
            Schedule a Call
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;