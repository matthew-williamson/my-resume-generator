import { THEME } from "@/app/lib/theme";
import { Typography } from "@mui/material";

export default function Highlight({ text }: { text: string }) {
  return (
    <Typography
      variant="body2"
      sx={{
        color: THEME.SECONDARY,
        backgroundColor: "rgba(129, 212, 250, 0.15)",
        borderRadius: "4px",
        py: 0.15,
        px: 0.5,
        fontWeight: 400,
      }}
      component={"span"}
    >
      {text}
    </Typography>
  );
}
