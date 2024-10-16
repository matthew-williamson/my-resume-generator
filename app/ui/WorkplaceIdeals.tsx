import { Stack, Typography } from "@mui/material";
import CollapsibleSection from "./shared/CollapsibleSection";
import BulletPoint from "./shared/BulletPoint";
import Highlight from "./shared/Highlight";
import { THEME } from "../lib/theme";

export default function WorkplaceIdeals() {
  return (
    <CollapsibleSection
      header={
        <Typography variant="h5" sx={{ color: THEME.WHITE }}>
          Workplace Ideals
        </Typography>
      }
    >
      <Stack spacing={2}>
        <Typography variant="body2">
          What I look for in my ideal workplace:
        </Typography>
        <BulletPoint
          color={THEME.PRIMARY}
          text={
            <>
              <Highlight text="Collaborative" /> environment, I cannot level up
              or help level up without it
            </>
          }
        />
        <BulletPoint
          color={THEME.PRIMARY}
          text={
            <>
              Ability to <Highlight text="mentor" /> developers and{" "}
              <Highlight text="grow" /> with my <Highlight text="team" />
            </>
          }
        />
        <BulletPoint
          color={THEME.PRIMARY}
          text={
            <>
              License to <Highlight text="explore" /> and{" "}
              <Highlight text="learn" /> about alternative technologies and
              solutions
            </>
          }
        />
        <BulletPoint
          color={THEME.PRIMARY}
          text={
            <>
              <Highlight text="Fast paced" />, I have a startup mindset
            </>
          }
        />
        <BulletPoint
          color={THEME.PRIMARY}
          text={
            <>
              Knowing the efforts me and my team are working on are{" "}
              <Highlight
                text="business or customer
              critical"
              />
            </>
          }
        />
        <BulletPoint
          color={THEME.PRIMARY}
          text={
            <>
              Teammates that <Highlight text="care" /> about themselves, about
              me, about the company, about what we are achieving{" "}
              <Highlight text="together" />
            </>
          }
        />
        <BulletPoint color={THEME.PRIMARY} text={<Highlight text="Fun!" />} />
      </Stack>
    </CollapsibleSection>
  );
}
