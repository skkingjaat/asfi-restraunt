import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Award, Users, Heart, ChefHat } from "lucide-react";

export const metadata = {
  title: "About Us - Lick A Chick",
  description: "Learn about Lick A Chick's story, our commitment to quality, and our passion for serving the best fried chicken in town.",
};

export default function AboutPage() {
  const milestones = [
    {
      year: "2020",
      title: "Founded",
      description: "Started with a dream to serve authentic fried chicken",
    },
    {
      year: "2021",
      title: "First Location",
      description: "Opened our flagship restaurant in the heart of the city",
    },
    {
      year: "2022",
      title: "Award Winner",
      description: "Recognized as 'Best Fried Chicken' by local food critics",
    },
    {
      year: "2023",
      title: "Community Favorite",
      description: "Served over 100,000 happy customers",
    },
  ];

  const values = [
    {
      icon: Award,
      title: "Quality First",
      description: "We never compromise on the quality of our ingredients or preparation",
    },
    {
      icon: Heart,
      title: "Made with Love",
      description: "Every piece of chicken is prepared with passion and care",
    },
    {
      icon: Users,
      title: "Community Focused",
      description: "We're proud to be part of this community and give back",
    },
    {
      icon: ChefHat,
      title: "Family Recipe",
      description: "Our secret 11-spice blend has been perfected over generations",
    },
  ];

  const team = [
    {
      name: "Sarah Johnson",
      role: "Founder & Head Chef",
      description: "With 15 years of culinary experience, Sarah brings the authentic taste of home-cooked fried chicken to every plate.",
      image: "👩‍🍳",
    },
    {
      name: "Mike Chen",
      role: "Operations Manager",
      description: "Mike ensures every customer has an exceptional experience from the moment they walk through our doors.",
      image: "👨‍💼",
    },
    {
      name: "Lisa Rodriguez",
      role: "Customer Experience Lead",
      description: "Lisa and her team are dedicated to making sure every guest feels welcome and satisfied.",
      image: "👩‍💻",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-linear-to-r from-teal-700 to-teal-600 text-white py-32 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-orange-400 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-red-400 rounded-full blur-3xl opacity-20"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <Badge className="mb-6 bg-orange-200 text-orange-900 text-lg px-6 py-2">
              OUR STORY
            </Badge>
            <h1 className="text-6xl font-bold mb-6 leading-tight">
              Born from Passion,<br />
              Raised with Love
            </h1>
            <p className="text-xl text-orange-100 max-w-3xl mx-auto leading-relaxed">
              What started as a family recipe has become a community favorite.
              We're not just serving chicken – we're creating memories, one crispy piece at a time.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-teal-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <Badge className="mb-6">THE BEGINNING</Badge>
              <h2 className="text-5xl font-bold  mb-8">
                From Grandma's Kitchen to Your Table
              </h2>
              <div className="space-y-6 text-lg  leading-relaxed">
                <p>
                  It all started in 2020 when Sarah Johnson decided to turn her grandmother's
                  secret fried chicken recipe into something special. What began as weekend
                  family gatherings quickly became a neighborhood sensation.
                </p>
                <p>
                  Our commitment to quality means we use only the freshest ingredients,
                  marinate our chicken for 24 hours, and fry each piece to golden perfection.
                  No shortcuts, no compromises – just incredible fried chicken.
                </p>
                <p>
                  Today, Lick A Chick isn't just a restaurant – it's a place where families
                  create memories, friends celebrate victories, and everyone discovers their
                  new favorite comfort food.
                </p>
              </div>
            </div>
            <div className="text-center">
              <div className="text-9xl mb-8">👵</div>
              <div className="bg-orange-50 p-8 rounded-2xl border-2 border-orange-200">
                <p className="text-2xl font-bold text-orange-800 mb-4">"The secret is in the love"</p>
                <p className="text-orange-600">- Grandma Johnson, 1985</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-teal-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-6">OUR VALUES</Badge>
            <h2 className="text-5xl font-bold ">What Drives Us</h2>
            <p className="text-xl  mt-4">
              These principles guide everything we do, from the kitchen to your table
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, idx) => {
              const IconComponent = value.icon;
              return (
                <Card key={idx} className="text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg">
                  <CardHeader>
                    <div className="flex justify-center mb-6">
                      <div className="bg-white p-4 rounded-full">
                        <IconComponent className="w-8 h-8 text-orange-600" />
                      </div>
                    </div>
                    <CardTitle className="text-xl">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24 bg-teal-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-6">OUR JOURNEY</Badge>
            <h2 className="text-5xl font-bold ">Milestones & Memories</h2>
          </div>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-orange-200"></div>

            <div className="space-y-16">
              {milestones.map((milestone, idx) => (
                <div key={idx} className={`flex items-center ${idx % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${idx % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <Card className="hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <div className="text-3xl font-bold text-orange-400 mb-2">{milestone.year}</div>
                        <CardTitle className="text-xl">{milestone.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="">{milestone.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="w-4 h-4 bg-orange-600 rounded-full border-4 border-white shadow-lg z-10"></div>
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-teal-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-6">MEET THE TEAM</Badge>
            <h2 className="text-5xl font-bold ">The People Behind the Magic</h2>
            <p className="text-xl  mt-4">
              Our passionate team is dedicated to making every meal memorable
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, idx) => (
              <Card key={idx} className="text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg">
                <CardHeader>
                  <div className="text-6xl mb-4">{member.image}</div>
                  <CardTitle className="text-xl">{member.name}</CardTitle>
                  <p className="font-semibold">{member.role}</p>
                </CardHeader>
                <CardContent>
                  <p className="">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-linear-to-r from-teal-700 to-teal-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6">By the Numbers</h2>
            <p className="text-xl text-orange-100">
              Our commitment to excellence in everything we do
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">100K+</div>
              <p className="text-orange-100">Happy Customers</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">4.9</div>
              <p className="text-orange-100">Average Rating</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">24/7</div>
              <p className="text-orange-100">Customer Service</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">15+</div>
              <p className="text-orange-100">Years Experience</p>
            </div>
          </div>
        </div>
      </section>

      
    </div>
  );
}