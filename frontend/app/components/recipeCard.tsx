import React from "react";
import { View } from "react-native";
import { Card } from "@/components/ui/card";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import { Image } from "@/components/ui/image";
import { VStack } from "@/components/ui/vstack";

export default function RecipeCard() {
  return (
    <View>
      <Card size="md" variant="elevated" className="m-3">
        <Image
          size="md"
          source={{
            uri: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
          }}
          alt="image"
        />
        <Vstack>
          <Heading>Margherita Pizza</Heading>
          <Text size="sm">makepizza.com</Text>
        </Vstack>
      </Card>
    </View>
  );
}
