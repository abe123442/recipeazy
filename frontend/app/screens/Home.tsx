
import React from "react";
import { View } from "react-native";
import DropDownFilter  from "../components/dropDownFilter"
import GreenButton from "../components/button";

const Home = () => {
  return (
    <View>
      <div className="flex flex-col gap-1 justify-center items-center"> 
        <GreenButton />
        <DropDownFilter />
      </div>
    </View>
  );
};

export default Home;
