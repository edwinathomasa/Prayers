import React from "react";
import { FlexAlignType, StyleSheet, Text, View } from "react-native";

import { Color } from "../constants/Color";
import { Typography } from "../constants/Typograph";
import { Leading } from "../constants/Leading";


interface Props {
  text?: string;
  color?: Color;
  heading?: string;
  type?: Typography;
  lines?: number;
  upperFirst?: boolean;
  size?: number;
  align?: "left" | "center" | "right";
  loading?: boolean;
  underline?: boolean;
  lineThrough?: boolean;
}

const flexAlign: Record<NonNullable<Props["align"]>, FlexAlignType> = {
  left: "flex-start",
  center: "center",
  right: "flex-end",
};

export const TextContent = ({
  text,
  color,
  heading,
  type = "Default",
  lines,
  upperFirst = true,
  size,
  align,
  loading,
  underline,
  lineThrough,
}: Props): JSX.Element => {
  return (
    <View style={align ? { alignItems: flexAlign[align] } : undefined}>

    </View>
  );
};
