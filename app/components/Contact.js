"use client"
import React from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Send } from "lucide-react"
import { Label } from "@/components/ui/label"

const ContactForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission logic here
    console.log('Form submitted')
  }

  return (
    <div className="bg-slate-950 py-8">
        <Card className="w-full max-w-xl mx-auto bg-slate-900">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center text-neutral-300">Contact Us</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstName" className="text-neutral-300">First Name</Label>
              <Input
                id="firstName"
                placeholder="John"
                required
                className="w-full text-neutral-200"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName" className="text-neutral-300">Last Name</Label>
              <Input
                id="lastName"
                placeholder="Doe"
                required
                className="w-full text-neutral-200"
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="email" className="text-neutral-300">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="john@example.com"
              required
              className="w-full text-neutral-200"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="phone" className="text-neutral-300">Phone Number</Label>
            <Input
              id="phone"
              type="tel"
              placeholder="(123) 456-7890"
              required
              className="w-full text-neutral-200"
            />
          </div>
          
          <div className="space-y-2 text-neutral-200">
            <Label htmlFor="message" className="text-neutral-300">Message</Label>
            <Textarea
              id="message"
              placeholder="Your message here..."
              required
              className="min-h-[120px] w-full text-neutral-200"
            />
          </div>
          
          <Button type="submit" className="w-full hover:bg-slate-800 bg-blue-500">
            Send Message
            <Send className="ml-2 h-4 w-4" />
          </Button>
        </form>
      </CardContent>
    </Card>
    </div>
    
  )
}

export default ContactForm