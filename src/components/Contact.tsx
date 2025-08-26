import { useState } from "react"
import { useApp } from "../contexts/AppContext"
import { Button } from "./ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"
import { Label } from "./ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select"
import { MapPin, Phone, Mail, Clock } from "lucide-react"
import { toast } from "sonner"

export default function Contact() {
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
    toast.success('Thank you! Your message has been sent. We\'ll get back to you soon.')
    
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

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl mb-4 text-foreground">
            Get In Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to discuss your property needs? Contact us today for a free consultation 
            or valuation. We're here to help with all your property requirements.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Request Your Free Valuation</CardTitle>
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
                    <Label htmlFor="propertyAddress">Property Address</Label>
                    <Input 
                      id="propertyAddress" 
                      placeholder="Enter your property address (optional)"
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
                        <SelectItem value="general">General Enquiry</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Tell us about your requirements..." 
                      rows={4}
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full bg-[#1e3a8a] hover:bg-[#1e40af] text-white">
                    Send Message
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
              <CardContent className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Mon - Fri</span>
                  <span className="text-sm">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Saturday</span>
                  <span className="text-sm">9:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Sunday</span>
                  <span className="text-sm">Closed</span>
                </div>
                <div className="pt-2 border-t">
                  <p className="text-xs text-muted-foreground">
                    24/7 Emergency Support Available
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}