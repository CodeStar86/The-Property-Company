import { useApp } from "../contexts/AppContext"
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card"
import { Button } from "../components/ui/button"
import { Badge } from "../components/ui/badge"
import { ImageWithFallback } from "../components/figma/ImageWithFallback"
import { Bed, Bath, MapPin, Phone, Mail } from "lucide-react"

interface RentalsPageProps {
  onNavigate?: (page: string) => void
  onViewProperty?: (propertyId: string) => void
}

export default function RentalsPage({ onNavigate, onViewProperty }: RentalsPageProps) {
  const { properties } = useApp()
  const rentalProperties = properties.filter(p => p.type === 'rental' && p.status === 'available')

  const handlePhoneCall = () => {
    window.location.href = 'tel:02083409090'
  }

  const handleEmailEnquiry = () => {
    onNavigate?.('contact')
  }

  const handlePropertyEmail = (propertyTitle: string) => {
    const subject = encodeURIComponent(`Enquiry about: ${propertyTitle}`)
    const body = encodeURIComponent(`Hello,\n\nI am interested in the property: ${propertyTitle}\n\nPlease contact me with more information.\n\nThank you`)
    window.location.href = `mailto:info@thepropertycompany.co.uk?subject=${subject}&body=${body}`
  }

  return (
    <div className="py-20 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl mb-4 text-foreground">
            Properties for Rent
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover quality rental properties across North London. All our properties are carefully selected and professionally managed.
          </p>
        </div>

        {rentalProperties.length === 0 ? (
          <div className="text-center py-20">
            <h3 className="text-2xl mb-4 text-foreground">No rental properties available</h3>
            <p className="text-muted-foreground mb-6">Please check back soon for new listings.</p>
            <Button 
              className="bg-[#1e3a8a] hover:bg-[#1e40af] text-white"
              onClick={handlePhoneCall}
            >
              <Phone className="mr-2 h-4 w-4" />
              Contact Us for Updates
            </Button>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rentalProperties.map((property) => (
              <Card key={property.id} className="hover:shadow-lg transition-shadow overflow-hidden">
                <div className="relative">
                  <ImageWithFallback
                    src={property.images[0]}
                    alt={property.title}
                    className="w-full h-64 object-cover"
                  />
                  <Badge className="absolute top-4 left-4 bg-[#1e3a8a] text-white">
                    For Rent
                  </Badge>
                  <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-lg shadow-md">
                    <span className="text-lg font-bold text-[#1e3a8a]">
                      £{property.price.toLocaleString()}/month
                    </span>
                  </div>
                </div>
                
                <CardHeader>
                  <CardTitle className="text-xl line-clamp-2">{property.title}</CardTitle>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    <span className="text-sm">{property.address}</span>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground line-clamp-3">{property.description}</p>
                  
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Bed className="h-4 w-4" />
                      <span>{property.bedrooms} bed</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Bath className="h-4 w-4" />
                      <span>{property.bathrooms} bath</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {property.features.slice(0, 3).map((feature, index) => (
                      <Badge key={index} variant="secondary">
                        {feature}
                      </Badge>
                    ))}
                    {property.features.length > 3 && (
                      <Badge variant="outline">
                        +{property.features.length - 3} more
                      </Badge>
                    )}
                  </div>
                  
                  <div className="flex gap-2 pt-4">
                    <Button 
                      className="flex-1 bg-[#1e3a8a] hover:bg-[#1e40af] text-white"
                      onClick={() => onViewProperty?.(property.id)}
                    >
                      View Details
                    </Button>
                    <Button 
                      variant="outline" 
                      className="border-[#1e3a8a] text-[#1e3a8a] hover:bg-[#1e3a8a] hover:text-white"
                      onClick={() => handlePropertyEmail(property.title)}
                      title="Send email enquiry"
                    >
                      <Mail className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* Contact Section */}
        <div className="mt-20 text-center bg-white p-12 rounded-lg shadow-md">
          <h3 className="text-2xl mb-4 text-foreground">Looking for Something Specific?</h3>
          <p className="text-muted-foreground mb-6">
            Can't find what you're looking for? Our team can help you find the perfect rental property in North London.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              className="bg-[#1e3a8a] hover:bg-[#1e40af] text-white"
              onClick={handlePhoneCall}
            >
              <Phone className="mr-2 h-4 w-4" />
              Call Us: 020 8340 9090
            </Button>
            <Button 
              variant="outline" 
              className="border-[#1e3a8a] text-[#1e3a8a] hover:bg-[#1e3a8a] hover:text-white"
              onClick={handleEmailEnquiry}
            >
              <Mail className="mr-2 h-4 w-4" />
              Email Enquiry
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}