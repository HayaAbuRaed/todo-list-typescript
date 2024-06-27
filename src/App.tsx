import { Stack } from "@mui/material";
import "./App.css";
import HeroSection from "./components/HeroSection";
import SemiBackground from "./components/SemiBackground";

const App = () => {
  return (
    <Stack maxHeight="100vh" padding="7em 1em" alignItems="center">
      <SemiBackground />
      <HeroSection />
    </Stack>
  );
};

export default App;
