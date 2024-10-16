import { Box, Stack, Typography } from "@mui/material";
import { Variant } from "@mui/material/styles/createTypography";
import { ReactNode } from "react";

export default function BulletPoint({
  text,
  variant = "body2",
  color,
}: {
  text: string | ReactNode;
  variant?: Variant;
  color?: string;
}) {
  return (
    <Stack direction="row" spacing={1} sx={{ position: "relative" }}>
      <Typography variant={variant} sx={{ color }}>
        ♦
      </Typography>
      <Typography variant={variant}>{text}</Typography>
    </Stack>
  );
}
