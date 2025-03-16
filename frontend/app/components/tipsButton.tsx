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
import { Icon, CloseIcon } from '@/components/ui/icon';
import React from 'react';
import { Sparkles } from 'lucide-react-native';

function TipsButton() {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <Center className="">
      <Button onPress={() => setShowModal(true)}>
        {/* Replace with Lucide icon later */}
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
            <Text size="md" className="text-typography-500">
                - Avoid pre-shredded cheese
                - Don’t over-cook the chicken
                - A long, flat noodle like Fettuccine is perfect
            </Text>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Center>
  );
}

export default TipsButton;
