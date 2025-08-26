import { ImageWithFallback } from "./figma/ImageWithFallback"
import { Badge } from "./ui/badge"
import { MapPin, Calendar, Award } from "lucide-react"

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="mb-8">
              <Badge variant="secondary" className="mb-4">
                Established 1998
              </Badge>
              <h2 className="text-3xl md:text-4xl mb-6 text-foreground">
                25+ Years of North London Property Expertise
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Founded in 1998 by Andrew Koumi, The Property Company has been serving 
                North London's property market for over 25 years. We've built our reputation 
                on trust, professionalism, and delivering exceptional results for our clients.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                Our deep understanding of North London's unique property landscape, combined 
                with modern technology and traditional values, makes us the trusted choice 
                for property owners and tenants alike.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              <div className="flex items-start gap-3">
                <div className="h-10 w-10 bg-[#1e3a8a]/10 rounded-lg flex items-center justify-center">
                  <MapPin className="h-5 w-5 text-[#1e3a8a]" />
                </div>
                <div>
                  <h4 className="font-medium text-foreground mb-1">Local Expertise</h4>
                  <p className="text-sm text-muted-foreground">
                    Specialist knowledge of Crouch End, Southgate, and surrounding areas
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="h-10 w-10 bg-[#1e3a8a]/10 rounded-lg flex items-center justify-center">
                  <Calendar className="h-5 w-5 text-[#1e3a8a]" />
                </div>
                <div>
                  <h4 className="font-medium text-foreground mb-1">Proven Track Record</h4>
                  <p className="text-sm text-muted-foreground">
                    Over 25 years of successful property management and lettings
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="h-10 w-10 bg-[#1e3a8a]/10 rounded-lg flex items-center justify-center">
                  <Award className="h-5 w-5 text-[#1e3a8a]" />
                </div>
                <div>
                  <h4 className="font-medium text-foreground mb-1">Client Satisfaction</h4>
                  <p className="text-sm text-muted-foreground">
                    4-star Trustpilot rating with excellent client reviews
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <blockquote className="text-lg italic text-foreground mb-4">
                "Our mission has always been to provide exceptional property services 
                while building lasting relationships with our clients. Technology may evolve, 
                but our commitment to trust and professionalism remains constant."
              </blockquote>
              <cite className="text-sm text-muted-foreground">
                — Andrew Koumi, Founder & Director
              </cite>
            </div>
          </div>

          <div className="space-y-6">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1634440278351-c69763d1b6b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsb25kb24lMjBwcm9wZXJ0eSUyMG1hbmFnZW1lbnR8ZW58MXx8fHwxNzU2MTI5NTM0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="London property management"
              className="rounded-lg shadow-lg w-full h-auto"
            />
            
            <div className="grid grid-cols-3 gap-4 text-center">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="text-2xl font-bold text-[#1e3a8a] mb-1">500+</div>
                <div className="text-sm text-muted-foreground">Properties Managed</div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="text-2xl font-bold text-[#1e3a8a] mb-1">25+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="text-2xl font-bold text-[#1e3a8a] mb-1">98%</div>
                <div className="text-sm text-muted-foreground">Client Retention</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}