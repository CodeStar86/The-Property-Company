import { ImageWithFallback } from "../components/figma/ImageWithFallback"
import { Badge } from "../components/ui/badge"
import { Button } from "../components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card"
import { MapPin, Calendar, Award, Users, Building2, Star, Phone, Mail } from "lucide-react"

interface AboutPageProps {
  onNavigate?: (page: string) => void
}

export default function AboutPage({ onNavigate }: AboutPageProps) {
  const timeline = [
    {
      year: "1998",
      title: "Company Founded",
      description: "Andrew Koumi establishes The Property Company with a vision to provide exceptional property services in North London."
    },
    {
      year: "2005",
      title: "Expansion",
      description: "Opened second office in Southgate to better serve the growing North London property market."
    },
    {
      year: "2012",
      title: "Technology Integration",
      description: "Introduced modern property management technology to enhance service delivery and client experience."
    },
    {
      year: "2018",
      title: "20 Years of Excellence",
      description: "Celebrated 20 years of service with over 500 properties under management and excellent client satisfaction."
    },
    {
      year: "2024",
      title: "Continued Innovation",
      description: "Leading the market with advanced technology solutions and maintaining our commitment to exceptional service."
    }
  ]

  const teamMembers = [
    {
      name: "Andrew Koumi",
      role: "Founder & Director",
      experience: "25+ years",
      description: "Andrew founded The Property Company in 1998 with a vision to provide exceptional property services. His deep knowledge of North London's property market and commitment to client satisfaction has driven the company's success."
    },
    {
      name: "Sarah Thompson",
      role: "Senior Property Manager",
      experience: "12 years",
      description: "Sarah oversees our property management services, ensuring all properties are maintained to the highest standards and tenants receive excellent service."
    },
    {
      name: "David Mitchell",
      role: "Lettings Director",
      experience: "15 years",
      description: "David leads our lettings team, specializing in finding quality tenants and maximizing rental returns for property owners."
    },
    {
      name: "Emma Johnson",
      role: "Compliance Manager",
      experience: "8 years",
      description: "Emma ensures all our properties meet current regulations and safety standards, keeping our clients protected and compliant."
    }
  ]

  const values = [
    {
      icon: Award,
      title: "Excellence",
      description: "We strive for excellence in every aspect of our service, from initial consultation to ongoing property management."
    },
    {
      icon: Users,
      title: "Trust",
      description: "Building long-term relationships based on trust, transparency, and consistent delivery of exceptional results."
    },
    {
      icon: Building2,
      title: "Expertise",
      description: "25+ years of North London property market expertise, ensuring you receive knowledgeable and professional advice."
    },
    {
      icon: Star,
      title: "Innovation",
      description: "Embracing modern technology while maintaining traditional values to provide the best possible service experience."
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="secondary" className="mb-4">
                Established 1998
              </Badge>
              <h1 className="text-4xl md:text-5xl mb-6 text-foreground">
                25+ Years of North London Property Expertise
              </h1>
              <p className="text-xl text-muted-foreground mb-6">
                Founded in 1998 by Andrew Koumi, The Property Company has been serving 
                North London's property market for over 25 years. We've built our reputation 
                on trust, professionalism, and delivering exceptional results for our clients.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                Our deep understanding of North London's unique property landscape, combined 
                with modern technology and traditional values, makes us the trusted choice 
                for property owners and tenants alike.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-[#1e3a8a] hover:bg-[#1e40af] text-white"
                  onClick={() => onNavigate?.('contact')}
                >
                  Get In Touch
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-[#1e3a8a] text-[#1e3a8a] hover:bg-[#1e3a8a] hover:text-white"
                  onClick={() => onNavigate?.('services')}
                >
                  Our Services
                </Button>
              </div>
            </div>

            <div className="relative">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1634440278351-c69763d1b6b1?w=800"
                alt="The Property Company team"
                className="rounded-lg shadow-2xl w-full h-auto"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-lg shadow-lg">
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#1e3a8a]">25+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="h-16 w-16 bg-[#1e3a8a]/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Building2 className="h-8 w-8 text-[#1e3a8a]" />
              </div>
              <div className="text-3xl font-bold text-[#1e3a8a] mb-2">500+</div>
              <div className="text-muted-foreground">Properties Managed</div>
            </div>
            <div className="text-center">
              <div className="h-16 w-16 bg-[#1e3a8a]/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Calendar className="h-8 w-8 text-[#1e3a8a]" />
              </div>
              <div className="text-3xl font-bold text-[#1e3a8a] mb-2">25+</div>
              <div className="text-muted-foreground">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="h-16 w-16 bg-[#1e3a8a]/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-[#1e3a8a]" />
              </div>
              <div className="text-3xl font-bold text-[#1e3a8a] mb-2">98%</div>
              <div className="text-muted-foreground">Client Retention</div>
            </div>
            <div className="text-center">
              <div className="h-16 w-16 bg-[#1e3a8a]/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-[#1e3a8a]" />
              </div>
              <div className="text-3xl font-bold text-[#1e3a8a] mb-2">4.0★</div>
              <div className="text-muted-foreground">Trustpilot Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl mb-4 text-foreground">
              Our Story
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From a small family business to North London's leading property specialists.
            </p>
          </div>

          <div className="space-y-8">
            {timeline.map((item, index) => (
              <div key={index} className="flex flex-col lg:flex-row gap-8 items-center">
                <div className="lg:w-1/4 text-center lg:text-right">
                  <div className="inline-block bg-[#1e3a8a] text-white px-4 py-2 rounded-lg font-bold text-lg">
                    {item.year}
                  </div>
                </div>
                <div className="lg:w-3/4">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-xl">{item.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{item.description}</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl mb-4 text-foreground">
              Our Values
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The principles that guide everything we do.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="h-16 w-16 bg-[#1e3a8a]/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-8 w-8 text-[#1e3a8a]" />
                  </div>
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl mb-4 text-foreground">
              Meet Our Team
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The experienced professionals behind our success.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="h-24 w-24 bg-[#1e3a8a]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-12 w-12 text-[#1e3a8a]" />
                  </div>
                  <CardTitle className="text-lg">{member.name}</CardTitle>
                  <p className="text-[#1e3a8a] font-medium">{member.role}</p>
                  <Badge variant="secondary">{member.experience}</Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Quote */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="h-20 w-20 bg-[#1e3a8a]/10 rounded-full flex items-center justify-center mx-auto mb-8">
              <Users className="h-10 w-10 text-[#1e3a8a]" />
            </div>
            <blockquote className="text-2xl md:text-3xl italic text-foreground mb-6">
              "Our mission has always been to provide exceptional property services 
              while building lasting relationships with our clients. Technology may evolve, 
              but our commitment to trust and professionalism remains constant."
            </blockquote>
            <cite className="text-lg text-muted-foreground">
              — Andrew Koumi, Founder & Director
            </cite>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#1e3a8a] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl mb-4">
            Experience the Difference
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto mb-8">
            Join hundreds of satisfied property owners who trust us with their investments.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-[#1e3a8a] hover:bg-gray-100"
              onClick={() => onNavigate?.('contact')}
            >
              <Mail className="mr-2 h-4 w-4" />
              Start Your Journey
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