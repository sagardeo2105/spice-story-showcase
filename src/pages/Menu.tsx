import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import menuHero from "@/assets/menu-hero.jpg";

const Menu = () => {
  const menuCategories = [
    {
      title: "Appetizers",
      items: [
        {
          name: "Samosa Chaat",
          description: "Crispy samosas topped with tangy chutneys, yogurt, and fresh herbs",
          price: "$12",
          spicy: true,
          vegetarian: true,
        },
        {
          name: "Tandoori Chicken Wings",
          description: "Marinated chicken wings grilled in our traditional tandoor oven",
          price: "$16",
          spicy: true,
        },
        {
          name: "Paneer Tikka",
          description: "Grilled cottage cheese cubes with bell peppers and aromatic spices",
          price: "$14",
          vegetarian: true,
        },
        {
          name: "Fish Amritsari",
          description: "Crispy battered fish fillets with mint and tamarind chutneys",
          price: "$18",
          spicy: true,
        },
      ],
    },
    {
      title: "Main Courses",
      items: [
        {
          name: "Butter Chicken",
          description: "Tender chicken in rich tomato and cream sauce with aromatic spices",
          price: "$24",
          popular: true,
        },
        {
          name: "Lamb Rogan Josh",
          description: "Slow-cooked lamb in traditional Kashmiri spices and yogurt gravy",
          price: "$28",
          spicy: true,
        },
        {
          name: "Dal Makhani",
          description: "Creamy black lentils slow-cooked with butter and aromatic spices",
          price: "$18",
          vegetarian: true,
        },
        {
          name: "Goan Fish Curry",
          description: "Fresh fish in coconut milk curry with curry leaves and spices",
          price: "$26",
          spicy: true,
        },
        {
          name: "Palak Paneer",
          description: "Fresh cottage cheese in spiced spinach gravy with cream",
          price: "$20",
          vegetarian: true,
        },
        {
          name: "Hyderabadi Biryani",
          description: "Fragrant basmati rice layered with marinated lamb and saffron",
          price: "$25",
          popular: true,
          spicy: true,
        },
      ],
    },
    {
      title: "Breads & Rice",
      items: [
        {
          name: "Garlic Naan",
          description: "Fresh-baked bread with garlic and cilantro",
          price: "$6",
          vegetarian: true,
        },
        {
          name: "Butter Naan",
          description: "Classic tandoor-baked bread brushed with butter",
          price: "$5",
          vegetarian: true,
        },
        {
          name: "Stuffed Paratha",
          description: "Whole wheat bread stuffed with spiced potatoes or cauliflower",
          price: "$8",
          vegetarian: true,
        },
        {
          name: "Saffron Rice",
          description: "Fragrant basmati rice infused with saffron and whole spices",
          price: "$7",
          vegetarian: true,
        },
      ],
    },
    {
      title: "Desserts",
      items: [
        {
          name: "Gulab Jamun",
          description: "Golden milk dumplings in cardamom-rose syrup",
          price: "$8",
          vegetarian: true,
        },
        {
          name: "Kulfi Faluda",
          description: "Traditional Indian ice cream with vermicelli and rose syrup",
          price: "$9",
          vegetarian: true,
        },
        {
          name: "Rasmalai",
          description: "Soft cheese dumplings in cardamom-scented milk",
          price: "$10",
          vegetarian: true,
        },
      ],
    },
    {
      title: "Beverages",
      items: [
        {
          name: "Mango Lassi",
          description: "Traditional yogurt smoothie with fresh mango and cardamom",
          price: "$6",
          vegetarian: true,
        },
        {
          name: "Masala Chai",
          description: "Spiced tea with cardamom, cinnamon, and ginger",
          price: "$4",
          vegetarian: true,
        },
        {
          name: "Fresh Coconut Water",
          description: "Refreshing natural coconut water served in the shell",
          price: "$5",
          vegetarian: true,
        },
        {
          name: "Rose Sherbet",
          description: "Refreshing rose-flavored drink with mint",
          price: "$5",
          vegetarian: true,
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-warm">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${menuHero})` }}
        >
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Our Menu
          </h1>
          <p className="text-xl md:text-2xl font-light">
            A curated selection of authentic Indian dishes crafted with love and tradition
          </p>
        </div>
      </section>

      {/* Menu Content */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          {menuCategories.map((category, categoryIndex) => (
            <div key={category.title} className="mb-16">
              <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
                {category.title}
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {category.items.map((item, itemIndex) => (
                  <Card 
                    key={item.name} 
                    className="bg-card/80 backdrop-blur-sm border-border/50 hover:shadow-warm transition-all duration-300"
                  >
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <CardTitle className="flex items-center gap-2 mb-2">
                            {item.name}
                            {item.popular && (
                              <Badge className="bg-gradient-spice text-primary-foreground border-0">
                                Popular
                              </Badge>
                            )}
                          </CardTitle>
                          <CardDescription className="text-sm text-muted-foreground leading-relaxed">
                            {item.description}
                          </CardDescription>
                        </div>
                        <div className="text-2xl font-bold text-primary ml-4">
                          {item.price}
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="flex gap-2">
                        {item.vegetarian && (
                          <Badge variant="outline" className="text-xs border-green-500 text-green-600">
                            🌱 Vegetarian
                          </Badge>
                        )}
                        {item.spicy && (
                          <Badge variant="outline" className="text-xs border-spice-red text-spice-red">
                            🌶️ Spicy
                          </Badge>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Special Note */}
      <section className="py-16 bg-card/30">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Dietary Preferences & Allergies
          </h3>
          <p className="text-muted-foreground mb-6">
            We understand the importance of dietary restrictions and allergies. Our chefs can modify 
            most dishes to accommodate vegetarian, vegan, gluten-free, and other dietary needs. 
            Please inform your server about any allergies or preferences.
          </p>
          <p className="text-sm text-muted-foreground">
            All prices are subject to applicable taxes. Menu items and prices may vary by location and season.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Menu;