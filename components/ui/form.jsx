"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Send } from "lucide-react";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = (data) => {
    console.log("Form Submitted:", data);
    setSubmitted(true);
  };

  return (
    <div className="flex justify-center items-center min-h-screen  p-6">
      <Card className="w-full max-w-lg shadow-lg">
        <CardHeader className="text-center">
          <CardTitle className="flex items-center justify-center gap-2 text-xl font-bold">
            <Mail className="w-6 h-6 text-primary" /> Contact Us
          </CardTitle>
        </CardHeader>
        <CardContent>
          {!submitted ? (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div>
                <label className="block font-medium">Name</label>
                <Input {...register("name")} placeholder="Your Name" />
                {errors.name && (
                  <p className="text-red-500 text-sm">{errors.name.message}</p>
                )}
              </div>

              <div>
                <label className="block font-medium">Email</label>
                <Input {...register("email")} placeholder="Your Email" />
                {errors.email && (
                  <p className="text-red-500 text-sm">{errors.email.message}</p>
                )}
              </div>

              <div>
                <label className="block font-medium">Message</label>
                <Textarea {...register("message")} placeholder="Your Message" />
                {errors.message && (
                  <p className="text-red-500 text-sm">{errors.message.message}</p>
                )}
              </div>

              <Button type="submit" className="w-full flex items-center gap-2">
                Send Message <Send className="w-5 h-5" />
              </Button>
            </form>
          ) : (
            <div className="text-center text-green-600">
              <p className="text-lg font-semibold">Thank you for reaching out!</p>
              <p>We will get back to you soon.</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
// import React from 'react'

// export const Contact = () => {
//   return (
//     <div>Contact</div>
//   )
// }
