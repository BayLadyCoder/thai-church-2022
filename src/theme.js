import { createTheme } from "@mui/material/styles";
import {
  purple,
  red,
  blue,
  lightBlue,
  lime,
  pink,
  teal,
  indigo,
  deepPurple,
  grey,
} from "@mui/material/colors";
export const theme = createTheme({
  palette: {
    primary: {
      light: "#e2c3ed",
      main: "#824999",
      grey: "#a2a2a2",
      darkGrey: "#444444",
      dark: "#6b3880",
      text: "#f5f5f5",
      white: "#ffffff",
      black: "#2e2e2e",
    },
    secondary: {
      bright: "#2fa78b",
      main: "#29967b",
      dark: "#22856c",
      contrastText: "#000",
    },
  },
  typography: {
    fontFamily: ["DM Sans, sans-serif"],
  },
});
