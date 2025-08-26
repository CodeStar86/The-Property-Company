import { createContext, useContext, useState, ReactNode } from 'react'

export interface Property {
  id: string
  title: string
  description: string
  price: number
  type: 'rental' | 'sale'
  bedrooms: number
  bathrooms: number
  address: string
  area: string
  images: string[]
  features: string[]
  status: 'available' | 'let' | 'sold'
  createdAt: Date
}

export interface ContactSubmission {
  id: string
  firstName: string
  lastName: string
  email: string
  phone: string
  propertyAddress?: string
  serviceType: string
  message: string
  createdAt: Date
}

interface AppContextType {
  properties: Property[]
  contactSubmissions: ContactSubmission[]
  addProperty: (property: Omit<Property, 'id' | 'createdAt'>) => void
  updateProperty: (id: string, updates: Partial<Property>) => void
  deleteProperty: (id: string) => void
  addContactSubmission: (submission: Omit<ContactSubmission, 'id' | 'createdAt'>) => void
  isAdmin: boolean
  setIsAdmin: (isAdmin: boolean) => void
}

const AppContext = createContext<AppContextType | undefined>(undefined)

// Mock initial properties
const initialProperties: Property[] = [
  {
    id: '1',
    title: 'Modern 2-Bedroom Apartment in Crouch End',
    description: 'A beautifully renovated 2-bedroom apartment in the heart of Crouch End. Features modern kitchen, spacious living room, and excellent transport links.',
    price: 2200,
    type: 'rental',
    bedrooms: 2,
    bathrooms: 1,
    address: '45 Park Road, Crouch End',
    area: 'Crouch End',
    images: [
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800',
      'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=800'
    ],
    features: ['Modern Kitchen', 'Wooden Floors', 'Garden Access', 'Near Transport'],
    status: 'available',
    createdAt: new Date('2024-01-15')
  },
  {
    id: '2',
    title: 'Victorian Terrace House in Southgate',
    description: 'Charming 3-bedroom Victorian terrace house with period features, large garden, and off-street parking.',
    price: 650000,
    type: 'sale',
    bedrooms: 3,
    bathrooms: 2,
    address: '12 High Street, Southgate',
    area: 'Southgate',
    images: [
      'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800',
      'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800'
    ],
    features: ['Period Features', 'Large Garden', 'Off-Street Parking', 'Victorian Architecture'],
    status: 'available',
    createdAt: new Date('2024-01-10')
  },
  {
    id: '3',
    title: 'Luxury 1-Bedroom Flat in Muswell Hill',
    description: 'Stunning newly built 1-bedroom flat with balcony, modern appliances, and 24-hour concierge service.',
    price: 1800,
    type: 'rental',
    bedrooms: 1,
    bathrooms: 1,
    address: '88 Broadway, Muswell Hill',
    area: 'Muswell Hill',
    images: [
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800',
      'https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800'
    ],
    features: ['Balcony', 'Concierge Service', 'Modern Appliances', 'City Views'],
    status: 'available',
    createdAt: new Date('2024-01-20')
  }
]

export function AppProvider({ children }: { children: ReactNode }) {
  const [properties, setProperties] = useState<Property[]>(initialProperties)
  const [contactSubmissions, setContactSubmissions] = useState<ContactSubmission[]>([])
  const [isAdmin, setIsAdmin] = useState(false)

  const addProperty = (propertyData: Omit<Property, 'id' | 'createdAt'>) => {
    const newProperty: Property = {
      ...propertyData,
      id: Date.now().toString(),
      createdAt: new Date()
    }
    setProperties(prev => [...prev, newProperty])
  }

  const updateProperty = (id: string, updates: Partial<Property>) => {
    setProperties(prev => prev.map(prop => 
      prop.id === id ? { ...prop, ...updates } : prop
    ))
  }

  const deleteProperty = (id: string) => {
    setProperties(prev => prev.filter(prop => prop.id !== id))
  }

  const addContactSubmission = (submissionData: Omit<ContactSubmission, 'id' | 'createdAt'>) => {
    const newSubmission: ContactSubmission = {
      ...submissionData,
      id: Date.now().toString(),
      createdAt: new Date()
    }
    setContactSubmissions(prev => [...prev, newSubmission])
  }

  return (
    <AppContext.Provider value={{
      properties,
      contactSubmissions,
      addProperty,
      updateProperty,
      deleteProperty,
      addContactSubmission,
      isAdmin,
      setIsAdmin
    }}>
      {children}
    </AppContext.Provider>
  )
}

export function useApp() {
  const context = useContext(AppContext)
  if (context === undefined) {
    throw new Error('useApp must be used within an AppProvider')
  }
  return context
}