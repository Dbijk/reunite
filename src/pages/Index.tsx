
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Search, Heart, MapPin, Shield, Bell, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      <Header />
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-100 rounded-full mb-6">
              <Heart className="w-10 h-10 text-blue-600" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
              Reuniting People with Their{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600">
                Lost Treasures
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Join our caring community where neighbors help neighbors find what matters most. 
              Every lost item has a story, and every found item brings hope.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg">
              <Link to="/report-lost">
                <Search className="mr-2 h-5 w-5" />
                Report Lost Item
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-green-600 text-green-600 hover:bg-green-50 px-8 py-6 text-lg">
              <Link to="/report-found">
                <Heart className="mr-2 h-5 w-5" />
                Report Found Item
              </Link>
            </Button>
          </div>

          <Button asChild variant="ghost" className="text-gray-600 hover:text-gray-800">
            <Link to="/browse">
              Browse all items →
            </Link>
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          How We Help You Find What's Lost
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader className="text-center pb-4">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4 mx-auto">
                <Search className="w-8 h-8 text-blue-600" />
              </div>
              <CardTitle className="text-xl">Smart Search</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <CardDescription className="text-gray-600">
                Advanced filtering by category, location, and date. Our intelligent matching system suggests potential matches.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader className="text-center pb-4">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4 mx-auto">
                <MapPin className="w-8 h-8 text-green-600" />
              </div>
              <CardTitle className="text-xl">Location Mapping</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <CardDescription className="text-gray-600">
                Interactive maps show exactly where items were lost or found, helping you search in the right places.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader className="text-center pb-4">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-4 mx-auto">
                <Bell className="w-8 h-8 text-purple-600" />
              </div>
              <CardTitle className="text-xl">Instant Alerts</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <CardDescription className="text-gray-600">
                Get notified immediately when someone reports an item matching your description or location.
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gradient-to-r from-blue-600 to-green-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">1,247</div>
              <div className="text-blue-100">Items Successfully Reunited</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">3,891</div>
              <div className="text-blue-100">Community Members</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">24hrs</div>
              <div className="text-blue-100">Average Time to Match</div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Safety */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-6">
            <Shield className="w-8 h-8 text-green-600" />
          </div>
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Built on Trust & Safety</h2>
          <p className="text-xl text-gray-600 mb-8">
            Our community thrives on mutual respect and verified interactions. 
            Every member contributes to making our platform a safe space for everyone.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-500">
            <div className="flex items-center">
              <Users className="w-4 h-4 mr-2" />
              Verified Community
            </div>
            <div className="flex items-center">
              <Shield className="w-4 h-4 mr-2" />
              Secure Messaging
            </div>
            <div className="flex items-center">
              <Bell className="w-4 h-4 mr-2" />
              Abuse Reporting
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
