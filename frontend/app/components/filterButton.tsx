import React, { useState } from 'react';
import { TouchableOpacity, Text } from 'react-native';
import {
  Menu,
  MenuItem,
  MenuItemLabel,
  MenuSeparator,
} from '@/components/ui/menu'; // GlueStack UI Menu
import {
  ListFilter,
  BadgeDollarSign,
  Heart,
  Leaf,
  Vegan,
} from 'lucide-react-native'; // Lucide icons

const FilterButton = () => {
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

  // Toggle filter selection
  const toggleFilter = (filter: string) => {
    setSelectedFilters(
      (prev) =>
        prev.includes(filter)
          ? prev.filter((f) => f !== filter) // Remove filter if already selected
          : [...prev, filter] // Add filter if not selected
    );
  };

  return (
    <Menu
      trigger={(triggerProps) => (
        <TouchableOpacity
          {...triggerProps}
          className="flex-row items-center p-2.5 bg-gray-100 rounded-lg"
        >
          <ListFilter size={24} color="#000" /> {/* Filter icon */}
          <Text className="ml-2 text-base">Filter by</Text>
        </TouchableOpacity>
      )}
    >
      {/* Filter by Cost */}
      <MenuItem
        onPress={() => toggleFilter('Cost')}
        className="flex-row items-center p-2"
      >
        <BadgeDollarSign size={20} color="#000" className="mr-2" />
        <MenuItemLabel>Cost</MenuItemLabel>
        {selectedFilters.includes('Cost') && (
          <Text className="ml-auto text-blue-500">✓</Text>
        )}
      </MenuItem>

      {/* Healthy */}
      <MenuItem
        onPress={() => toggleFilter('Healthy')}
        className="flex-row items-center p-2"
      >
        <Heart size={20} color="#000" className="mr-2" />
        <MenuItemLabel>Healthiness</MenuItemLabel>
        {selectedFilters.includes('Healthy') && (
          <Text className="ml-auto text-blue-500">✓</Text>
        )}
      </MenuItem>

      {/* Halal */}
      <MenuItem
        onPress={() => toggleFilter('Halal')}
        className="flex-row items-center p-2"
      >
        <Leaf size={20} color="#000" className="mr-2" />
        <MenuItemLabel>Halal</MenuItemLabel>
        {selectedFilters.includes('Halal') && (
          <Text className="ml-auto text-blue-500">✓</Text>
        )}
      </MenuItem>

      {/* Vegan */}
      <MenuItem
        onPress={() => toggleFilter('Vegan')}
        className="flex-row items-center p-2"
      >
        <Vegan size={20} color="#000" className="mr-2" />
        <MenuItemLabel>Vegan</MenuItemLabel>
        {selectedFilters.includes('Vegan') && (
          <Text className="ml-auto text-blue-500">✓</Text>
        )}
      </MenuItem>
    </Menu>
  );
};

export default FilterButton;
