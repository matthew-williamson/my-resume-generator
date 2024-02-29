import { Avatar, Link, Stack, Typography } from "@mui/material";

export default function Header() {
  return (
    <Stack
      direction="row"
      spacing={2}
      sx={{
        alignItems: "center",
        backgroundColor: "#1A1A1A",
        borderRadius: 2,
        p: 2,
      }}
    >
      <Avatar sx={{ width: 100, height: 100, border: "1px solid #99CCFF" }}>
        <img src="./matt_williamson.jpg" width={100} alt="matt headshot" />
      </Avatar>
      <Stack>
        <Typography variant="h5" sx={{ color: "#99CCFF" }}>
          Matthew Williamson
        </Typography>
        <Typography variant="caption">Senior Software Engineer</Typography>
        <Typography variant="caption">Scottsdale, AZ</Typography>
        <Link variant="caption" sx={{ color: "#99CCFF", cursor: "pointer" }}>
          https://www.linkedin.com/in/matthew-williamson-a63a88121/
        </Link>
      </Stack>
    </Stack>
  );
}
