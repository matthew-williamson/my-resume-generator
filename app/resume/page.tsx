"use client";

import { Avatar, Box, Divider, Paper, Stack, Typography } from "@mui/material";
import QRCode from "qrcode.react";
import PersonalityScores from "../ui/PersonalityScores";
import { experiences } from "../lib/constants";
import { PropsWithChildren, useEffect, useRef } from "react";
import { chunkExperiences } from "../lib/helpers";
import { Experience } from "../lib/types";
import { useReactToPrint } from 'react-to-print';

interface SkillProps {
  label: string;
  years: number;
}

const skills = [
  { label: "React", years: 6 },
  { label: "TypeScript", years: 6 },
  { label: "JavaScript", years: 7 },
  { label: "Node.js", years: 6 },
  { label: "C#", years: 4 },
  { label: ".NET", years: 4 },
  { label: "Integration Testing", years: 5 },
  { label: "Unit Testing", years: 5 },
  { label: "SaaS", years: 5 },
  { label: "REST", years: 6 },
  { label: "GraphQL", years: 4 },
  { label: "SQL", years: 3 },
  { label: "NoSQL", years: 4 },
  { label: "Agile", years: 5 },
  { label: "HTML/CSS", years: 7 },
  { label: "Git", years: 6 },
  { label: "API Integration", years: 6 },
  { label: "Storybook", years: 4 },
  { label: "Event Driven", years: 3 },
  { label: "Microservices", years: 4 },
  { label: "Microfrontends", years: 2 },
  { label: "AWS/Azure DevOps", years: 4 },
  { label: "Cloud Infrastructure", years: 4 },
  { label: 'CSS/HTML', years: 8 }
];

const Skill = ({ label, years }: SkillProps) => (
  <Stack direction="row" sx={{ justifyContent: "space-between" }}>
    <Typography variant="body2">{label}</Typography>
    <Typography variant="body2">{years} years</Typography>
  </Stack>
);

const Skills = skills.map(({ label, years }) => (
  <Skill key={label} label={label} years={years} />
));

interface SectionProps extends PropsWithChildren {
  header: string;
}
const Section = ({ header, children }: SectionProps) => (
  <Paper>
    <Stack>
      <Stack
        sx={{
          backgroundColor: "rgba(0, 100, 120, 0.5)",
          p: 1,
          borderRadius: "4px 4px 0px 0px",
        }}
      >
        <Typography variant="h6" fontWeight={600} color="white">
          {header}
        </Typography>
      </Stack>
      <Box sx={{ p: 1 }}>{children}</Box>
    </Stack>
  </Paper>
);

const RightColumn = () => (
  <Stack spacing={2} sx={{ width: "calc(37% - 32px)" }}>
    <Section header="What are my skills?">{Skills}</Section>
    <Section header="What is my degree?">
      <Typography variant="body2">B.S. Mathematics</Typography>
      <Typography variant="body2">ASU | 2018</Typography>
      <Typography variant="body2">3.73 GPA | Magna Cum Laude</Typography>
    </Section>
    <Section header="What am I like?">
      <PersonalityScores />
    </Section>
  </Stack>
);

interface ExperiencesProps {
  experiences: Experience[];
}
const Experiences = ({ experiences }: ExperiencesProps) =>
  experiences.map((e, index) => (
    <Stack key={e.id} spacing={0.9}>
      {index === 0 ? null : <Divider />}
      <Stack direction="row" spacing={1} sx={{ alignItems: "center" }}>
        <Typography fontWeight={600} variant="body2">
          {e.company.name}
        </Typography>
        <Divider orientation="vertical" sx={{ height: 12 }} />
        <Typography variant="body2" fontWeight={600}>
          {e.title}
        </Typography>
        <Divider orientation="vertical" sx={{ height: 12 }} />
        <Typography variant="body2" fontWeight={600}>
          {e.startDisplay} - {e.endDisplay ?? "Current"}
        </Typography>
      </Stack>
      <Box>
        <Typography variant="caption">{e.summary}</Typography>
      </Box>
      {index === experiences.length - 1 ? null : <Divider />}
    </Stack>
  ));

