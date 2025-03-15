
import React from "react";
import { View } from "react-native";
import DropDownFilter  from "../components/dropDownFilter"
import ModalComponent from "../components/modal";
import { Heading } from "@/components/ui/heading";

const Home = () => {
  return (
    <View>
      <div className="flex flex-col gap-3 justify-center items-center p-6"> 
        <Heading className="font-bold text-3xl p-2">Upload Receipt</Heading>
        <ModalComponent />
        <Heading className="font-bold text-3xl pt-16"> Current Ingredients </Heading>
        <DropDownFilter />
      </div>
    </View>
  );
};

export default Home;
