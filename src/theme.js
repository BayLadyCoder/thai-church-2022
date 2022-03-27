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
      light: "#d1b3dd",
      main: "#824999",
      dark: "#6c648b",
      dark: "#6b3880",
      text: "#f5f5f5",
      white: "#ffffff",
      black: "#111111",
    },
    secondary: {
      light: "#72ddc2",
      main: "#29967b",
      dark: "#22856c",
      contrastText: "#000",
    },
  },
  typography: {
    fontFamily: ["DM Sans, sans-serif"],
  },
});
