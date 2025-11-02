"use client";

import { Box } from "@mui/material";
import { THEME } from "../lib/theme";

export default function GridBackground() {
  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -1,
        pointerEvents: "none",
        backgroundImage: `
          linear-gradient(rgba(129, 212, 250, 0.03) 1px, transparent 1px),
          linear-gradient(90deg, rgba(129, 212, 250, 0.03) 1px, transparent 1px)
        `,
        backgroundSize: "20px 20px",
      }}
    />
  );
}
