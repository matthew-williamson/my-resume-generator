import { GitHub, LinkedIn } from "@mui/icons-material";
import { Avatar, Link, Stack, Typography } from "@mui/material";

export default function Header() {
  return (
    <Stack
      direction="row"
      sx={{
        alignItems: "center",
        backgroundColor: "#1A1A1A",
        justifyContent: "space-between",
        borderRadius: 2,
        p: 2,
      }}
    >
      <Stack direction="row" spacing={2} sx={{ alignItems: "center" }}>
        <Avatar sx={{ width: 100, height: 100, border: "1px solid #99CCFF" }}>
          <img src="./matt_williamson.jpg" width={100} alt="matt headshot" />
        </Avatar>
        <Stack>
          <Typography variant="h5" sx={{ color: "#99CCFF" }}>
            Matthew Williamson
          </Typography>
          <Typography variant="caption">Senior Software Engineer</Typography>
          <Typography variant="caption">Scottsdale, AZ</Typography>
        </Stack>
      </Stack>
      <Stack direction="row" spacing={1} sx={{ alignItems: "center" }}>
        <Link
          variant="caption"
          sx={{
            color: "#99CCFF",
            cursor: "pointer",
            ":hover": { opacity: 0.8 },
          }}
          href="https://www.linkedin.com/in/matthew-williamson-a63a88121/"
          target="_blank"
        >
          <LinkedIn sx={{ fontSize: 64 }} />
        </Link>
        <Link
          variant="caption"
          sx={{
            color: "#99CCFF",
            cursor: "pointer",
            ":hover": { opacity: 0.8 },
          }}
          href="https://github.com/mlloydwilliamson1"
          target="_blank"
        >
          <GitHub sx={{ fontSize: 56 }} />
        </Link>
      </Stack>
    </Stack>
  );
}
