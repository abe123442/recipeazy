import React from 'react';
import { View } from 'react-native';
import { Card } from '@/components/ui/card';
import { Heading } from '@/components/ui/heading';
import { Text } from '@/components/ui/text';
import { Image } from '@/components/ui/image';
import { VStack } from '@/components/ui/vstack';
import { HStack } from '@/components/ui/hstack';
import { Link, LinkText } from '@/components/ui/link';

interface RecipeCardProps {
  name: string;
  imgUrl: string;
  link: string;
}

const RecipeCardSmall: React.FC<RecipeCardProps> = ({ name, imgUrl, link }) => {
  return (
    <View>
      <Card size="md" variant="elevated" className="m-3 w-80">
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
            <Link href={link}>
              <LinkText>See this recipe</LinkText>
            </Link>
          </VStack>
        </HStack>
      </Card>
    </View>
  );
};
export default RecipeCardSmall;
