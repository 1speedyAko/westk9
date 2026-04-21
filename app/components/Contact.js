"use client"
import React, { useState } from "react"
import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Send, CheckCircle, MapPin, Phone, Mail } from "lucide-react"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"

const formSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().regex(
    /^(\+?254|0)[17]\d{8}$|^\+?[1-9]\d{6,14}$/,
    "Please enter a valid phone number (e.g. 0712 345 678 or +254 712 345 678)"
  ),
  message: z.string().min(10, "Message must be at least 10 characters").max(500, "Message must be less than 500 characters"),
})

const contactInfo = [
  { icon: MapPin, label: "Location", value: "Kisumu County, Kenya" },
  { icon: Phone, label: "Phone", value: "+254 702 802 588" },
  { icon: Mail, label: "Email", value: "info@westk9.co.ke" },
]

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState("")

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: { firstName: "", lastName: "", email: "", phone: "", message: "" },
  })

  const onSubmit = async (formData) => {
    setIsSubmitting(true)
    setError("")
    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
      const data = await response.json()
      if (!response.ok) throw new Error(data.message || 'Failed to send message')
      form.reset()
      setIsSuccess(true)
      setTimeout(() => setIsSuccess(false), 5000)
    } catch (err) {
      setError(err.message || 'Something went wrong. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="bg-slate-950 py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="text-xs font-semibold uppercase tracking-widest text-emerald-400">Get In Touch</span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-white">Contact Us</h2>
          <div className="mt-4 w-12 h-1 bg-emerald-500 rounded-full mx-auto" />
          <p className="mt-5 text-slate-400 max-w-md mx-auto text-sm leading-relaxed">
            Ready to transform your dog? Send us a message and we'll get back to you within 24 hours.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10 items-start">
          {/* Left — info panel */}
          <div className="lg:col-span-2 space-y-4">
            {contactInfo.map(({ icon: Icon, label, value }) => (
              <div key={label} className="flex items-start gap-4 p-5 rounded-xl bg-slate-900 border border-white/5">
                <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-4 h-4 text-emerald-400" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 uppercase tracking-widest">{label}</p>
                  <p className="text-slate-200 text-sm font-medium mt-0.5">{value}</p>
                </div>
              </div>
            ))}

            {/* Decorative quote */}
            <div className="p-5 rounded-xl bg-gradient-to-br from-emerald-500/10 to-teal-500/5 border border-emerald-500/20 mt-6">
              <p className="text-emerald-300 text-sm italic leading-relaxed">
                "Every dog has the potential to be well-behaved, confident, and a joy to be around."
              </p>
              <p className="text-emerald-500 text-xs mt-2 font-medium">Rodney Winstone - CEO</p>
            </div>
          </div>

          {/* Right — form */}
          <div className="lg:col-span-3 bg-slate-900 border border-white/5 rounded-2xl p-8">
            {isSuccess ? (
              <div className="flex flex-col items-center justify-center space-y-4 py-16">
                <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center">
                  <CheckCircle className="h-8 w-8 text-emerald-400" />
                </div>
                <p className="text-white font-semibold text-lg">Message Sent!</p>
                <p className="text-slate-400 text-sm text-center max-w-xs">
                  Thank you for reaching out. We'll get back to you within 24 hours.
                </p>
                <button
                  onClick={() => setIsSuccess(false)}
                  className="mt-2 bg-slate-800 hover:bg-slate-700 text-slate-200 text-sm px-5 py-2.5 rounded-xl border border-white/5 transition-colors duration-200"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                  <div className="grid grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="firstName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-slate-300 text-xs uppercase tracking-wider">First Name</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="John"
                              className="bg-slate-800 border-white/5 text-slate-200 placeholder:text-slate-600 focus:border-emerald-500/50 focus:ring-emerald-500/20"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage className="text-red-400 text-xs" />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="lastName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-slate-300 text-xs uppercase tracking-wider">Last Name</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Doe"
                              className="bg-slate-800 border-white/5 text-slate-200 placeholder:text-slate-600 focus:border-emerald-500/50 focus:ring-emerald-500/20"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage className="text-red-400 text-xs" />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-slate-300 text-xs uppercase tracking-wider">Email</FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            placeholder="john@example.com"
                            className="bg-slate-800 border-white/5 text-slate-200 placeholder:text-slate-600 focus:border-emerald-500/50 focus:ring-emerald-500/20"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage className="text-red-400 text-xs" />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-slate-300 text-xs uppercase tracking-wider">Phone Number</FormLabel>
                        <FormControl>
                          <Input
                            type="tel"
                            placeholder="+254 700 000 000"
                            className="bg-slate-800 border-white/5 text-slate-200 placeholder:text-slate-600 focus:border-emerald-500/50 focus:ring-emerald-500/20"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage className="text-red-400 text-xs" />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-slate-300 text-xs uppercase tracking-wider">Message</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Tell us about your dog and what you'd like help with..."
                            className="min-h-[130px] bg-slate-800 border-white/5 text-slate-200 placeholder:text-slate-600 focus:border-emerald-500/50 focus:ring-emerald-500/20 resize-none"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage className="text-red-400 text-xs" />
                      </FormItem>
                    )}
                  />

                  {error && (
                    <p className="text-red-400 text-xs bg-red-500/10 border border-red-500/20 rounded-lg px-4 py-3">{error}</p>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full group inline-flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-400 disabled:bg-emerald-500/50 text-slate-950 font-semibold py-3 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/20"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-200" />
                      </>
                    )}
                  </button>
                </form>
              </Form>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactForm