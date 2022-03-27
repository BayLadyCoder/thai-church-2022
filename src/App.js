import { ThemeProvider } from "@mui/material/styles";
import "./app.css";
import NavBar from "./components/NavBar";
import Carousel from "./components/Carousel";
import Services from "./components/Services";
import About from "./components/About";
import { theme } from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <NavBar />
        <Carousel />
        <Services />
        <About />
      </div>
    </ThemeProvider>
  );
}

export default App;
