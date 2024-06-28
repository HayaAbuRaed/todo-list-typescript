import { Stack } from "@mui/material";
import "./App.css";
import HeroSection from "./components/HeroSection";
import SemiBackground from "./components/SemiBackground";
import ToDosList from "./components/ToDosList";

const App = () => {
  return (
    <Stack maxHeight="100vh" padding="7em 1em" alignItems="center" gap={2}>
      <SemiBackground />
      <HeroSection />
      <ToDosList />
    </Stack>
  );
};

export default App;
