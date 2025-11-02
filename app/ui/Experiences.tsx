import { Avatar, Link, Stack, Tooltip, Typography } from "@mui/material";

import { experiences } from "../lib/constants";
import BulletPoint from "./shared/BulletPoint";
import { ErrorOutline, OpenInNew } from "@mui/icons-material";
import { THEME } from "../lib/theme";
import ExperienceSkills from "./ExperienceSkills";

export default function Experiences() {
  const getAccentColor = (index: number) => {
    const colors = [
      "rgba(129, 212, 250, 0.08)", // cyan
      "rgba(255, 183, 77, 0.08)", // amber
    ];
    return colors[index % colors.length];
  };

  return (
    <Stack gap={4}>
      {[...experiences].reverse().map((e, index) => {
        return (
          <Stack
            key={`${e.company.name}-experience-card-${e.id}`}
            gap={4}
            sx={{
              color: THEME.WHITE,
              borderRadius: 2,
              backgroundColor: THEME.BLACK,
              p: 2,
              border: `1px solid ${
                index % 2 === 0
                  ? "rgba(129, 212, 250, 0.2)"
                  : "rgba(255, 183, 77, 0.2)"
              }`,
              background: `linear-gradient(135deg, ${
                THEME.BLACK
              } 0%, ${getAccentColor(index)} 100%)`,
            }}
          >
            <Stack
              direction="row"
              sx={{ alignItems: "center", justifyContent: "space-between" }}
            >
              <Stack direction="row" spacing={2} sx={{ alignItems: "center" }}>
                {e.company.logo && (
                  <Avatar
                    src={e.company.logo}
                    alt={`${e.company.name} logo`}
                    sx={{
                      width: 48,
                      height: 48,
                      backgroundColor: "#FFFFFF",
                      border: `2px solid ${
                        index % 2 === 0
                          ? "rgba(129, 212, 250, 0.3)"
                          : "rgba(255, 183, 77, 0.3)"
                      }`,
                      boxShadow: `0 0 20px ${
                        index % 2 === 0
                          ? "rgba(129, 212, 250, 0.2)"
                          : "rgba(255, 183, 77, 0.2)"
                      }`,
                      p: 0.5,
                    }}
                    variant="rounded"
                  />
                )}
                <Stack>
                  <Typography fontWeight={700} sx={{ color: THEME.SECONDARY }}>
                    {e.company.name}
                  </Typography>
                  <Typography
                    variant="caption"
                    fontWeight={600}
                    color={THEME.SECONDARY}
                  >
                    {e.title} • {e.startDisplay} - {e.endDisplay ?? "Present"}
                  </Typography>
                </Stack>
              </Stack>
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
            <Stack
              direction={{ xs: "column", md: "row" }}
              spacing={{ xs: 2, md: 3 }}
            >
              <Stack spacing={1.5} sx={{ flex: 1 }}>
                {e.achievements.map((a, index) => (
                  <BulletPoint
                    key={`${e.company.name}-${e.id}-achievement-${index}`}
                    text={a}
                    color={THEME.PRIMARY}
                  />
                ))}
              </Stack>
              <Stack
                sx={{
                  minWidth: { xs: "100%", md: 280 },
                  maxWidth: { xs: "100%", md: 320 },
                }}
              >
                <ExperienceSkills
                  frontEndSkills={e.frontEndSkills}
                  backEndSkills={e.backEndSkills}
                  generalTechnicalSkills={e.generalTechnicalSkills}
                />
              </Stack>
            </Stack>
          </Stack>
        );
      })}
    </Stack>
  );
}
