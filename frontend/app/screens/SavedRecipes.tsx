import React from 'react';
import { Heading } from '@/components/ui/heading';
import RecipeCard from '../components/recipeCard';
import { ScrollView, View } from 'react-native';
import { VStack } from '@/components/ui/vstack';
import SearchBar from '../components/search';
import FilterButton from '../components/filterButton';

const SavedRecipes = () => {
  const recipes = [
    {
      name: 'Chicken Alfredo 69',
      imgUrl:
        'https://bellyfull.net/wp-content/uploads/2021/02/Chicken-Alfredo-blog-4.jpg',
      date: 'Feb 8, 2021',
      link: '1',
    },
    {
      name: 'Spaghetti Carbonara',
      imgUrl:
        'https://www.recipetineats.com/tachyon/2023/01/Carbonara_6a.jpg?resize=900%2C1125&zoom=0.72',
      date: '31 Jan 2023',
      link: '2',
    },
    // Add more recipes here
  ];

  return (
    <View className="flex-1 flex-col items-center justify-center p-3">
      <Heading className="pt-4 pb-3">Saved Recipes</Heading>
      <View className="flex flex-row justify-center items-center">
        <SearchBar />
        <FilterButton />
      </View>
      <ScrollView className="flex-1">
        <VStack className="flex flex-wrap justify-center">
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
        </VStack>
      </ScrollView>
    </View>
  );
};

export default SavedRecipes;
