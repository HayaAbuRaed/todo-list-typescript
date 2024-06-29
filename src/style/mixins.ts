import { ToDosMixins } from "./types";

export const mixins: ToDosMixins = {
  niceScroll: (width = 10) => ({
    overflowY: "auto",
    transition: "all 0.3s ease",
    "&::-webkit-scrollbar": {
      width: width,
      height: width,
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: "rgba(0, 0, 0, 0.2)",
      borderRadius: width,
    },
    "&::-webkit-scrollbar-thumb:hover": {
      backgroundColor: "rgba(0, 0, 0, 0.3)",
    },
    "&::-webkit-scrollbar-track": {
      backgroundColor: "rgba(0, 0, 0, 0.1)",
      borderRadius: width,
      height: "100px",
      marginBlock: "1em",
    },
  }),
};
