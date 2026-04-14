"use client";

import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function MenuTabs() {
  const tabStyle = `
  text-xs md:text-sm px-4 py-4 rounded-lg transition-all whitespace-nowrap
  data-[active]:!bg-orange-600
  data-[active]:!text-white
  data-[active]:!shadow-md
  data-[active]:scale-105
  hover:bg-gray-100
`;

  const menuCategories = {
    vegAppetizers: [
      {
        name: "Vegetable Samosa",
        description: "Crispy pastry filled with spiced potatoes and peas",
        price: "$5.99",
        src: "/hero-bg-image.jpg",
        alt: "",
        badge: "Vegetarian",
      },
      {
        name: "Paneer Tikka",
        description: "Marinated cottage cheese grilled with vegetables",
        price: "$7.99",
        src: "/hero-bg-image.jpg",
        alt: "",
        badge: "Vegetarian",
      },
      {
        name: "Vegetable Spring Rolls",
        description: "Crispy rolls filled with fresh vegetables",
        price: "$6.99",
        src: "/hero-bg-image.jpg",
        alt: "",
        badge: "Vegetarian",
      },
    ],
    nonVegAppetizers: [
      {
        name: "Crispy Wings",
        description: "Golden fried wings tossed in our signature spice blend",
        price: "$8.99",
        src: "/hero-bg-image.jpg",
        alt: "",
        badge: "Popular",
      },
      {
        name: "Chicken Tenders",
        description: "Tender strips of chicken breast, perfect for sharing",
        price: "$7.99",
        src: "/hero-bg-image.jpg",
        alt: "",
        badge: "Popular",
      },
      {
        name: "Loaded Nachos",
        description: "Crispy tortilla chips with chicken, cheese, and jalapeños",
        price: "$9.99",
        src: "/hero-bg-image.jpg",
        alt: "",
        badge: "New",
      },
    ],
    vegMains: [
      {
        name: "Butter Paneer",
        description: "Soft cottage cheese in creamy tomato butter sauce",
        price: "$12.99",
        src: "/hero-bg-image.jpg",
        alt: "",
        badge: "Vegetarian",
      },
      {
        name: "Chana Masala",
        description: "Spiced chickpeas in aromatic curry gravy",
        price: "$10.99",
        src: "/hero-bg-image.jpg",
        alt: "",
        badge: "Best Seller",
      },
      {
        name: "Vegetable Biryani",
        description: "Fragrant rice with mixed vegetables and spices",
        price: "$11.99",
        src: "/hero-bg-image.jpg",
        alt: "",
        badge: "Vegetarian",
      },
    ],
    nonVegMains: [
      {
        name: "Original Fried Chicken",
        description:
          "Our signature fried chicken with 11 herbs and spices, served with sides",
        price: "$14.99",
        src: "/hero-bg-image.jpg",
        alt: "",
        badge: "Best Seller",
      },
      {
        name: "Spicy Fried Chicken",
        description: "Extra spicy fried chicken for heat lovers",
        price: "$15.99",
        src: "/hero-bg-image.jpg",
        alt: "",
        badge: "Spicy",
      },
      {
        name: "Grilled Chicken Breast",
        description: "Herb-marinated grilled chicken with vegetables",
        price: "$13.99",
        src: "/hero-bg-image.jpg",
        alt: "",
        badge: "Healthy",
      },
      {
        name: "Chicken Burger Combo",
        description: "Crispy chicken patty on toasted bun with fries and drink",
        price: "$11.99",
        src: "/hero-bg-image.jpg",
        alt: "",
        badge: "Popular",
      },
    ],
    combos: [
      {
        name: "Family Feast",
        description: "8 pieces of fried chicken, 4 sides, and 4 rolls",
        price: "$39.99",
        src: "/hero-bg-image.jpg",
        alt: "",
        badge: "Best Value",
      },
      {
        name: "Duo Combo",
        description: "4 pieces of chicken, 2 sides, 2 drinks, and 4 rolls",
        price: "$22.99",
        src: "/hero-bg-image.jpg",
        alt: "",
        badge: "Popular",
      },
      {
        name: "Party Pack",
        description: "12 pieces of fried chicken, 6 sides, 12 rolls",
        price: "$59.99",
        src: "/hero-bg-image.jpg",
        alt: "",
        badge: "Feed 6-8",
      },
    ],
    sides: [
      {
        name: "Crispy Fries",
        description: "Golden crispy fries with seasoned salt",
        price: "$3.99",
        src: "/hero-bg-image.jpg",
        alt: "",
        badge: "Popular",
      },
      {
        name: "Coleslaw",
        description: "Fresh and creamy coleslaw",
        price: "$2.99",
        src: "/hero-bg-image.jpg",
        alt: "",
        badge: "Popular",
      },
      {
        name: "Mac & Cheese",
        description: "Creamy and delicious mac and cheese",
        price: "$4.49",
        src: "/hero-bg-image.jpg",
        alt: "",
        badge: "New",
      },
      {
        name: "Corn on the Cob",
        description: "Buttered corn on the cob",
        price: "$2.49",
        src: "/hero-bg-image.jpg",
        alt: "",
        badge: "Popular",
      },
    ],
  };

  const MenuItem = ({ item }: { item: (typeof menuCategories.nonVegMains)[0] }) => (
    <Card
      className="text-white bg-teal-600 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
    >
      <CardHeader>
        <div className="w-full h-60">
          <Image loading="eager" className="w-full h-full object-cover rounded" src={item.src} alt={item.alt} width={200} height={200}></Image>
        </div>
        <div className="flex items-start justify-between mt-4">
          <CardTitle className="text-lg font-semibold">{item.name}</CardTitle>
          <Badge className="bg-white text-orange-700 mt-1">{item.badge}</Badge>
        </div>
        <CardDescription>{item.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <span className="text-3xl font-bold text-orange-400">{item.price}</span>

      </CardContent>
    </Card>
  );

  return (
    <div className="w-full">

      <Tabs defaultValue="nonVegMains" className="w-full">
        <div className="w-full flex justify-center overflow-x-auto">
          <TabsList className="flex min-w-max px-4 py-6 md:py-8 bg-gray-100 rounded-xl mb-8 gap-3 md:gap-6">
            <TabsTrigger value="vegAppetizers" className={tabStyle}>Veg Starters</TabsTrigger>
            <TabsTrigger value="nonVegAppetizers" className={tabStyle}>Non-Veg Starters</TabsTrigger>
            <TabsTrigger value="vegMains" className={tabStyle}>Veg Mains</TabsTrigger>
            <TabsTrigger value="nonVegMains" className={tabStyle}>Non-Veg Mains</TabsTrigger>
            <TabsTrigger value="combos" className={tabStyle}>Combos</TabsTrigger>
            <TabsTrigger value="sides" className={tabStyle}>Sides</TabsTrigger>
          </TabsList>
        </div>

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
    </div>
  );
}
