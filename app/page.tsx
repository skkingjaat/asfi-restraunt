import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import Image from "next/image";
import { Star, Clock, MapPin, Phone, Flame, Award, Zap, Heart } from "lucide-react";
import { ReservationDialog } from "@/components/reservation-dialog";

export default function Home() {
  const featuredDishes = [
    {
      name: "Signature Fried Chicken",
      description: "Crispy golden chicken with our secret 11-spice blend",
      price: "$14.99",
      src: "/hero-bg-image.jpg",
      alt: "",
      label: "Best Seller",
    },
    {
      name: "Spicy Wings Platter",
      description: "Heat-packed wings with our famous hot sauce",
      price: "$12.99",
      src: "/hero-bg-image.jpg",
      alt: "",
      label: "Hot",
    },
    {
      name: "Chicken Burger Deluxe",
      description: "Juicy grilled chicken on toasted bun with special sauce",
      price: "$10.99",
      src: "/hero-bg-image.jpg",
      alt: "",
      label: "New",
    },
    {
      name: "Family Feast",
      description: "8 pieces, 4 sides - perfect for family gatherings",
      price: "$39.99",
      src: "/hero-bg-image.jpg",
      alt: "",
      label: "Best Value",
    },
  ];

  const whyChooseUs = [
    {
      icon: Award,
      title: "Award-Winning Quality",
      description: "Recognized for excellence in taste and preparation",
    },
    {
      icon: Zap,
      title: "Fast Service",
      description: "Quick preparation without compromising quality",
    },
    {
      icon: Flame,
      title: "Premium Ingredients",
      description: "Fresh, high-quality chicken from trusted suppliers",
    },
    {
      icon: Heart,
      title: "Customer Love",
      description: "Family-owned with passion for great food",
    },
  ];

  const testimonials = [
    {
      name: "Sarah Mitchell",
      rating: 5,
      comment: "Best chicken I've ever had! The crispy coating is perfection.",
      role: "Food Blogger",
    },
    {
      name: "James Chen",
      rating: 5,
      comment: "Outstanding service and amazing flavors. Highly recommended!",
      role: "Regular Customer",
    },
    {
      name: "Emily Rodriguez",
      rating: 5,
      comment: "We visit every weekend. My family absolutely loves it!",
      role: "Local Resident",
    },
  ];

  return (
    <main className="min-h-screen bg-teal-700">
      {/* Hero Section */}
      <section className="relative h-full min-h-screen md:max-h-screen flex items-center overflow-hidden text-white">
        <div className="absolute z-10 max-w-3xl py-10 px-4 sm:px-6 lg:px-8">
          <Badge className="mb-4 bg-orange-200 text-orange-900">Est. 2020</Badge>
          <h1 className="text-6xl font-bold mb-6 leading-tight">
            Crispy, Delicious Chicken
          </h1>
          <p className="text-xl mb-8 text-orange-100">
            Experience authentic fried chicken prepared with love and the finest ingredients.
            A local favorite serving our community with passion.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/menu">
              <Button className=" px-6 py-6 bg-white text-black hover:bg-orange-50">
                View Menu
              </Button>
            </Link>
            <ReservationDialog />
          </div>
          <div className="mt-8 pt-8 border-t border-orange-400">
            <p className="text-sm font-semibold mb-4 text-orange-100">ORDER ONLINE NOW</p>
            <div className="flex flex-col sm:flex-row gap-3 flex-wrap">
              <a
                href="https://www.swiggy.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 bg-[#FC8019] hover:bg-[#e67e0d] text-white font-bold rounded-lg transition-all duration-200 transform hover:scale-105 gap-2 shadow-lg"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z" />
                </svg>
                Order on Swiggy
              </a>
              <a
                href="https://www.zomato.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 bg-[#EF4F5F] hover:bg-[#d43f50] text-white font-bold rounded-lg transition-all duration-200 transform hover:scale-105 gap-2 shadow-lg"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z" />
                </svg>
                Order on Zomato
              </a>
            </div>
          </div>
        </div>
        <div className="w-full h-full z-0">
          <Image className="w-full h-full brightness-50 object-cover min-h-screen sm:max-h-screen object-center" src="/hero-bg-image.jpg" alt="" width={400} height={300}></Image>
        </div>
      </section>

      {/* Featured Dishes */}
      <section className="py-20 bg-teal-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4">OUR SPECIALTIES</Badge>
            <h2 className="text-5xl font-bold">Featured Dishes</h2>
            <p className="text-xl  mt-4">
              Try our most popular items loved by thousands
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredDishes.map((dish, idx) => (
              <Card
                key={idx}
                className="bg-teal-600 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <CardHeader>
                  <div className="w-full h-60">
                    <Image className="w-full h-full object-cover rounded" src={dish.src} alt={dish.alt} width={200} height={200}></Image>
                  </div>
                  <div className="flex items-start justify-between mt-4">
                    <CardTitle className="text-lg font-semibold">{dish.name}</CardTitle>
                    <Badge className="bg-white text-orange-700 mt-1">{dish.label}</Badge>
                  </div>
                  <CardDescription>{dish.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <span className="text-3xl font-bold text-orange-600">{dish.price}</span>
                    <Button size="sm" className="bg-orange-600 hover:bg-orange-700">
                      Order
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-teal-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4">WHY US</Badge>
            <h2 className="text-5xl font-bold">What Makes Us Special</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, idx) => {
              const IconComponent = item.icon;
              return (
                <Card key={idx} className="text-center bg-teal-600 text-white hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex justify-center mb-4">
                      <div className="bg-white p-4 rounded-full">
                        <IconComponent className="w-8 h-8 text-orange-600" />
                      </div>
                    </div>
                    <CardTitle className="font-semibold">{item.title}</CardTitle>
                    <CardDescription>{item.description}</CardDescription>
                  </CardHeader>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-20 bg-teal-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-md">
              <CardHeader className="flex flex-row items-start gap-4">
                <div className="bg-white p-3 rounded-lg">
                  <Clock className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <CardTitle className="font-semibold">Opening Hours</CardTitle>
                  <CardDescription className="mt-2">
                    <p>Mon - Fri: 11:00 AM - 10:00 PM</p>
                    <p>Sat - Sun: 12:00 PM - 11:00 PM</p>
                  </CardDescription>
                </div>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-md">
              <CardHeader className="flex flex-row items-start gap-4">
                <div className="bg-white p-3 rounded-lg">
                  <MapPin className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <CardTitle className="font-semibold">Location</CardTitle>
                  <CardDescription className="mt-2">
                    <p>123 Main Street</p>
                    <p>Your City, ST 12345</p>
                  </CardDescription>
                </div>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-md">
              <CardHeader className="flex flex-row items-start gap-4">
                <div className="bg-white p-3 rounded-lg">
                  <Phone className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <CardTitle className="font-semibold">Contact</CardTitle>
                  <CardDescription className="mt-2">
                    <p>(555) 123-4567</p>
                    <p>info@lickaChick.com</p>
                  </CardDescription>
                </div>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-teal-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4">TESTIMONIALS</Badge>
            <h2 className="text-5xl font-bold">What Our Customers Say</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <Card key={idx} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex gap-2 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <CardTitle className="text-lg font-semibold">{testimonial.name}</CardTitle>
                  <CardDescription className="text-sm">{testimonial.role}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="italic">&quot;{testimonial.comment}&quot;</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-linear-to-b from-teal-700 to-teal-600 text-white py-24 relative overflow-hidden">

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Main Content */}
          <div className="text-center mb-16">

            <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Ready to Indulge?
            </h2>
            <p className="text-xl md:text-2xl  max-w-2xl mx-auto leading-relaxed">
              Experience the best fried chicken in town. Order now, visit us, or book your table for an unforgettable meal.
            </p>
          </div>

          {/* Three Option Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Order Online Card */}
            <Link href="/menu">
              <Card className="h-full border-2 border-orange-200 hover:border-orange-600 shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:scale-105 bg-white">
                <CardHeader className="text-center pb-4">
                  <div className="flex justify-center mb-4">
                    <div className="bg-linear-to-br from-orange-400 to-orange-600 p-4 rounded-full shadow-lg">
                      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z" />
                      </svg>
                    </div>
                  </div>
                  <CardTitle className="text-2xl text-gray-900">Order Online</CardTitle>
                  <CardDescription className="text-base text-gray-600 mt-2">
                    Browse our menu and get food delivered to your doorstep
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button size="lg" className="w-full bg-linear-to-r from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800 text-white font-bold py-3 text-lg">
                    View Menu
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </Button>
                </CardContent>
              </Card>
            </Link>

            {/* Make Reservation Card */}
            <Card className="h-full border-2 border-red-200 hover:border-red-600 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 bg-white">
              <CardHeader className="text-center pb-4">
                <div className="flex justify-center mb-4">
                  <div className="bg-linear-to-br from-red-400 to-red-600 p-4 rounded-full shadow-lg">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zm-5-5H7v5h7v-5z" />
                    </svg>
                  </div>
                </div>
                <CardTitle className="text-2xl text-gray-900">Make a Reservation</CardTitle>
                <CardDescription className="text-base text-gray-600 mt-2">
                  Book your table in advance for the best experience
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="w-full text-center">
                  <ReservationDialog />
                </div>
              </CardContent>
            </Card>

            {/* Contact Us Card */}
            <Link href="/contact">
              <Card className="h-full border-2 border-amber-200 hover:border-amber-600 shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:scale-105 bg-white">
                <CardHeader className="text-center pb-4">
                  <div className="flex justify-center mb-4">
                    <div className="bg-linear-to-br from-amber-400 to-amber-600 p-4 rounded-full shadow-lg">
                      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z" />
                      </svg>
                    </div>
                  </div>
                  <CardTitle className="text-2xl text-gray-900">Contact Us</CardTitle>
                  <CardDescription className="text-base text-gray-600 mt-2">
                    Get in touch with our team for inquiries
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button size="lg" className="w-full bg-linear-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white font-bold py-3 text-lg">
                    Send Message
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </Button>
                </CardContent>
              </Card>
            </Link>
          </div>


        </div>
      </section>
    </main>
  );
}
