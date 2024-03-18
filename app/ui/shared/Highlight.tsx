import { Typography } from "@mui/material";

export default function Highlight({ text }: { text: string }) {
  return (
    <Typography
      variant="body2"
      sx={{
        color: "rgba(190, 253, 200, 0.75)",
        backgroundColor: "rgba(153, 204, 255, 0.06)",
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
