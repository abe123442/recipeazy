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

import { Upload } from 'lucide-react-native';

function ModalComponent() {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <Center className="">
      <Button onPress={() => setShowModal(true)} size="xl">
        <Upload color={'white'} />
        <ButtonText>Upload Receipt</ButtonText>
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
              Upload or Choose a picture
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
            <Text size="sm" className="text-typography-500">
              Recipeazy will help you extract correct ingredients from your
              receipt!
            </Text>
          </ModalBody>
          <ModalFooter className="flex justify-center items-center">
            <Button
              variant="outline"
              action="primary"
              onPress={() => {
                setShowModal(false);
              }}
            >
              <ButtonText>Upload</ButtonText>
            </Button>
            <Button
              onPress={() => {
                setShowModal(false);
              }}
            >
              <ButtonText>Choose A Pic</ButtonText>
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Center>
  );
}

export default ModalComponent;
