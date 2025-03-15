import React from "react";
import { View } from "react-native";
import { Heading } from "@/components/ui/heading";
import RecipeCard from "../components/recipeCard";

const SavedRecipes = () => {
  return (
    <View>
      <Heading>Saved Recipes</Heading>
      <RecipeCard />
    </View>
  );
};

export default SavedRecipes;
