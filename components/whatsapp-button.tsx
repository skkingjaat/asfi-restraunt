import { MessageCircle } from "lucide-react";

export function WhatsappButton() {
  const phoneNumber = "1234567890"; // Replace with your WhatsApp business number
  const message = "Hello! I'd like to know more about your restaurant.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg transition-all hover:scale-110 z-40"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
    </a>
  );
}
