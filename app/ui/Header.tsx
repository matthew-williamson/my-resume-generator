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
      direction={ isSmallWidth ? "row" : "row"}
      sx={{
        alignItems: "center",
        backgroundColor: "#1A1A1A",
        justifyContent: "space-between",
        borderRadius: 2,
        p: 2,
      }}
      spacing={isSmallWidth ? 1 : 0}
    >
      <Stack direction="row" spacing={2} sx={{ alignItems: "center" }}>
        <Avatar sx={{ width: isSmallWidth ? 50 : 100, height: isSmallWidth ? 50 : 100, border: "1px solid #99CCFF" }}>
          <img src="./matt_williamson.jpg" width={isSmallWidth ? 50 : 100} alt="matt headshot" />
        </Avatar>
        <Stack>
          <Typography variant={isSmallWidth ? "body1" : "h5"} sx={{ color: "#99CCFF" }}>
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
          <LinkedIn sx={{ fontSize: isSmallWidth ? 32 : 64 }} />
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
          <GitHub sx={{ fontSize: isSmallWidth ? 28 : 56 }} />
        </Link>
      </Stack>
    </Stack>
  );
}
