import React from "react";
import { Heading } from "@/components/ui/heading";
import RecipeCard from "../components/recipeCard";

const SavedRecipes = () => {
  return (
    <div className="flex flex-col items-center justify-center overflow-y-auto  h-[calc(100vh-10rem)] pt-[700px]">
      <Heading className="pt-7">Saved Recipes</Heading>
      <div className="space-y-4">
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
      </div>
    </div>
  );
};

export default SavedRecipes;