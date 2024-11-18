import React, { useState } from 'react';
import { MapPin, DollarSign, Search, Building2 } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Filters {
  priceRange: string;
  propertyType: string;
  bedrooms: string;
  bathrooms: string;
}

export default function Properties() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState<Filters>({
    priceRange: '',
    propertyType: '',
    bedrooms: '',
    bathrooms: '',
  });

  const properties = [
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
      sqft: 4500,
      type: 'House'
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
      sqft: 1800,
      type: 'Apartment'
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
      sqft: 3200,
      type: 'House'
    },
    {
      id: '4',
      title: 'Beachfront Condo',
      price: 1200000,
      address: '321 Coastal Way',
      city: 'San Diego',
      state: 'CA',
      image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1600',
      beds: 3,
      baths: 2,
      sqft: 2100,
      type: 'Condo'
    }
  ];

  const filteredProperties = properties.filter(property => {
    const matchesSearch = property.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      property.address.toLowerCase().includes(searchTerm.toLowerCase()) ||
      property.city.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesPriceRange = !filters.priceRange || 
      (filters.priceRange === 'under1m' && property.price < 1000000) ||
      (filters.priceRange === '1m-2m' && property.price >= 1000000 && property.price <= 2000000) ||
      (filters.priceRange === 'over2m' && property.price > 2000000);

    const matchesPropertyType = !filters.propertyType || property.type === filters.propertyType;
    const matchesBedrooms = !filters.bedrooms || property.beds.toString() === filters.bedrooms;
    const matchesBathrooms = !filters.bathrooms || property.baths.toString() === filters.bathrooms;

    return matchesSearch && matchesPriceRange && matchesPropertyType && matchesBedrooms && matchesBathrooms;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Search and Filters */}
      <div className="mb-8">
        <div className="flex items-center mb-6 bg-white rounded-lg shadow-sm">
          <Search className="h-5 w-5 text-gray-400 ml-4" />
          <input
            type="text"
            placeholder="Search by location, property name..."
            className="w-full p-4 outline-none"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <select
            className="p-2 border rounded-lg"
            value={filters.priceRange}
            onChange={(e) => setFilters({ ...filters, priceRange: e.target.value })}
          >
            <option value="">Price Range</option>
            <option value="under1m">Under $1M</option>
            <option value="1m-2m">$1M - $2M</option>
            <option value="over2m">Over $2M</option>
          </select>

          <select
            className="p-2 border rounded-lg"
            value={filters.propertyType}
            onChange={(e) => setFilters({ ...filters, propertyType: e.target.value })}
          >
            <option value="">Property Type</option>
            <option value="House">House</option>
            <option value="Apartment">Apartment</option>
            <option value="Condo">Condo</option>
          </select>

          <select
            className="p-2 border rounded-lg"
            value={filters.bedrooms}
            onChange={(e) => setFilters({ ...filters, bedrooms: e.target.value })}
          >
            <option value="">Bedrooms</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4+</option>
          </select>

          <select
            className="p-2 border rounded-lg"
            value={filters.bathrooms}
            onChange={(e) => setFilters({ ...filters, bathrooms: e.target.value })}
          >
            <option value="">Bathrooms</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4+</option>
          </select>
        </div>
      </div>

      {/* Property Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {filteredProperties.map((property) => (
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
                className="block text-center bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>

      {filteredProperties.length === 0 && (
        <div className="text-center py-12">
          <Building2 className="h-12 w-12 mx-auto text-gray-400 mb-4" />
          <h3 className="text-xl font-bold text-gray-600">No properties found</h3>
          <p className="text-gray-500">Try adjusting your search criteria</p>
        </div>
      )}
    </div>
  );
}