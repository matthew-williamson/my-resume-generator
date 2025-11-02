import { Avatar, Stack, Typography } from "@mui/material";
import { THEME } from "../lib/theme";
import { Links } from "./shared/Links";

export default function Header() {
  return (
    <Stack
      direction="row"
      sx={{
        alignItems: "center",
        justifyContent: "space-between",
        borderRadius: 2,
        p: 2,
        backgroundColor: THEME.BLACK,
      }}
      spacing={1}
    >
      <Stack
        direction="row"
        spacing={2}
        sx={{ alignItems: "center", justifyContent: "center" }}
      >
        <Avatar
          sx={{
            width: 112,
            height: 112,
            border: `2px solid ${THEME.SECONDARY}`,
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="./matt_williamson.jpg" width={168} alt="matt headshot" />
        </Avatar>
        <Stack sx={{ color: THEME.SECONDARY }}>
          <Typography fontWeight={700} variant="h6">
            Matthew Williamson
          </Typography>
          <Typography variant="body2">Technical Lead</Typography>
          <Typography variant="caption">Scottsdale, AZ</Typography>
        </Stack>
      </Stack>
      <Links />
    </Stack>
  );
}
