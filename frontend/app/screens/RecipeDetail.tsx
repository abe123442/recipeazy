import { useLocalSearchParams, useRouter } from "expo-router";
import { Text, View, Image, ScrollView, TouchableOpacity } from "react-native";
import StepCard from "../components/stepCard";

const RecipeDetail = () => {
  const { id } = useLocalSearchParams(); // Get the recipe ID from the URL
  const router = useRouter(); 

  // Mock recipe data with steps
  const recipe = {
    id: "1",
    name: "Chicken Alfredo",
    date: "Feb 8, 2021",
    imgUrl: "https://bellyfull.net/wp-content/uploads/2021/02/Chicken-Alfredo-blog-4.jpg",
    description: "This is a delicious Chicken Alfredo recipe.",
    steps: [
      {
        name: "Step 1: Prepare Ingredients",
        content: "Gather all the ingredients: chicken, pasta, Alfredo sauce, and spices.",
      },
      {
        name: "Step 2: Cook the Chicken",
        content: "Cook the chicken in a pan until it's fully cooked and golden brown.",
      },
      {
        name: "Step 3: Boil the Pasta",
        content: "Boil the pasta in salted water until it's al dente.",
      },
      {
        name: "Step 4: Combine Everything",
        content: "Mix the cooked chicken, pasta, and Alfredo sauce in a large pan. Heat until warm.",
      },
      {
        name: "Step 5: Serve",
        content: "Serve the Chicken Alfredo hot, garnished with parsley and Parmesan cheese.",
      },
    ],
  };

  return (
    <ScrollView contentContainerStyle={{ padding: 16 }}>
      
      {/* Recipe Image */}
      <Image
        source={{ uri: recipe.imgUrl }}
        style={{ width: "100%", height: 200, borderRadius: 8, marginBottom: 16 }}
      />

      {/* Recipe Name */}
      <Text style={{ fontSize: 24, fontWeight: "bold", marginBottom: 8 }}>
        {recipe.name}
      </Text>

      {/* Recipe Date */}
      <Text style={{ fontSize: 16, marginBottom: 8 }}>{recipe.date}</Text>

      {/* Recipe Description */}
      <Text style={{ fontSize: 16, marginBottom: 16 }}>{recipe.description}</Text>

      {/* Recipe Steps */}
      {recipe.steps.map((step, index) => (
        <StepCard
          // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
          key={index} 
          name={step.name}
          content={step.content}
        />
      ))}
    </ScrollView>
  );
};

export default RecipeDetail;