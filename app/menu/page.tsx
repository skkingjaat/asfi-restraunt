import { MenuTabs } from "@/components/menu-tabs";
import { Badge } from "@/components/ui/badge";

export const metadata = {
  title: "Menu - Lick A Chick",
  description: "Browse our full menu of delicious chicken dishes and combos.",
};

export default function MenuPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-linear-to-r from-orange-600 to-red-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="mb-4 bg-orange-200 text-orange-900">FULL MENU</Badge>
            <h1 className="text-5xl font-bold mb-4">Our Menu</h1>
            <p className="text-xl text-orange-100">
              Discover our wide selection of delicious chicken dishes crafted with care
            </p>
          </div>
        </div>
      </section>

      {/* Menu Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <MenuTabs />
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-linear-to-r from-orange-600 to-red-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Order?</h2>
          <p className="text-xl text-orange-100 mb-6">
            Call us at (555) 123-4567 or visit us in person. Delivery available!
          </p>
          <div className="space-y-2 text-lg">
            <p>📍 123 Main Street, Your City</p>
            <p>⏰ Mon-Fri: 11AM-10PM | Sat-Sun: 12PM-11PM</p>
          </div>
        </div>
      </section>
    </div>
  );
}
