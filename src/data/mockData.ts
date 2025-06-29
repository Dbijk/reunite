
export const mockItems = [
  {
    id: "1",
    title: "iPhone 13 Pro",
    description: "Black iPhone 13 Pro with a clear case. Lost near the downtown coffee shop on Main Street. Has a crack on the back camera lens.",
    category: "Electronics",
    type: "lost" as const,
    location: "Downtown Coffee Shop, Main Street",
    date: "2024-06-25",
    image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400&h=300&fit=crop",
    urgent: true,
    contactInfo: "john@example.com"
  },
  {
    id: "2",
    title: "Golden Retriever - Max",
    description: "Friendly golden retriever, answers to Max. Wearing a red collar with a bone-shaped tag. Very gentle with children.",
    category: "Pets",
    type: "lost" as const,
    location: "Riverside Park",
    date: "2024-06-28",
    image: "https://images.unsplash.com/photo-1552053831-71594a27632d?w=400&h=300&fit=crop",
    urgent: true,
    contactInfo: "sarah@example.com"
  },
  {
    id: "3",
    title: "Set of House Keys",
    description: "Found a set of keys with a small flashlight keychain and a gym membership tag. Keys include what appears to be house and car keys.",
    category: "Keys",
    type: "found" as const,
    location: "Central Library Parking Lot",
    date: "2024-06-27",
    contactInfo: "mike@example.com"
  },
  {
    id: "4",
    title: "Silver Wedding Ring",
    description: "Simple silver wedding band found near the fountain in City Square. Appears to be engraved on the inside but can't make out the text.",
    category: "Jewelry",
    type: "found" as const,
    location: "City Square Fountain",
    date: "2024-06-26",
    image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400&h=300&fit=crop",
    contactInfo: "anna@example.com"
  },
  {
    id: "5",
    title: "Black Leather Wallet",
    description: "Black leather wallet with multiple cards and some cash. Found in the restroom at the shopping mall. Contains driver's license and credit cards.",
    category: "Documents",
    type: "found" as const,
    location: "Westfield Shopping Mall",
    date: "2024-06-24",
    contactInfo: "david@example.com"
  },
  {
    id: "6",
    title: "Blue Mountain Bike",
    description: "Blue Trek mountain bike with 21 speeds. Had it locked outside the university library but lock was cut. Bike has some scratches on the frame.",
    category: "Sports Equipment",
    type: "lost" as const,
    location: "University Library",
    date: "2024-06-23",
    image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=300&fit=crop",
    contactInfo: "emma@example.com"
  },
  {
    id: "7",
    title: "Tabby Cat - Luna",
    description: "Small tabby cat found in my backyard. Very friendly and appears to be well-cared for. No collar but seems used to being around people.",
    category: "Pets",
    type: "found" as const,
    location: "Oak Street Residential Area",
    date: "2024-06-29",
    image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=400&h=300&fit=crop",
    contactInfo: "lisa@example.com"
  },
  {
    id: "8",
    title: "Child's Red Backpack",
    description: "Small red backpack found at the playground. Contains school supplies and a lunch box with the name 'Alex' written on it.",
    category: "Clothing",
    type: "found" as const,
    location: "Sunny Side Playground",
    date: "2024-06-28",
    contactInfo: "parent@example.com"
  }
];
