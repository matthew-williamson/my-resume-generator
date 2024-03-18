import { Box, Stack, Typography } from "@mui/material";
import { ReactNode } from "react";

export default function BulletPoint({ text }: { text: string | ReactNode }) {
  return (
    <Stack direction="row" spacing={1} sx={{ position: "relative" }}>
      <Typography variant="body2">-</Typography>
      <Typography variant="body2">{text}</Typography>
    </Stack>
  );
}
