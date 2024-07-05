import { Color } from "./Color";
import { Font } from "./Font";
import { FontSize } from "./FontSize";

export type Typography = keyof typeof Typography;
export namespace Typography {
    export const JoyfulHeader = { fontSize: FontSize.Large, fontFamily: Font.SemiBold, color: Color.JoyfulHeader }
    export const JoyfulText = { fontSize: FontSize.Medium, fontFamily: Font.Light, color: Color.JoyfulText }
    export const SorrowfulHeader = { fontSize: FontSize.Large, fontFamily: Font.SemiBold, color: Color.SorrowfulHeader }
    export const SorrowfulText = { fontSize: FontSize.Medium, fontFamily: Font.Light, color: Color.SorrowfulText }
    export const SorrowfulOtherHeader = { fontSize: FontSize.Large, fontFamily: Font.SemiBold, color: Color.SorrowfulOther }
    export const GloriousHeader = { fontSize: FontSize.Large, fontFamily: Font.SemiBold, color: Color.GloriousHeader }
    export const GloriousText = { fontSize: FontSize.Medium, fontFamily: Font.Light, color: Color.GloriousText }
    export const GloriousOtherHeader = { fontSize: FontSize.Large, fontFamily: Font.SemiBold, color: Color.GloriousOther }
    export const LuminousHeader = { fontSize: FontSize.Large, fontFamily: Font.SemiBold, color: Color.LuminousHeader }
    export const LuminousText = { fontSize: FontSize.Medium, fontFamily: Font.Light, color: Color.LuminousText }
    export const LuminousOtherHeader = { fontSize: FontSize.Large, fontFamily: Font.SemiBold, color: Color.LuminousOther }

    export const Default = { fontSize: FontSize.Small, fontFamily: Font.Light, color: Color.Blue }
}