import React from "react";
import { View } from "react-native";
import { Leading } from "@/app/constants/Leading";

interface Props {
  size?: Leading;
}

const Spacer: React.FC<Props> = ({ size = Leading.Two }) => {
  return <View style={{ width: size, height: size }} />;
};

export default Spacer;