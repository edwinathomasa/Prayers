import React from "react";
import { FlexAlignType, StyleSheet, Text, View } from "react-native";

import { Color } from "../constants/Color";
import { Typography } from "../constants/Typograph";
import { Leading } from "../constants/Leading";
import { Skeleton } from "./Atom/Skeleton";
import Spacer from "./Atom/Spacer";

const headingWidths = ["40%", "50%", "60%", "70%"];
const textWidths = ["45%", "55%", "65%"];

const getRandomWidth = (widths: string[]) => widths[Math.floor(Math.random() * widths.length)];

interface Props {
  text?: string;
  color?: Color;
  heading?: string;
  type?: Typography;
  lines?: number;
  capitalizeFirstLetter?: boolean;
  size?: number;
  align?: "left" | "center" | "right";
  loading?: boolean;
  underline?: boolean;
  lineThrough?: boolean;
}

const styles = StyleSheet.create(Typography);

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
  capitalizeFirstLetter = true,
  size,
  align,
  loading,
  underline,
  lineThrough,
}: Props): JSX.Element => {
  const textStyle = {
    ...styles[type],
    color: color ?? styles[type].color,
    fontSize: size ?? styles[type].fontSize,
    textAlign: align,
    textDecorationLine: underline ? "underline" : lineThrough ? "line-through" : "none",
  };

  const renderText = (content: string, style: any) => (
    <Text style={style} numberOfLines={lines} ellipsizeMode="tail">
      {capitalizeFirstLetter ? firstLetterCaptalize(content) : content}
    </Text>
  );

  return (
    <View style={align ? { alignItems: flexAlign[align] } : undefined}>
      {heading && (
        <Skeleton typography="Default" width={getRandomWidth(headingWidths)} loading={loading}>
          {renderText(heading, {
            ...styles.Default,
            color: color ?? Color.Blue,
            textAlign: align,
            textDecorationLine: underline ? "underline" : lineThrough ? "line-through" : "none",
          })}
        </Skeleton>
      )}
      {heading && text && loading && <Spacer size={Leading.Two} />}
      {text && (
        <Skeleton typography={type} width={getRandomWidth(textWidths)} loading={loading}>
          {renderText(text, textStyle)}
        </Skeleton>
      )}
    </View>
  );
};
