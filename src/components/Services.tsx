import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"
import { Button } from "./ui/button"
import { Building2, Users, TrendingUp, Shield, Smartphone, HeadphonesIcon } from "lucide-react"

export default function Services() {
  const services = [
    {
      icon: Building2,
      title: "Property Management",
      description: "Comprehensive management services including maintenance, tenant relations, and compliance.",
      features: ["24/7 Emergency Response", "Regular Property Inspections", "Maintenance Coordination"]
    },
    {
      icon: Users,
      title: "Lettings Service",
      description: "End-to-end lettings from marketing to tenant placement with thorough vetting.",
      features: ["Professional Photography", "Multi-Platform Marketing", "Tenant Screening"]
    },
    {
      icon: TrendingUp,
      title: "Property Valuations",
      description: "Expert market analysis and valuations for lettings and sales in North London.",
      features: ["Free Valuations", "Market Analysis", "Investment Advice"]
    },
    {
      icon: Shield,
      title: "Legal Compliance",
      description: "Stay compliant with all regulations including safety certificates and licensing.",
      features: ["Safety Certificates", "Legal Documentation", "Regulatory Updates"]
    },
    {
      icon: Smartphone,
      title: "Technology Solutions",
      description: "Modern technology platform for seamless property management and reporting.",
      features: ["Online Portal", "Digital Reports", "Real-time Updates"]
    },
    {
      icon: HeadphonesIcon,
      title: "Dedicated Support",
      description: "Personalized service with dedicated account management for all your properties.",
      features: ["Personal Account Manager", "Priority Support", "Regular Reviews"]
    }
  ]

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl mb-4 text-foreground">
            Comprehensive Property Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From property management to lettings, we provide technology-driven solutions 
            backed by 25+ years of North London expertise.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="h-12 w-12 bg-[#1e3a8a]/10 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="h-6 w-6 text-[#1e3a8a]" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
                <CardDescription className="text-base">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="h-1.5 w-1.5 bg-[#1e3a8a] rounded-full"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" className="bg-[#1e3a8a] hover:bg-[#1e40af] text-white">
            Discuss Your Property Needs
          </Button>
        </div>
      </div>
    </section>
  )
}