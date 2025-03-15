import { Card } from '@/components/ui/card';
import { Heading } from '@/components/ui/heading';
import { HStack } from '@/components/ui/hstack';
import { Image } from '@/components/ui/image';
import { Link, LinkText } from '@/components/ui/link';
import { Text } from '@/components/ui/text';
import { Icon, ArrowRightIcon } from '@/components/ui/icon';
import React from 'react';
import { View } from 'react-native';

interface RecipeCardProps {
  name: string;
  imgUrl: string;
  date: string;
  link: string;
}

function RecipeCard({ name, imgUrl, date, link }: RecipeCardProps) {
  return (
    <View>
      <Card className="p-8 rounded-lg max-w-[360px] m-3">
        <Image
          source={{
            uri: imgUrl,
          }}
          className="mb-6 h-[280px] w-full rounded-md aspect-[263/240]"
          alt="image"
        />
        <Text className="text-sm font-normal mb-2 text-typography-700">
          {date}
        </Text>
        <Heading size="md" className="mb-4">
          {name}
        </Heading>
        <Link href={link} isExternal>
          <HStack className="items-center">
            <LinkText
              size="sm"
              className="font-semibold text-info-600 no-underline"
            >
              Look into this recipe
            </LinkText>
            <Icon
              as={ArrowRightIcon}
              size="sm"
              className="text-info-600 mt-0.5 ml-0.5"
            />
          </HStack>
        </Link>
      </Card>
    </View>
  );
}

export default RecipeCard;
