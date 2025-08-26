import { useState } from "react"
import { useApp } from "../contexts/AppContext"
import { Button } from "../components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card"
import { Input } from "../components/ui/input"
import { Textarea } from "../components/ui/textarea"
import { Label } from "../components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select"
import { Badge } from "../components/ui/badge"
import { MapPin, Phone, Mail, Clock, MessageSquare, CheckCircle } from "lucide-react"
import { toast } from "sonner"

export default function ContactPage() {
  const { addContactSubmission } = useApp()
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    propertyAddress: '',
    serviceType: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    const requiredFields = ['firstName', 'lastName', 'email', 'phone', 'serviceType', 'message']
    const missingFields = requiredFields.filter(field => !formData[field as keyof typeof formData])
    
    if (missingFields.length > 0) {
      toast.error(`Please fill in: ${missingFields.join(', ')}`)
      return
    }

    if (!formData.email.includes('@')) {
      toast.error('Please enter a valid email address')
      return
    }

    addContactSubmission(formData)
    toast.success('Thank you! Your message has been sent. We\'ll get back to you within 24 hours.')
    
    // Reset form
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      propertyAddress: '',
      serviceType: '',
      message: ''
    })
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const contactMethods = [
    {
      icon: Phone,
      title: "Call Us",
      description: "Speak directly with our experts",
      details: "020 8340 9090",
      action: "tel:02083409090",
      available: "Mon-Fri 9AM-6PM, Sat 9AM-4PM"
    },
    {
      icon: Mail,
      title: "Email Us",
      description: "Send us a detailed message",
      details: "info@thepropertycompany.co.uk",
      action: "mailto:info@thepropertycompany.co.uk",
      available: "24/7 - We respond within 24 hours"
    },
    {
      icon: MessageSquare,
      title: "Free Consultation",
      description: "Book a no-obligation meeting",
      details: "In-person or virtual",
      action: "#contact-form",
      available: "Flexible scheduling available"
    }
  ]

  const faqs = [
    {
      question: "How quickly do you respond to enquiries?",
      answer: "We respond to all enquiries within 24 hours during business days, and often much sooner. Emergency calls are answered 24/7."
    },
    {
      question: "Do you charge for property valuations?",
      answer: "No, we provide free property valuations with no obligation. Our expert team will assess your property and provide detailed market analysis."
    },
    {
      question: "What areas do you cover?",
      answer: "We specialize in North London areas including Crouch End, Southgate, Muswell Hill, Hornsey, Finchley, Palmers Green, Winchmore Hill, and Wood Green."
    },
    {
      question: "Can I speak to someone immediately?",
      answer: "Yes! Call us during business hours and speak directly with one of our property experts. For out-of-hours emergencies, we have 24/7 support available."
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-[#1e3a8a] text-white">
              Get In Touch
            </Badge>
            <h1 className="text-4xl md:text-5xl mb-6 text-foreground">
              Let's Discuss Your Property Needs
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ready to get started? Contact us today for expert property advice, free valuations, 
              or to discuss how we can help maximize your property investment.
            </p>
          </div>

          {/* Contact Methods */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {contactMethods.map((method, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow cursor-pointer group">
                <CardHeader>
                  <div className="h-16 w-16 bg-[#1e3a8a]/10 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-[#1e3a8a]/20 transition-colors">
                    <method.icon className="h-8 w-8 text-[#1e3a8a]" />
                  </div>
                  <CardTitle className="text-xl">{method.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-muted-foreground">{method.description}</p>
                  <p className="font-medium text-[#1e3a8a]">{method.details}</p>
                  <p className="text-sm text-muted-foreground">{method.available}</p>
                  <Button 
                    className="bg-[#1e3a8a] hover:bg-[#1e40af] text-white"
                    onClick={() => {
                      if (method.action.startsWith('tel:') || method.action.startsWith('mailto:')) {
                        window.location.href = method.action
                      } else {
                        document.querySelector('#contact-form')?.scrollIntoView({ behavior: 'smooth' })
                      }
                    }}
                  >
                    {method.title === 'Call Us' ? 'Call Now' : 
                     method.title === 'Email Us' ? 'Send Email' : 'Book Consultation'}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form and Office Info */}
      <section className="py-20 bg-gray-50" id="contact-form">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Request Your Free Consultation</CardTitle>
                  <p className="text-muted-foreground">
                    Fill out the form below and we'll get back to you within 24 hours with expert advice tailored to your needs.
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName">First Name *</Label>
                        <Input 
                          id="firstName" 
                          placeholder="Enter your first name" 
                          value={formData.firstName}
                          onChange={(e) => handleInputChange('firstName', e.target.value)}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="lastName">Last Name *</Label>
                        <Input 
                          id="lastName" 
                          placeholder="Enter your last name"
                          value={formData.lastName}
                          onChange={(e) => handleInputChange('lastName', e.target.value)}
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="email">Email Address *</Label>
                        <Input 
                          id="email" 
                          type="email" 
                          placeholder="your.email@example.com"
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input 
                          id="phone" 
                          type="tel" 
                          placeholder="07000 000 000"
                          value={formData.phone}
                          onChange={(e) => handleInputChange('phone', e.target.value)}
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="propertyAddress">Property Address (Optional)</Label>
                      <Input 
                        id="propertyAddress" 
                        placeholder="Enter your property address"
                        value={formData.propertyAddress}
                        onChange={(e) => handleInputChange('propertyAddress', e.target.value)}
                      />
                    </div>

                    <div>
                      <Label htmlFor="serviceType">Service Required *</Label>
                      <Select value={formData.serviceType} onValueChange={(value) => handleInputChange('serviceType', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="valuation">Free Property Valuation</SelectItem>
                          <SelectItem value="lettings">Lettings Service</SelectItem>
                          <SelectItem value="management">Property Management</SelectItem>
                          <SelectItem value="sales">Property Sales</SelectItem>
                          <SelectItem value="consultation">General Consultation</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="message">Tell Us About Your Requirements *</Label>
                      <Textarea 
                        id="message" 
                        placeholder="Please describe your property needs, questions, or how we can help you..." 
                        rows={4}
                        value={formData.message}
                        onChange={(e) => handleInputChange('message', e.target.value)}
                        required
                      />
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <CheckCircle className="text-green-600 h-5 w-5" />
                        <span className="text-sm text-muted-foreground">Free consultation with no obligation</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="text-green-600 h-5 w-5" />
                        <span className="text-sm text-muted-foreground">Expert advice within 24 hours</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="text-green-600 h-5 w-5" />
                        <span className="text-sm text-muted-foreground">Your information is kept completely confidential</span>
                      </div>
                    </div>

                    <Button type="submit" className="w-full bg-[#1e3a8a] hover:bg-[#1e40af] text-white">
                      Send Message & Request Consultation
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Office Information */}
            <div className="space-y-6">
              {/* Crouch End Office */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-[#1e3a8a]" />
                    Crouch End Office
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Address</p>
                    <p className="text-foreground">123 Park Road<br />Crouch End<br />London N8 8TE</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4 text-[#1e3a8a]" />
                    <a href="tel:02083409090" className="text-sm hover:text-[#1e3a8a] transition-colors">
                      020 8340 9090
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="h-4 w-4 text-[#1e3a8a]" />
                    <a href="mailto:crouchend@thepropertycompany.co.uk" className="text-sm hover:text-[#1e3a8a] transition-colors">
                      crouchend@thepropertycompany.co.uk
                    </a>
                  </div>
                  <div className="pt-2">
                    <Badge variant="secondary">Main Office</Badge>
                  </div>
                </CardContent>
              </Card>

              {/* Southgate Office */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-[#1e3a8a]" />
                    Southgate Office
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Address</p>
                    <p className="text-foreground">456 High Street<br />Southgate<br />London N14 6EL</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4 text-[#1e3a8a]" />
                    <a href="tel:02088867777" className="text-sm hover:text-[#1e3a8a] transition-colors">
                      020 8886 7777
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="h-4 w-4 text-[#1e3a8a]" />
                    <a href="mailto:southgate@thepropertycompany.co.uk" className="text-sm hover:text-[#1e3a8a] transition-colors">
                      southgate@thepropertycompany.co.uk
                    </a>
                  </div>
                </CardContent>
              </Card>

              {/* Opening Hours */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Clock className="h-5 w-5 text-[#1e3a8a]" />
                    Opening Hours
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Monday - Friday</span>
                    <span className="text-sm font-medium">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Saturday</span>
                    <span className="text-sm font-medium">9:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Sunday</span>
                    <span className="text-sm font-medium">Closed</span>
                  </div>
                  <div className="pt-3 border-t">
                    <Badge className="bg-green-600 text-white">
                      24/7 Emergency Support
                    </Badge>
                    <p className="text-xs text-muted-foreground mt-2">
                      Emergency maintenance and urgent property issues
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl mb-4 text-foreground">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Quick answers to common questions about our services.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {faqs.map((faq, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg">{faq.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">Still have questions?</p>
            <Button className="bg-[#1e3a8a] hover:bg-[#1e40af] text-white">
              <Phone className="mr-2 h-4 w-4" />
              Call Us: 020 8340 9090
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}