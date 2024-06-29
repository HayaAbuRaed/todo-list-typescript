import { ThemeOptions } from "@mui/material";
import {
  CSSProperties,
  MixinsOptions,
} from "@mui/material/styles/createMixins";

export interface ToDosMixins extends MixinsOptions {
  niceScroll: (width?: number) => Record<string, CSSProperties> | CSSProperties;
}

export interface Theme extends ThemeOptions{
  mixins: ToDosMixins;
}
