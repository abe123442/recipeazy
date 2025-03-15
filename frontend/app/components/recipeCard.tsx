import React from "react";
import { View } from "react-native";
import { Card } from "@/components/ui/card";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import { Image } from "@/components/ui/image";
import { VStack } from "@/components/ui/vstack";
import { HStack } from "@/components/ui/hstack";

interface RecipeCardProps {
  name: string;
  imgUrl: string;
  RecipeSource: string;
}

const RecipeCard: React.FC<RecipeCardProps> = ({
  name,
  imgUrl,
  RecipeSource,
}) => {
  return (
    <View>
      <Card size="md" variant="elevated" className="m-3 w-96">
        <HStack space="md">
          <Image
            size="md"
            source={{
              uri: imgUrl,
            }}
            alt="image"
          />
          <VStack>
            <Heading>{name}</Heading>
            <Text size="sm">{RecipeSource}</Text>
          </VStack>
        </HStack>
      </Card>
    </View>
  );
};
export default RecipeCard;
