import { Box, Divider, Stack, Typography } from "@mui/material";

import { experiences } from "../lib/constants";
import { WorkRounded } from "@mui/icons-material";

export default function OccupationHistory() {
  return (
    <Stack
      sx={{
        backgroundColor: "#1A1A1A",
        minWidth: "40%",
        borderRadius: 2,
        p: 2,
        border: "1px solid rgba(255, 255, 255, 0.12)",
      }}
      spacing={2}
    >
      <Typography sx={{ color: "#99CCFF" }} variant="h5">
        Occupation History
      </Typography>

      {[...experiences].reverse().map((e) => {
        return (
          <Stack
            key={`${e.company.name}-experience-card-${e.color}`}
            sx={{
              backgroundColor: "rgba(255, 255, 255, 0.05)",
              borderRadius: 2,
              border: "1px solid rgba(255, 255, 255, 0.12)",
              p: 2,
            }}
          >
            <Stack spacing={1}>
              <Stack>
                <Typography fontWeight={700} sx={{ color: "#99CCFF" }}>
                  {e.company.name}
                </Typography>
                <Typography variant="body2">{e.title}</Typography>
                <Typography variant="caption">
                  {e.startDisplay} - {e.endDisplay ?? "Current"}
                </Typography>
              </Stack>
              <Divider sx={{ backgroundColor: "#99CCFF" }} />
              <Stack spacing={1}>
                {e.achievements.map((a, index) => (
                  <Stack
                    direction="row"
                    spacing={1}
                    key={`${e.company.name}-${e.color}-achievement-${index}`}
                    sx={{ position: "relative" }}
                  >
                    <Box
                      sx={{ position: "absolute", top: -2, color: "#99CCFF" }}
                    >
                      ○
                    </Box>
                    <Typography variant="body2" sx={{ pl: 1 }}>
                      {a}
                    </Typography>
                  </Stack>
                ))}
              </Stack>
            </Stack>
          </Stack>
        );
      })}
    </Stack>
  );
}
