import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      details: "sales@alignzexports.com",
      subDetails: "info@alignzexports.com"
    },
    {
      icon: Phone,
      title: "Call Us",
      details: "+91 XXX XXX XXXX",
      subDetails: "Mon-Fri 9AM-6PM IST"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: "Manufacturing Hub",
      subDetails: "India"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Let's{" "}
            <span className="bg-gradient-premium bg-clip-text text-transparent">
              Work Together
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to bring your leather garment vision to life? 
            Contact us for custom manufacturing solutions and bulk orders.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">Get in Touch</h3>
              <p className="text-muted-foreground mb-8">
                Reach out to discuss your requirements, request samples, 
                or learn more about our manufacturing capabilities.
              </p>
            </div>

            {contactInfo.map((info, index) => (
              <Card key={index} className="border-border/50 hover:shadow-soft transition-smooth">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-gradient-hero rounded-lg flex items-center justify-center">
                        <info.icon className="h-6 w-6 text-primary-foreground" />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">
                        {info.title}
                      </h4>
                      <p className="text-accent font-medium">{info.details}</p>
                      <p className="text-sm text-muted-foreground">{info.subDetails}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="border-border/50 shadow-leather">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-6">
                  Request a Quote
                </h3>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input id="name" placeholder="Your name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company">Company</Label>
                      <Input id="company" placeholder="Company name" />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="your@email.com" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone</Label>
                      <Input id="phone" placeholder="+1 (555) 000-0000" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="product">Product Interest</Label>
                    <Input id="product" placeholder="e.g., Leather jackets, Vintage collection..." />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="quantity">Expected Quantity</Label>
                    <Input id="quantity" placeholder="Number of pieces" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Tell us about your requirements, timeline, and any specific needs..."
                      className="min-h-32"
                    />
                  </div>

                  <Button variant="hero" size="lg" className="w-full group">
                    Send Inquiry
                    <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-16 bg-card rounded-2xl p-8 border border-border/50">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <h4 className="font-semibold text-foreground mb-2">Minimum Order</h4>
              <p className="text-muted-foreground">500 pieces per style</p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-2">Lead Time</h4>
              <p className="text-muted-foreground">30-45 days production</p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-2">Sample Time</h4>
              <p className="text-muted-foreground">7-10 days development</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;