import { Heading } from "@/components/ui/heading";
import React from "react";
import { View } from "react-native";
import DropDownFilter  from "../components/dropDownFilter"

const Home = () => {
  return (
    <View>
      <Heading>Home page</Heading>
      <DropDownFilter />
    </View>
  );
};

export default Home;
