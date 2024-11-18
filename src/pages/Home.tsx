import React from 'react';
import { Building2, MapPin, DollarSign, ArrowRight, Users, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  const featuredProperties = [
    {
      id: '1',
      title: 'Luxury Waterfront Villa',
      price: 2500000,
      address: '123 Ocean Drive',
      city: 'Miami Beach',
      state: 'FL',
      image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80&w=1600',
      beds: 5,
      baths: 4,
      sqft: 4500
    },
    {
      id: '2',
      title: 'Modern Downtown Loft',
      price: 850000,
      address: '456 Urban Street',
      city: 'New York',
      state: 'NY',
      image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&q=80&w=1600',
      beds: 2,
      baths: 2,
      sqft: 1800
    },
    {
      id: '3',
      title: 'Mountain View Estate',
      price: 1750000,
      address: '789 Highland Road',
      city: 'Aspen',
      state: 'CO',
      image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=1600',
      beds: 4,
      baths: 3,
      sqft: 3200
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-[600px]">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1600"
            alt="Luxury home"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50" />
        </div>
        <div className="relative max-w-7xl mx-auto h-full flex items-center px-4">
          <div className="text-white">
            <h1 className="text-5xl font-bold mb-4">Find Your Dream Home</h1>
            <p className="text-xl mb-8">Discover exceptional properties in prime locations</p>
            <Link
              to="/properties"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
            >
              View Properties
            </Link>
          </div>
        </div>
      </div>

      {/* Featured Properties */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-8">Featured Properties</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredProperties.map((property) => (
            <div key={property.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src={property.image}
                alt={property.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{property.title}</h3>
                <p className="text-gray-600 mb-4">
                  <MapPin className="inline-block h-4 w-4 mr-1" />
                  {property.address}, {property.city}, {property.state}
                </p>
                <p className="text-2xl font-bold text-blue-600 mb-4">
                  <DollarSign className="inline-block h-5 w-5" />
                  {property.price.toLocaleString()}
                </p>
                <div className="flex justify-between text-gray-600 mb-4">
                  <span>{property.beds} beds</span>
                  <span>{property.baths} baths</span>
                  <span>{property.sqft.toLocaleString()} sqft</span>
                </div>
                <Link
                  to={`/properties/${property.id}`}
                  className="block text-center bg-gray-100 text-gray-800 px-4 py-2 rounded hover:bg-gray-200 transition-colors"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Why Choose Jeff Realty</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <Building2 className="h-12 w-12 mx-auto text-blue-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Premium Properties</h3>
              <p className="text-gray-600">Access to exclusive listings in prime locations</p>
            </div>
            <div className="text-center">
              <Users className="h-12 w-12 mx-auto text-blue-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Expert Agents</h3>
              <p className="text-gray-600">Professional guidance throughout your journey</p>
            </div>
            <div className="text-center">
              <Phone className="h-12 w-12 mx-auto text-blue-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">24/7 Support</h3>
              <p className="text-gray-600">Always here to assist you with your needs</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}