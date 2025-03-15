import React from "react";
import { Heading } from "@/components/ui/heading";
import RecipeCard from "../components/recipeCard";

const SavedRecipes = () => {
  const recipes = [
    {
      name: "Chicken Alfredo",
      imgUrl: "https://bellyfull.net/wp-content/uploads/2021/02/Chicken-Alfredo-blog-4.jpg",
      date: "Feb 8, 2021",
      link: "https://bellyfull.net/chicken-alfredo-recipe/",
    },
    {
      name: "Spaghetti Carbonara",
      imgUrl: "https://www.recipetineats.com/tachyon/2023/01/Carbonara_6a.jpg?resize=900%2C1125&zoom=0.72",
      date: "31 Jan 2023",
      link: "https://www.recipetineats.com/carbonara/",
    },
    // Add more recipes here
  ];

  return (
    <div className="flex flex-col items-center justify-center overflow-y-auto  h-[calc(100vh-10rem)] pt-48">
      <Heading className="pt-12">Saved Recipes</Heading>
      <div className="flex flex-wrap justify-center">
      {recipes.map((recipe, index) => (
        <RecipeCard
          // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
          key={index} 
          name={recipe.name}
          imgUrl={recipe.imgUrl}
          date={recipe.date}
          link={recipe.link}
        />
      ))}
    </div>
    </div>
  );
};

export default SavedRecipes;