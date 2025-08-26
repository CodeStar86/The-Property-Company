import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card"
import { Button } from "../components/ui/button"
import { Badge } from "../components/ui/badge"
import { ImageWithFallback } from "../components/figma/ImageWithFallback"
import { Building2, Users, TrendingUp, Shield, Smartphone, HeadphonesIcon, CheckCircle, Phone, Mail } from "lucide-react"

interface ServicesPageProps {
  onNavigate?: (page: string) => void
}

export default function ServicesPage({ onNavigate }: ServicesPageProps) {
  const services = [
    {
      icon: Building2,
      title: "Property Management",
      description: "Comprehensive management services including maintenance, tenant relations, and compliance.",
      features: ["24/7 Emergency Response", "Regular Property Inspections", "Maintenance Coordination", "Tenant Relations Management", "Compliance Monitoring", "Financial Reporting"],
      benefits: [
        "Reduce vacancy periods with professional management",
        "Expert handling of all tenant-related issues",
        "Ensure compliance with all regulations",
        "Maximize rental income through strategic pricing"
      ]
    },
    {
      icon: Users,
      title: "Lettings Service",
      description: "End-to-end lettings from marketing to tenant placement with thorough vetting.",
      features: ["Professional Photography", "Multi-Platform Marketing", "Tenant Screening", "Reference Checking", "Inventory Management", "Tenancy Agreements"],
      benefits: [
        "Find quality tenants quickly",
        "Professional marketing maximizes interest",
        "Thorough vetting reduces risks",
        "Complete legal compliance"
      ]
    },
    {
      icon: TrendingUp,
      title: "Property Valuations",
      description: "Expert market analysis and valuations for lettings and sales in North London.",
      features: ["Free Valuations", "Market Analysis", "Investment Advice", "Comparable Analysis", "Rental Yield Assessment", "Growth Projections"],
      benefits: [
        "Accurate market valuations",
        "Strategic pricing advice",
        "Investment opportunity identification",
        "Market trend insights"
      ]
    },
    {
      icon: Shield,
      title: "Legal Compliance",
      description: "Stay compliant with all regulations including safety certificates and licensing.",
      features: ["Safety Certificates", "Legal Documentation", "Regulatory Updates", "HMO Licensing", "Deposit Protection", "Right to Rent Checks"],
      benefits: [
        "Avoid costly legal issues",
        "Stay updated with changing regulations",
        "Professional documentation handling",
        "Peace of mind through compliance"
      ]
    },
    {
      icon: Smartphone,
      title: "Technology Solutions",
      description: "Modern technology platform for seamless property management and reporting.",
      features: ["Online Portal", "Digital Reports", "Real-time Updates", "Mobile App Access", "Document Storage", "Automated Communications"],
      benefits: [
        "24/7 access to property information",
        "Real-time updates and notifications",
        "Streamlined communication",
        "Digital document management"
      ]
    },
    {
      icon: HeadphonesIcon,
      title: "Dedicated Support",
      description: "Personalized service with dedicated account management for all your properties.",
      features: ["Personal Account Manager", "Priority Support", "Regular Reviews", "Strategic Planning", "Market Updates", "Performance Analysis"],
      benefits: [
        "Personalized service experience",
        "Strategic property advice",
        "Regular performance reviews",
        "Direct access to your account manager"
      ]
    }
  ]

  const processSteps = [
    {
      step: "1",
      title: "Initial Consultation",
      description: "We meet with you to understand your property goals and requirements."
    },
    {
      step: "2",
      title: "Property Assessment",
      description: "Our experts evaluate your property and provide market analysis."
    },
    {
      step: "3",
      title: "Service Proposal",
      description: "We present a tailored service package based on your needs."
    },
    {
      step: "4",
      title: "Implementation",
      description: "We begin managing your property with our comprehensive services."
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="mb-6">
                <Badge className="mb-4 bg-[#1e3a8a] text-white">
                  Professional Services
                </Badge>
                <h1 className="text-4xl md:text-5xl mb-6 text-foreground">
                  Comprehensive Property Services for North London
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  From property management to lettings, we provide technology-driven solutions 
                  backed by 25+ years of North London expertise. Every service is designed to 
                  maximize your property investment.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button 
                  size="lg" 
                  className="bg-[#1e3a8a] hover:bg-[#1e40af] text-white"
                  onClick={() => onNavigate?.('contact')}
                >
                  Get Free Consultation
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-[#1e3a8a] text-[#1e3a8a] hover:bg-[#1e3a8a] hover:text-white"
                >
                  <Phone className="mr-2 h-4 w-4" />
                  Call 020 8340 9090
                </Button>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <CheckCircle className="text-green-600 h-5 w-5" />
                  <span className="text-foreground">Free initial consultation</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="text-green-600 h-5 w-5" />
                  <span className="text-foreground">No long-term commitments</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="text-green-600 h-5 w-5" />
                  <span className="text-foreground">Transparent pricing</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800"
                alt="Professional property services"
                className="rounded-lg shadow-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl mb-4 text-foreground">
              Our Core Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Each service is designed to provide maximum value and peace of mind for property owners.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 h-full">
                <CardHeader>
                  <div className="h-12 w-12 bg-[#1e3a8a]/10 rounded-lg flex items-center justify-center mb-4">
                    <service.icon className="h-6 w-6 text-[#1e3a8a]" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-medium text-foreground mb-2">What's Included:</h4>
                    <ul className="space-y-1">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <div className="h-1.5 w-1.5 bg-[#1e3a8a] rounded-full"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-foreground mb-2">Key Benefits:</h4>
                    <ul className="space-y-1">
                      {service.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <CheckCircle className="h-3 w-3 text-green-600 mt-0.5 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl mb-4 text-foreground">
              Our Service Process
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We follow a proven process to ensure you receive the best possible service.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="h-16 w-16 bg-[#1e3a8a] text-white rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold">{step.step}</span>
                  </div>
                  <CardTitle className="text-lg">{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#1e3a8a] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto mb-8">
            Contact us today for a free consultation and discover how our services can benefit your property investment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-[#1e3a8a] hover:bg-gray-100"
              onClick={() => onNavigate?.('contact')}
            >
              <Mail className="mr-2 h-4 w-4" />
              Get Free Consultation
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-white text-white hover:bg-white hover:text-[#1e3a8a]"
            >
              <Phone className="mr-2 h-4 w-4" />
              Call 020 8340 9090
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}