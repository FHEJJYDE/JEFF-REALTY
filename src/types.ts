export interface Property {
  id: string;
  title: string;
  price: number;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  bedrooms: number;
  bathrooms: number;
  squareFeet: number;
  description: string;
  features: string[];
  images: string[];
  type: 'sale' | 'rent';
  status: 'available' | 'pending' | 'sold';
}

export interface SavedProperty extends Property {
  savedAt: Date;
}

export interface ContactForm {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export interface Appointment {
  id: string;
  propertyId: string;
  date: Date;
  time: string;
  name: string;
  email: string;
  phone: string;
  notes?: string;
}