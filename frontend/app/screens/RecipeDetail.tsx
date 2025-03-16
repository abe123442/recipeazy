import { useLocalSearchParams, useRouter } from 'expo-router';
import { Text, View, Image, ScrollView, StyleSheet } from 'react-native';
import StepCard from '../components/stepCard';
import TipsButton from '../components/tipsButton';

const RecipeDetail = () => {
  const { id } = useLocalSearchParams(); // Get the recipe ID from the URL
  const router = useRouter();

  // Mock recipe data
  const recipes = [
    {
      id: '1',
      name: 'Chicken Alfredo',
      date: 'Feb 8, 2021',
      imgUrl:
        'https://bellyfull.net/wp-content/uploads/2021/02/Chicken-Alfredo-blog-4.jpg',
      description:
        'This is a delicious Chicken Alfredo recipe that is perfect for a cozy dinner. It combines tender chicken, creamy Alfredo sauce, and perfectly cooked pasta for a meal that everyone will love.',
      steps: [
        {
          name: 'Step 1: Prepare Ingredients',
          content:
            'Gather all the ingredients: 2 boneless, skinless chicken breasts, 1 pound of fettuccine pasta, 2 cups of heavy cream, 1 cup of grated Parmesan cheese, 2 cloves of garlic (minced), 2 tablespoons of butter, salt, and pepper. Make sure all ingredients are fresh and measured correctly.',
        },
        {
          name: 'Step 2: Cook the Chicken',
          content:
            'Season the chicken breasts with salt and pepper. Heat a large skillet over medium heat and add 1 tablespoon of butter. Cook the chicken for 6-7 minutes on each side until fully cooked and golden brown. Remove the chicken from the skillet and let it rest for 5 minutes before slicing it into strips.',
        },
        {
          name: 'Step 3: Boil the Pasta',
          content:
            'Bring a large pot of salted water to a boil. Add the fettuccine pasta and cook according to the package instructions until al dente (usually 10-12 minutes). Drain the pasta and set it aside, reserving 1 cup of the pasta water for later use.',
        },
        {
          name: 'Step 4: Make the Alfredo Sauce',
          content:
            'In the same skillet used for the chicken, melt 1 tablespoon of butter over medium heat. Add the minced garlic and sauté for 1-2 minutes until fragrant. Pour in the heavy cream and bring it to a gentle simmer. Stir in the grated Parmesan cheese until the sauce is smooth and creamy. If the sauce is too thick, add a splash of the reserved pasta water.',
        },
        {
          name: 'Step 5: Combine Everything',
          content:
            'Add the cooked pasta and sliced chicken to the skillet with the Alfredo sauce. Toss everything together until the pasta and chicken are evenly coated with the sauce. Cook for an additional 2-3 minutes to heat everything through. Season with salt and pepper to taste.',
        },
        {
          name: 'Step 6: Serve',
          content:
            'Serve the Chicken Alfredo hot, garnished with freshly chopped parsley and extra grated Parmesan cheese. Pair it with a side of garlic bread or a fresh salad for a complete meal. Enjoy!',
        },
      ],
    },
    {
      id: '2',
      name: 'Spaghetti Carbonara',
      date: 'Mar 15, 2023',
      imgUrl:
        'https://www.recipetineats.com/tachyon/2023/01/Carbonara_6a.jpg?resize=900%2C1125&zoom=0.72',
      description:
        "Spaghetti Carbonara is a classic Italian pasta dish made with eggs, cheese, pancetta, and black pepper. It's creamy, rich, and incredibly satisfying.",
      steps: [
        {
          name: 'Step 1: Prepare Ingredients',
          content:
            'Gather all the ingredients: 12 oz spaghetti, 4 large eggs, 1 cup grated Pecorino Romano cheese, 6 oz pancetta (diced), 3 cloves garlic (minced), salt, and freshly ground black pepper.',
        },
        {
          name: 'Step 2: Cook the Pancetta',
          content:
            'Heat a large skillet over medium heat. Add the diced pancetta and cook until crispy, about 5-7 minutes. Add the minced garlic and cook for an additional 1-2 minutes until fragrant. Remove from heat and set aside.',
        },
        {
          name: 'Step 3: Boil the Spaghetti',
          content:
            'Bring a large pot of salted water to a boil. Add the spaghetti and cook according to the package instructions until al dente (usually 8-10 minutes). Reserve 1 cup of the pasta water, then drain the spaghetti.',
        },
        {
          name: 'Step 4: Prepare the Egg Mixture',
          content:
            'In a medium bowl, whisk together the eggs and grated Pecorino Romano cheese until well combined. Season with a generous amount of freshly ground black pepper.',
        },
        {
          name: 'Step 5: Combine Everything',
          content:
            'Add the cooked spaghetti to the skillet with the pancetta. Toss to coat the pasta in the pancetta fat. Remove the skillet from heat and quickly pour in the egg mixture, tossing continuously to create a creamy sauce. If the sauce is too thick, add a splash of the reserved pasta water.',
        },
        {
          name: 'Step 6: Serve',
          content:
            'Serve the Spaghetti Carbonara immediately, garnished with extra grated Pecorino Romano cheese and a sprinkle of black pepper. Enjoy!',
        },
      ],
    },
  ];

  // Find the recipe by ID
  const recipe = recipes.find((r) => r.id === id);

  if (!recipe) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Recipe not found.</Text>
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={{ padding: 16 }}>
      {/* Recipe Image */}
      <Image
        source={{ uri: recipe.imgUrl }}
        style={{
          width: '100%',
          height: 200,
          borderRadius: 8,
          marginBottom: 16,
        }}
      />

      {/* Recipe Name */}
      <div className="flex flex-row gap-12 ml-auto">
        <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 8 }}>
          {recipe.name}
        </Text>
        <TipsButton />
      </div>

      {/* Recipe Date */}
      <Text style={{ fontSize: 16, marginBottom: 8 }}>{recipe.date}</Text>

      {/* Recipe Description */}
      <Text style={{ fontSize: 16, marginBottom: 16 }}>
        {recipe.description}
      </Text>

      {/* Recipe Steps */}
      {recipe.steps.map((step, index) => (
        <StepCard key={index} name={step.name} content={step.content} />
      ))}
    </ScrollView>
  );
};

export default RecipeDetail;
