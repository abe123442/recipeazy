
import React from "react";
import { View } from "react-native";
import DropDownFilter  from "../components/dropDownFilter"
import ModalComponent from "../components/modal";

const Home = () => {
  return (
    <View>
      <div className="flex flex-col gap-3 justify-center items-center p-6"> 
        <h1 className="font-bold text-3xl p-2"> Upload Receipt </h1>
        <ModalComponent />
        <h1 className="font-bold text-3xl pt-16"> Current Ingredients </h1>
        <DropDownFilter />
      </div>
    </View>
  );
};

export default Home;
