import { Box, Divider, Stack, Typography } from "@mui/material";

import { experiences } from "../lib/constants";

export default function OccupationHistory() {
  return (
    <Stack
      sx={{
        backgroundColor: "#1A1A1A",
        width: "100%",
        borderRadius: 2,
        p: 2,
        mr: 2,
      }}
      spacing={2}
    >
      <Typography variant="h5">Occupation History</Typography>
      {experiences.toReversed().map((e) => {
        return (
          <Stack
            key={`${e.company.name}-experience-card-${e.color}`}
            sx={{
              backgroundColor: "rgba(255, 255, 255, 0.05)",
              borderRadius: 2,
              p: 2,
            }}
          >
            <Stack spacing={1}>
              <Stack>
                <Typography fontWeight={700}>{e.company.name}</Typography>
                <Typography variant="caption">{e.title}</Typography>
                <Typography variant="caption">
                  {e.startDisplay} - {e.endDisplay ?? "Current"}
                </Typography>
              </Stack>
              <Divider sx={{ backgroundColor: "white" }} />
              <Stack spacing={1}>
                {e.achievements.map((a, index) => (
                  <Stack
                    direction="row"
                    spacing={1}
                    key={`${e.company.name}-${e.color}-achievement-${index}`}
                    sx={{ position: "relative" }}
                  >
                    <Box sx={{ position: "absolute", top: -3 }}>○</Box>
                    <Typography variant="caption" sx={{ pl: 1 }}>
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
