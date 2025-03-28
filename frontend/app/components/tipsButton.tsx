import { Button, ButtonText } from '@/components/ui/button';
import { Center } from '@/components/ui/center';
import { Heading } from '@/components/ui/heading';
import {
  Modal,
  ModalBackdrop,
  ModalContent,
  ModalCloseButton,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from '@/components/ui/modal';
import { Text } from '@/components/ui/text';
import { View } from 'react-native';
import React from 'react';
import { Sparkles } from 'lucide-react-native';

function TipsButton() {
  const [showModal, setShowModal] = React.useState(false);

  // List of cooking tips
  const cookingTips = [
    "Avoid pre-shredded cheese",
    "Don’t over-cook the chicken",
    "A long, flat noodle like Fettuccine is perfect",
  ];

  return (
    <Center className="">
      <Button onPress={() => setShowModal(true)}>
        <ButtonText className="flex flex-row justify-center">
          <Sparkles /> Cooking Tips{' '}
        </ButtonText>
      </Button>
      <Modal
        isOpen={showModal}
        onClose={() => {
          setShowModal(false);
        }}
        size="lg"
      >
        <ModalBackdrop />
        <ModalContent>
          <ModalHeader>
            <Heading size="md" className="text-typography-950">
              Cooking Tips to make the recipe even better!
            </Heading>
          </ModalHeader>
          <ModalBody>
            {/* Render the cooking tips as a list */}
            <View>
              {cookingTips.map((tip, index) => (
                <View key={index} className="flex-row items-start mb-2">
                  <Text className="text-typography-500 mr-2">•</Text>
                  <Text size="md" className="text-typography-500 flex-1">
                    {tip}
                  </Text>
                </View>
              ))}
            </View>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Center>
  );
}

export default TipsButton;