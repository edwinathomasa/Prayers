import React from "react";
import { Text, View } from "react-native";
import { TextContent } from "./Components/TextContent";
import { Color } from "./constants/Color";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <TextContent text={"Firstsetup"} color="Gold" />
    </View>
  );
}
