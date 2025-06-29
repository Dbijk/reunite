
import { Heart, Mail, Shield, Users } from "lucide-react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="bg-gradient-to-r from-blue-600 to-green-600 p-2 rounded-lg">
                <Heart className="h-5 w-5 text-white" />
              </div>
              <span className="text-lg font-bold text-gray-800">ReUnite</span>
            </div>
            <p className="text-gray-600 text-sm max-w-xs">
              Bringing communities together, one lost item at a time. 
              Built with care for people who care about each other.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-gray-800 mb-4">Quick Actions</h3>
            <div className="space-y-2 text-sm">
              <Link to="/report-lost" className="block text-gray-600 hover:text-blue-600 transition-colors">
                Report Lost Item
              </Link>
              <Link to="/report-found" className="block text-gray-600 hover:text-blue-600 transition-colors">
                Report Found Item
              </Link>
              <Link to="/browse" className="block text-gray-600 hover:text-blue-600 transition-colors">
                Browse All Items
              </Link>
              <Link to="/map" className="block text-gray-600 hover:text-blue-600 transition-colors">
                Map View
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-gray-800 mb-4">Community</h3>
            <div className="space-y-2 text-sm">
              <div className="flex items-center text-gray-600">
                <Shield className="w-4 h-4 mr-2" />
                Trust & Safety
              </div>
              <div className="flex items-center text-gray-600">
                <Users className="w-4 h-4 mr-2" />
                Community Guidelines
              </div>
              <div className="flex items-center text-gray-600">
                <Mail className="w-4 h-4 mr-2" />
                Contact Support
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-gray-800 mb-4">Stay Connected</h3>
            <p className="text-gray-600 text-sm mb-4">
              Get notified about matches in your area and community updates.
            </p>
            <div className="flex items-center space-x-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-3 py-2 text-xs border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="px-3 py-2 bg-blue-600 text-white text-xs rounded-md hover:bg-blue-700 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-8 pt-8 text-center text-sm text-gray-600">
          <p>&copy; 2024 ReUnite. Made with ❤️ for communities everywhere.</p>
        </div>
      </div>
    </footer>
  );
};
