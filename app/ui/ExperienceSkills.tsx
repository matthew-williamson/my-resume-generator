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
          bg: THEME.PRIMARY,
          text: THEME.BLACK,
          border: THEME.PRIMARY_FULL,
        };
      case "backend":
        return {
          bg: THEME.SECONDARY,
          text: THEME.BLACK,
          border: THEME.SECONDARY,
        };
      case "general":
        return {
          bg: THEME.PRIMARY_LIGHT,
          text: THEME.WHITE,
          border: THEME.PRIMARY,
        };
      default:
        return {
          bg: THEME.PRIMARY_LIGHT,
          text: THEME.WHITE,
          border: THEME.PRIMARY,
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
        fontWeight: 600,
        height: 24,
        borderRadius: 1.5,
        border: `1.5px solid ${colors.border}`,
        boxShadow: `0 2px 4px rgba(0,0,0,0.2)`,
        transition: "all 0.2s ease",
        "&:hover": {
          transform: "translateY(-2px)",
          boxShadow: `0 4px 8px rgba(0,0,0,0.3)`,
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
        pt: 1.5,
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
