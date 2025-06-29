
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
import { Calendar, MapPin, Upload, AlertCircle, Heart } from "lucide-react";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import { addItem } from "@/data/itemStore";

const ReportLost = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    location: "",
    date: "",
    contactEmail: "",
    contactPhone: "",
    urgent: false,
    reward: ""
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
        type: "lost",
        contactInfo: formData.contactEmail,
        urgent: formData.urgent
      });

      toast.success("Lost item report submitted successfully! We'll notify you if there are any matches.");
      
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
            <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-4">
              <AlertCircle className="w-8 h-8 text-red-600" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Report Lost Item</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Help us help you find your lost item. The more details you provide, 
              the better chance we have of reuniting you with your belongings.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Basic Information */}
            <Card>
              <CardHeader>
                <CardTitle>Basic Information</CardTitle>
                <CardDescription>
                  Tell us about the item you've lost
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <Label htmlFor="title">Item Name *</Label>
                  <Input
                    id="title"
                    placeholder="e.g., iPhone 13 Pro, Wedding Ring, House Keys"
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
                    placeholder="Provide a detailed description including color, size, brand, distinctive features, etc."
                    value={formData.description}
                    onChange={(e) => handleInputChange("description", e.target.value)}
                    className="mt-2 min-h-[120px]"
                  />
                  <p className="text-sm text-gray-500 mt-2">
                    Include as many details as possible to help with identification
                  </p>
                </div>

                <div>
                  <Label htmlFor="image">Upload Photo (Optional)</Label>
                  <div className="mt-2 border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-gray-400 transition-colors">
                    <Upload className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                    <p className="text-sm text-gray-600 mb-2">Click to upload or drag and drop</p>
                    <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                    <input type="file" className="hidden" accept="image/*" />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Location & Date */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MapPin className="h-5 w-5 mr-2" />
                  Location & Time
                </CardTitle>
                <CardDescription>
                  Where and when did you lose this item?
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <Label htmlFor="location">Last Known Location *</Label>
                  <Input
                    id="location"
                    placeholder="e.g., Central Park near the fountain, Downtown Coffee Shop on Main St"
                    value={formData.location}
                    onChange={(e) => handleInputChange("location", e.target.value)}
                    className="mt-2"
                  />
                  <p className="text-sm text-gray-500 mt-2">
                    Be as specific as possible about the location
                  </p>
                </div>

                <div>
                  <Label htmlFor="date">Date Lost</Label>
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
                <CardTitle>Contact Information</CardTitle>
                <CardDescription>
                  How can we reach you if someone finds your item?
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

            {/* Additional Options */}
            <Card>
              <CardHeader>
                <CardTitle>Additional Options</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="urgent"
                    checked={formData.urgent}
                    onCheckedChange={(checked) => handleInputChange("urgent", !!checked)}
                  />
                  <Label htmlFor="urgent" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    Mark as urgent (important documents, medication, etc.)
                  </Label>
                </div>

                <div>
                  <Label htmlFor="reward">Reward Offered (Optional)</Label>
                  <Input
                    id="reward"
                    placeholder="e.g., $50 reward, Thank you gift"
                    value={formData.reward}
                    onChange={(e) => handleInputChange("reward", e.target.value)}
                    className="mt-2"
                  />
                  <p className="text-sm text-gray-500 mt-2">
                    Offering a reward may increase the chances of recovery
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Submit Button */}
            <div className="flex items-center justify-center space-x-4 pt-6">
              <Button type="button" variant="outline" onClick={() => navigate("/")}>
                Cancel
              </Button>
              <Button type="submit" size="lg" className="bg-red-600 hover:bg-red-700 px-8">
                <Heart className="h-4 w-4 mr-2" />
                Report Lost Item
              </Button>
            </div>
          </form>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ReportLost;
