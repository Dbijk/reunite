
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Calendar, AlertCircle, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import { Item } from "@/data/itemStore";

interface ItemCardProps {
  item: Item;
  viewMode: "grid" | "list";
}

export const ItemCard = ({ item, viewMode }: ItemCardProps) => {
  if (viewMode === "list") {
    return (
      <Card className="hover:shadow-md transition-shadow">
        <div className="flex">
          {item.image && (
            <div className="flex-shrink-0">
              <img
                src={item.image}
                alt={item.title}
                className="h-32 w-32 object-cover rounded-l-lg"
              />
            </div>
          )}
          <div className="flex-1 p-6">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-2">
                  <Badge variant={item.type === "lost" ? "destructive" : "default"}>
                    {item.type === "lost" ? "Lost" : "Found"}
                  </Badge>
                  <Badge variant="secondary">{item.category}</Badge>
                  {item.urgent && (
                    <Badge variant="outline" className="text-orange-600 border-orange-600">
                      <AlertCircle className="h-3 w-3 mr-1" />
                      Urgent
                    </Badge>
                  )}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 mb-3 line-clamp-2">{item.description}</p>
                <div className="flex items-center space-x-4 text-sm text-gray-500">
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-1" />
                    {item.location}
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    {item.date}
                  </div>
                </div>
              </div>
              <div className="flex flex-col space-y-2 ml-6">
                <Button asChild size="sm">
                  <Link to={`/item/${item.id}`}>View Details</Link>
                </Button>
                <Button variant="outline" size="sm">
                  <Heart className="h-4 w-4 mr-1" />
                  Save
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Card>
    );
  }

  return (
    <Card className="hover:shadow-md transition-shadow group">
      {item.image && (
        <div className="relative overflow-hidden rounded-t-lg">
          <img
            src={item.image}
            alt={item.title}
            className="h-48 w-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          {item.urgent && (
            <div className="absolute top-2 right-2">
              <Badge variant="outline" className="bg-white text-orange-600 border-orange-600">
                <AlertCircle className="h-3 w-3 mr-1" />
                Urgent
              </Badge>
            </div>
          )}
        </div>
      )}
      <CardHeader className="space-y-2">
        <div className="flex items-center space-x-2">
          <Badge variant={item.type === "lost" ? "destructive" : "default"}>
            {item.type === "lost" ? "Lost" : "Found"}
          </Badge>
          <Badge variant="secondary">{item.category}</Badge>
        </div>
        <CardTitle className="text-lg">{item.title}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <CardDescription className="line-clamp-2">
          {item.description}
        </CardDescription>
        <div className="space-y-2 text-sm text-gray-500">
          <div className="flex items-center">
            <MapPin className="h-4 w-4 mr-2" />
            {item.location}
          </div>
          <div className="flex items-center">
            <Calendar className="h-4 w-4 mr-2" />
            {item.date}
          </div>
        </div>
        <div className="flex space-x-2 pt-2">
          <Button asChild size="sm" className="flex-1">
            <Link to={`/item/${item.id}`}>View Details</Link>
          </Button>
          <Button variant="outline" size="sm">
            <Heart className="h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
