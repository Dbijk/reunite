
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { MapPin, Calendar, AlertCircle, Heart, Mail, Phone, ArrowLeft, Flag, Share2 } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { mockItems } from "@/data/mockData";
import { toast } from "sonner";

const ItemDetail = () => {
  const { id } = useParams();
  const item = mockItems.find(i => i.id === id);

  if (!item) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Item Not Found</h1>
          <p className="text-gray-600 mb-8">The item you're looking for doesn't exist or has been removed.</p>
          <Button asChild>
            <Link to="/browse">Browse All Items</Link>
          </Button>
        </div>
        <Footer />
      </div>
    );
  }

  const handleContact = () => {
    toast.success("Contact information copied to clipboard!");
  };

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    toast.success("Link copied to clipboard!");
  };

  const handleReport = () => {
    toast.info("Thank you for reporting. We'll review this item.");
  };

  const handleSave = () => {
    toast.success("Item saved to your favorites!");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <Button variant="ghost" asChild className="mb-6">
            <Link to="/browse">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Browse
            </Link>
          </Button>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Image Section */}
            <div>
              {item.image ? (
                <div className="relative">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-96 object-cover rounded-lg shadow-lg"
                  />
                  {item.urgent && (
                    <div className="absolute top-4 right-4">
                      <Badge variant="outline" className="bg-white text-orange-600 border-orange-600">
                        <AlertCircle className="h-3 w-3 mr-1" />
                        Urgent
                      </Badge>
                    </div>
                  )}
                </div>
              ) : (
                <div className="w-full h-96 bg-gray-200 rounded-lg flex items-center justify-center">
                  <div className="text-center text-gray-500">
                    <div className="text-4xl mb-2">📷</div>
                    <p>No image available</p>
                  </div>
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex space-x-3 mt-6">
                <Button onClick={handleShare} variant="outline" className="flex-1">
                  <Share2 className="h-4 w-4 mr-2" />
                  Share
                </Button>
                <Button onClick={handleSave} variant="outline" className="flex-1">
                  <Heart className="h-4 w-4 mr-2" />
                  Save
                </Button>
                <Button onClick={handleReport} variant="outline" size="sm">
                  <Flag className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Details Section */}
            <div className="space-y-6">
              {/* Item Info */}
              <Card>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <Badge variant={item.type === "lost" ? "destructive" : "default"} className="text-sm">
                          {item.type === "lost" ? "Lost Item" : "Found Item"}
                        </Badge>
                        <Badge variant="secondary">{item.category}</Badge>
                      </div>
                      <CardTitle className="text-2xl">{item.title}</CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <CardDescription className="text-base leading-relaxed">
                    {item.description}
                  </CardDescription>

                  <Separator />

                  <div className="space-y-3">
                    <div className="flex items-center text-gray-600">
                      <MapPin className="h-5 w-5 mr-3 text-gray-400" />
                      <div>
                        <p className="font-medium">Location</p>
                        <p className="text-sm">{item.location}</p>
                      </div>
                    </div>

                    <div className="flex items-center text-gray-600">
                      <Calendar className="h-5 w-5 mr-3 text-gray-400" />
                      <div>
                        <p className="font-medium">Date {item.type === "lost" ? "Lost" : "Found"}</p>
                        <p className="text-sm">{item.date}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Contact Card */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Contact Information</CardTitle>
                  <CardDescription>
                    Get in touch to {item.type === "lost" ? "help return" : "claim"} this item
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                    <p className="text-sm text-blue-800 mb-3">
                      <strong>Safety First:</strong> Always meet in public places and trust your instincts.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <Button onClick={handleContact} className="flex-1">
                        <Mail className="h-4 w-4 mr-2" />
                        Contact Owner
                      </Button>
                      <Button variant="outline" className="flex-1">
                        <Phone className="h-4 w-4 mr-2" />
                        Call
                      </Button>
                    </div>
                  </div>

                  <div className="text-xs text-gray-500 space-y-1">
                    <p>• Meet in well-lit, public locations</p>
                    <p>• For valuable items, ask for identifying details first</p>
                    <p>• Report any suspicious behavior to authorities</p>
                  </div>
                </CardContent>
              </Card>

              {/* Map Preview */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Location Map</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="w-full h-48 bg-gray-200 rounded-lg flex items-center justify-center">
                    <div className="text-center text-gray-500">
                      <MapPin className="h-8 w-8 mx-auto mb-2" />
                      <p className="text-sm">Interactive map would be shown here</p>
                      <p className="text-xs text-gray-400 mt-1">{item.location}</p>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full mt-4" asChild>
                    <Link to="/map">
                      View on Full Map
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Related Items */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Similar Items</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {mockItems
                .filter(relatedItem => 
                  relatedItem.id !== item.id && 
                  relatedItem.category === item.category
                )
                .slice(0, 3)
                .map((relatedItem) => (
                  <Card key={relatedItem.id} className="hover:shadow-md transition-shadow">
                    <div className="aspect-video bg-gray-200 rounded-t-lg flex items-center justify-center">
                      {relatedItem.image ? (
                        <img
                          src={relatedItem.image}
                          alt={relatedItem.title}
                          className="w-full h-full object-cover rounded-t-lg"
                        />
                      ) : (
                        <div className="text-gray-400 text-2xl">📷</div>
                      )}
                    </div>
                    <CardContent className="p-4">
                      <div className="flex items-center space-x-2 mb-2">
                        <Badge variant={relatedItem.type === "lost" ? "destructive" : "default"} className="text-xs">
                          {relatedItem.type === "lost" ? "Lost" : "Found"}
                        </Badge>
                      </div>
                      <h3 className="font-semibold mb-2">{relatedItem.title}</h3>
                      <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                        {relatedItem.description}
                      </p>
                      <Button asChild size="sm" variant="outline" className="w-full">
                        <Link to={`/item/${relatedItem.id}`}>View Details</Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ItemDetail;
