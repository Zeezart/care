// src/theme.ts
import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    brand: {
      lightText:  "#bec4d1ff",
      notLightText: "#9098a8ff",
      primary: "#305eb3",
      deep: "#111a46ff",
      deeper: "#0d102cff",
      deepest: "#04051F",
      border:"#1f2337ff"
    },
  },
  fonts: {
    heading: `'Inter', sans-serif`,
    body: `'Inter', sans-serif`,
  },
  styles: {
    global: {
      "html, body": {
        bg: "gray.900",
        color: "whiteAlpha.900",
      },
    },
  },
});

export default theme;
