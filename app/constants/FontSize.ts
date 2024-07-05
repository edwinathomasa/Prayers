export type Fontsize = (typeof FontSize)[keyof typeof FontSize];
export namespace FontSize {
    export const XSmall = 12;
    export const Small = 14;
    export const Medium = 16;
    export const Large = 18;
    export const XLarge = 20;

    export const mysteryHeader = Large;
    export const mysteryText = Small;
}