import { useState } from "react"
import { AppProvider, useApp } from "./contexts/AppContext"
import { Toaster } from "./components/ui/sonner"
import { Button } from "./components/ui/button"
import { Badge } from "./components/ui/badge"
import { ImageWithFallback } from "./components/figma/ImageWithFallback"
import { MapPin, Phone, Mail, Bed, Bath } from "lucide-react"
import Header from "./components/Header"
import Footer from "./components/Footer"
import HomePage from "./pages/HomePage"
import RentalsPage from "./pages/RentalsPage"
import SalesPage from "./pages/SalesPage"
import AdminDashboard from "./pages/AdminDashboard"
import ServicesPage from "./pages/ServicesPage"
import AboutPage from "./pages/AboutPage"
import ContactPage from "./pages/ContactPage"

// Simple Property Detail Page Component
function PropertyDetailPage({ propertyId, onNavigate }: { propertyId: string | null, onNavigate: (page: string) => void }) {
  const { properties } = useApp()
  const property = properties.find(p => p.id === propertyId)

  if (!property) {
    return (
      <div className="py-20 bg-gray-50 min-h-screen">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl mb-4">Property Not Found</h1>
          <Button onClick={() => onNavigate('home')} className="bg-[#1e3a8a] hover:bg-[#1e40af] text-white">
            Return Home
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="py-20 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4">
        <Button 
          onClick={() => onNavigate(property.type === 'rental' ? 'rentals' : 'sales')} 
          variant="outline" 
          className="mb-6"
        >
          ← Back to {property.type === 'rental' ? 'Rentals' : 'Sales'}
        </Button>
        
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <ImageWithFallback
              src={property.images[0]}
              alt={property.title}
              className="w-full h-96 object-cover rounded-lg shadow-lg"
            />
          </div>
          
          <div>
            <Badge className="mb-4 bg-[#1e3a8a] text-white">
              {property.type === 'rental' ? 'For Rent' : 'For Sale'}
            </Badge>
            <h1 className="text-4xl mb-4">{property.title}</h1>
            <div className="text-3xl text-[#1e3a8a] mb-6">
              £{property.price.toLocaleString()}{property.type === 'rental' ? '/month' : ''}
            </div>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-[#1e3a8a]" />
                <span>{property.address}</span>
              </div>
              <div className="flex gap-6">
                <div className="flex items-center gap-2">
                  <Bed className="h-5 w-5 text-[#1e3a8a]" />
                  <span>{property.bedrooms} Bedrooms</span>
                </div>
                <div className="flex items-center gap-2">
                  <Bath className="h-5 w-5 text-[#1e3a8a]" />
                  <span>{property.bathrooms} Bathrooms</span>
                </div>
              </div>
            </div>
            
            <p className="text-lg text-muted-foreground mb-8">{property.description}</p>
            
            <div className="mb-8">
              <h3 className="text-xl mb-4">Features</h3>
              <div className="flex flex-wrap gap-2">
                {property.features.map((feature, index) => (
                  <Badge key={index} variant="secondary">{feature}</Badge>
                ))}
              </div>
            </div>
            
            <div className="flex gap-4">
              <Button 
                size="lg" 
                className="bg-[#1e3a8a] hover:bg-[#1e40af] text-white"
                onClick={() => onNavigate('contact')}
              >
                <Mail className="mr-2 h-4 w-4" />
                Enquire Now
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-[#1e3a8a] text-[#1e3a8a] hover:bg-[#1e3a8a] hover:text-white"
                onClick={() => window.location.href = 'tel:02083409090'}
              >
                <Phone className="mr-2 h-4 w-4" />
                Call Us
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function App() {
  const [currentPage, setCurrentPage] = useState('home')
  const [selectedPropertyId, setSelectedPropertyId] = useState<string | null>(null)

  const handleNavigateToProperty = (propertyId: string) => {
    setSelectedPropertyId(propertyId)
    setCurrentPage('property-details')
  }

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={setCurrentPage} />
      case 'rentals':
        return <RentalsPage onNavigate={setCurrentPage} onViewProperty={handleNavigateToProperty} />
      case 'sales':
        return <SalesPage onNavigate={setCurrentPage} onViewProperty={handleNavigateToProperty} />
      case 'services':
        return <ServicesPage onNavigate={setCurrentPage} />
      case 'about':
        return <AboutPage onNavigate={setCurrentPage} />
      case 'contact':
        return <ContactPage />
      case 'admin':
        return <AdminDashboard />
      case 'property-details':
        return <PropertyDetailPage propertyId={selectedPropertyId} onNavigate={setCurrentPage} />
      default:
        return <HomePage onNavigate={setCurrentPage} />
    }
  }

  return (
    <AppProvider>
      <div className="min-h-screen">
        <Header currentPage={currentPage} onNavigate={setCurrentPage} />
        <main>
          {renderPage()}
        </main>
        <Footer />
        <Toaster position="top-right" />
      </div>
    </AppProvider>
  )
}