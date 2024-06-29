import { Box, styled } from "@mui/material";

export const OverlayBox = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "50vh",
  zIndex: -999,
  backgroundColor: theme.palette.primary.main,
  background: `linear-gradient(
    90deg,
    rgba(17, 100, 102, 0.85) 0%,
    rgba(239, 154, 154, 0.85) 100%
  )`,
}));
