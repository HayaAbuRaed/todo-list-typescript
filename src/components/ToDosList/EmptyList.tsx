import { Box, Stack, Typography } from "@mui/material";
import Lottie from "lottie-react";
import { FC } from "react";
import empty from "../../animation/empty.json";

const EmptyList: FC = () => {
  return (
    <Stack minHeight="50vh" alignItems="center" justifyContent="center" paddingTop={6}>
      <Lottie animationData={empty} style={{ width: "150px" }} />
      <Typography fontStyle="italic" fontWeight={500} color="GrayText">
        No todos added yet
      </Typography>
      <Box flexGrow={0.3} />
    </Stack>
  );
};

export default EmptyList;
