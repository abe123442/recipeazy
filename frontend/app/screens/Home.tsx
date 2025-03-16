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
    <>
      <View>
        <View className="py-5">
          <Heading className="text-3xl p-2 text-center">Current Items</Heading>
          <VStack space="md">
          <View className="flex flex-col items-center justify-center">
            {groceryList.map((value, i) => {
              return (
                <Card className="" key={i} 
                style={{width:300, height:50, 
                justifyContent: 'center', alignItems: 'center',
                borderWidth: 2,
                borderColor: '#ccc',
                borderRadius: 10,
                marginBottom: 10,}}>
                  <Text>{value}</Text>
                </Card>
              );
            })}
            </View>
          </VStack>
          
            <View style={{ 
              borderWidth: 2,
              borderColor: '#ccc',
              borderRadius: 10,
              padding: 10,
              alignItems: 'center', 
              justifyContent: 'center',
              marginTop: 20, 
            }}>
          <GenerateRecipes />
          </View>
        </View>
      </View>

      <View className="flex-1 flex-col gap-3 items-center p-6 bottom-0 justify-end">
        {/* <Heading className="font-bold text-3xl p-2">Upload Receipt</Heading> */}
        <ModalComponent />
      </View>
    </>
  );
};

export default Home;
