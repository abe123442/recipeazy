import { Heading } from "@/components/ui/heading";
import React from "react";
import { View } from "react-native";
import DropDownFilter  from "../components/dropDownFilter"
import GreenButton from "../components/button";

const Home = () => {
  return (
    <View>
      <Heading>Home page</Heading>
      <GreenButton />
      <DropDownFilter /> 
    </View>
  );
};

export default Home;
