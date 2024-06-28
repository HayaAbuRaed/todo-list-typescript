import { Stack, Typography } from "@mui/material";
import Lottie from "lottie-react";
import { FC } from "react";
import empty from "../../animation/empty.json";

const EmptyList: FC = () => {
  return (
    <Stack alignItems="center" justifyContent="center">
      <Lottie animationData={empty} style={{ width: "150px" }} />
      <Typography fontStyle="italic" fontWeight={500} color="GrayText">
        No todos added yet
      </Typography>
    </Stack>
  );
};

export default EmptyList;
