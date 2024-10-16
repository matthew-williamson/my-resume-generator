import { THEME } from "@/app/lib/theme";
import { Typography } from "@mui/material";

export default function Highlight({ text }: { text: string }) {
  return (
    <Typography
      variant="body2"
      sx={{
        color: THEME.SECONDARY,
        backgroundColor: THEME.PRIMARY_LIGHT,
        borderRadius: "4px",
        py: 0.15,
        px: 0.5,
      }}
      component={"span"}
    >
      {text}
    </Typography>
  );
}
