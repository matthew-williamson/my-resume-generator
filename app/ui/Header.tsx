import { GitHub, LinkedIn } from "@mui/icons-material";
import { Avatar, Link, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import useWindowSize from "./hooks/useWindowSize";

export default function Header() {
  const windowSize = useWindowSize();
  const [initialWindowSize, setInitialWindowSize] = useState(0);
  useEffect(() => {
    setInitialWindowSize(window.innerWidth);
  }, []);
  const width = windowSize.width ?? initialWindowSize;
  const isSmallWidth = width < 600;
  return (
    <Stack
      direction="row"
      sx={{
        alignItems: "center",
        backgroundColor: "#1A1A1A",
        justifyContent: "space-between",
        borderRadius: 2,
        border: "1px solid rgba(255, 255, 255, 0.12)",
        p: 2,
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
            width: isSmallWidth ? 50 : 72,
            height: isSmallWidth ? 50 : 72,
            border: "1px solid #99CCFF",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="./matt_williamson.jpg"
            width={isSmallWidth ? 50 : 72}
            alt="matt headshot"
          />
        </Avatar>
        <Stack>
          <Typography fontWeight={700} sx={{ color: "#99CCFF" }}>
            Matthew Williamson
          </Typography>
          <Typography variant="body2">Senior Software Engineer</Typography>
          <Typography variant="caption">Scottsdale, AZ</Typography>
        </Stack>
      </Stack>
      <Stack sx={{ alignItems: "center" }} spacing={0.5}>
        <Link
          variant="caption"
          sx={{
            color: "#99CCFF",
            cursor: "pointer",
            ":hover": { opacity: 0.8 },
            display: "flex",
          }}
          href="https://www.linkedin.com/in/matthew-williamson-a63a88121/"
          target="_blank"
        >
          <LinkedIn sx={{ fontSize: 32 }} />
        </Link>
        <Link
          variant="caption"
          sx={{
            color: "#99CCFF",
            cursor: "pointer",
            ":hover": { opacity: 0.8 },
            display: "flex",
          }}
          href="https://github.com/matthew-williamson"
          target="_blank"
        >
          <GitHub sx={{ fontSize: 28 }} />
        </Link>
      </Stack>
    </Stack>
  );
}
