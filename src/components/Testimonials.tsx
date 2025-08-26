import { Card, CardContent } from "./ui/card"
import { Star } from "lucide-react"

export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Property Owner, Crouch End",
      content: "The Property Company has managed my rental property for 3 years. Their professionalism and attention to detail is outstanding. I never worry about my property when it's in their hands.",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Landlord, Southgate",
      content: "Excellent service from start to finish. They found quality tenants quickly and handle all maintenance issues promptly. Their online portal makes everything so easy to track.",
      rating: 5
    },
    {
      name: "Emma Thompson",
      role: "Property Investor",
      content: "Andrew and his team are fantastic. They really know the North London market and their advice has been invaluable for my property investments. Highly recommended!",
      rating: 4
    },
    {
      name: "David Williams",
      role: "Tenant, Crouch End",
      content: "As a tenant, I appreciate how responsive and professional they are. Any issues are resolved quickly and the communication is always clear and friendly.",
      rating: 5
    }
  ]

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${
          i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
        }`}
      />
    ))
  }

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl mb-4 text-foreground">
            What Our Clients Say
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Don't just take our word for it. See what our satisfied clients have to say 
            about our property management and lettings services.
          </p>
          
          {/* Trustpilot Rating Highlight */}
          <div className="inline-flex items-center bg-green-50 px-6 py-4 rounded-lg border border-green-200 mb-12">
            <div className="flex items-center gap-3">
              <div className="flex">
                {renderStars(4)}
              </div>
              <span className="text-lg font-semibold text-foreground">4.0 out of 5</span>
              <span className="text-muted-foreground">on</span>
              <span className="font-semibold text-green-600">Trustpilot</span>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {renderStars(testimonial.rating)}
                </div>
                <blockquote className="text-lg text-foreground mb-4 italic">
                  "{testimonial.content}"
                </blockquote>
                <div className="border-t pt-4">
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <p className="text-muted-foreground mb-4">
            Join our satisfied clients and experience professional property management
          </p>
          <a 
            href="https://uk.trustpilot.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center text-primary hover:underline"
          >
            View all reviews on Trustpilot →
          </a>
        </div>
      </div>
    </section>
  )
}