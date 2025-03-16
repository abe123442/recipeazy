import { Button, ButtonText, ButtonIcon } from '@/components/ui/button';
import { Heading } from '@/components/ui/heading';
import { HStack } from '@/components/ui/hstack';
import { Input, InputField } from '@/components/ui/input';
import { Link, LinkText } from '@/components/ui/link';
import {
  Modal,
  ModalBackdrop,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from '@/components/ui/modal';
import { Text } from '@/components/ui/text';
import { ArrowLeftIcon } from '@/components/ui/icon';
import React from 'react';
import RecipeCard from '../components/recipeCard';
import { ScrollView, View } from 'react-native';
import { VStack } from '@/components/ui/vstack';

const recipes = [
  {
    name: 'Chicken Alfredo',
    imgUrl:
      'https://bellyfull.net/wp-content/uploads/2021/02/Chicken-Alfredo-blog-4.jpg',
    date: 'Feb 8, 2021',
    link: 'https://bellyfull.net/chicken-alfredo-recipe/',
  },
  {
    name: 'Spaghetti Carbonara',
    imgUrl:
      'https://www.recipetineats.com/tachyon/2023/01/Carbonara_6a.jpg?resize=900%2C1125&zoom=0.72',
    date: '31 Jan 2023',
    link: 'https://www.recipetineats.com/carbonara/',
  },
  // Add more recipes here
];

function GenerateRecipes() {
  const [showModal, setShowModal] = React.useState(false);
  const [showModal2, setShowModal2] = React.useState(false);
  const [showModal3, setShowModal3] = React.useState(false);
  return (
    <>
      <Button onPress={() => setShowModal(true)}>
        <ButtonText>Find Recipes</ButtonText>
      </Button>

      <Modal
        isOpen={showModal}
        onClose={() => {
          setShowModal(false);
        }}
      >
        <ModalBackdrop />
        <ModalContent>
          <ModalHeader className="flex-col items-start gap-0.5">
            <Heading>{recipes.length} recipes found</Heading>
            <Text size="sm">Click a recipe to start cooking!</Text>
          </ModalHeader>

          <ModalBody>
            <View className="flex-1 flex-col items-center justify-center">
              <ScrollView className="flex-1">
                <VStack className="flex flex-wrap justify-center">
                  {recipes.map((recipe, index) => (
                    <RecipeCard
                      // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                      key={index}
                      name={recipe.name}
                      imgUrl={recipe.imgUrl}
                      date={recipe.date}
                      link={recipe.link}
                    />
                  ))}
                </VStack>
              </ScrollView>
            </View>
          </ModalBody>

          <ModalFooter className="flex-col items-start">
            {/* <Button
              onPress={() => {
                setShowModal2(true);
              }}
              className="w-full"
            >
              <ButtonText>Submit</ButtonText>
            </Button> */}
            <Button
              variant="link"
              size="sm"
              onPress={() => {
                setShowModal(false);
              }}
              className="gap-1"
            >
              <ButtonIcon as={ArrowLeftIcon} />
              <ButtonText>Back</ButtonText>
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <Modal
        isOpen={showModal2}
        onClose={() => {
          setShowModal2(false);
        }}
      >
        <ModalBackdrop />
        <ModalContent>
          <ModalHeader className="flex-col items-start gap-0.5">
            <Heading>Reset password</Heading>
            <Text size="sm">
              A verification code has been sent to you. Enter code below.
            </Text>
          </ModalHeader>
          <ModalBody className="mb-4">
            <Input>
              <InputField placeholder="Enter verification code" />
            </Input>
          </ModalBody>
          <ModalFooter className="flex-col items-start">
            <Button
              onPress={() => {
                setShowModal3(true);
              }}
              className="w-full"
            >
              <ButtonText>Continue</ButtonText>
            </Button>
            <Text size="sm" className="">
              Didn’t receive the email?
              <Link className="">
                <LinkText
                  size="xs"
                  className="text-typography-700 font-semibold"
                >
                  Click to resend
                </LinkText>
              </Link>
            </Text>
            <HStack space="xs" className="items-center">
              <Button
                variant="link"
                size="sm"
                onPress={() => {
                  setShowModal2(false);
                }}
                className="gap-1"
              >
                <ButtonIcon as={ArrowLeftIcon} />
                <ButtonText>Back to login</ButtonText>
              </Button>
            </HStack>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <Modal
        isOpen={showModal3}
        onClose={() => {
          setShowModal3(false);
        }}
      >
        <ModalBackdrop />
        <ModalContent>
          <ModalHeader className="flex-col items-start gap-0.5">
            <Heading>Set new password</Heading>
            <Text size="sm">
              Almost done. Enter your new password and you are all set.
            </Text>
          </ModalHeader>
          <ModalBody className="" contentContainerClassName="gap-3">
            <Input>
              <InputField placeholder="New password" />
            </Input>
            <Input>
              <InputField placeholder="Confirm new password" />
            </Input>
          </ModalBody>
          <ModalFooter className="flex-col items-start">
            <Button
              onPress={() => {
                setShowModal(false);
                setShowModal2(false);
                setShowModal3(false);
              }}
              className="w-full"
            >
              <ButtonText>Submit</ButtonText>
            </Button>
            <Button
              variant="link"
              size="sm"
              onPress={() => {
                setShowModal3(false);
              }}
              className="gap-1"
            >
              <ButtonIcon as={ArrowLeftIcon} />
              <ButtonText>Back to login</ButtonText>
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default GenerateRecipes;
