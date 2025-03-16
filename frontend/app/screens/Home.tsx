import React, { useState } from 'react';
import { FlatList, View } from 'react-native';
import DropDownFilter from '../components/dropDownFilter';
import ModalComponent from '../components/modal';
import { Heading } from '@/components/ui/heading';
import { Box } from '@/components/ui/box';
import { Text } from '@/components/ui/text';
import { VStack } from '@/components/ui/vstack';
import { Button, ButtonText } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

// import { Modal } from 'react-native';
import {
  Modal,
  ModalBackdrop,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
} from '@/components/ui/modal';
import GenerateRecipes from '../components/GenerateRecipes';

const groceryList = [
  'Dry Fettunicine Pasta',
  'Chicken Breasts',
  'Italian Seasoning',
  'Whipping Cream',
  'Grated Parmesan Cheese',
];

const Home = () => {
  return (
    <View>
      <View className="flex flex-col gap-3 justify-center items-center p-6">
        <Heading className="font-bold text-3xl p-2">Upload Receipt</Heading>
        <ModalComponent />
      </View>
      <View>
        <Heading className="text-3xl p-2">Current Items</Heading>
        <VStack space="md">
          {groceryList.map((value, i) => {
            return (
              <Card className="" key={i}>
                <Text>{value}</Text>
              </Card>
            );
          })}
        </VStack>

        <GenerateRecipes />
      </View>
    </View>
  );
};

export default Home;
