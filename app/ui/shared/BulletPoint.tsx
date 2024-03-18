import { Box, Stack, Typography } from "@mui/material";
import { ReactNode } from "react";

export default function BulletPoint({ text }: { text: string | ReactNode }) {
  return (
    <Stack direction="row" spacing={1} sx={{ position: "relative" }}>
      <Box sx={{ position: "absolute", top: -1, color: "#99CCFF" }}>○</Box>
      <Typography variant="body2" sx={{ pl: 1 }}>
        {text}
      </Typography>
    </Stack>
  );
}
