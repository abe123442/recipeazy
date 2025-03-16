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
            <ModalCloseButton>
              <Icon
                as={CloseIcon}
                size="md"
                className="stroke-background-400 group-[:hover]/modal-close-button:stroke-background-700 group-[:active]/modal-close-button:stroke-background-900 group-[:focus-visible]/modal-close-button:stroke-background-900"
              />
            </ModalCloseButton>
          </ModalHeader>
          <ModalBody>
            <Text size="md" className="text-typography-500">
              <ul>
                <li>- Avoid pre-shredded cheese</li>
                <li>- Don’t over-cook the chicken</li>
                <li>- A long, flat noodle like Fettuccine is perfect</li>
              </ul>
            </Text>
          </ModalBody>
          <ModalFooter className="flex justify-center items-center"></ModalFooter>
        </ModalContent>
      </Modal>
    </Center>
  );
}

export default TipsButton;
