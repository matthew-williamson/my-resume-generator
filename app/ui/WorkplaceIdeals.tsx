import { Stack, Typography } from "@mui/material";
import CollapsibleSection from "./shared/CollapsibleSection";
import BulletPoint from "./shared/BulletPoint";
import Highlight from "./shared/Highlight";

export default function WorkplaceIdeals() {
  return (
    <CollapsibleSection
      header={
        <Typography variant="h5" sx={{ color: "#99CCFF" }}>
          Workplace Ideals
        </Typography>
      }
    >
      <Stack spacing={2}>
        <Typography variant="body2">
          What I look for in my ideal workplace:
        </Typography>
        <BulletPoint
          text={
            <>
              <Highlight text="Collaborative" /> environment
            </>
          }
        />
        <BulletPoint
          text={
            <>
              Ability to <Highlight text="mentor" /> developers and{" "}
              <Highlight text="grow" /> with my <Highlight text="team" />
            </>
          }
        />
        <BulletPoint
          text={
            <>
              License to <Highlight text="explore" /> and{" "}
              <Highlight text="learn" /> about alternative technologies and
              solutions
            </>
          }
        />
        <BulletPoint
          text={
            <>
              Ideally a <Highlight text="fast paced" /> environment
            </>
          }
        />
        <BulletPoint
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
          text={
            <>
              Teammates that <Highlight text="care" /> about themselves, about
              me, about the company, about what we are achieving{" "}
              <Highlight text="together" />
            </>
          }
        />
        <BulletPoint text={<Highlight text="Fun!" />} />
      </Stack>
    </CollapsibleSection>
  );
}