const experienceSubsets = chunkExperiences([...experiences].reverse());

const PageOneExperiences = () => {
  return (
    <Section header="What have I done?">
      <Experiences experiences={experienceSubsets[0]} />
    </Section>
  );
};

const LeftColumn = () => (
  <Stack spacing={2} sx={{ width: "63%" }}>
    <Section header="Who are you getting?">
      <Stack sx={{ alignItems: "center" }} direction="row" spacing={2}>
        <Avatar
          sx={{
            width: 84,
            height: 84,
            border: "3px solid rgba(0, 100, 120, 0.5)",
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
            <Typography variant="h5" fontWeight={700}>
              Matthew Williamson
            </Typography>
            <Typography variant="body2">Fountain Hills, AZ</Typography>
            <Typography variant="body2">
              https://matt-williamson.netlify.app
            </Typography>
            <Typography variant="body2">mwilliamson.lloyd@gmail.com</Typography>
          </Stack>
        </Stack>
        <Stack sx={{ mb: 1, mt: 1, alignItems: "center" }}>
          <QRCode size={85} value="https://matt-williamson.netlify.app" />
        </Stack>
      </Stack>
    </Section>
    <Section header="Why me?">
      <Typography variant="body2">
        I am an outgoing and energetic Senior Software Engineer with over 7 years of
        professional experience building everything from SaaS web applications
        in React/TypeScript to Node.js/C#.NET REST and GraphQL APIs to Electron
        based desktop Git GUIs! I have passions for code quality, problem
        solving, and mentorship. I lean slightly frontend, but prefer getting my
        hands dirty in all areas of the tech stack. I believe that great
        software engineers are not language experts, but instead are problem
        solvers, communicators, and collaborators. I'm looking forward to
        furthering my career by becoming either a Team Lead, Principal/Staff
        Engineer, or Engineering Manager.
      </Typography>
    </Section>
    <PageOneExperiences />
  </Stack>
);

const PageOne = () => (
  <Stack
    spacing={2}
    direction="row"
    sx={{
      p: 1,
      width: "100%",
    }}
  >
    <LeftColumn />
    <RightColumn />
  </Stack>
);

const PageTwo = () => (
  <Stack spacing={2} sx={{ p: 1, mt: 1 }}>
    {experienceSubsets.slice(1).map((e, index) => (
      <Section key={index} header="What else has he done?">
        <Experiences experiences={e} />
      </Section>
    ))}
    <Section header="A Note to Reader...">
      <Stack spacing={2}>
        <Typography variant="body2">Dear Reader,</Typography>
        <Typography variant="caption">
          Thank you for reading this resume! If you find this in front of you,
          it most likely means I'm highly interested in committing my skills,
          experiences, drive, and energy to your team and products. I either saw
          your job posting or know about your company and products and like what
          I see. Hopefully this resume helps you feel the same way about me.
        </Typography>
        <Typography variant="body2">
          You should also know that what you have in front of you is not a
          "normal" resume. It is actually a page from my personal web
          application I custom wrote using Next.js, TypeScript, MUI (Material
          UI), and React. You can find the main site here{" "}
          <strong>https://matt-williamson.netlify.app</strong> or by using the
          QR code above. The site is hosted using Vercel and CI/CD is configured to auto-deploy on commit to the repo found here <strong>https://github.com/matthew-williamson/my-resume-generator</strong>.
        </Typography>
        <Box>
          <Typography variant="body2">Thanks again,</Typography>
          <Typography variant="body2">Matthew Williamson</Typography>
        </Box>
      </Stack>
    </Section>
  </Stack>
);

export default function Page() {
  const contentRef = useRef<HTMLDivElement>(null);
  const onPrint = useReactToPrint({
    contentRef
  });

  useEffect(() => {
    if (contentRef.current) {
      onPrint();
    }
  }, [contentRef]);

  return (
    <Stack ref={contentRef}>
      <style type="text/css">
        {`
          body {
            background-image: linear-gradient(to right, rgba(0, 100, 120, 0.25), rgba(255, 255, 255, 0.1));
          }

          span, div, .MuiTypography-root {
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
