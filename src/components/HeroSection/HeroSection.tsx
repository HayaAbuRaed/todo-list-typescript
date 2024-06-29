import { Stack, Typography } from "@mui/material";
import LightModeIcon from "@mui/icons-material/LightMode";
import AddTaskField from "./AddTaskField";
// import AddTaskField from "./AddTaskField";

const HeroSection = () => {
  return (
    <Stack width="100%" alignItems="center" maxWidth="550px" gap={2}>
      <Stack
        width="100%"
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        gap={5}
        color={(theme) => theme.palette.text.secondary}
      >
        <Typography
          variant="h5"
          component="h1"
          fontWeight={600}
          letterSpacing={2.5}
        >
          Get Things Done!
        </Typography>
        <LightModeIcon />
      </Stack>

      <AddTaskField />
    </Stack>
  );
};

export default HeroSection;
