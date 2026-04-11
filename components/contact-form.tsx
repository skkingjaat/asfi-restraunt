"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  // Google Form ID and field IDs - Replace with your actual Google Form details
  const GOOGLE_FORM_ID = "YOUR_GOOGLE_FORM_ID";
  const GOOGLE_FORM_URL = `https://docs.google.com/forms/d/e/${GOOGLE_FORM_ID}/formResponse`;

  // Map your form fields to Google Form field IDs
  // You can find these by inspecting the Google Form HTML
  const fieldIds = {
    name: "entry.XXXXXXXXXX", // Replace with actual entry ID
    email: "entry.YYYYYYYYYY", // Replace with actual entry ID
    phone: "entry.ZZZZZZZZZZ", // Replace with actual entry ID
    subject: "entry.WWWWWWWWWW", // Replace with actual entry ID
    message: "entry.VVVVVVVVVV", // Replace with actual entry ID
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Create FormData for submission
      const submitData = new FormData();
      submitData.append(fieldIds.name, formData.name);
      submitData.append(fieldIds.email, formData.email);
      submitData.append(fieldIds.phone, formData.phone);
      submitData.append(fieldIds.subject, formData.subject);
      submitData.append(fieldIds.message, formData.message);

      // Submit to Google Form using fetch with no-cors mode
      const response = await fetch(GOOGLE_FORM_URL, {
        method: "POST",
        body: submitData,
        mode: "no-cors", // Important: Google Forms requires this
      });

      // Since no-cors prevents reading the response, assume success
      setSubmitStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });

      // Reset status after 3 seconds
      setTimeout(() => {
        setSubmitStatus("idle");
      }, 3000);
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus("error");
      setTimeout(() => {
        setSubmitStatus("idle");
      }, 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto space-y-4">
      <div className="space-y-2">
        <Label htmlFor="name">Name</Label>
        <Input
          id="name"
          name="name"
          type="text"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your name"
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="your.email@example.com"
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="phone">Phone</Label>
        <Input
          id="phone"
          name="phone"
          type="tel"
          value={formData.phone}
          onChange={handleChange}
          placeholder="+1 (555) 123-4567"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="subject">Subject</Label>
        <Input
          id="subject"
          name="subject"
          type="text"
          value={formData.subject}
          onChange={handleChange}
          placeholder="How can we help?"
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Message</Label>
        <Textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your message here..."
          rows={5}
          required
        />
      </div>

      {submitStatus === "success" && (
        <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg text-sm">
          Thank you! Your message has been sent successfully.
        </div>
      )}

      {submitStatus === "error" && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
          Sorry, there was an error sending your message. Please try again.
        </div>
      )}

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-orange-500 hover:bg-orange-600"
      >
        {isSubmitting ? "Sending..." : "Send Message"}
      </Button>
    </form>
  );
}
