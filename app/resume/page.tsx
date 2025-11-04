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
  "REST APIs",
  "GraphQL",
  "Git",
  "Jest/Cypress/Playwright",
  "Storybook",
  "Leadership/Mentorship",
  "Code Reviews",
];

const otherSkills = [
  "Next.js",
  "Redux/Redux Saga",
  "SQL/NoSQL/DynamoDB",
  "Microservices",
  "Event-Driven Architecture",
  "Microfrontends",
  "AWS",
  "Azure DevOps",
  "Electron Desktop Apps",
  "Mobile Apps (Capacitor)",
  "Data Visualization",
  "Chrome Extensions",
  "Webpack/NX",
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
      borderRadius: 2,
      border: `1px solid ${THEME.SECONDARY}`,
      backgroundColor: "#FFFFFF",
    }}
  >
    <Stack>
      {header && (
        <Stack
          direction="row"
          sx={{
            backgroundColor: THEME.SECONDARY,
            color: THEME.WHITE,
            alignItems: "center",
            justifyContent: "space-between",
            borderBottom: `1px solid rgba(129, 212, 250, 0.3)`,
            p: 1,
          }}
        >
          <Typography variant="h6" fontWeight={600}>
            {header}
          </Typography>
          {icon && <Box sx={{ color: THEME.SECONDARY }}>{icon}</Box>}
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
          sx={{ color: "#000000" }}
          fontWeight={600}
        >
          {e.title} • {e.startDisplay} - {e.endDisplay ?? "Present"}
        </Typography>
      </Stack>
      <Stack spacing={0.1}>
        {e.achievements.map((ach) => (
          <BulletPoint text={ach} variant="caption" color="#000000" key={ach} />
        ))}
      </Stack>
      {index === experiences.length - 1 ? null : <Divider />}
    </Stack>
  ));

const experienceSubsets = chunkExperiences(
  [...experiences].reverse().slice(0, experiences.length - 1)
);

const PageOne = () => (
  <Stack sx={{ p: 1 }} spacing={2}>
    <Section header="">
      <Stack sx={{ alignItems: "center" }} direction="row" spacing={2}>
        <Avatar
          sx={{
            width: 84,
            height: 84,
            border: `2px solid ${THEME.SECONDARY}`,
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
            <Typography variant="caption" sx={{ color: "#000000" }}>
              Fountain Hills, AZ
            </Typography>
            <Typography variant="caption" sx={{ color: "#000000" }}>
              https://matt-williamson.netlify.app
            </Typography>
            <Typography variant="caption" sx={{ color: "#000000" }}>
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
        <Section header="About Me" icon={<AccountBoxOutlined />}>
          <Typography variant="caption" sx={{ color: "#000000" }}>
            I'm a Technical Lead with 8+ years building software people actually
            use. I care a lot about clean code, testing, and solving hard
            problems, but what really gets me going is helping people grow. I'm
            looking to go deeper into engineering leadership (Principal Engineer
            or Engineering Manager) where I can make an impact both technically
            and by helping the people around me get better. Tech wise, I'm a
            problem solver before anything else. My usual tools are TypeScript,
            React, Node.js, C#/.NET, and AWS or Azure. I work comfortably across
            the full stack.
          </Typography>
        </Section>
        <Section header="My Experiences" icon={<WorkOutline />}>
          <Experiences experiences={experienceSubsets[0]} />
        </Section>
      </Stack>
      <Stack spacing={2} sx={{ width: "30%" }}>
        <Section header="Top Skills" icon={<TrendingUpOutlined />}>
          {TopSkills}
        </Section>
        <Section header="Other Skills" icon={<TrendingUpOutlined />}>
          {OtherSkills}
        </Section>
        <Section header="My Education" icon={<SchoolOutlined />}>
          <Stack>
            <Typography variant="caption" sx={{ color: "#000000" }}>
              B.S. Mathematics, 2018 ASU
            </Typography>
            <Typography variant="caption" sx={{ color: "#000000" }}>
              3.73 GPA, Magna Cum Laude
            </Typography>
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
        icon={<WorkOutline />}
      >
        <Experiences experiences={e} />
      </Section>
    ))}
    <Section header="Note to Reader" icon={<EditOutlined />}>
      <Stack spacing={1.75}>
        <Typography variant="caption" sx={{ color: "#000000" }}>
          Thanks for checking out my resume! I'm excited to bring my skills and
          energy to your team.
        </Typography>
        <Typography variant="caption" sx={{ color: "#000000" }}>
          This resume is a custom page from my personal web app built with
          Next.js, TypeScript, and MUI. Check out the full site at{" "}
          <strong>matt-williamson.netlify.app</strong> or scan the QR code
          above.
        </Typography>
        <Stack>
          <Typography variant="caption" sx={{ color: "#000000" }}>
            Thanks again,
          </Typography>
          <Typography
            variant="caption"
            sx={{ color: THEME.SECONDARY, fontWeight: 600 }}
          >
            Matthew Williamson
          </Typography>
        </Stack>
      </Stack>
    </Section>
  </Stack>
);

export default function Page() {
  return (
    <Stack sx={{ backgroundColor: "#FFFFFF" }}>
      <style type="text/css">
        {`
          body {
            background-color: #FFFFFF !important;
          }

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
