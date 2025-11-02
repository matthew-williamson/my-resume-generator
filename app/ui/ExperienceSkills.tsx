import { Box, Chip, Stack } from "@mui/material";
import { THEME } from "../lib/theme";
import { Skill } from "../lib/types";

interface ExperienceSkillsProps {
  frontEndSkills: Skill[];
  backEndSkills: Skill[];
  generalTechnicalSkills: Skill[];
}

const SkillChip = ({ skill, type }: { skill: Skill; type: string }) => {
  const getColor = () => {
    switch (type) {
      case "frontend":
        return {
          bg: "rgba(255, 183, 77, 0.15)",
          text: THEME.PRIMARY_FULL,
          border: "rgba(255, 183, 77, 0.3)",
        };
      case "backend":
        return {
          bg: "rgba(129, 212, 250, 0.15)",
          text: THEME.SECONDARY,
          border: "rgba(129, 212, 250, 0.3)",
        };
      case "general":
        return {
          bg: "rgba(255, 255, 255, 0.05)",
          text: "rgba(255, 255, 255, 0.7)",
          border: "rgba(255, 255, 255, 0.2)",
        };
      default:
        return {
          bg: "rgba(255, 255, 255, 0.05)",
          text: "rgba(255, 255, 255, 0.7)",
          border: "rgba(255, 255, 255, 0.2)",
        };
    }
  };

  const colors = getColor();

  return (
    <Chip
      label={skill}
      size="small"
      sx={{
        backgroundColor: colors.bg,
        color: colors.text,
        fontSize: "0.7rem",
        fontWeight: 400,
        height: 24,
        borderRadius: 1.5,
        border: `1px solid ${colors.border}`,
        transition: "all 0.2s ease",
        "&:hover": {
          backgroundColor: colors.bg,
          opacity: 0.8,
        },
        "& .MuiChip-label": {
          px: 1.5,
        },
      }}
    />
  );
};

export default function ExperienceSkills({
  frontEndSkills,
  backEndSkills,
  generalTechnicalSkills,
}: ExperienceSkillsProps) {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        gap: 1,
      }}
    >
      {frontEndSkills.map((skill, index) => (
        <SkillChip key={`fe-${skill}-${index}`} skill={skill} type="frontend" />
      ))}
      {backEndSkills.map((skill, index) => (
        <SkillChip key={`be-${skill}-${index}`} skill={skill} type="backend" />
      ))}
      {generalTechnicalSkills.map((skill, index) => (
        <SkillChip key={`gt-${skill}-${index}`} skill={skill} type="general" />
      ))}
    </Box>
  );
}
