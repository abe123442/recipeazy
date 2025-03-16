import React, { useState } from "react";
import { TouchableOpacity, Text, View } from "react-native";
import { Menu, MenuItem, MenuItemLabel, MenuSeparator } from "@/components/ui/menu"; 
import { ListFilter, BadgeDollarSign, Heart, CheckSquare, Leaf, Vegan } from "lucide-react-native";

const FilterButton = () => {
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

  const toggleFilter = (filter: string) => {
    setSelectedFilters((prev) =>
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
          <Text className="ml-2 text-base">Filter</Text>
        </TouchableOpacity>
      )}
    >
      {/* Filter by Cost */}
      <MenuItem
        onPress={() => toggleFilter("Cost")}
        className={`flex-row items-center p-2 ${selectedFilters.includes("Cost") ? "bg-blue-50" : ""}`}
      >
        <BadgeDollarSign size={20} color="#000" className="mr-2" />
        <MenuItemLabel className={selectedFilters.includes("Cost") ? "font-bold" : ""}>
          Filter by Cost
        </MenuItemLabel>
      </MenuItem>

      {/* Healthy */}
      <MenuItem
        onPress={() => toggleFilter("Healthy")}
        className={`flex-row items-center p-2 ${selectedFilters.includes("Healthiness") ? "bg-blue-50 border" : ""}`}
      >
        <Heart size={20} color="#000" className="mr-2" />
        <MenuItemLabel className={selectedFilters.includes("Healthy") ? "font-bold" : ""}>
          Healthy
        </MenuItemLabel>
      </MenuItem>

      {/* Halal */}
      <MenuItem
        onPress={() => toggleFilter("Halal")}
        className={`flex-row items-center p-2 ${selectedFilters.includes("Halal") ? "bg-blue-50" : ""}`}
      >
        <Leaf size={20} color="#000" className="mr-2" />
        <MenuItemLabel className={selectedFilters.includes("Halal") ? "font-bold" : ""}>
          Halal
        </MenuItemLabel>
      </MenuItem>

      {/* Vegan */}
      <MenuItem
        onPress={() => toggleFilter("Vegan")}
        className={`flex-row items-center p-2 ${selectedFilters.includes("Vegan") ? "bg-blue-50" : ""}`}
      >
        <Vegan size={20} color="#000" className="mr-2" />
        <MenuItemLabel className={selectedFilters.includes("Vegan") ? "font-bold" : ""}>
          Vegan
        </MenuItemLabel>
      </MenuItem>
    </Menu>
  );
};

export default FilterButton;