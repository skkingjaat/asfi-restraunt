"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export function MenuTabs() {
  const menuCategories = {
    vegAppetizers: [
      {
        name: "Vegetable Samosa",
        description: "Crispy pastry filled with spiced potatoes and peas",
        price: "$5.99",
        badge: "Vegetarian",
      },
      {
        name: "Paneer Tikka",
        description: "Marinated cottage cheese grilled with vegetables",
        price: "$7.99",
        badge: "Vegetarian",
      },
      {
        name: "Vegetable Spring Rolls",
        description: "Crispy rolls filled with fresh vegetables",
        price: "$6.99",
        badge: "Vegetarian",
      },
    ],
    nonVegAppetizers: [
      {
        name: "Crispy Wings",
        description: "Golden fried wings tossed in our signature spice blend",
        price: "$8.99",
        badge: "Popular",
      },
      {
        name: "Chicken Tenders",
        description: "Tender strips of chicken breast, perfect for sharing",
        price: "$7.99",
        badge: null,
      },
      {
        name: "Loaded Nachos",
        description: "Crispy tortilla chips with chicken, cheese, and jalapeños",
        price: "$9.99",
        badge: "New",
      },
    ],
    vegMains: [
      {
        name: "Butter Paneer",
        description: "Soft cottage cheese in creamy tomato butter sauce",
        price: "$12.99",
        badge: "Vegetarian",
      },
      {
        name: "Chana Masala",
        description: "Spiced chickpeas in aromatic curry gravy",
        price: "$10.99",
        badge: "Best Seller",
      },
      {
        name: "Vegetable Biryani",
        description: "Fragrant rice with mixed vegetables and spices",
        price: "$11.99",
        badge: "Vegetarian",
      },
    ],
    nonVegMains: [
      {
        name: "Original Fried Chicken",
        description:
          "Our signature fried chicken with 11 herbs and spices, served with sides",
        price: "$14.99",
        badge: "Best Seller",
      },
      {
        name: "Spicy Fried Chicken",
        description: "Extra spicy fried chicken for heat lovers",
        price: "$15.99",
        badge: "Spicy",
      },
      {
        name: "Grilled Chicken Breast",
        description: "Herb-marinated grilled chicken with vegetables",
        price: "$13.99",
        badge: "Healthy",
      },
      {
        name: "Chicken Burger Combo",
        description: "Crispy chicken patty on toasted bun with fries and drink",
        price: "$11.99",
        badge: null,
      },
    ],
    combos: [
      {
        name: "Family Feast",
        description: "8 pieces of fried chicken, 4 sides, and 4 rolls",
        price: "$39.99",
        badge: "Best Value",
      },
      {
        name: "Duo Combo",
        description: "4 pieces of chicken, 2 sides, 2 drinks, and 4 rolls",
        price: "$22.99",
        badge: null,
      },
      {
        name: "Party Pack",
        description: "12 pieces of fried chicken, 6 sides, 12 rolls",
        price: "$59.99",
        badge: "Feed 6-8",
      },
    ],
    sides: [
      {
        name: "Crispy Fries",
        description: "Golden crispy fries with seasoned salt",
        price: "$3.99",
        badge: null,
      },
      {
        name: "Coleslaw",
        description: "Fresh and creamy coleslaw",
        price: "$2.99",
        badge: null,
      },
      {
        name: "Mac & Cheese",
        description: "Creamy and delicious mac and cheese",
        price: "$4.49",
        badge: "New",
      },
      {
        name: "Corn on the Cob",
        description: "Buttered corn on the cob",
        price: "$2.49",
        badge: null,
      },
    ],
  };

  const MenuItem = ({ item }: { item: (typeof menuCategories.nonVegMains)[0] }) => (
    <Card className="hover:shadow-lg transition-shadow">
      <CardHeader>
        <div className="flex items-start justify-between">
          <div>
            <CardTitle className="text-lg">{item.name}</CardTitle>
            <CardDescription className="text-sm mt-1">{item.description}</CardDescription>
          </div>
          {item.badge && <Badge variant="secondary">{item.badge}</Badge>}
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-orange-600">{item.price}</span>
          <Button variant="outline" size="sm">
            Add to Cart
          </Button>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <Tabs defaultValue="nonVegMains" className="w-full">
      <TabsList className="grid w-full grid-cols-2 md:grid-cols-6 mb-8 gap-1">
        <TabsTrigger value="vegAppetizers" className="text-xs md:text-sm">Veg Starters</TabsTrigger>
        <TabsTrigger value="nonVegAppetizers" className="text-xs md:text-sm">Non-Veg Starters</TabsTrigger>
        <TabsTrigger value="vegMains" className="text-xs md:text-sm">Veg Mains</TabsTrigger>
        <TabsTrigger value="nonVegMains" className="text-xs md:text-sm">Non-Veg Mains</TabsTrigger>
        <TabsTrigger value="combos" className="text-xs md:text-sm">Combos</TabsTrigger>
        <TabsTrigger value="sides" className="text-xs md:text-sm">Sides</TabsTrigger>
      </TabsList>

      <TabsContent value="vegAppetizers" className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {menuCategories.vegAppetizers.map((item, idx) => (
            <MenuItem key={`veg-app-${idx}`} item={item as typeof menuCategories.nonVegMains[0]} />
          ))}
        </div>
      </TabsContent>

      <TabsContent value="nonVegAppetizers" className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {menuCategories.nonVegAppetizers.map((item, idx) => (
            <MenuItem key={`non-veg-app-${idx}`} item={item} />
          ))}
        </div>
      </TabsContent>

      <TabsContent value="vegMains" className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {menuCategories.vegMains.map((item, idx) => (
            <MenuItem key={`veg-main-${idx}`} item={item as typeof menuCategories.nonVegMains[0]} />
          ))}
        </div>
      </TabsContent>

      <TabsContent value="nonVegMains" className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {menuCategories.nonVegMains.map((item, idx) => (
            <MenuItem key={`non-veg-main-${idx}`} item={item} />
          ))}
        </div>
      </TabsContent>

      <TabsContent value="combos" className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {menuCategories.combos.map((item, idx) => (
            <MenuItem key={`combo-${idx}`} item={item as typeof menuCategories.nonVegMains[0]} />
          ))}
        </div>
      </TabsContent>

      <TabsContent value="sides" className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {menuCategories.sides.map((item, idx) => (
            <MenuItem key={`side-${idx}`} item={item as typeof menuCategories.nonVegMains[0]} />
          ))}
        </div>
      </TabsContent>
    </Tabs>
  );
}
