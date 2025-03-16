import { useLocalSearchParams } from "expo-router";
import { Text, View, Image, ScrollView } from "react-native";

const RecipeDetail = () => {
  const { id } = useLocalSearchParams(); // Get the recipe ID from the URL

  const recipe = {
    id: "1",
    name: "Chicken Alfredo",
    date: "Feb 8, 2021",
    imgUrl: "https://bellyfull.net/wp-content/uploads/2021/02/Chicken-Alfredo-blog-4.jpg",
    description: "This is a delicious Chicken Alfredo recipe.",
  };

  return (
    <ScrollView contentContainerStyle={{ padding: 16 }}>
      <Image
        source={{ uri: recipe.imgUrl }}
        style={{ width: "100%", height: 200, borderRadius: 8, marginBottom: 16 }}
      />
      <Text style={{ fontSize: 24, fontWeight: "bold", marginBottom: 8 }}>
        {recipe.name}
      </Text>
      <Text style={{ fontSize: 16, marginBottom: 8 }}>{recipe.date}</Text>
      <Text style={{ fontSize: 16 }}>{recipe.description}</Text>
    </ScrollView>
  );
};

export default RecipeDetail;