
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Search, List, Filter } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { mockItems } from "@/data/mockData";

const MapView = () => {
  const [selectedItem, setSelectedItem] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedType, setSelectedType] = useState<string>("all");

  const categories = [
    "Electronics", "Documents", "Keys", "Jewelry", "Pets", 
    "Clothing", "Bags", "Books", "Sports Equipment", "Other"
  ];

  const filteredItems = mockItems.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "all" || item.category === selectedCategory;
    const matchesType = selectedType === "all" || item.type === selectedType;
    
    return matchesSearch && matchesCategory && matchesType;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Map View</h1>
          <p className="text-gray-600">Explore lost and found items by location</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 h-[calc(100vh-200px)]">
          {/* Sidebar with filters and items list */}
          <div className="lg:col-span-1 space-y-4 overflow-hidden flex flex-col">
            {/* Filters */}
            <Card className="flex-shrink-0">
              <CardHeader className="pb-4">
                <CardTitle className="text-lg flex items-center">
                  <Filter className="h-5 w-5 mr-2" />
                  Filters
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <Input
                    placeholder="Search items..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10"
                  />
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                    <SelectTrigger>
                      <SelectValue placeholder="Category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Categories</SelectItem>
                      {categories.map(category => (
                        <SelectItem key={category} value={category}>
                          {category}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>

                  <Select value={selectedType} onValueChange={setSelectedType}>
                    <SelectTrigger>
                      <SelectValue placeholder="Type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Types</SelectItem>
                      <SelectItem value="lost">Lost</SelectItem>
                      <SelectItem value="found">Found</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>

            {/* Items List */}
            <Card className="flex-1 overflow-hidden">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg flex items-center">
                    <List className="h-5 w-5 mr-2" />
                    Items ({filteredItems.length})
                  </CardTitle>
                  <Button variant="outline" size="sm" asChild>
                    <Link to="/browse">List View</Link>
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="p-0 overflow-y-auto flex-1">
                <div className="space-y-2 px-6 pb-6">
                  {filteredItems.map((item) => (
                    <div
                      key={item.id}
                      className={`p-3 rounded-lg border cursor-pointer transition-colors hover:bg-gray-50 ${
                        selectedItem === item.id ? "bg-blue-50 border-blue-200" : "bg-white"
                      }`}
                      onClick={() => setSelectedItem(item.id)}
                    >
                      <div className="flex items-start space-x-3">
                        {item.image && (
                          <img
                            src={item.image}
                            alt={item.title}
                            className="w-12 h-12 object-cover rounded-lg flex-shrink-0"
                          />
                        )}
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center space-x-2 mb-1">
                            <Badge variant={item.type === "lost" ? "destructive" : "default"} className="text-xs">
                              {item.type === "lost" ? "Lost" : "Found"}
                            </Badge>
                          </div>
                          <h3 className="font-medium text-sm truncate">{item.title}</h3>
                          <div className="flex items-center text-xs text-gray-500 mt-1">
                            <MapPin className="h-3 w-3 mr-1" />
                            <span className="truncate">{item.location}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}

                  {filteredItems.length === 0 && (
                    <div className="text-center py-8 text-gray-500">
                      <Search className="h-8 w-8 mx-auto mb-2" />
                      <p>No items match your filters</p>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Map Area */}
          <div className="lg:col-span-2">
            <Card className="h-full">
              <CardContent className="p-0 h-full">
                <div className="h-full bg-gradient-to-br from-blue-100 to-green-100 rounded-lg flex items-center justify-center relative">
                  {/* Mock Map Interface */}
                  <div className="absolute inset-4 bg-white/90 rounded-lg shadow-inner flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                      <h3 className="text-xl font-semibold text-gray-700 mb-2">Interactive Map</h3>
                      <p className="text-gray-500 mb-4 max-w-md">
                        This would show an interactive map with pins for each lost and found item. 
                        Click on items in the sidebar to highlight them on the map.
                      </p>
                      <div className="flex flex-wrap justify-center gap-2 mb-4">
                        <Badge variant="destructive" className="text-xs">🔴 Lost Items</Badge>
                        <Badge variant="default" className="text-xs">🟢 Found Items</Badge>
                        <Badge variant="outline" className="text-xs">⭐ Selected</Badge>
                      </div>
                      
                      {/* Mock Map Pins */}
                      <div className="relative w-full max-w-lg h-64 bg-gray-100 rounded-lg mx-auto overflow-hidden">
                        {/* Simulate map pins */}
                        <div className="absolute top-8 left-12 w-4 h-4 bg-red-500 rounded-full border-2 border-white shadow-lg"></div>
                        <div className="absolute top-16 right-20 w-4 h-4 bg-green-500 rounded-full border-2 border-white shadow-lg"></div>
                        <div className="absolute bottom-20 left-1/3 w-4 h-4 bg-red-500 rounded-full border-2 border-white shadow-lg"></div>
                        <div className="absolute top-24 left-1/2 w-4 h-4 bg-green-500 rounded-full border-2 border-white shadow-lg"></div>
                        <div className="absolute bottom-12 right-16 w-4 h-4 bg-red-500 rounded-full border-2 border-white shadow-lg"></div>
                        
                        {selectedItem && (
                          <div className="absolute top-12 left-1/2 transform -translate-x-1/2 bg-blue-500 w-6 h-6 rounded-full border-3 border-white shadow-lg animate-pulse"></div>
                        )}
                        
                        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-blue-50/30 to-green-50/30"></div>
                      </div>
                    </div>
                  </div>

                  {/* Selected Item Info */}
                  {selectedItem && (
                    <div className="absolute bottom-4 left-4 right-4">
                      {(() => {
                        const item = filteredItems.find(i => i.id === selectedItem);
                        return item ? (
                          <Card className="shadow-lg">
                            <CardContent className="p-4">
                              <div className="flex items-center justify-between">
                                <div className="flex-1">
                                  <div className="flex items-center space-x-2 mb-2">
                                    <Badge variant={item.type === "lost" ? "destructive" : "default"}>
                                      {item.type === "lost" ? "Lost" : "Found"}
                                    </Badge>
                                    <Badge variant="secondary">{item.category}</Badge>
                                  </div>
                                  <h3 className="font-semibold">{item.title}</h3>
                                  <p className="text-sm text-gray-600 line-clamp-1">{item.description}</p>
                                  <div className="flex items-center text-sm text-gray-500 mt-1">
                                    <MapPin className="h-4 w-4 mr-1" />
                                    {item.location}
                                  </div>
                                </div>
                                <Button asChild size="sm">
                                  <Link to={`/item/${item.id}`}>View Details</Link>
                                </Button>
                              </div>
                            </CardContent>
                          </Card>
                        ) : null;
                      })()}
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default MapView;
