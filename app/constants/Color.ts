/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

export type Color = (typeof Color)[keyof typeof Color];
export namespace Color {
  export const Red = "#FF0000";
  export const Green = "#00FF00";
  export const Blue = "#0000FF";
  export const Yellow = "#FFFF00";
  export const White = "#FFFFFF";
  export const Black = "#000000";
  export const Gray = "#808080";
  export const Gold = "#FFD700";
  export const Purple = "#800080";
  export const violet = "8A2BE2";

  export const JoyfulHeader = Gold;
  export const JoyfulText = White;
  export const SorrowfulHeader = Purple;
  export const SorrowfulText = violet;
  export const SorrowfulOther = Red;
  export const GloriousHeader = Gold;
  export const GloriousText = White;
  export const GloriousOther = Red;
  export const LuminousHeader = Gold;
  export const LuminousText = White;
  export const LuminousOther = Green;

};
