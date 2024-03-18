import { Box, Divider, Stack, Typography } from "@mui/material";

import { experiences } from "../lib/constants";
import CollapsibleSection from "./shared/CollapsibleSection";

export default function OccupationHistory() {
  return (
    <CollapsibleSection
      header={
        <Typography sx={{ color: "#99CCFF" }} variant="h5">
          Occupation History
        </Typography>
      }
    >
      <Stack spacing={2}>
        {[...experiences].reverse().map((e) => {
          return (
            <Stack
              key={`${e.company.name}-experience-card-${e.id}`}
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
                  <Typography variant="body2" color="rgba(190, 253, 200, 1)">
                    {e.title}
                  </Typography>
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
                      key={`${e.company.name}-${e.id}-achievement-${index}`}
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
    </CollapsibleSection>
  );
}
