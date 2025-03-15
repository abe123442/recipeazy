import React from "react";
import { View } from "react-native";
import DropDownFilter from "../components/dropDownFilter";
import ModalComponent from "../components/modal";
import { Heading } from "@/components/ui/heading";

const Home = () => {
  return (
    <View>
      <View className="flex flex-col gap-3 justify-center items-center p-6">
        <ModalComponent />
        <Heading className="font-bold text-3xl pt-16">
          {" "}
          Current Ingredients{" "}
        </Heading>
        <DropDownFilter />
      </View>
    </View>
  );
};

export default Home;
