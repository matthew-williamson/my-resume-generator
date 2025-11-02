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
        border: "1px solid rgba(129, 212, 250, 0.2)",
        background: `linear-gradient(135deg, ${THEME.BLACK} 0%, rgba(129, 212, 250, 0.08) 100%)`,
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
            border: `2px solid rgba(129, 212, 250, 0.3)`,
            boxShadow: `0 0 20px rgba(129, 212, 250, 0.2)`,
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="./matt_williamson.jpg" width={168} alt="matt headshot" />
        </Avatar>
        <Stack>
          <Typography
            fontWeight={600}
            variant="h6"
            sx={{ color: THEME.SECONDARY }}
          >
            Matthew Williamson
          </Typography>
          <Typography variant="body2" sx={{ color: THEME.PRIMARY }}>
            Technical Lead
          </Typography>
          <Typography
            variant="caption"
            sx={{ color: THEME.SECONDARY, opacity: 0.7 }}
          >
            Scottsdale, AZ
          </Typography>
        </Stack>
      </Stack>
      <Links />
    </Stack>
  );
}
