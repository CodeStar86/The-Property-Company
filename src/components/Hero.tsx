import { Button } from "./ui/button"
import { ImageWithFallback } from "./figma/ImageWithFallback"
import { CheckCircle } from "lucide-react"

interface HeroProps {
  onNavigate?: (page: string) => void
}

export default function Hero({ onNavigate }: HeroProps) {
  return (
    <section id="home" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="mb-6">
              <span className="inline-block bg-[#1e3a8a]/10 text-[#1e3a8a] px-4 py-2 rounded-full mb-4">
                Trusted Since 1998
              </span>
              <h1 className="text-4xl md:text-5xl mb-6 text-foreground">
                North London's Leading Property Management Specialists
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Expert property management and lettings services backed by modern technology. 
                Get your free valuation today - no strings attached.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button 
                size="lg" 
                className="bg-[#1e3a8a] hover:bg-[#1e40af] text-white"
                onClick={() => onNavigate?.('contact')}
              >
                Request Free Valuation
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-[#1e3a8a] text-[#1e3a8a] hover:bg-[#1e3a8a] hover:text-white"
                onClick={() => onNavigate?.('services')}
              >
                View Our Services
              </Button>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <CheckCircle className="text-green-600 h-5 w-5" />
                <span className="text-foreground">Free expert valuations</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="text-green-600 h-5 w-5" />
                <span className="text-foreground">Technology-led management solutions</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="text-green-600 h-5 w-5" />
                <span className="text-foreground">25+ years of North London expertise</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1559209537-dafe2fe2886b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBwcm9wZXJ0eSUyMG1hbmFnZW1lbnQlMjBvZmZpY2V8ZW58MXx8fHwxNzU2MTI5NTMzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Modern property management office"
              className="rounded-lg shadow-2xl w-full h-auto"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-lg">
              <div className="text-center">
                <div className="text-2xl font-bold text-[#1e3a8a]">4.0★</div>
                <div className="text-sm text-muted-foreground">Trustpilot Rating</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}