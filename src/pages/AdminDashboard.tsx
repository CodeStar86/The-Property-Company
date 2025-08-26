import { useState } from "react"
import { useApp } from "../contexts/AppContext"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card"
import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"
import { Label } from "../components/ui/label"
import { Textarea } from "../components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs"
import { Badge } from "../components/ui/badge"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "../components/ui/dialog"
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "../components/ui/alert-dialog"
import { Plus, Edit, Trash2, Building2, Users, Mail, Phone } from "lucide-react"
import { toast } from "sonner"

export default function AdminDashboard() {
  const { properties, contactSubmissions, addProperty, updateProperty, deleteProperty, isAdmin, setIsAdmin } = useApp()
  const [isLoginDialogOpen, setIsLoginDialogOpen] = useState(false)
  const [loginPassword, setLoginPassword] = useState("")
  const [isAddPropertyDialogOpen, setIsAddPropertyDialogOpen] = useState(false)
  const [editingProperty, setEditingProperty] = useState<any>(null)

  // Simple login (in real app, use proper authentication)
  const handleLogin = () => {
    if (loginPassword === "admin123") {
      setIsAdmin(true)
      setIsLoginDialogOpen(false)
      toast.success("Logged in successfully")
    } else {
      toast.error("Invalid password")
    }
  }

  const handleLogout = () => {
    setIsAdmin(false)
    toast.success("Logged out successfully")
  }

  // Property form state
  const [propertyForm, setPropertyForm] = useState({
    title: "",
    description: "",
    price: "",
    type: "rental" as "rental" | "sale",
    bedrooms: "",
    bathrooms: "",
    address: "",
    area: "",
    images: "",
    features: "",
    status: "available" as "available" | "let" | "sold"
  })

  const resetForm = () => {
    setPropertyForm({
      title: "",
      description: "",
      price: "",
      type: "rental",
      bedrooms: "",
      bathrooms: "",
      address: "",
      area: "",
      images: "",
      features: "",
      status: "available"
    })
    setEditingProperty(null)
  }

  const handleSubmitProperty = () => {
    const requiredFields = ['title', 'description', 'price', 'bedrooms', 'bathrooms', 'address', 'area']
    const missingFields = requiredFields.filter(field => !propertyForm[field as keyof typeof propertyForm])
    
    if (missingFields.length > 0) {
      toast.error(`Please fill in: ${missingFields.join(', ')}`)
      return
    }

    const propertyData = {
      title: propertyForm.title,
      description: propertyForm.description,
      price: parseInt(propertyForm.price),
      type: propertyForm.type,
      bedrooms: parseInt(propertyForm.bedrooms),
      bathrooms: parseInt(propertyForm.bathrooms),
      address: propertyForm.address,
      area: propertyForm.area,
      images: propertyForm.images ? propertyForm.images.split(',').map(img => img.trim()) : [],
      features: propertyForm.features ? propertyForm.features.split(',').map(f => f.trim()) : [],
      status: propertyForm.status
    }

    if (editingProperty) {
      updateProperty(editingProperty.id, propertyData)
      toast.success("Property updated successfully")
    } else {
      addProperty(propertyData)
      toast.success("Property added successfully")
    }

    resetForm()
    setIsAddPropertyDialogOpen(false)
  }

  const handleEditProperty = (property: any) => {
    setPropertyForm({
      title: property.title,
      description: property.description,
      price: property.price.toString(),
      type: property.type,
      bedrooms: property.bedrooms.toString(),
      bathrooms: property.bathrooms.toString(),
      address: property.address,
      area: property.area,
      images: property.images.join(', '),
      features: property.features.join(', '),
      status: property.status
    })
    setEditingProperty(property)
    setIsAddPropertyDialogOpen(true)
  }

  const handleDeleteProperty = (id: string) => {
    deleteProperty(id)
    toast.success("Property deleted successfully")
  }

  if (!isAdmin) {
    return (
      <div className="py-20 bg-gray-50 min-h-screen">
        <div className="container mx-auto px-4 max-w-md">
          <Card>
            <CardHeader className="text-center">
              <CardTitle>Admin Login</CardTitle>
              <CardDescription>Enter the admin password to access the dashboard</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  value={loginPassword}
                  onChange={(e) => setLoginPassword(e.target.value)}
                  placeholder="Enter admin password"
                  onKeyPress={(e) => e.key === 'Enter' && handleLogin()}
                />
              </div>
              <Button onClick={handleLogin} className="w-full bg-[#1e3a8a] hover:bg-[#1e40af] text-white">
                Login
              </Button>
              <p className="text-xs text-muted-foreground text-center">
                Demo password: admin123
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  return (
    <div className="py-20 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl mb-2 text-foreground">Admin Dashboard</h1>
            <p className="text-muted-foreground">Manage properties and view contact submissions</p>
          </div>
          <Button onClick={handleLogout} variant="outline">
            Logout
          </Button>
        </div>

        <Tabs defaultValue="properties" className="space-y-6">
          <TabsList>
            <TabsTrigger value="properties">Properties</TabsTrigger>
            <TabsTrigger value="contacts">Contact Submissions</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>

          <TabsContent value="properties" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl text-foreground">Property Management</h2>
              <Dialog open={isAddPropertyDialogOpen} onOpenChange={setIsAddPropertyDialogOpen}>
                <DialogTrigger asChild>
                  <Button className="bg-[#1e3a8a] hover:bg-[#1e40af] text-white" onClick={resetForm}>
                    <Plus className="mr-2 h-4 w-4" />
                    Add Property
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle>{editingProperty ? 'Edit Property' : 'Add New Property'}</DialogTitle>
                    <DialogDescription>
                      Fill in the property details below.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="col-span-2">
                      <Label htmlFor="title">Property Title</Label>
                      <Input
                        id="title"
                        value={propertyForm.title}
                        onChange={(e) => setPropertyForm(prev => ({ ...prev, title: e.target.value }))}
                        placeholder="e.g. Modern 2-Bedroom Apartment"
                      />
                    </div>
                    <div className="col-span-2">
                      <Label htmlFor="description">Description</Label>
                      <Textarea
                        id="description"
                        value={propertyForm.description}
                        onChange={(e) => setPropertyForm(prev => ({ ...prev, description: e.target.value }))}
                        placeholder="Detailed property description..."
                      />
                    </div>
                    <div>
                      <Label htmlFor="price">Price (£)</Label>
                      <Input
                        id="price"
                        type="number"
                        value={propertyForm.price}
                        onChange={(e) => setPropertyForm(prev => ({ ...prev, price: e.target.value }))}
                        placeholder="2200"
                      />
                    </div>
                    <div>
                      <Label htmlFor="type">Type</Label>
                      <Select value={propertyForm.type} onValueChange={(value: "rental" | "sale") => setPropertyForm(prev => ({ ...prev, type: value }))}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="rental">Rental</SelectItem>
                          <SelectItem value="sale">Sale</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="bedrooms">Bedrooms</Label>
                      <Input
                        id="bedrooms"
                        type="number"
                        value={propertyForm.bedrooms}
                        onChange={(e) => setPropertyForm(prev => ({ ...prev, bedrooms: e.target.value }))}
                        placeholder="2"
                      />
                    </div>
                    <div>
                      <Label htmlFor="bathrooms">Bathrooms</Label>
                      <Input
                        id="bathrooms"
                        type="number"
                        value={propertyForm.bathrooms}
                        onChange={(e) => setPropertyForm(prev => ({ ...prev, bathrooms: e.target.value }))}
                        placeholder="1"
                      />
                    </div>
                    <div className="col-span-2">
                      <Label htmlFor="address">Address</Label>
                      <Input
                        id="address"
                        value={propertyForm.address}
                        onChange={(e) => setPropertyForm(prev => ({ ...prev, address: e.target.value }))}
                        placeholder="45 Park Road, Crouch End"
                      />
                    </div>
                    <div>
                      <Label htmlFor="area">Area</Label>
                      <Input
                        id="area"
                        value={propertyForm.area}
                        onChange={(e) => setPropertyForm(prev => ({ ...prev, area: e.target.value }))}
                        placeholder="Crouch End"
                      />
                    </div>
                    <div>
                      <Label htmlFor="status">Status</Label>
                      <Select value={propertyForm.status} onValueChange={(value: "available" | "let" | "sold") => setPropertyForm(prev => ({ ...prev, status: value }))}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="available">Available</SelectItem>
                          <SelectItem value="let">Let</SelectItem>
                          <SelectItem value="sold">Sold</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="col-span-2">
                      <Label htmlFor="images">Images (comma-separated URLs)</Label>
                      <Textarea
                        id="images"
                        value={propertyForm.images}
                        onChange={(e) => setPropertyForm(prev => ({ ...prev, images: e.target.value }))}
                        placeholder="https://example.com/image1.jpg, https://example.com/image2.jpg"
                      />
                    </div>
                    <div className="col-span-2">
                      <Label htmlFor="features">Features (comma-separated)</Label>
                      <Textarea
                        id="features"
                        value={propertyForm.features}
                        onChange={(e) => setPropertyForm(prev => ({ ...prev, features: e.target.value }))}
                        placeholder="Modern Kitchen, Wooden Floors, Garden Access"
                      />
                    </div>
                  </div>
                  <div className="flex gap-2 pt-4">
                    <Button onClick={handleSubmitProperty} className="bg-[#1e3a8a] hover:bg-[#1e40af] text-white">
                      {editingProperty ? 'Update Property' : 'Add Property'}
                    </Button>
                    <Button variant="outline" onClick={() => {
                      resetForm()
                      setIsAddPropertyDialogOpen(false)
                    }}>
                      Cancel
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {properties.map((property) => (
                <Card key={property.id} className="overflow-hidden">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-lg line-clamp-2">{property.title}</CardTitle>
                        <CardDescription>{property.address}</CardDescription>
                      </div>
                      <Badge variant={property.status === 'available' ? 'default' : 'secondary'}>
                        {property.status}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Type:</span>
                      <Badge variant="outline">{property.type}</Badge>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Price:</span>
                      <span className="font-semibold">£{property.price.toLocaleString()}{property.type === 'rental' ? '/month' : ''}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Bedrooms:</span>
                      <span>{property.bedrooms}</span>
                    </div>
                    <div className="flex gap-2 pt-2">
                      <Button size="sm" variant="outline" onClick={() => handleEditProperty(property)}>
                        <Edit className="h-4 w-4" />
                      </Button>
                      <AlertDialog>
                        <AlertDialogTrigger asChild>
                          <Button size="sm" variant="outline" className="text-red-600 hover:bg-red-50">
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </AlertDialogTrigger>
                        <AlertDialogContent>
                          <AlertDialogHeader>
                            <AlertDialogTitle>Delete Property</AlertDialogTitle>
                            <AlertDialogDescription>
                              Are you sure you want to delete this property? This action cannot be undone.
                            </AlertDialogDescription>
                          </AlertDialogHeader>
                          <AlertDialogFooter>
                            <AlertDialogCancel>Cancel</AlertDialogCancel>
                            <AlertDialogAction onClick={() => handleDeleteProperty(property.id)} className="bg-red-600 hover:bg-red-700">
                              Delete
                            </AlertDialogAction>
                          </AlertDialogFooter>
                        </AlertDialogContent>
                      </AlertDialog>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="contacts" className="space-y-6">
            <h2 className="text-2xl text-foreground">Contact Submissions</h2>
            <div className="grid gap-4">
              {contactSubmissions.length === 0 ? (
                <Card>
                  <CardContent className="text-center py-8">
                    <Mail className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
                    <h3 className="text-lg mb-2">No contact submissions yet</h3>
                    <p className="text-muted-foreground">Contact submissions will appear here when received.</p>
                  </CardContent>
                </Card>
              ) : (
                contactSubmissions.map((submission) => (
                  <Card key={submission.id}>
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle>{submission.firstName} {submission.lastName}</CardTitle>
                          <CardDescription>{submission.email} • {submission.phone}</CardDescription>
                        </div>
                        <Badge variant="outline">{submission.serviceType}</Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      {submission.propertyAddress && (
                        <p className="text-sm text-muted-foreground mb-2">
                          <strong>Property:</strong> {submission.propertyAddress}
                        </p>
                      )}
                      <p className="text-sm">{submission.message}</p>
                      <p className="text-xs text-muted-foreground mt-2">
                        Submitted: {submission.createdAt.toLocaleDateString()} at {submission.createdAt.toLocaleTimeString()}
                      </p>
                    </CardContent>
                  </Card>
                ))
              )}
            </div>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-6">
            <h2 className="text-2xl text-foreground">Analytics Overview</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-sm text-muted-foreground">Total Properties</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-2">
                    <Building2 className="h-8 w-8 text-[#1e3a8a]" />
                    <span className="text-3xl font-bold">{properties.length}</span>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-sm text-muted-foreground">Available Rentals</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-2">
                    <Users className="h-8 w-8 text-green-600" />
                    <span className="text-3xl font-bold">
                      {properties.filter(p => p.type === 'rental' && p.status === 'available').length}
                    </span>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-sm text-muted-foreground">Available Sales</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-2">
                    <Building2 className="h-8 w-8 text-blue-600" />
                    <span className="text-3xl font-bold">
                      {properties.filter(p => p.type === 'sale' && p.status === 'available').length}
                    </span>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-sm text-muted-foreground">Contact Submissions</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-2">
                    <Mail className="h-8 w-8 text-purple-600" />
                    <span className="text-3xl font-bold">{contactSubmissions.length}</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}