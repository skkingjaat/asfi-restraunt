import { ContactForm } from "@/components/contact-form";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock } from "lucide-react";


export const metadata = {
  title: "Contact Us - Lick A Chick",
  description: "Get in touch with Lick A Chick restaurant. Send us a message or call us today.",
};


export default function ContactPage() {
  return (
    <div className="min-h-screen text-white">
      {/* Hero Section */}
      <section className="bg-linear-to-r from-teal-700 to-teal-600  py-40">
        <div className="max-w-7xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-2">Contact Us</h1>
          <p className="text-orange-100">We'd love to hear from you. Get in touch today!</p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 bg-teal-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
            {/* Contact Information */}
            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <div className="flex gap-3">
                    <Phone className="w-6 h-6 text-orange-400 shrink-0" />
                    <CardTitle>Phone</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="">(555) 123-4567</p>
                  <p className="text-sm  mt-1">Available 7 days a week</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex gap-3">
                    <Mail className="w-6 h-6 text-orange-400 shrink-0" />
                    <CardTitle>Email</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="">info@lickaChick.com</p>
                  <p className="text-sm  mt-1">We'll respond within 24 hours</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex gap-3">
                    <MapPin className="w-6 h-6 text-orange-400 shrink-0" />
                    <CardTitle>Location</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="">123 Main Street</p>
                  <p className="">Your City, ST 12345</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex gap-3">
                    <Clock className="w-6 h-6 text-orange-400 shrink-0" />
                    <CardTitle>Hours</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="">Mon - Fri: 11:00 AM - 10:00 PM</p>
                  <p className="">Sat - Sun: 12:00 PM - 11:00 PM</p>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>Send us a Message</CardTitle>
                </CardHeader>
                <CardContent>
                  <ContactForm />
                  <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                    <p className="text-sm text-blue-800">
                      <strong>Note:</strong> Your information is secure and will only be used to respond to your inquiry.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Map Section */}
          <Card>
            <CardContent>
              <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.1234567890!2d-73.9352!3d40.7306!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQzJzUyLjAiTiA3M8KwNTYnMDcuMCJX!5e0!3m2!1sen!2sus!4v1234567890"
              width="100%"
              height="450"
              className="rounded-md"
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
