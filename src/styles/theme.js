import { createTheme } from "@mui/material/styles";

const BrandColors = {
  AcessibleGreen: "#26890D",
  DeloitteGreen: "#86BC25",
  Green4: "#43B02A",
  Green1: "#E3E48D",
  Green2: "#C4D600",
  Green5: "#009A44",
  Green7: "#2C5234",
  Green6: "#046A38",
  AccessibleBlue: "#007CB0",
  AccessibleTeal: "#0D8390",
  Blue1: "#A0DCFF",
  Blue2: "#62B5E5",
  Blue3: "#00A3E0",
  Blue4: "#0076A8",
  Blue5: "#005587",
  Blue6: "#012169",
  Blue7: "#041E42",

  Teal1: "#DDEFE8",
  Teal2: "#9DD4CF",
  Teal3: "#6FC2B4",
  Teal4: "#00ABAB",
  Teal5: "#0097A9",
  Teal6: "#007680",
  Teal7: "#004F59",

  CoolGray10: "#63666A",
  CoolGray2: "#D0D0CE",
  CoolGray4: "#BBBCBC",
  CoolGray6: "#A7A8AA",
  CoolGray7: "#97999B",
  CoolGray9: "#75787B",
  Gray11: "#53565A",
  HighlightGray: "#F4F4F4",

  Black: "#000000",
  White: "#FFFFFF",

  BrightBlue: "#33F0FF",
  BrightGreen: "#0DF200",
  BrightTeal: "#3EFAC5",
  Orange: "#ED8B00",
  Red: "#DA291C",
  Yellow: "#FFCD00",
};
/**
 * It creates a theme object
 */
export const getTheme = () =>
  createTheme({
    palette: {
      background: {
        paper: BrandColors.White,
        default: "#F7F7F7;",
      },
      transparentGreen: {
        main: BrandColors.DeloitteGreen,
        style: { opacity: 0.3 },
      },
      primary: {
        main: BrandColors.DeloitteGreen,
        light: BrandColors.Green1,
        dark: BrandColors.AccessibleTeal,
      },
      secondary: {
        main: BrandColors.Black,
        light: BrandColors.CoolGray2,
      },
    },
    components: {},
    typography: {
      h1: {
        fontSize: 36,
        fontWeight: "bold",
        letterSpacing: -1,
      },
      h2: {
        fontSize: 30,
        fontWeight: "bold",
        letterSpacing: -1,
      },
      h3: {
        fontSize: 25,
        fontWeight: "bold",
        letterSpacing: -1,
      },
      h4: {
        fontSize: 22,
        fontWeight: "bold",
        letterSpacing: -1,
      },
      h5: {
        fontSize: 20,
        fontWeight: "bold",
        letterSpacing: -1,
      },
      body1: {
        fontSize: 18,
        fontWeight: "bold",
        letterSpacing: 0,
      },
      body2: {
        fontSize: 17,
        fontWeight: "regular",
        letterSpacing: 0,
      },
      body3: {
        fontSize: 16,
        fontWeight: "regular",
        letterSpacing: 0,
      },
      body4: {
        fontSize: 15,
        fontWeight: "bold",
        letterSpacing: 0,
      },
      body5: {
        fontSize: 14,
        fontWeight: "regular",
        letterSpacing: 0,
      },
      body6: {
        fontSize: 13,
        fontWeight: "bold",
        letterSpacing: 0,
      },
    },
  });
