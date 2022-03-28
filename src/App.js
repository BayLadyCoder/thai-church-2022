import { ThemeProvider } from "@mui/material/styles";
import "./app.css";
import NavBar from "./components/NavBar";
import Carousel from "./components/Carousel";
import Services from "./components/Services";
import About from "./components/About";
import Missions from "./components/Missions";
import Footer from "./components/Footer";
import Events from "./components/Events";
import { theme } from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <NavBar />
        <Carousel />
        <Services />
        <About />
        <Missions />
        <Events />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
