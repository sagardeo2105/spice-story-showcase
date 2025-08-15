import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import restaurantHero from "@/assets/restaurant-hero.jpg";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-warm">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${restaurantHero})` }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Spice Heritage
          </h1>
          <p className="text-xl md:text-2xl mb-8 font-light animate-fade-in [animation-delay:200ms]">
            Where Ancient Flavors Meet Modern Elegance
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in [animation-delay:400ms]">
            <Button variant="primary" size="lg" asChild>
              <Link to="/menu">Explore Menu</Link>
            </Button>
            <Button variant="primary" size="lg">
              Reserve Table
            </Button>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              A Journey Through Indian Culinary Heritage
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Experience the rich tapestry of Indian cuisine, where every dish tells a story 
              of tradition, passion, and culinary artistry passed down through generations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-foreground">
                Preserving Ancient Traditions
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                At Spice Heritage, we honor the 5,000-year legacy of Indian cuisine. Our master chefs 
                bring authentic recipes from diverse regions of India, each dish crafted with traditional 
                techniques and premium spices sourced directly from their native lands.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                From the royal kitchens of Rajasthan to the coastal flavors of Kerala, we celebrate 
                the diversity and richness that makes Indian cuisine a global treasure. Every meal 
                is a cultural journey, every bite a story of heritage.
              </p>
              <Button variant="primary" asChild>
                <Link to="/services">Learn More About Our Story</Link>
              </Button>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <Card className="bg-card/80 backdrop-blur-sm border-border/50 hover:shadow-warm transition-all duration-300">
                <CardHeader className="text-center">
                  <CardTitle className="text-3xl font-bold text-primary">25+</CardTitle>
                  <CardDescription>Regional Cuisines</CardDescription>
                </CardHeader>
              </Card>
              <Card className="bg-card/80 backdrop-blur-sm border-border/50 hover:shadow-warm transition-all duration-300">
                <CardHeader className="text-center">
                  <CardTitle className="text-3xl font-bold text-primary">100+</CardTitle>
                  <CardDescription>Authentic Dishes</CardDescription>
                </CardHeader>
              </Card>
              <Card className="bg-card/80 backdrop-blur-sm border-border/50 hover:shadow-warm transition-all duration-300">
                <CardHeader className="text-center">
                  <CardTitle className="text-3xl font-bold text-primary">15+</CardTitle>
                  <CardDescription>Master Chefs</CardDescription>
                </CardHeader>
              </Card>
              <Card className="bg-card/80 backdrop-blur-sm border-border/50 hover:shadow-warm transition-all duration-300">
                <CardHeader className="text-center">
                  <CardTitle className="text-3xl font-bold text-primary">5K+</CardTitle>
                  <CardDescription>Years of Heritage</CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-card/30">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Why Choose Spice Heritage?
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center bg-card/80 backdrop-blur-sm border-border/50 hover:shadow-elegant transition-all duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-spice rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🌶️</span>
                </div>
                <CardTitle>Authentic Spices</CardTitle>
                <CardDescription>
                  Premium spices imported directly from India's spice gardens, 
                  ensuring authentic flavors in every dish.
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="text-center bg-card/80 backdrop-blur-sm border-border/50 hover:shadow-elegant transition-all duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-spice rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">👨‍🍳</span>
                </div>
                <CardTitle>Master Chefs</CardTitle>
                <CardDescription>
                  Experienced chefs trained in traditional Indian cooking methods, 
                  bringing generations of culinary wisdom to your table.
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="text-center bg-card/80 backdrop-blur-sm border-border/50 hover:shadow-elegant transition-all duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-spice rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🏛️</span>
                </div>
                <CardTitle>Cultural Ambiance</CardTitle>
                <CardDescription>
                  Immerse yourself in an authentic Indian dining experience with 
                  traditional décor and warm hospitality.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-sunset">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Begin Your Culinary Journey?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Experience the authentic tastes of India in a modern, elegant setting.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="primary" size="lg">
              Reserve Your Table
            </Button>
            <Button variant="primary" size="lg" asChild>
              <Link to="/menu">View Full Menu</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;