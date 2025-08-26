import { Separator } from "./ui/separator"
import { MapPin, Phone, Mail, ExternalLink } from "lucide-react"
import LionLogo from "./LionLogo"

export default function Footer() {
  return (
    <footer className="bg-[#1e3a8a] text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <LionLogo className="h-8 w-8 text-white" />
              <h3 className="text-xl font-bold">The Property Company</h3>
            </div>
            <p className="text-white/80 mb-4">
              North London's trusted property management and lettings specialists since 1998.
            </p>
            <div className="flex items-center gap-2 mb-2">
              <Phone className="h-4 w-4" />
              <span className="text-sm">020 8340 9090</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              <span className="text-sm">info@thepropertycompany.co.uk</span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2 text-sm text-white/80">
              <li><a href="#services" className="hover:text-white transition-colors">Property Management</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Lettings Service</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Property Valuations</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Legal Compliance</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Technology Solutions</a></li>
            </ul>
          </div>

          {/* Areas We Cover */}
          <div>
            <h4 className="font-semibold mb-4">Areas We Cover</h4>
            <ul className="space-y-2 text-sm text-white/80">
              <li>Crouch End</li>
              <li>Southgate</li>
              <li>Muswell Hill</li>
              <li>Hornsey</li>
              <li>Finchley</li>
              <li>Palmers Green</li>
              <li>Winchmore Hill</li>
              <li>Wood Green</li>
            </ul>
          </div>

          {/* Office Locations */}
          <div>
            <h4 className="font-semibold mb-4">Office Locations</h4>
            <div className="space-y-4 text-sm text-white/80">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <MapPin className="h-4 w-4" />
                  <span className="font-medium">Crouch End</span>
                </div>
                <p>123 Park Road<br />London N8 8TE</p>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <MapPin className="h-4 w-4" />
                  <span className="font-medium">Southgate</span>
                </div>
                <p>456 High Street<br />London N14 6EL</p>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-white/20" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/80">
          <div className="flex flex-col md:flex-row gap-4">
            <span>&copy; 2024 The Property Company. All rights reserved.</span>
            <div className="flex gap-4">
              <a href="/privacy" className="hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="/terms" className="hover:text-white transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span>Regulated by</span>
            <a 
              href="https://www.propertymark.co.uk" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-white transition-colors flex items-center gap-1"
            >
              Propertymark
              <ExternalLink className="h-3 w-3" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}