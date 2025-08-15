import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import servicesHero from "@/assets/services-hero.jpg";

const Services = () => {
  const services = [
    {
      title: "Fine Dining Experience",
      description: "Immerse yourself in an elegant atmosphere with traditional Indian décor, soft lighting, and exceptional service. Our dining room accommodates intimate dinners and larger celebrations.",
      features: ["Elegant atmosphere", "Traditional décor", "Exceptional service", "Live Indian music weekends"],
      icon: "🏛️",
    },
    {
      title: "Takeaway & Delivery",
      description: "Enjoy our authentic Indian cuisine from the comfort of your home. All dishes are carefully packaged to maintain freshness and flavor during transport.",
      features: ["Online ordering", "Quick preparation", "Eco-friendly packaging", "Delivery within 5 miles"],
      icon: "🚚",
    },
    {
      title: "Private Events & Catering",
      description: "Let us make your special occasions memorable with our catering services. From intimate gatherings to large corporate events, we provide customized menus and professional service.",
      features: ["Custom menu planning", "Professional staff", "Event setup", "Flexible scheduling"],
      icon: "🎉",
    },
    {
      title: "Cooking Classes",
      description: "Learn the art of Indian cooking from our master chefs. Hands-on classes cover traditional techniques, spice blending, and authentic recipes you can recreate at home.",
      features: ["Expert instruction", "Hands-on learning", "Recipe cards included", "Small group sizes"],
      icon: "👨‍🍳",
    },
    {
      title: "Spice & Ingredient Shop",
      description: "Take home the authentic flavors with our curated selection of premium Indian spices, specialty ingredients, and recipe kits to recreate restaurant-quality dishes.",
      features: ["Premium spices", "Recipe kits", "Specialty ingredients", "Expert recommendations"],
      icon: "🌶️",
    },
    {
      title: "Corporate Catering",
      description: "Enhance your business meetings and corporate events with our professional catering services. We provide fresh, flavorful Indian cuisine that impresses clients and colleagues.",
      features: ["Business-friendly setup", "Timely delivery", "Professional presentation", "Dietary accommodations"],
      icon: "🏢",
    },
  ];

  const operatingHours = [
    { day: "Monday - Thursday", hours: "11:30 AM - 9:30 PM" },
    { day: "Friday - Saturday", hours: "11:30 AM - 10:30 PM" },
    { day: "Sunday", hours: "12:00 PM - 9:00 PM" },
  ];

  return (
    <div className="min-h-screen bg-gradient-warm">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${servicesHero})` }}
        >
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Our Services
          </h1>
          <p className="text-xl md:text-2xl font-light">
            Exceptional Indian cuisine experiences tailored to your needs
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              What We Offer
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              From intimate dining experiences to large-scale catering, we bring the authentic 
              flavors of India to every occasion with passion and professionalism.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card 
                key={service.title}
                className="bg-card/80 backdrop-blur-sm border-border/50 hover:shadow-elegant transition-all duration-300 h-full"
              >
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-gradient-spice rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">{service.icon}</span>
                  </div>
                  <CardTitle className="text-xl mb-3">{service.title}</CardTitle>
                  <CardDescription className="text-sm leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                        <span className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Operating Hours & Contact */}
      <section className="py-20 bg-card/30">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Operating Hours */}
            <div>
              <h3 className="text-3xl font-bold text-foreground mb-8">Operating Hours</h3>
              <Card className="bg-card/80 backdrop-blur-sm border-border/50">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    {operatingHours.map((schedule, index) => (
                      <div key={index} className="flex justify-between items-center py-2 border-b border-border/30 last:border-b-0">
                        <span className="font-medium text-foreground">{schedule.day}</span>
                        <span className="text-muted-foreground">{schedule.hours}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 p-4 bg-gradient-spice/10 rounded-lg">
                    <p className="text-sm text-muted-foreground text-center">
                      Reservations recommended for weekend dining
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact & Booking */}
            <div>
              <h3 className="text-3xl font-bold text-foreground mb-8">Get In Touch</h3>
              <Card className="bg-card/80 backdrop-blur-sm border-border/50">
                <CardContent className="p-6">
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Location</h4>
                      <p className="text-muted-foreground">
                        123 Spice Street<br />
                        Heritage District<br />
                        New Delhi, 110001
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Contact</h4>
                      <p className="text-muted-foreground">
                        Phone: +91 11 2345 6789<br />
                        Email: info@spiceheritage.com
                      </p>
                    </div>

                    <div className="space-y-3">
                      <Button variant="primary" className="w-full">
                        Make a Reservation
                      </Button>
                      <Button variant="outline" className="w-full">
                        Order Online
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-sunset">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Experience Authentic Indian Cuisine?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Whether you're planning an intimate dinner or a grand celebration, 
            we're here to make your experience unforgettable.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-foreground">
              Call Us Now
            </Button>
            <Button variant="primary" size="lg">
              Book Online
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;