import { Box } from "@mui/material";
import background from "../../assets/background.jpg";
import styles from "./SemiBackground.module.css";

const SemiBackground = () => {
  return (
    <Box>
      <img src={background} className={styles.img} />
      <Box className={styles.overlayBox}></Box>
    </Box>
  );
};

export default SemiBackground;
