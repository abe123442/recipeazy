import React from 'react';
import { Text, ScrollView } from 'react-native';

interface RecipePageProps {
  recipeImage: string[];
  ingredients: string[];
  steps: string[];
}

function RecipePage({}: RecipePageProps) {
  return (
    <ScrollView>
      <Text>Hello world</Text>
    </ScrollView>
  );
}
export default RecipePage;
