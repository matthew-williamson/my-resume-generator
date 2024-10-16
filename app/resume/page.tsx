"use client";

import { Avatar, Box, Divider, Stack, Typography } from "@mui/material";
import QRCode from "qrcode.react";
import { experiences } from "../lib/constants";
import { PropsWithChildren, ReactElement } from "react";
import { chunkExperiences } from "../lib/helpers";
import { Experience } from "../lib/types";
import BulletPoint from "../ui/shared/BulletPoint";
import {
  AccountBoxOutlined,
  EditOutlined,
  SchoolOutlined,
  TrendingUpOutlined,
  WorkOutline,
} from "@mui/icons-material";
import { THEME } from "../lib/theme";

const topSkills = [
  "React",
  "TypeScript",
  "JavaScript",
  "Node.js",
  "C#/.NET",
  "Git",
  "API Integration",
  "REST APIs",
  "Integration Testing",
  "Unit Testing",
  "Storybook",
  "SaaS Web Apps",
  "Responsive UI",
  "Leadership/Mentorship",
];

const otherSkills = [
  "Electron Desktop Apps",
  "GraphQL",
  "SQL/NoSQL",
  "Microservices",
  "Event-Driven Systems",
  "Microfrontends",
  "Azure DevOps Cloud",
  "AWS Cloud",
  "Redux/Redux Saga",
  "Data Visualization/Graphing",
  "Mobile App Development",
  "Responsive UI",
  "Chrome Extensions",
  "Code Reviews",
  "Figma",
  "Jira",
];

const TopSkills = (
  <Stack spacing={0.1}>
    {topSkills.map((skill) => (
      <BulletPoint
        text={skill}
        variant="caption"
        color={THEME.SECONDARY}
        key={skill}
      />
    ))}
  </Stack>
);

const OtherSkills = (
  <Stack spacing={0.1}>
    {otherSkills.map((skill) => (
      <BulletPoint
        text={skill}
        variant="caption"
        color={THEME.SECONDARY}
        key={skill}
      />
    ))}
  </Stack>
);

interface SectionProps extends PropsWithChildren {
  header: string;
  icon?: ReactElement;
}
const Section = ({ header, icon, children }: SectionProps) => (
  <Box
    sx={{
      borderRadius: "4px",
      border: header ? `1px solid ${THEME.GREY}` : `3px solid ${THEME.PRIMARY}`,
    }}
  >
    <Stack>
      {header && (
        <Stack
          direction="row"
          sx={{
            alignItems: "center",
            justifyContent: "space-between",
            backgroundColor: THEME.PRIMARY,
            p: 1,
            borderRadius: "4px 4px 0px 0px",
          }}
        >
          <Typography variant="h6" fontWeight={600} color="white">
            {header}
          </Typography>
          {icon}
        </Stack>
      )}
      <Box sx={{ p: 1 }}>{children}</Box>
    </Stack>
  </Box>
);

interface ExperiencesProps {
  experiences: Experience[];
}
const Experiences = ({ experiences }: ExperiencesProps) =>
  experiences.map((e, index) => (
    <Stack key={e.id} spacing={1}>
      <Stack
        direction="row"
        spacing={1}
        sx={{
          alignItems: "center",
          pt: index === 0 ? 0 : 1,
          justifyContent: "space-between",
        }}
      >
        <Typography
          fontWeight={600}
          sx={{ color: THEME.SECONDARY, fontSize: "16px" }}
        >
          {e.company.name}
        </Typography>
        <Typography
          variant="caption"
          sx={{ color: THEME.SECONDARY }}
          fontWeight={600}
        >
          {e.title} | {e.startDisplay} - {e.endDisplay ?? "Present"}
        </Typography>
      </Stack>
      <Stack spacing={0.1}>
        {e.achievements.map((ach) => (
          <BulletPoint
            text={ach}
            variant="caption"
            color={THEME.SECONDARY}
            key={ach}
          />
        ))}
      </Stack>
      {index === experiences.length - 1 ? null : <Divider />}
    </Stack>
  ));

const experienceSubsets = chunkExperiences([...experiences].reverse());

