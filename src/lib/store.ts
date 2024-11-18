import { create } from 'zustand';
import { Property, SavedProperty } from '../types';

interface PropertyStore {
  savedProperties: SavedProperty[];
  addSavedProperty: (property: Property) => void;
  removeSavedProperty: (propertyId: string) => void;
}

export const usePropertyStore = create<PropertyStore>((set) => ({
  savedProperties: [],
  addSavedProperty: (property) =>
    set((state) => ({
      savedProperties: [...state.savedProperties, { ...property, savedAt: new Date() }],
    })),
  removeSavedProperty: (propertyId) =>
    set((state) => ({
      savedProperties: state.savedProperties.filter((p) => p.id !== propertyId),
    })),
}));