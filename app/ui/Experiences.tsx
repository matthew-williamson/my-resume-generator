import { Divider, Link, Stack, Tooltip, Typography } from "@mui/material";

import { experiences } from "../lib/constants";
import CollapsibleSection from "./shared/CollapsibleSection";
import BulletPoint from "./shared/BulletPoint";
import { ErrorOutline, OpenInNew } from "@mui/icons-material";
import { THEME } from "../lib/theme";

export default function Experiences() {
  return (
    <CollapsibleSection
      header={
        <Typography sx={{ color: THEME.WHITE }} variant="h5">
          Experiences
        </Typography>
      }
    >
      <Stack
        spacing={1}
        divider={<Divider sx={{ backgroundColor: THEME.PRIMARY_FULL }} />}
      >
        {[...experiences].reverse().map((e) => {
          return (
            <Stack
              key={`${e.company.name}-experience-card-${e.id}`}
              sx={{
                p: 2,
              }}
            >
              <Stack spacing={1}>
                <Stack
                  direction="row"
                  sx={{ alignItems: "center", justifyContent: "space-between" }}
                >
                  <Typography fontWeight={700} sx={{ color: THEME.SECONDARY }}>
                    {e.company.name}
                  </Typography>
                  <Stack
                    direction="row"
                    sx={{ alignItems: "center" }}
                    spacing={1}
                  >
                    <Typography
                      variant="caption"
                      fontWeight={600}
                      color={THEME.SECONDARY}
                    >
                      {e.title} | {e.startDisplay} - {e.endDisplay ?? "Present"}
                    </Typography>
                    {e.url ? (
                      <Link
                        href={e.url}
                        sx={{
                          color: THEME.PRIMARY_FULL,
                          cursor: "pointer",
                          ":hover": { color: THEME.SECONDARY },
                          display: "flex",
                        }}
                        target="_blank"
                      >
                        <OpenInNew sx={{ fontSize: "28px" }} />
                      </Link>
                    ) : (
                      <Tooltip title="OUT OF BUSINESS">
                        <ErrorOutline
                          sx={{
                            fontSize: "30px",
                            color: THEME.PRIMARY_FULL,
                            cursor: "pointer",
                          }}
                        />
                      </Tooltip>
                    )}
                  </Stack>
                </Stack>
                {/* <Divider sx={{ backgroundColor: THEME.SECONDARY }} /> */}
                <Stack spacing={2} sx={{ pt: 1 }}>
                  {e.achievements.map((a, index) => (
                    <BulletPoint
                      key={`${e.company.name}-${e.id}-achievement-${index}`}
                      text={a}
                      color={THEME.PRIMARY_FULL}
                    />
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
