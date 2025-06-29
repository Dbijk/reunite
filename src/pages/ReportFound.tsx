
import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Calendar, MapPin, Upload, Heart, CheckCircle } from "lucide-react";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import { addItem } from "@/data/itemStore";

const ReportFound = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    location: "",
    date: "",
    contactEmail: "",
    contactPhone: "",
    safeLocation: true,
    handedToAuthority: false
  });

  const categories = [
    "Electronics", "Documents", "Keys", "Jewelry", "Pets", 
    "Clothing", "Bags", "Books", "Sports Equipment", "Other"
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.title || !formData.description || !formData.category || !formData.location || !formData.contactEmail) {
      toast.error("Please fill in all required fields");
      return;
    }

    try {
      // Add the item to the store
      const newItem = addItem({
        title: formData.title,
        description: formData.description,
        category: formData.category,
        location: formData.location,
        date: formData.date || new Date().toISOString().split('T')[0],
        type: "found",
        contactInfo: formData.contactEmail,
        urgent: false
      });

      toast.success("Found item report submitted successfully! We'll help you find the owner.");
      
      // Redirect to browse page after a short delay
      setTimeout(() => {
        navigate("/browse");
      }, 2000);
    } catch (error) {
      toast.error("Failed to submit report. Please try again.");
    }
  };

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Report Found Item</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Thank you for being a good samaritan! Help us reunite this item with its owner 
              by providing as much detail as possible.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Basic Information */}
            <Card>
              <CardHeader>
                <CardTitle>Item Details</CardTitle>
                <CardDescription>
                  Describe the item you found
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <Label htmlFor="title">Item Name *</Label>
                  <Input
                    id="title"
                    placeholder="e.g., iPhone with blue case, Set of car keys, Black wallet"
                    value={formData.title}
                    onChange={(e) => handleInputChange("title", e.target.value)}
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="category">Category *</Label>
                  <Select value={formData.category} onValueChange={(value) => handleInputChange("category", value)}>
                    <SelectTrigger className="mt-2">
                      <SelectValue placeholder="Select a category" />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map(category => (
                        <SelectItem key={category} value={category}>
                          {category}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="description">Description *</Label>
                  <Textarea
                    id="description"
                    placeholder="Describe the item in detail - color, size, brand, condition, any distinctive features or markings..."
                    value={formData.description}
                    onChange={(e) => handleInputChange("description", e.target.value)}
                    className="mt-2 min-h-[120px]"
                  />
                  <p className="text-sm text-gray-500 mt-2">
                    Detailed descriptions help us match items with their owners faster
                  </p>
                </div>

                <div>
                  <Label htmlFor="image">Upload Photo *</Label>
                  <div className="mt-2 border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-gray-400 transition-colors">
                    <Upload className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                    <p className="text-sm text-gray-600 mb-2">Click to upload or drag and drop</p>
                    <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                    <input type="file" className="hidden" accept="image/*" />
                  </div>
                  <p className="text-sm text-gray-600 mt-2">
                    <strong>Privacy Note:</strong> For valuable items or documents, you may choose to upload 
                    a partial image or description to protect sensitive information.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Location & Date */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MapPin className="h-5 w-5 mr-2" />
                  Where & When Found
                </CardTitle>
                <CardDescription>
                  Help the owner retrace their steps
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <Label htmlFor="location">Location Found *</Label>
                  <Input
                    id="location"
                    placeholder="e.g., Bench outside City Library, Near the playground in Central Park"
                    value={formData.location}
                    onChange={(e) => handleInputChange("location", e.target.value)}
                    className="mt-2"
                  />
                  <p className="text-sm text-gray-500 mt-2">
                    Include nearby landmarks or specific details about the location
                  </p>
                </div>

                <div>
                  <Label htmlFor="date">Date Found</Label>
                  <div className="relative mt-2">
                    <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                    <Input
                      id="date"
                      type="date"
                      value={formData.date}
                      onChange={(e) => handleInputChange("date", e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card>
              <CardHeader>
                <CardTitle>Your Contact Information</CardTitle>
                <CardDescription>
                  How can the owner reach you?
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <Label htmlFor="contactEmail">Email Address *</Label>
                  <Input
                    id="contactEmail"
                    type="email"
                    placeholder="your.email@example.com"
                    value={formData.contactEmail}
                    onChange={(e) => handleInputChange("contactEmail", e.target.value)}
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="contactPhone">Phone Number (Optional)</Label>
                  <Input
                    id="contactPhone"
                    type="tel"
                    placeholder="+1 (555) 123-4567"
                    value={formData.contactPhone}
                    onChange={(e) => handleInputChange("contactPhone", e.target.value)}
                    className="mt-2"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Item Status */}
            <Card>
              <CardHeader>
                <CardTitle>Item Status</CardTitle>
                <CardDescription>
                  Let us know the current status of the item
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="safeLocation"
                    checked={formData.safeLocation}
                    onCheckedChange={(checked) => handleInputChange("safeLocation", !!checked)}
                  />
                  <Label htmlFor="safeLocation" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    The item is in a safe location with me
                  </Label>
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="handedToAuthority"
                    checked={formData.handedToAuthority}
                    onCheckedChange={(checked) => handleInputChange("handedToAuthority", !!checked)}
                  />
                  <Label htmlFor="handedToAuthority" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    I've turned the item in to local authorities/lost & found
                  </Label>
                </div>

                {formData.handedToAuthority && (
                  <div className="ml-6 p-4 bg-blue-50 rounded-lg">
                    <p className="text-sm text-blue-700">
                      Please include details about which authority or lost & found location 
                      has the item in your description above.
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Submit Button */}
            <div className="flex items-center justify-center space-x-4 pt-6">
              <Button type="button" variant="outline" onClick={() => navigate("/")}>
                Cancel
              </Button>
              <Button type="submit" size="lg" className="bg-green-600 hover:bg-green-700 px-8">
                <Heart className="h-4 w-4 mr-2" />
                Report Found Item
              </Button>
            </div>
          </form>

          {/* Trust & Safety Note */}
          <div className="mt-8 p-6 bg-blue-50 rounded-lg border border-blue-200">
            <h3 className="font-semibold text-blue-900 mb-2">Safety & Privacy Guidelines</h3>
            <ul className="text-sm text-blue-800 space-y-1">
              <li>• Always meet in public places when returning items</li>
              <li>• For valuable items, ask the owner to provide identifying details before meeting</li>
              <li>• Never share personal addresses or meet at private locations</li>
              <li>• Trust your instincts - if something feels wrong, contact local authorities</li>
            </ul>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ReportFound;