const PageOne = () => (
  <Stack sx={{ p: 1 }} spacing={2}>
    <Section header="">
      <Stack sx={{ alignItems: "center" }} direction="row" spacing={2}>
        <Avatar
          sx={{
            width: 84,
            height: 84,
            border: `3px solid ${THEME.PRIMARY}`,
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="./matt_williamson.jpg" width={84} alt="matt headshot" />
        </Avatar>
        <Stack
          sx={{ justifyContent: "space-between", width: "100%" }}
          direction="row"
        >
          <Stack>
            <Typography variant="h5" fontWeight={700} color={THEME.SECONDARY}>
              Matthew Williamson
            </Typography>
            <Typography variant="caption">Fountain Hills, AZ</Typography>
            <Typography variant="caption">
              https://matt-williamson.netlify.app
            </Typography>
            <Typography variant="caption">
              mwilliamson.lloyd@gmail.com
            </Typography>
          </Stack>
        </Stack>
        <Stack sx={{ mb: 1, mt: 1, alignItems: "center" }}>
          <QRCode size={85} value="https://matt-williamson.netlify.app" />
        </Stack>
      </Stack>
    </Section>
    <Stack
      spacing={2}
      direction="row"
      sx={{
        width: "100%",
      }}
    >
      <Stack spacing={2} sx={{ width: "70%" }}>
        <Section
          header="About Me"
          icon={<AccountBoxOutlined sx={{ color: "white" }} />}
        >
          <Typography variant="caption">
            I’m a Senior Software Engineer with 7+ years of experience building
            high-quality SaaS web applications, REST APIs, and desktop tools. I
            specialize in React, TypeScript, C#.NET, and Node.js. I thrive on
            solving complex problems, improving code quality, and mentoring
            teams. My focus is delivering solutions that are scalable,
            user-friendly, and built to last. While I lean towards frontend, I
            excel across the full stack, and I’m eager to grow into leadership
            roles like Team Lead, Principal Engineer, or Engineering Manager.
          </Typography>
        </Section>
        <Section
          header="My Experiences"
          icon={<WorkOutline sx={{ color: "white" }} />}
        >
          <Experiences experiences={experienceSubsets[0]} />
        </Section>
      </Stack>
      <Stack spacing={2} sx={{ width: "30%" }}>
        <Section
          header="Top Skills"
          icon={<TrendingUpOutlined sx={{ color: "white" }} />}
        >
          {TopSkills}
        </Section>
        <Section
          header="Other Skills"
          icon={<TrendingUpOutlined sx={{ color: "white" }} />}
        >
          {OtherSkills}
        </Section>
        <Section
          header="My Education"
          icon={<SchoolOutlined sx={{ color: "white" }} />}
        >
          <Stack>
            <Typography variant="caption">
              B.S. Mathematics, 2018 ASU
            </Typography>
            <Typography variant="caption">3.73 GPA, Magna Cum Laude</Typography>
          </Stack>
        </Section>
      </Stack>
    </Stack>
  </Stack>
);

const PageTwo = () => (
  <Stack spacing={2} sx={{ p: 1, mt: 1 }}>
    {experienceSubsets.slice(1).map((e, index) => (
      <Section
        key={index}
        header="My Experiences (Continued)"
        icon={<WorkOutline sx={{ color: "white" }} />}
      >
        <Experiences experiences={e} />
      </Section>
    ))}
    <Section
      header="Note to Reader"
      icon={<EditOutlined sx={{ color: "white" }} />}
    >
      <Stack spacing={1.75}>
        <Typography variant="caption">
          Thank you for reviewing my resume! If it's in front of you, I’m
          excited to bring my skills, experience, and energy to your team. I’ve
          either applied to your job or know your company and am eager to
          contribute.
        </Typography>
        <Typography variant="caption">
          This isn't a typical resume—it's a custom-built page from my personal
          web app, developed using Next.js, TypeScript, MUI, and React. You can
          explore the full site at https://matt-williamson.netlify.app or scan
          the QR code above. The site is hosted on Vercel with CI/CD
          auto-deployments from the repo at
          https://github.com/matthew-williamson/my-resume-generator.
        </Typography>
        <Stack>
          <Typography variant="caption">Thanks again,</Typography>
          <Typography variant="caption" sx={{ color: THEME.SECONDARY }}>
            Matthew Williamson
          </Typography>
        </Stack>
      </Stack>
    </Section>
  </Stack>
);

export default function Page() {
  return (
    <Stack>
      <style type="text/css">
        {`
          span, div, .MuiTypography-root {
            letter-spacing: 0.03rem !important;
            font-family: Georgia, serif !important;
          }

          @page {
            margin: 0;
            padding: 0;
            
            .page-break {
              page-break-after: always !important;
            }
          }
          
          @media {
            print {
              -webkit-print-color-adjust: exact;
              print-color-adjust: exact;
            }

            .page-break {
              page-break-after: always !important;
            }
          }
        `}
      </style>
      <PageOne />
      <div className="page-break" />
      <PageTwo />
    </Stack>
  );
}
